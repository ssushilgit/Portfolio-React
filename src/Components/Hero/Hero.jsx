import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'
import { Link } from 'react-scroll'


const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span>I'm Sushil Shrestha, </span><br/>React JS developer. </h1>
        <p>I am a frontend developer, mainly focused on React JS.</p>
        <div className="hero-action">
            <div className="hero-connect">  <Link to='contact' smooth={true} offset={-40} duration={500}> 
                Connect with me </Link>
            </div>
            <div className="hero-resume"> <Link to='mywork' smooth={true} offset={-40} duration={500}>
                My resume </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero