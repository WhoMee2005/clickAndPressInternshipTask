import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import SignIn from './Pages/SignIn'
import PageNotFound from './Pages/PageNotFound'
export default function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' Component={Home} exact/>
        <Route path='/login' Component={Login} exact/>
        <Route path='/signin' Component={SignIn} exact/>
        <Route path="*" Component={PageNotFound}/>
    </Routes>
    </BrowserRouter>
  )
}
