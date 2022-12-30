import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Landpage } from '../Landpage/Landpage'

export const AllRoutes = () => {
  return (
    <Routes>
<Route path='/'element={<Landpage/>}></Route>
    </Routes>
  )
}
