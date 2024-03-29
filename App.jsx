import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Home from './components/Home'
import Details from './components/Details'

const App = () => {
  const {search,pathname} = useLocation();
  return (
    <div className='h-screen w-screen flex'>
      {(pathname != "/" || search.length>0) && (<Link to="/" className='text-red-500 text-xl font-bold absolute left-10 top-[50%]'>Home</Link>)}
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
      
    </div>
  )
}

export default App
