import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import "./navbar.scss";
function Navbar({ open, setOpen }) {
 function scrollToTop(){
  setTimeout(()=>{window.scrollTo(0,0)},500)
 }
  return (
    <div className="navbar-container" >
      <img src={logo} alt="logo" />
      <nav onClick={() => setOpen(!open)}>
        <div className={open ? "hamburger-menu open" : "hamburger-menu"}>
          <div className={open ? "bar open" : "bar"}></div>
        </div>
        <ul className={open ? "ulopen" : "ulclosed"}>
         <Link onClick={scrollToTop} to={"/"}> <li>&nbsp; Home &nbsp;</li></Link>
         <Link onClick={scrollToTop} to={'/about'}><li>&nbsp;About&nbsp;</li></Link> 
         <Link onClick={scrollToTop} to={'/contact'}> <li>&nbsp;Contact&nbsp;</li></Link>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
