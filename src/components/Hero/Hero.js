import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <section className='section'>
                <div className='left-section'>
                    <h1 className='left-section-head'>Welcome to your professional community</h1>
                    <button className='left-section-btn'>
                        <img src="/images/google.svg" alt="google-logo" className='google-logo'/>
                        Sign in with Google
                    </button>
                </div>
                <div className="right-section">
                    <img src="/images/login-hero.svg" alt="login-hero" className='right-section-img'/>
                </div>               
            </section>
    )
}

export default Hero
