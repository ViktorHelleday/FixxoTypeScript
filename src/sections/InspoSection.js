import React from 'react'
import pamelaImg from '../assets/images/pamelaReif.png'
import letsBeImg from '../assets/images/letsBe.png'

const InspoSection = () => {
  return (
    <section className="inspo">
      <div className="container">
        <article className="pamelaLeft">
          <img className="imgLeft" src={pamelaImg} alt="Pamela Reif" />
          <h1>Pamela Reifs</h1>
          <p>Top Picks</p>
          <button type="button" className="btn-Pam">
            <div className="corner-left"></div>
            SHOP NOW
            <div className="corner-right"></div>
          </button>
        </article>
        <article className="letsBeRight">
          <img className="imgRight" src={letsBeImg} alt="Lets be" />
          <h1>Let's Be</h1>
          <p>Concious</p>
          <button type="button" className="btn-Con">
            <div className="corner-left"></div>
            FLASH SALE
            <div className="corner-right"></div>
          </button>
        </article>
      </div>
    </section>
  )
}

export default InspoSection