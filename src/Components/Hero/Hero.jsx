import React from 'react'
import './Hero.css'
import profile_img from '../../assets/profile_img.jpg'

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span>I'm Sushil Shrestha, </span><br/>React JS developer. </h1>
        <p>I am a frontend developer, mainly focused on React JS.</p>
        <div className="hero-action">
            <div className="hero-connect">
                Connect with me
            </div>
            <div className="hero-resume">
                My resume
            </div>
        </div>
    </div>
  )
}

export default Hero