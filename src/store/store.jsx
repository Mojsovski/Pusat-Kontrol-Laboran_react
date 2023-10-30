import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../store/InvSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
  },
});

export default store;
