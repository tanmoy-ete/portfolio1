import React from 'react'

export default function Media() {
  return (
    <div className='Media' id='media'>
      <div className="heading">
        <img src="media.png" alt="" />
        <h1>Media Coverage</h1>
      </div>
      <div className="media-container">
        <div className="media-container-one">
          <h3>SystemSage Solutions team receives BDT 2,00,000 for being first runner-up</h3>
          <p>SystemSage Solutions team receives BDT 2,00,000 for being first runner-up at Youth Innovation Summit 2025 in Rajshahi-Rangpur division.</p>
          <button className='public-button'>
            <a href="https://www.startupbangladesh.vc/anondopath-wins-the-youth-innovation-challenge/" target='_blank'>
              Read More
            </a>
          </button>
        </div>
        <div className="media-container-one">
          <h3>SystemSage Solutions team receives BDT 80,000 for being champion</h3>
          <p>SystemSage Solutions team receives BDT 80,000 for being champion in UIHP-University Innovation Hub Program, RUET in Rajshahi and Rangpur division.</p>
          <button className='public-button'>
            <a href="https://www.facebook.com/share/p/1EMEmjFuPD/" target='_blank'>
              Read More
            </a>
          </button>
        </div>
      </div>
    </div>
  )
}
