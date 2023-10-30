import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "../component/Header";

function LandingPage() {
  const dataList = useSelector((state) => state.form.dataList);
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Header />
          <div className="col-md-10">
            <div className="dashboard">
              <div className="row">
                <div className="row text-center ">
                  <div className="col-md-5 ">
                    <div className="col" style={{ marginBottom: "30px" }}>
                      <Link
                        to="/input-inventaris"
                        className="btn btn-primary"
                        style={{
                          padding: 12,
                          width: 440,
                          height: 50,
                          backgroundColor: "#F5BD45",
                          color: "black",
                        }}
                      >
                        Input Inventaris
                      </Link>
                    </div>
                    <div className="col" style={{ marginBottom: "30px" }}>
                      <Link
                        to="/list-inventaris"
                        className="btn btn-primary"
                        style={{
                          padding: 12,
                          width: 440,
                          height: 50,
                          backgroundColor: "#F5BD45",
                          color: "black",
                        }}
                      >
                        Daftar Inventaris
                      </Link>
                    </div>
                    <div className="col" style={{ marginBottom: "30px" }}>
                      <Link
                        to="/edit-inventaris"
                        className="btn btn-primary"
                        style={{
                          padding: 12,
                          width: 440,
                          height: 50,
                          backgroundColor: "#F5BD45",
                          color: "black",
                        }}
                      >
                        Edit Inventaris
                      </Link>
                    </div>
                    <div className="col" style={{ marginBottom: "30px" }}>
                      <Link
                        to="/chatbot"
                        className="btn btn-primary"
                        style={{
                          padding: 12,
                          width: 440,
                          height: 50,
                          backgroundColor: "#F5BD45",
                          color: "black",
                        }}
                      >
                        Asisten AI
                      </Link>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div
                      className="card"
                      style={{
                        width: "695px",
                        height: "300px",
                        backgroundColor: "#DBD9D5",
                      }}
                    >
                      <div className="card-body">
                        <h5 className="card-title">Jadwal Perkuliahan</h5>
                        <p className="card-text">Continue</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row ">
                  <div className="col-md-12">
                    <div
                      className="card p-4 text-center"
                      style={{
                        width: "1190px",
                        height: "300px",
                      }}
                    >
                      <table className="table table-borderless mb-2">
                        <thead>
                          <tr>
                            <th scope="col">No</th>
                            <th scope="col">Nama</th>
                            <th scope="col">Kategori</th>
                            <th scope="col">Prossessor</th>
                            <th scope="col">RAM</th>
                            <th scope="col">Kartu Grafis</th>
                            <th scope="col">Kondisi</th>
                          </tr>
                        </thead>
                        <tbody>
                          {dataList.slice(0, 5).map((data, index) => (
                            <tr key={index}>
                              <td>{data.id}</td>
                              <td>{data.invName}</td>
                              <td>{data.invCategory}</td>
                              <td>{data.invCPU}</td>
                              <td>{data.invRam}</td>
                              <td>{data.invGpu}</td>
                              <td>{data.invStatus}</td>
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
      </div>
    </>
  );
}

export default LandingPage;
