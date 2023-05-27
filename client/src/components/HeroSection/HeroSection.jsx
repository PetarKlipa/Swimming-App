import React, { useContext } from 'react'

import "./heroSection.css"
import { AuthContext } from '../../context/authContext'

const HeroSection = () => {
  const {user} = useContext(AuthContext)
  return (
    <div className="wrapper">
        <div className="hero-container">
            <div className="section-hero">
                <h1 className='hero-head'>Do you actively swim?</h1>
                <p className="hero-para">If by any chance you actively swim and want to compete, register as soon as possible.</p>
               {!user && <button className='hero-btn'>Register</button>} 
            </div>
        </div>
    </div>
  )
}

export default HeroSection