import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/auth.context";


function Navbar() {

    const { 
        isLoggedIn, 
        user,
        logOutUser
     } = useContext(AuthContext); 

  return (
      <>        
<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
        <Link to="/" className="navbar-brand" >
        Me & The Devs
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                <Link to="/article" className="nav-link" >Articles</Link>
                </li>
                {isLoggedIn && (
                                <>
                            <Link to="/profile">
                                <button>Profile</button>
                            </Link>
                            <Link to="/about">
                                <button>About Me</button>
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
                                <Link to="/signup"> <button>Sign Up</button> </Link>
                                <Link to="/login"> <button>Login</button> </Link>
                                </>
                            )}
            </ul>
            <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
  </div>
</nav>
                </>

  );
}
 
export default Navbar;