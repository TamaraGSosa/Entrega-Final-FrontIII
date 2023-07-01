import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { routes } from '../utils/routes'
import {useContextGlobal}from '../utils/Context'

const Navbar = () => {

  const {state, dispatch}= useContextGlobal();

  return (
    <nav className={state.theme == 'light' ? "light" : "dark"}>
      
        
      
      
      <Link to={routes.home}><h3 className='link'>Home</h3></Link>
      <Link to={routes.contact}><h3 className='link'>Contact</h3></Link>
      <Link to={routes.favs}><h3 className='link'>Favs</h3></Link>

      <button className='buttonTheme' onClick={() => dispatch({ type: "HANDLE_THEME", payload: state.theme== 'light' ? 'dark' : 'light' })}>Change theme</button>
    </nav>
  )
}

export default Navbar