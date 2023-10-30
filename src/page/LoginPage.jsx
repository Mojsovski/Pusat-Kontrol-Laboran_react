import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../store/InvSlice";

// username admin password admin
// username user password user

export default function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const resultAction = await dispatch(loginUser({ username, password }));
      if (loginUser.fulfilled.match(resultAction)) {
        localStorage.setItem("isLoggedIn", true);
        navigate("/home");
      } else {
        return alert("Invalid username or password");
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="jumbotron">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="home-main-text">
              <h1 className="display-4">Pusat Kontrol Laboran</h1>
              <p className="lead">UPT Laboratorium Komputer</p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="container  ">
              <div className="align-items-center ">
                <form
                  className="card border p-4 rounded shadow-sm"
                  onSubmit={handleLogin}
                >
                  <h3 className="text-center mb-4">Login</h3>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary w-100 mb-3">
                    Login
                  </button>
                  <div className="text-danger text-center">{errorMessage}</div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
