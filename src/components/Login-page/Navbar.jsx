import "./Navbar.css";
import { TbDiamond } from "react-icons/tb";



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
       <TbDiamond className="diamond-icon" />
        <span>E-shop</span>
      </div>

      <ul className="nav-links">
        <li>Home</li>
        <li>Shop</li>
        <li>About Us</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
