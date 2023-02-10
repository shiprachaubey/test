import React from 'react'
import './intro.css'
import Github from '../../images/github.png';
import Facebook from '../../images/Facebook.png';
import Instagram from '../../images/instagram.png';
import girl from '../../images/images.jpg';
const Intro = () => {
  return (
    
    <>
    <div className="intro">
          <div className="i-left">
          <div className="i-name">
              <span>Hy!! I Am</span>
              <span>Shipra</span>
              <span>Frontend Developer in web designing and development , producting the quality work</span>
          </div>

          <button className="button i-button">Hire Me</button>
          <div className="i-icons">
            <img src={Facebook} alt=""/>
             <img src={Github} alt=""/>
        
            <img src={Instagram} alt=""/>
          </div>
          </div>
         
          <div className="i-right">
              <img src={girl} alt=""/>
           
              
          </div>
      </div>
      
          </>    
    
     
  )
}

export default Intro