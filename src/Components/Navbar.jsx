import React from 'react'
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


const Navbar = () => {

  const { dispatch } = useContextGlobal(); 

  const cambiarTema = () => {
    // Aquí puedes cambiar el tema almacenado en el estado global
    dispatch({ type: 'SWITCH_THEME' }); // Activa la acción para cambiar el tema
  };
  
  return (
    <>
    <div>
        <Link to='/'>Home</Link>
        <Link to='/favs'>Favs</Link>
        <Link to='/contact'>Contact</Link>
    </div>
    <button onClick={cambiarTema}>Cambiar tema</button>
    </>
  )
}

export default Navbar