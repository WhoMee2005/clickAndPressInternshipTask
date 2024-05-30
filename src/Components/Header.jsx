import React from 'react'
import elementImg from '../assests/images/element.png'
import eclipse from '../assests/images/eclipse7.png'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from '@firebase/auth'
import { auth } from '../firebase/firebase'
export default function Header() {
  const navigate=useNavigate()
  const handleLogout=()=>{
    localStorage.removeItem('authToken')
    signOut(auth)
    navigate('/login')
  }
  return (
    <div className='container'>
      <header>

            <div className="logo"><img src={eclipse} alt="" /><span>Trafalgar</span></div>
            <nav>
                <Link className="link active">Home</Link>
                <Link className="link">Find a doctor</Link>
                <Link className="link">Apps</Link>
                <Link className="link">About us</Link>
                <button className='logout-btn' onClick={handleLogout}>Log Out</button>
            </nav>
      </header>
      <div className="header-content">
        <div className="header-text">
            <h1>Virtual healthcare for you</h1>
            <p>
            Trafalgar provides progressive, and affordable 
            healthcare, accessible on mobile and online 
            for everyone
            </p>
            <button className="consult-btn">
                Consult today
            </button>
        </div>
        <img src="https://s3-alpha-sig.figma.com/img/e7c8/a652/b4ff26a094731214f377e182c2504450?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NlECxUEmfBO37fMLcEmJ0rImAAe7GLl3I1MxmpICVePTII6KtQAPXBrgxP5tKsvBiRzNqGuZtVtuF1nkSeZ2Qo0bPoTaWBBo8RNuj4HCdj7Ko4UT5jsQ1moxYlA8EbSXgRIFPmGpQKlaB9skiYZ4VCLewlQcBcx0UP6ob7Ys2ggDPDAmEljKNwkGdOmn9B1-gWnVnYHpBI8P0r6dTH2MpyLaKELJHtltbAJUMaSNz5~bfHkCP2t4gOdETjT~rkCjn57wAs~W~89KZmm~tuc15aiMkOPXs8x5QkllGQ6kLGYBApbPX~xqQgOyjcoZlKC9xEb7~B-BJ4C1S5hZdlQVsg__" alt="illustration" className='illustration' />
      </div>
        <img src={elementImg} alt="element" className='element1'/>
    </div>
    
  )
}
