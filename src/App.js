/* eslint-disable @typescript-eslint/no-use-before-define */
import { useContext, useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence ,motion} from "framer-motion";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar/Navbar";
import { NavbarToggle } from "./context/NavbarContext";
import About from "./pages/about/About";
import Transition from "./components/pagetansitions/Transition";
import Footer from "./components/footer/Footer";
import Loader from "./components/loader/Loader";
const appTrans = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};
function App() {
  const location = useLocation();
  const locationArr = location.pathname?.split("/") ?? [];
  const [loading, setLoading] = useState(true);
  const [initialLoading, setInitialLoading] = useState(true);
  const { navbarOpen, setNavbarOpen } = useContext(NavbarToggle);
  const [reduceHeight, setReduceHeight] = useState(false);
  useEffect(()=>{setTimeout(() => {
    setInitialLoading(false)
  }, 3000);},[])
  function openNavbar() {
    setNavbarOpen(!navbarOpen);

  }
  return (
    <AnimatePresence mode="popLayout" >
        {initialLoading ? <Loader/>:
    <motion.div key={"app-trans"}   initial="initial"
    animate="animate"
    exit="exit"
    variants={appTrans}>
      <Navbar setReduceHeight={setReduceHeight} open={navbarOpen} setOpen={openNavbar} />
      <motion.div className="Main">
        <AnimatePresence mode="wait" initial={false} >
          <Routes location={location} key={locationArr[1]}>
            <Route
              path="/"
              element={
                <Transition reduceHeight={reduceHeight}>
                  <Home loading={loading} setLoading={setLoading} />
                 </Transition>
              }
            />

            <Route
              path="/about"
              element={
                <Transition reduceHeight={reduceHeight}>
                  <About />
                </Transition>
              }
            />
          </Routes>
        </AnimatePresence>
      </motion.div>
      <Footer/>
    </motion.div>}
    </AnimatePresence>
  );
}

// A simple page with a title (this will be top-level routing)

export default App;

