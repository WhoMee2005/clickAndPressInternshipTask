import { signInWithEmailAndPassword } from '@firebase/auth'
import {auth} from '../firebase/firebase'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
export default function Login() {
    useEffect(()=>{
        document.title="Login | Trafalgar"
    },[])
    const navigate=useNavigate()
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [isSigningIn,setIsSigningIn]=useState(false)
    const [errorMessage,setErrorMessage]=useState("")
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleSubmit=async()=>{
        console.log(`email: ${email}\npassword: ${password}`);
        if(!isSigningIn){
            setIsSigningIn(true)
            console.log(`email: ${email}\npassword: ${password}`)
            try{
                const user =await signInWithEmailAndPassword(auth,email,password)
                localStorage.setItem("authToken",await user.user.getIdToken())
                navigate("/")
            }
            catch(err){
                setErrorMessage(err)
            }
            finally{
                setIsSigningIn(false)
            }
        }
    }
  return (
    <div className='userAuthentication'>
        <div className="userAuthentication-container">
            <h1>Log In</h1>
            <hr />
            <input type="text" placeholder='Enter your email' value={email} onChange={handleEmail} /><br />
            <input type="password" placeholder='Enter your password' value={password} onChange={handlePassword} /><br />
            <Link to="/signin" className='link-2'>Don't have an account? Sign in</Link><br />
            <input type="submit" placeholder='Log In' onClick={handleSubmit} />
            {errorMessage&&<p style={{color:"red"}}>{errorMessage.message}</p>}
        </div>
    </div>
  )
}
