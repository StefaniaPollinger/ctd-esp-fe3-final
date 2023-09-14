import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContextGlobal } from '../Components/utils/global.context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  const Detail = () => {
    const {state, dispatch} = useContextGlobal()
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
    const {name, email, phone, website} = state.data
    console.log(id)
    const url = 'https://jsonplaceholder.typicode.com/users/' + id
  
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            dispatch({type: 'GET_DATA', payload: data})
            setLoading(false)
        })
    }, [])

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      <div>
        {loading ? 'Cargando...' : <>
            <h1>Name: {name}</h1>
            <h3>email: {email}</h3>
            <h3>phone: {phone}</h3>
            <h3>Website: {website}</h3>
        </>}
    </div>
  </>
  )
}
}
export default Detail
