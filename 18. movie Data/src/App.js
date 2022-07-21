import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './Home'
import SingleMovie from './SingleMovie'
import Error  from './Error'
function App() {
  return <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/movie/:id' element={<SingleMovie></SingleMovie>}></Route>
      <Route path='/*' element={<Error></Error>}></Route>

    </Routes>


  </BrowserRouter>
}

export default App
