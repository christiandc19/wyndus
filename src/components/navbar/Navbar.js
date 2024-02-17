import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import {Link} from 'react-router-dom'
// import {NavLink, Link} from 'react-router-dom'
// import {FiChevronDown } from "react-icons/fi";


import './NavbarStyles.css'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)

    const [isMenu, setisMenu] = useState(false);


    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
      
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }

    return (
        <>
        <div className='navbar'>
            <div className="navbar-container">
                
                 <div className="navbar-logo">
                    <Link to='/'>
                        <h1>ALWYN FUNA</h1>
                    </Link>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/treatment'>My Work</Link> </li>
                    <li><Link to='/residence'>Photogrphy</Link> </li>
                    <li><Link to='/residence'>Services</Link> </li>
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
