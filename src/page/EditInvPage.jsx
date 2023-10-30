import React from "react";
import Header from "../component/Header";
import { useSelector, useDispatch } from "react-redux";
import { deleteDataFromApi } from "../store/InvSlice";
import { Link } from "react-router-dom";

function EditInvPage() {
  const dataList = useSelector((state) => state.form.dataList);
  const dispatch = useDispatch();
  let Num = 1001;

  const handleDelete = (id) => {
    dispatch(deleteDataFromApi(id));
    alert("Data Delete Success");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
        <div className="col-md-10">
          {/* Batas Edit */}
          <div className="container text-center">
            <br />
            <div className="row align-items-start">
              <div className="col">
                <h2>Edit Inventaris</h2>
              </div>
            </div>
            <div className="d-flex gap-3 justify-content-center"></div>
          </div>
          <div className="mask d-flex align-items-center h-100">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-12">
                  <div
                    className="card shadow-2-strong"
                    style={{ backgroundColor: "#f5f7fa" }}
                  >
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-borderless mb-0">
                          <thead>
                            <tr>
                              <th scope="col">No</th>
                              <th scope="col">Nama</th>
                              <th scope="col">Kategori</th>
                              <th scope="col">Kondisi</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {dataList.map((data, index) => (
                              <tr key={index}>
                                <td>{data.id}</td>
                                <td>{data.invName}</td>
                                <td>{data.invCategory}</td>
                                <td>{data.invStatus}</td>

                                <td>
                                  <Link
                                    to={`/edit-inventaris/${data.id}`}
                                    className="btn btn-primary m-1"
                                  >
                                    Edit
                                  </Link>
                                  <button
                                    onClick={() => handleDelete(data.id)}
                                    className="btn btn-primary"
                                  >
                                    Delete
                                  </button>
                                  <Link
                                    to={`/detail-inventaris/${data.id}`}
                                    className="btn btn-primary m-1"
                                  >
                                    Detail
                                  </Link>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Batas Edit  */}
        </div>
      </div>
    </div>
  );
}

export default EditInvPage;
