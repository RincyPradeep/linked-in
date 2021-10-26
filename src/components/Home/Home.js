import React from 'react'
import {Link} from 'react-router-dom'
import Leftside from '../Leftside/Leftside'
import Middle from '../Middle/Middle'
import Rightside from '../Rightside/Rightside'
import './Home.css'

const Home = () => {
    return (
        <div className='home-container'>
            <div className="home-top-section">
                <Link to='#'>Hiring in a hurry?</Link>
                <span>Find talented pros in record time with Upwork and keep business moving.</span>
            </div>  
            <div className="home-content">
                <Leftside />
                <Middle />
                <Rightside/>              
            </div> 
        </div>
    )
}

export default Home
