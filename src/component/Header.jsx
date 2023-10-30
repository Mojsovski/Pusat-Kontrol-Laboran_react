import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="col-md-2 ">
        <nav className="navbar navbar-expand-lg flex-column">
          <a className="navbar-brand" href="#">
            Pusat Kontrol Laboran
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse " id="navbarNav">
            <div className="align-items-center">
              <ul className="navbar-nav flex-column ">
                <li className="nav-item">
                  <Link className="nav-link" to="/home">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/input-inventaris">
                    Input Inventaris
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/list-inventaris">
                    Daftar Inventaris
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/edit-inventaris">
                    Edit Inventaris
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/chatbot">
                    Asisten AI
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
