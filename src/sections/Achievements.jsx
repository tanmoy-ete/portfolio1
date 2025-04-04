import React from "react"

export default function Awards() {
    return (
      <div className="Awards" id="achievements">
        <div className="heading">
          <img src="achievements.png" alt="user" />
          <h1>Achievements</h1>
        </div>
        <div className="achievements-container">
          <div className="achievements-container-one">
            <h3>Champion – UIHP RUET IC3 (World Bank & ICT Ministry, Bangladesh) (2024)</h3>
            <p>Led SystemSage Solutions through a three-month entrepreneurship training program, securing $1,000USD in pre-seed funding by winning the competitive startup challenge.</p>
          </div>
          <div className="achievements-container-one">
            <h3>1st Runner-Up – Youth Startup Summit (Bangladesh, 2025)</h3>
            <p>Represented and led the team, delivering a compelling pitch to top venture capitalists, successfullysecuring $2,000 USD in funding for the startup.</p>
          </div>
          <div className="achievements-container-one">
            <h3>3rd Place – Agri-Mechanization Idea Competition (RUET & BARI, 2024)</h3>
            <p>Recognized for innovative contributions to agricultural mechanization and sustainable technologysolutions.</p>
          </div>
          <div className="achievements-container-one">
            <h3>1st Runner-Up – Astro Science Fair (Rajshahi Regional, 2024)</h3>
            <p>Achieved distinction in a regional competition focused on scientific research and innovation.</p>
          </div>
        </div>
      </div>
    )
  }