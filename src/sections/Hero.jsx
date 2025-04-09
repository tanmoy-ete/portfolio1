import React from "react"

export default function Hero() {
  return (
    <>


    <section id="home" className="hero">

      {/* Mobile-only image (hidden on desktop) */}
    <div className="mobile-only-image">
      <img 
        src="sabbir-remove.png" 
        alt="Portrait" 
      />
    </div>


      <div className="container">
        <div className="hero-content">
          <h6>THIS IS ME</h6>
          <h1>Sabbir Ahmed</h1>
          <p>
          Co-founder, COO & Lead Business Strategist of SystemSage Solutions
          </p>
          <div className="social-link">
            <a href="https://systemsage.tech/" target="_blank" > 
              <img src="website.png" alt="" />
            </a>
            <a href="https://facebook.com" target="_blank" >
              <img src="facebook.png" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/sabbir-ahamed-860653275/" target="_blank" >
              <img src="linkedin.png" alt="" />
            </a>
            <a href="#" target="_blank" >
              <img src="gmail.png" alt="" />
            </a>
          </div>
        </div>


        {/* Desktop-only image (hidden on mobile) */}
        <div className="image-container">
          <img 
            src="sabbir-remove.png" 
            alt="Portrait" 
            className="overflow-image"
          />
        </div>
      </div>
    </section>

    </>
  )
}