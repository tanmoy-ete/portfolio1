import React from 'react'

export default function Publications() {
  return (
    <div className='Publications' id='publications'>
      <div className="heading">
        <img src="publications.png" alt="user" />
        <h1>Publications</h1>
      </div>
      <div className="publications-container">
        <div className="publications-container-one">
          <h3>An IoT-based smart farming solution for sustainable agriculture: integrating AI, cloud computing, and 4G communication for enhanced productivity</h3>
          <h4>IEEE Xplore · Mar 6, 2025</h4>
          <p>This paper presents a comprehensive smart farming solution designed to address the limitations of current systems and the practical needs of modern farmers. Leveraging cutting-edge technologies such as the Internet of Things (IoT), artificial intelligence (AI), and cloud computing, our solution aims to improve agricultural productivity and sustainability. By integrating industrial-grade sensors with a user-friendly software platform, our system facilitates transparent monitoring and control of agricultural conditions at various scales, while also providing tools for efficient farm finance management. The star topology architecture, combined with 4G network communication, ensures system reliability and efficient data transmission. AI integration provides insights and actionable recommendations, allowing farmers to effectively optimize crop yields and resource utilization. Our approach addresses significant shortcomings observed in existing smart agriculture projects, such as outdated communication technology, limited scalability, and inadequate user interfaces for data management. By integrating solar power to power the system and emphasizing user-centric design, our solution promotes environmental sustainability and operational efficiency.</p>
          <button className='public-button'>
            <a href="https://ieeexplore.ieee.org/abstract/document/10915971" target='_blank'>Read More</a>
          </button>
        </div>
      </div>
    </div>
  )
}
