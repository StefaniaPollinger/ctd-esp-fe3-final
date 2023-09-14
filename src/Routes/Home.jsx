import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state} = useContextGlobal()

  return (
    <div>
      <h1>Home</h1>
      <div className="card-grid">
    {state.data.map(data => <Card data={data} key={data.id}/>)}
    </div>
    </div>
  )
}

export default Home