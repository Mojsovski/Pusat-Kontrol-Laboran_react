import React from "react";
import { useSelector } from "react-redux";

function InvList() {
  const dataList = useSelector((state) => state.form.dataList);

  return (
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
                        <th scope="col">Prossessor</th>
                        <th scope="col">Motherboard</th>
                        <th scope="col">RAM</th>
                        <th scope="col">Kartu Grafis</th>
                        <th scope="col">Penyimpanan</th>
                        <th scope="col">Monitor</th>
                        <th scope="col">Mouse dan Keyboard</th>
                        <th scope="col">Kondisi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {dataList.map((data, index) => (
                        <tr key={index}>
                          <td>{data.id}</td>
                          <td>{data.invName}</td>
                          <td>{data.invCategory}</td>
                          <td>{data.invCPU}</td>
                          <td>{data.invMobo}</td>
                          <td>{data.invRam}</td>
                          <td>{data.invGpu}</td>
                          <td>{data.invStorage}</td>
                          <td>{data.invLcd}</td>
                          <td>{data.invPeriperal}</td>
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
  );
}

export default InvList;
