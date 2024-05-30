import React, { useEffect } from 'react'
import Header from '../Components/Header'
import OurServices from '../Components/OurServices'
import LHP from '../Components/LHP'
import DOMA from '../Components/DOMA'
import Footer from '../Components/Footer'
import LatestArticle from '../Components/LatestArticle'
import Slider from '../Components/Slider'
import useAuth from '../useAuth'
import { useNavigate } from 'react-router-dom'
export default function Home() {
  const navigate=useNavigate()
  const {getToken}=useAuth();
  useEffect(()=>{
    const token=getToken();
    console.log(token)
    if(!token){
      console.log("should exit");
      navigate("/login")
    }
  })
  document.title="Home | Trafalgar"
  return (
    <>
        <Header/>
        <OurServices/>
        <LHP/>
        <DOMA/>
        <Slider/>
        <LatestArticle/>
        <Footer/>
    </>
  )
}
