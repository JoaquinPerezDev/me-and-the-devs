import { Link } from "react-router-dom";
 
function Navbar() {
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
                    <Link to="/profile">
                        <button>Profile</button>
                    </Link>
                    <Link to="/about">
                        <button>About Me</button>
                    </Link>
                    <i class="bi bi-boxes"></i>                    

                </nav>
            </div>
    </nav>
  );
}
 
export default Navbar;