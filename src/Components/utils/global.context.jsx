import axios from 'axios'
import {createContext, useContext, useState, useReducer, useEffect} from 'react'
import { useParams } from 'react-router-dom'

//Declaracion del estado inicial
export const initialState = {
  data: [],
  detail: {},
  favs: [],
  //favs: initialFavState,
  theme: true,
}

//Creacion del contexto global

const ContextGlobal = createContext(undefined);

//Para implementar el Reducer

const reducer = (state, action) => {
  switch (action.type) {
      case 'GET_DATA':
          return {...state, data: action.payload}
      case 'GET_DETAIL':
          return {...state, detail: action.payload}
      case 'ADD_FAV':
          return {...state, favs: [...state.favs, action.payload]}
      case 'SWITCH_THEME':
          return {...state, theme: !state.theme}
      default:
          throw new Error()
  }
}

//const localFavs = JSON.parse(localStorage.getItem('favs'))
//const initialFavState = localFavs ? localFavs : []

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(reducer, initialState)

  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
      axios(url)
      .then(res => {
          console.log(res.data)
          dispatch({type: 'GET_DATA', payload: res.data})})
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {
      localStorage.setItem('favs', JSON.stringify(state.favs))
  }, [state.favs])
  
  return (
    <ContextGlobal.Provider value={{state, dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => useContext(ContextGlobal);
    
