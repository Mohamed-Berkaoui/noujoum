/* eslint-disable @typescript-eslint/no-use-before-define */
import { useContext, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar/Navbar";
import { NavbarToggle } from "./context/NavbarContext";
import About from "./pages/about/About";
import Transition from "./components/pagetansitions/Transition";
import Footer from "./components/footer/Footer";

function App() {
  const location = useLocation();
  const locationArr = location.pathname?.split("/") ?? [];
  const [loading, setLoading] = useState(true);
  const { navbarOpen, setNavbarOpen } = useContext(NavbarToggle);
  const [reduceHeight, setReduceHeight] = useState(false);
  function openNavbar() {
    setNavbarOpen(!navbarOpen);

  }
  return (
    <>
      <Navbar setReduceHeight={setReduceHeight} open={navbarOpen} setOpen={openNavbar} />
      <div className="Main">
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
      </div>
      <Footer/>
    </>
  );
}

// A simple page with a title (this will be top-level routing)

export default App;

