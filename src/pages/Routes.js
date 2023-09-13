import React from 'react'
import Frontend from './Frontend'
import { Route, Routes } from 'react-router-dom'
export default function comRoutes() {
  return (
    <Routes>
        <Route path='/*' element={<Frontend/>}/>
    </Routes>
  )
}
