import React from "react";
import InvList from "../component/InvList";
import Header from "../component/Header";

export default function ListPage() {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
        <div className="col-md-10">
          <div className="container text-center">
            <br />
            <div className="row align-items-start">
              <div className="col">
                <h2>Daftar Inventaris</h2>
              </div>
            </div>
            <div className="d-flex gap-3 justify-content-center"></div>
          </div>
          <br />
          <InvList />
        </div>
      </div>
    </div>
  );
}
