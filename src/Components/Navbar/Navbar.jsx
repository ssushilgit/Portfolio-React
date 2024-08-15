import React, { useState } from 'react'
import './Navbar.css'
// import logo from '../../assets/logo.svg'
import { Link } from 'react-scroll'
import underline from '../../assets/nav_underline.svg'

const Navbar = () => {

  const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
      <h1>Sushil Shrestha</h1>
      <ul className='nav-menu'>
        <li>
          <Link to='hero' smooth={true} offset={-240} duration={500}> <p onClick={() => setMenu("home")}>Home</p> </Link>  {menu === "home" ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <Link to='about' smooth={true} offset={-40} duration={500}> <p onClick={() => setMenu("about")}>About Me</p> </Link> {menu === "about" ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <Link to='services' smooth={true} offset={-40} duration={500}><p onClick={() => setMenu("services")}>Services</p> </Link>  {menu === "services" ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <Link to='mywork' smooth={true} offset={-40} duration={500}><p onClick={() => setMenu("portfolio")}>Portfolio</p> </Link> {menu === "portfolio" ? <img src={underline} alt='' /> : <></>}
        </li>
        <li>
          <Link to='contact' smooth={true} offset={-40} duration={500}><p onClick={() => setMenu("contact")}>Contact</p> </Link> {menu === "contact" ? <img src={underline} alt='' /> : <></>}
        </li>
      </ul>
      <div className="nav-connect">
        Connect With Me
      </div>

    </div>
  )
}

export default Navbar