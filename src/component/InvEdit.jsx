import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "./Header";
import {
  updateFormData,
  submitForm,
  updateDataInApi,
  fetchProductById,
} from "../store/InvSlice";

function InvEdit() {
  const { id, invName } = useParams();
  const formData = useSelector((state) => state.form.formData);
  const errors = useSelector((state) => state.form.errors);
  const dispatch = useDispatch();

  const setInitialData = () => {
    dispatch(fetchProductById(id));
  };

  useEffect(() => {
    setInitialData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const file = e.target.files[0];
      dispatch(updateFormData({ field: name, value: file }));
    } else {
      dispatch(updateFormData({ field: name, value }));
    }
  };

  const handleUpdateInv = () => {
    dispatch(submitForm());
    if (Object.keys(errors).length === 0) {
      const updatedProduct = {
        invName: formData.invName,
        invCategory: formData.invCategory,
        invCPU: formData.invCPU,
        invMobo: formData.invMobo,
        invRam: formData.invRam,
        invGpu: formData.invGpu,
        invStorage: formData.invStorage,
        invLcd: formData.invLcd,
        invPeriperal: formData.invPeriperal,
        invStatus: formData.invStatus,
        file: formData.file,
      };
      dispatch(updateDataInApi({ id: formData.id, data: updatedProduct }));
    } else {
      return;
    }
  };

  // <div className="container-fluid">
  //   <div className="row">
  //     <Header />
  //     <div className="col-md-10">
  //       {/* Batas Edit */}
  //       {/* Batas Edit */}
  //     </div>
  //   </div>
  // </div>;

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Header />
          <div className="col-md-10">
            {/* Batas Edit */}
            <div className="container text-center">
              <div className="row align-items-start">
                <div className="col">
                  <h2>Edit Barang Inventaris</h2>
                  <p>
                    Edit {invName} {id}
                  </p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-5">
                  {/* Inventaris Nama */}
                  <div className="form-group">
                    <label htmlFor="invName">Nama Barang:</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.invName ? "is-invalid" : ""
                      }`}
                      id="invName"
                      name="invName"
                      value={formData.invName}
                      onChange={handleChange}
                    />
                    {errors.invName && (
                      <div className="invalid-feedback">{errors.invName}</div>
                    )}
                  </div>
                  <br />
                  {/* Inventaris Category */}
                  <div className="form-group">
                    <label htmlFor="invCategory">Jenis Barang:</label>
                    <select
                      className={`form-control ${
                        errors.invCategory ? "is-invalid" : ""
                      }`}
                      id="invCategory"
                      name="invCategory"
                      value={formData.invCategory}
                      onChange={handleChange}
                    >
                      <option value="">Pilih </option>
                      <option value="Product 1">Komputer</option>
                      <option value="Product 2">Non Komputer</option>
                    </select>
                    {errors.invCategory && (
                      <div className="invalid-feedback">
                        {errors.invCategory}
                      </div>
                    )}
                  </div>
                  <br />
                  {/* inventaris CPU */}
                  <div className="form-group">
                    <label htmlFor="invCPU">Prosessor:</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.invCPU ? "is-invalid" : ""
                      }`}
                      id="invCPU"
                      name="invCPU"
                      value={formData.invCPU}
                      onChange={handleChange}
                    />
                    {errors.invCPU && (
                      <div className="invalid-feedback">{errors.invCPU}</div>
                    )}
                  </div>
                  <br />
                  {/* Inventaris Mobo */}
                  <div className="form-group">
                    <label htmlFor="invMobo">Motherboard:</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.invMobo ? "is-invalid" : ""
                      }`}
                      id="invMobo"
                      name="invMobo"
                      value={formData.invMobo}
                      onChange={handleChange}
                    />
                    {errors.invRam && (
                      <div className="invalid-feedback">{errors.invRam}</div>
                    )}
                  </div>

                  <br />
                  {/* Inventaris RAM */}
                  <div className="form-group">
                    <label htmlFor="invRam">RAM:</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.invRam ? "is-invalid" : ""
                      }`}
                      id="invRam"
                      name="invRam"
                      value={formData.invRam}
                      onChange={handleChange}
                    />
                    {errors.invRam && (
                      <div className="invalid-feedback">{errors.invRam}</div>
                    )}
                  </div>

                  <br />
                </div>
                <div className="col-md-5">
                  {/* inventaris GPU */}
                  <div className="form-group">
                    <label htmlFor="invGpu">Kartu Grafis:</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.invGpu ? "is-invalid" : ""
                      }`}
                      id="invGpu"
                      name="invGpu"
                      value={formData.invGpu}
                      onChange={handleChange}
                    />
                    {errors.invGpu && (
                      <div className="invalid-feedback">{errors.invGpu}</div>
                    )}
                  </div>
                  <br />
                  {/* Inventaris Storage */}
                  <div className="form-group">
                    <label htmlFor="invStorage">Storage:</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.invStorage ? "is-invalid" : ""
                      }`}
                      id="invStorage"
                      name="invStorage"
                      value={formData.invStorage}
                      onChange={handleChange}
                    />
                    {errors.invStorage && (
                      <div className="invalid-feedback">
                        {errors.invStorage}
                      </div>
                    )}
                  </div>
                  <br />
                  {/* Inventaris Monitor */}
                  <div className="form-group">
                    <label htmlFor="invLcd">Monitor:</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.invLcd ? "is-invalid" : ""
                      }`}
                      id="invLcd"
                      name="invLcd"
                      value={formData.invLcd}
                      onChange={handleChange}
                    />
                    {errors.invLcd && (
                      <div className="invalid-feedback">{errors.invLcd}</div>
                    )}
                  </div>
                  <br />
                  {/* Inventaris Periperal */}
                  <div className="form-group">
                    <label htmlFor="invPeriperal">Mouse dan Keyboard:</label>
                    <input
                      type="text"
                      className={`form-control ${
                        errors.invPeriperal ? "is-invalid" : ""
                      }`}
                      id="invPeriperal"
                      name="invPeriperal"
                      value={formData.invPeriperal}
                      onChange={handleChange}
                    />
                    {errors.invPeriperal && (
                      <div className="invalid-feedback">
                        {errors.invPeriperal}
                      </div>
                    )}
                  </div>
                  <br />
                  {/* Inventaris Status */}
                  <div className="form-group">
                    <label htmlFor="invStatus">Kondisi barang:</label>
                    <select
                      className={`form-control ${
                        errors.invStatus ? "is-invalid" : ""
                      }`}
                      id="invStatus"
                      name="invStatus"
                      value={formData.invStatus}
                      onChange={handleChange}
                    >
                      <option value="">Pilih</option>
                      <option value="Product 1">Normal</option>
                      <option value="Product 2">Rusak</option>
                    </select>
                    {errors.invStatus && (
                      <div className="invalid-feedback">{errors.invStatus}</div>
                    )}
                  </div>
                </div>
                <div className="col-md-5">
                  {/* upload file */}
                  <div className="image-of-product mt-3">
                    <label htmlFor="file">Foto Barang:</label>
                    <div className="input-group mb-3">
                      <input
                        type="file"
                        className={`form-control ${
                          errors.file ? "is-invalid" : ""
                        }`}
                        id="inputGroupFile02"
                        name="file"
                        onChange={handleChange}
                      />
                    </div>
                    {errors.file && (
                      <div className="invalid-feedback">{errors.file}</div>
                    )}
                  </div>
                  {/* Submit */}
                  <div className="text-center">
                    <button
                      onClick={handleUpdateInv}
                      className="btn btn-primary"
                      style={{ width: 500 }}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Batas Edit */}
          </div>
        </div>
      </div>
    </>
  );
}

export default InvEdit;
