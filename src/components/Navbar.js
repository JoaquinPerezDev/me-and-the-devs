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
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <Link to="/" class="navbar-brand" >
    Me & The Devs
    </Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to="/" class="nav-link active" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          <Link to="/article" class="nav-link" >Articles</Link>
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
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
                </>

  );
}
 
export default Navbar;