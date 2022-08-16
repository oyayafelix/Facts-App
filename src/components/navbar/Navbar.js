import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
      <nav className="Navbar">
        <div>
          <Link to="/" className="logo">
            <span className="logo-part-one">INvest</span>
            <span className="logo-part-two">Facts</span>
          </Link>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/industries">Industries</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Navbar;
