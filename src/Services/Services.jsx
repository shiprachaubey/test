import React from 'react'
import './Services.css'
import Heartemoji from "../images/heartemoji.png";
import Glasses from "../images/glassesimoji.png";
import Card from '../Components/Card/Card';
import Resume from "./resume.pdf"


const Services = () => {
  return (
   <div className="services">

    {/* left side */}
    <div className="awesome">
      <span>My Awesome</span>
      <span>Services</span>
      <span>
        Loreum ispum is simply dummy text of printing of printing Lorem
     <br />
     ispum is simply dummy text of printing</span>
     <a href ={Resume} download>
     <button  className="button s-button">Download CV</button></a>
     <div className="blur s-blurl" style={{ background: "#ABF1FF94"}}></div>
    </div>

    {/* right side */}
      <div className="cards">
      
       <div style={{left: '10rem'}}>
        <card
          emoji = {Heartemoji}
          heading = {'Design'}
          detail =  {"Figma, Sketch, Photoshop, Adobe"}
        />
        </div>
                <div style ={{ top: "12rem", left: "-4rem"}}>
                  <Card
                  emoji= {Glasses}
                  heading = {"Developer"}
                  detail={"HTML,CSS, Javascript ,React" }
                  />
                </div>
                <div className=" blur s- blur2" style={{ background: "var(--purple)"}}></div>
       </div>

      </div>

  )
}

export default Services