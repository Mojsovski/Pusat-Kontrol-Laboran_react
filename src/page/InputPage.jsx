import Header from "../component/Header";
import InvInput from "../component/InvInput";

function InputPage() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <Header />
          <div className="col-md-10">
            <div className="container text-center">
              <br />
              <div className="row align-items-start">
                <div className="col">
                  <h2>Input Inventaris</h2>
                </div>
              </div>
              <div className="d-flex gap-3 justify-content-center"></div>
            </div>
            <br />
            <InvInput />
          </div>
        </div>
      </div>
    </>
  );
}

export default InputPage;
