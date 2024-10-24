import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import{AnimatePresence, motion} from "framer-motion"
import "./navbar.scss";
function Navbar({ open, setOpen }) {
 function scrollToTop(){
  setTimeout(()=>{window.scrollTo(0,0)},500)
 }
  return (
   
    <motion.div className="navbar-container"  >
      <motion.img src={logo} alt="logo" layoutId='main-image-1' layoutTransition  />
      <nav onClick={() => setOpen(!open)}>
        <div className={open ? "hamburger-menu open" : "hamburger-menu"}>
          <div className={open ? "bar open" : "bar"}></div>
        </div>
        <ul className={open ? "ulopen" : "ulclosed"}>
         <Link onClick={scrollToTop} to={"/"}> <li>&nbsp; Accueil &nbsp;</li></Link>
         <Link onClick={scrollToTop} to={'/about'}><li>&nbsp;A propos&nbsp;</li></Link> 
         <Link onClick={scrollToTop} to={'/contact'}> <li>&nbsp;Nos event&nbsp;</li></Link>
         <Link onClick={scrollToTop} to={'/contact'}> <li>&nbsp;Artistes&nbsp;</li></Link>
         <Link onClick={scrollToTop} to={'/contact'}> <li>&nbsp;Artistes&nbsp;</li></Link>
         <Link onClick={scrollToTop} to={'/contact'}> <li>&nbsp;Contact&nbsp;</li></Link>



        </ul>
      </nav>
    </motion.div>
  );
}

export default Navbar;
