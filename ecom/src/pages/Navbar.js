import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container">
    
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
                            
            </ul>
            <ul className="navbar-nav ">
            <li className="nav-item">
                <Link className="nav-link" to="/Cart">
                  Cart
                </Link>
              </li>
            </ul>
            
      
        </div>
      </nav>
    </>
  );
}
export default Navbar;
