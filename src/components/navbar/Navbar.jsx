import { useContext } from "react";
import "./navbar.css"
import {Link} from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Navbar = () => {
  const {user} = useContext(AuthContext); 
  const handleLogout = ()=>{
    localStorage.setItem("user", null);
    window.location.reload();
  }
  return (
    <div className="navbar">
      <div className="navContainer">
      <Link to="/" style={{color: "inherit", textDecoration: "none"}}>
        <span className="logo">Anuj_booking_Website</span>
        </Link>
        {user ? 
        (<div>  {user.username}
         <button onClick={handleLogout} className="navButton">Logout</button>
        </div>) : 
        (<div className="navItems">
        <Link to="/register">
          <button className="navButton">Register</button>
          </Link>
          <Link to="/login">
          <button className="navButton">Login</button>
          </Link>
        </div>)}
      </div>
    </div>
  )
}

export default Navbar