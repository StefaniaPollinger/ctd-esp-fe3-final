import React from 'react'
import Card from '../Components/Card'
import { useContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const {state} = useContextGlobal()

  return (
    <div>
    {state.data.map(data => <Card detail={detail} key={detail.id}/>)}
    </div>
  )
}

export default Home