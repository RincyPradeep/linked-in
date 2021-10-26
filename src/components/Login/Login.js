import React from 'react'
import './Login.css'
import {Link} from 'react-router-dom'
import Hero from '../Hero/Hero'

const Login = () => {
    return (
        <div className='container'>
            <div className='nav'>
                <Link to='#' className='logo-wrapper'>
                    <img src="/images/login-logo.svg" alt="logo" className='logo'/>
                </Link>
                <div className="right-nav">
                    <Link to='#' className='join-now-btn'>Join now</Link>
                    <Link to="#" className='sign-in-btn'>Sign in</Link>
                </div>               
            </div>
            <Hero/>
        </div>
    )
}

export default Login
