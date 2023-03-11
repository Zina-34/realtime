import React from 'react'
import "./Hero.css";

const Hero = ({imageSrc}) => {
  return (
    <div className="imgslide">
        <div className="hero">
          <img src={imageSrc} alt="Digital" className='hero_image' />
          <h1 className="hero_title">Don’t worry, we have it </h1>
        </div>
        <div className="hero1">

        </div>
        <div className="hero2">

        </div>
    </div>
  )
}

export default Hero
