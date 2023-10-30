import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await axios.get(
        "https://65390159a543859d1bb25913.mockapi.io/auth"
      );
      const users = response.data;
      const user = users.find(
        (u) => u.username === username && u.password === password
      );
      if (user) {
        localStorage.setItem("isLoggedIn", true);
      } else {
        return thunkAPI.rejectWithValue("Invalid username or password");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchDataFromApi = createAsyncThunk(
  "form/fetchDataFromApi",
  async () => {
    try {
      const response = await axios.get(
        "https://65390159a543859d1bb25913.mockapi.io/invcomp"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const postDataToApi = createAsyncThunk(
  "form/postDataToApi",
  async (data) => {
    try {
      const response = await axios.post(
        "https://65390159a543859d1bb25913.mockapi.io/invcomp",
        data
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const deleteDataFromApi = createAsyncThunk(
  "form/deleteDataFromApi",
  async (id) => {
    try {
      const response = await axios.delete(
        `https://65390159a543859d1bb25913.mockapi.io/invcomp/${id}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const updateDataInApi = createAsyncThunk(
  "form/updateDataInApi",
  async ({ id, data }) => {
    try {
      const response = await axios.put(
        `https://65390159a543859d1bb25913.mockapi.io/invcomp/${id}`,
        data
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

export const fetchProductById = createAsyncThunk(
  "form/fetchProductById",
  async (id) => {
    try {
      const response = await axios.get(
        `https://65390159a543859d1bb25913.mockapi.io/invcomp/${id}`
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  formData: {
    invName: "",
    invCategory: "",
    invCPU: "",
    invMobo: "",
    invRam: "",
    invGpu: "",
    invStorage: "",
    invLcd: "",
    invPeriperal: "",
    invStatus: "",
    file: "",
    id: "",
  },
  dataList: [],
  errors: {},
  status: "idle",
};

const InvSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },
    submitForm: (state) => {
      console.log("submit form called");
      const checkValid = {};
      if (
        !state.formData.invName ||
        !state.formData.invName.match(/^[\w\s]+$/)
      ) {
        checkValid.invName = "Form masih kosong";
      }
      if (!state.formData.invCategory || state.formData.invCategory === "") {
        checkValid.invCategory = "Form masih kosong";
      }

      if (!state.formData.invStatus || state.formData.invStatus === "") {
        checkValid.invStatus = "Form masih kosong";
      }

      if (
        !state.formData.invCPU ||
        !state.formData.file ||
        !state.formData.invMobo ||
        !state.formData.invRam ||
        !state.formData.invGpu ||
        !state.formData.invStorage ||
        !state.formData.invLcd ||
        !state.formData.invPeriperal
      ) {
        checkValid.invCPU = "Form masih kosong";
        checkValid.invMobo = "Form masih kosong";
        checkValid.invRam = "Form masih kosong";
        checkValid.invGpu = "Form masih kosong";
        checkValid.invStorage = "Form masih kosong";
        checkValid.invPeriperal = "Form masih kosong";
        checkValid.invLcd = "Form masih kosong";
        checkValid.file = "Form masih kosong";
      }

      if (Object.keys(checkValid).length > 0) {
        state.errors = checkValid;
        return;
      }

      state.dataList.push(state.formData);
      state.formData = initialState.formData;
      state.errors = {};
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // get API
      .addCase(fetchDataFromApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDataFromApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.dataList = action.payload;
      })
      .addCase(fetchDataFromApi.rejected, (state) => {
        state.status = "failed";
      });

    // post API
    builder
      .addCase(postDataToApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postDataToApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.dataList.push(action.payload);
      })
      .addCase(postDataToApi.rejected, (state) => {
        state.status = "failed";
      });

    // delete data API
    builder
      .addCase(deleteDataFromApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteDataFromApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        const idToDelete = action.meta.arg;
        state.dataList = state.dataList.filter(
          (item) => item.id !== idToDelete
        );
      })
      .addCase(deleteDataFromApi.rejected, (state) => {
        state.status = "failed";
      });

    // Update API
    builder
      .addCase(updateDataInApi.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateDataInApi.fulfilled, (state, action) => {
        state.status = "succeeded";
        const updatedData = action.payload;
        state.dataList = state.dataList.map((item) =>
          item.id === updatedData.id ? updatedData : item
        );
      })
      .addCase(updateDataInApi.rejected, (state) => {
        state.status = "failed";
      });

    builder
      // Tambahkan case untuk fetchProductById
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.status = "succeeded";
        const productData = action.payload;
        state.formData = productData;
      });
  },
});

export const { updateFormData, submitForm, setErrors } = InvSlice.actions;
export default InvSlice.reducer;
