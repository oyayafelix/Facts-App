import './Navbar.css';
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <div>
            <nav className="Navbar">
          <div>
            <a href="*" className="logo">
              <span className="logo-part-one">INvest</span>
              <span className="logo-part-two">Facts</span>
            </a>
          </div>
          <div className="menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/industries">Industries</Link></li>
            </ul>
          </div>
        </nav>
        </div>
    )
}

export default Navbar;