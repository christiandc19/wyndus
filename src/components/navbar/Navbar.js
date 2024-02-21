import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    return (
        <>
        <div className='navbar' name='top'>
            <div className="navbar-container">
                
                 <div className="navbar-logo">
                    <Link to='/'>
                        <h1>ALWYN FUNA</h1>
                    </Link>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>My Work</Link> </li>
                    <li><Link to='/'>Photogrphy</Link> </li>
                    <li><Link to='/'>Services</Link> </li>
                    <li><Link to='/contact'>Hire Me!</Link></li>
                </ul>

                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar
