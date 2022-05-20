import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../context/auth.context";

function NavbarBottom() {
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" fixed="bottom">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Me & The Devs
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/articles" className="nav-link">
                  Articles
                </Link>
              </li>
              {isLoggedIn && (
                <>
                  <Link to={`/profile/${user._id}`}>
                    <button>My Profile</button>
                  </Link>
                  <Link to="/edit">
                    <button>Edit Your Profile</button>
                  </Link>
                  <button onClick={logOutUser}>Logout</button>
                  <span>{user && user.name}</span>
                </>
              )}

              {!isLoggedIn && (
                <>
                  <Link to="/signup">
                    {" "}
                    <button>Sign Up</button>{" "}
                  </Link>
                  <Link to="/login">
                    {" "}
                    <button>Login</button>{" "}
                  </Link>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarBottom;
