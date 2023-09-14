import React from "react";
import { Link } from 'react-router-dom'
import { useContextGlobal } from './utils/global.context'


const Card = ({data}) => {

  const {dispatch} = useContextGlobal()
  const addFav = () => {
      dispatch({type: 'ADD_FAV', payload: data})
  }
return (
  <div className="card">
      <Link to={'/detail/' + data.id}>
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
