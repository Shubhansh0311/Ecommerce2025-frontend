import React from 'react'

import './index.css'

import { Route, Routes } from 'react-router-dom'
import CustomerRoutes from './Routes/CustomerRoutes'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/*' element={<CustomerRoutes/>}></Route>
      </Routes>



      
    </div>
  )
}

export default App