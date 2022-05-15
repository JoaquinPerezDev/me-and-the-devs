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
    <nav>
                <div>
                Me & The Devs
                </div>
                <div>
                <nav class="navbar navbar-light bg-light">
                    <Link to="/">
                        <button>Home</button>
                    </Link>
                    <Link to="/article">
                        <button>Articles</button>
                    </Link>

                    <i class="bi bi-boxes"></i>                    

                    {isLoggedIn && (
                        <>
                        <Link to="/profile">
                        <button>Profile</button>
                    </Link>
                    <Link to="/about">
                        <button>About Me</button>
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

                </nav>
            </div>
    </nav>
  );
}
 
export default Navbar;