import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import{AnimatePresence, motion} from "framer-motion"
import "./navbar.scss";
function Navbar({ open, setOpen }) {
 function scrollToTop(){
  setTimeout(()=>{window.scrollTo(0,0)},500)
 }
  return (
    <AnimatePresence mode="popLayout">
    <motion.div className="navbar-container"  layoutTransition>
      <motion.img src={logo} alt="logo" layoutId='main-image-1' layoutTransition  />
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
    </motion.div></AnimatePresence>
  );
}

export default Navbar;
