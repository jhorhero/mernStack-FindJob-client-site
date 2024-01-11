import React from 'react'
import { Outlet } from 'react-router-dom'
import Nevbar from './components/Nevbar'

const App = () => {
  return (
    <>
    <Nevbar/>
     <Outlet  /> 
    </>
  )
}

export default App