import React, { useEffect } from "react";
import Header from "./Header";
import { useParams, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductById } from "../store/InvSlice";

const InvDetail = () => {
  const { id } = useParams();
  const formData = useSelector((state) => state.form.formData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Header />
          <div className="col-md-10">
            <div className="container d-flex justify-content-center">
              <div className="w-75 p-5">
                <p className="display-4 text-center">Product Details</p>
                <div className="card-body">
                  <table className="table">
                    <tbody>
                      <tr>
                        <th scope="row">Nama Barang</th>
                        <td>{formData.invName}</td>
                      </tr>
                      <tr>
                        <th scope="row">Jenis Barang</th>
                        <td>{formData.invCategory}</td>
                      </tr>
                      <tr>
                        <th scope="row">Prosessor</th>
                        <td>{formData.invCPU}</td>
                      </tr>
                      <tr>
                        <th scope="row">Motherboard</th>
                        <td>{formData.invMobo}</td>
                      </tr>
                      <tr>
                        <th scope="row">RAM</th>
                        <td>{formData.invRam}</td>
                      </tr>
                      <tr>
                        <th scope="row">Kartu Grafis</th>
                        <td>{formData.invGpu}</td>
                      </tr>
                      <tr>
                        <th scope="row">Penyimpanan</th>
                        <td>{formData.invStorage}</td>
                      </tr>
                      <tr>
                        <th scope="row">Monitor</th>
                        <td>{formData.invLcd}</td>
                      </tr>
                      <tr>
                        <th scope="row">Mouse dan Keyboard</th>
                        <td>{formData.invPeriperal}</td>
                      </tr>
                      <tr>
                        <th scope="row">Kondisi Barang</th>
                        <td>{formData.invStatus}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <Link
                  to={"/edit-inventaris"}
                  type="button"
                  className="btn mt-3 btn-primary w-100"
                >
                  Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvDetail;
