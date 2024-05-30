import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assests/images/logov2.png'
import element from '../assests/images/element.png'
export default function Footer() {
  return (
    <footer>
        <div className="info">
            <h2><img src={logo} alt="" />Trafalgar</h2>
            <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone</p>
            <p className='copyright'>©Trafalgar PTY LTD 2020. All rights reserved</p>
        </div>
        <div className="section">
            <h2>Company</h2>
            
                <Link className="link">About</Link>
                <Link className="link">Testimonials</Link>
                <Link className="link">Find a doctor</Link>
                <Link className="link">Apps</Link>
            
        </div>
        <div className="section">
            <h2>Region</h2>
            
                <Link className="link">Indonesia</Link>
                <Link className="link">Singapore</Link>
                <Link className="link">Hongkong</Link>
                <Link className="link">Canada</Link>
            
        </div>
        <div className="section">
            <h2>Help</h2>
            
                <Link className="link">Help center</Link>
                <Link className="link">Contact support</Link>
                <Link className="link">Instrucitons</Link>
                <Link className="link">How it works</Link>
            
        </div>
        <img src={element} alt="element" className='element' />
    </footer>
  )
}
