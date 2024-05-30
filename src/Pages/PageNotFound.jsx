import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
export default function PageNotFound() {
  const navigate=useNavigate()
  useEffect(()=>{
    navigate("/")
  })
  return (
    <div className='container'>
        <h1>Page not found</h1>
        <p>Redirecting</p>
    </div>
  )
}
