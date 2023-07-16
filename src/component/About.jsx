import React from 'react'

function About(props) {
  return (
    <div id='about'>

    <div className='about-image'> 
        <img src={props.image} alt=''/>
    </div>
          <div className='about-text'>
             <h2>{props.title}</h2>
             <p>AppLand is a comprehensive travel companion app designed to simplify your travel experience and help you create unforgettable adventures. Whether you're a frequent traveler or planning your dream vacation, TravelPal is here to assist you every step of the way. </p>
            <button>{props.button}</button>
        </div>
    </div>
  )
}

export default About