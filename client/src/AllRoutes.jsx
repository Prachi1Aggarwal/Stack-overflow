import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import Questions from './pages/Questions/Questions'
import AskQuestion from './pages/AskQuestion/AskQuestion'
import DisplayQuestion from'./pages/Questions/DisplayQuestion'
import Avatar from './components/Avatar/Avatar'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/Auth' element={ <Auth/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/Questions' element={<Questions/>}/>
        <Route path='/AskQuestion' element={<AskQuestion/>}/>
        <Route path='/Questions/:id' element={<DisplayQuestion/>}/>
        <Route path='/User' element={<Avatar/>}/>
    </Routes>
  )
}

export default AllRoutes
