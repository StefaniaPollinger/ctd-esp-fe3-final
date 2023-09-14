import React from "react";
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'


const Card = ({char}) => {

  const {dispatch} = useContextGlobal()
  const addFav = () => {
      dispatch({type: 'ADD_FAV', payload: detail})
  }
return (
  <div>
      <Link to={'/detail/' + detail.id}>
      {/* <Link to={`/detail/${detail.id}`}> */}
          <h3>{data.name}</h3>
          <img src="/img/doctor.jpg" alt="Imagen del doctor"/>
          <p>{data.username}</p>
      </Link>
      <button onClick={addFav}>⭐</button>
  </div>
)
}

export default Card;
