import React ,{useState} from 'react'
import {Link} from 'react-router-dom'
import {menu} from '../../menu'
import './Header.css'

const Header = () => {
    const [active,setActive] = useState('Home')
    const [userDown,setUserDown] = useState(false)
    const [workDown, setWorkDown] = useState(false)
    return (
        <div className='header-container'>
            <div className="header-left-section">
                <img src="/images/linkedin.png" alt="linkedin-icon" />
                <div className="search">
                    <img src="/images/search-icon.svg" alt="search-icon" />
                    <input type='search' placeholder='Search' />
                </div>                
            </div>
            <div className="header-right-section">
                {
                    menu.map(item=>{
                        return(
                            <Link to='#'>
                                <div className={active === item.name ? 'menu-item active' : 'menu-item'} onClick={()=>setActive(item.name)}>
                                    <img src={item.image} alt={item.name} />
                                    {/* <div className='menu-item-down'> */}
                                        <p>{item.name}</p>
                                        {/* {item.down_icon && <img src={item.down_icon} alt='' className='down-icon' />} */}
                                    {/* </div> */}
                                </div>
                            </Link>
                        )
                    })
                }

                <div className='menu-item' onClick={()=>{setUserDown(!userDown);setWorkDown(false)}}>
                    <img src="/images/user.svg" alt="user" className='user-image'/>
                    <div className='menu-item-down'>    
                        <p>Me</p>
                        <img src='/images/down-icon.svg' alt='user' className='down-icon' />
                    </div>
                    {userDown && <Link to='#' className='sign-out'>Sign out </Link>}
                </div>

                <div className='menu-item' onClick={()=>{setWorkDown(!workDown);setUserDown(false)}}>
                    <img src="/images/nav-work.svg " alt="user" />
                    <div className='menu-item-down'>    
                        <p>Work</p>
                        <img src='/images/down-icon.svg' alt='user' className='down-icon' />
                    </div>
                    {workDown && <div className='works'>WORKS</div>}
                </div>
            </div>

            
        </div>
    )
}

export default Header
