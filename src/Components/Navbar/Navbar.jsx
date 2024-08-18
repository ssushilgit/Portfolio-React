import React, { useState, useRef } from 'react'
import './Navbar.css'
// import logo from '../../assets/logo.svg'
import { Link } from 'react-scroll'
import underline from '../../assets/nav_underline.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = useState("home")
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-250px";
  }

  return (
    <div className='navbar'>
      <h1>Sushil Shrestha</h1>
      <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open' />
      <ul ref={menuRef} className='nav-menu'>
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
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
      <div className="nav-connect"> <Link to='contact' smooth={true} offset={-40} duration={500}>
        Connect With Me </Link>
      </div>

    </div>
  )
}

export default Navbar