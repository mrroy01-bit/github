import React from 'react'
import figma from '../img/figma.svg'
import mercado from '../img/mercado-libre.svg'
import sap from '../img/sap.svg'
import spotify from '../img/spotify.svg'
import inforsys from '../img/infosys.svg'
import ford from '../img/ford.svg'
import newyork from '../img/newyorktimes.svg'
import vodafone from '../img/vodafone.svg'
function Slider() {
  return (
    <>
      <div className="Slide flex gap-5 mt-10 ">
        <div className="slide-item">
          <img src={figma} alt="" />
        </div>
        <div className="slide-item">
            <img src={mercado} alt="" />
        </div>
        <div className="slide-item">
            <img src={sap} alt="" />
        </div>
        <div className="slide-item">
            <img src={spotify} alt="" />
        </div>
        <div className="slide-item">
            <img src={inforsys} alt="" />
        </div>
        <div className="slide-item">
            <img src={ford} alt="" />
        </div>
        <div className="slide-item">
            <img src={newyork} alt="" />
        </div>
        <div className="slide-item">
            <img src={vodafone} alt="" />
        </div>
        
      </div>
    </>
  )
}

export default Slider
