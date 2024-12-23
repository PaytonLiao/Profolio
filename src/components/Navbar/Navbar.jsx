// import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo_payton.png'

import AnchorLink from "react-anchor-link-smooth-scroll";


const Navbar = () => {
    // const [menu, setMenu] = useState("home");

    return (
        <div id='home' className='navbar'>
            <AnchorLink className='anchor-link' href='#home'><img src={logo} alt='' /></AnchorLink>
            <ul className='nav-menu'>
                <li><AnchorLink className='anchor-link' href='#home'><p >Home</p></ AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p >About Me</p></ AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#skill'><p >Skills</p></ AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#work'><p >Portfolio</p></ AnchorLink></li>
                <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p >Contact</p></ AnchorLink></li>
            </ul>
            <a href='https://www.linkedin.com/in/payton-liao/'>
                <div>
                    <p className='nav-connect'>Connect with me on LinkedIn</p>
                </div>
            </a>
        </div>
    )
}

export default Navbar