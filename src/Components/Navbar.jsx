import React from 'react'
import { Link } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/favs'>Favs</Link>
        <Link to='/contact'>Contact</Link>
    </div>
  )
}

export default Navbar