import React, {  useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import {auth} from '../firebase/firebase'
import { createUserWithEmailAndPassword } from '@firebase/auth'
import { useNavigate } from 'react-router-dom'
export default function SignIn() {
    useEffect(()=>{
        document.title="SignIn | Trafalgar"
    },[])
    const navigate=useNavigate();
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [isRegistering,setIsRegistering]=useState(false)
    const [errorMsg,setErrorMsg]=useState("")
    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }
    const handleSubmit=async()=>{
        console.log(`email: ${email}\npassword: ${password}`);
        if(!isRegistering){
            setIsRegistering(true)
            console.log("entered handle submit")
            try{
                const user=await createUserWithEmailAndPassword(auth,email,password)
                localStorage.setItem("authToken",await user.user.getIdToken())
                navigate("/")    
            }
            catch(err){
                console.log(err)
                setErrorMsg(err)
                setIsRegistering(false)
            }
        }
    }
  return (
    <div className='userAuthentication'>
        <div className="userAuthentication-container">

            <h1>Sign In</h1>
            <hr />
            <input type="text" placeholder='Enter your email' value={email} onChange={handleEmail} /><br />
            <input type="password" placeholder='Enter your password' value={password} onChange={handlePassword} /><br />
            <Link to="/login" className='link-2'>Already have an account? Log in</Link><br />
            <input type="submit" placeholder='Log In' onClick={handleSubmit} />
            {errorMsg&&<p style={{color:"red"}}>{errorMsg.message}</p>}
        </div>
    </div>
  )
}
