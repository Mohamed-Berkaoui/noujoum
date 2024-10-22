import React, { createContext, useState } from 'react'



export const NavbarToggle = createContext()

function NavbarContext({children}) {
  const [navbarOpen, setNavbarOpen] = useState(false);
    
  return (
    <NavbarToggle.Provider value={{navbarOpen, setNavbarOpen}}>
      {children}
    </NavbarToggle.Provider>
  )
}

export default NavbarContext
