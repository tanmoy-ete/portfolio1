import React from 'react'

export default function Projects() {
  return (
    <div className='Projects' id='projects'>
      <div className="heading">
            <img src="projects.png" alt="user" />
            <h1>Projects</h1>
      </div>
      <div className="project-container">
        <div className="project-container-one">
          <h3>Smart Farming System</h3>
          <p>SystemSage's smart farming system is an IoT-based solution integrating both software and hardware to monitor and automate agricultural processes. Utilizing ESP32, SIM7600, and Wi-Fi connectivity, it enables real-time data collection, remote control, and efficient resource management, enhancing productivity in remote farming areas.</p>
        </div>
        <div className="project-container-one">
          <h3>Smart Aquaculture System</h3>
          <p>SystemSage's Smart Aquaculture System is an IoT-powered solution combining hardware and software to monitor and automate fish farming operations. Using ESP32, sensors, and Wi-Fi/cellular connectivity, it enables real-time water quality monitoring, automated feeding, and remote management, ensuring optimal conditions for sustainable aquaculture.</p>
        </div>
        <div className="project-container-one">
          <h3>Mechanical Design Engineer – Team Crack Platoon (Formula Student Team)</h3>
          <p>
          Contributed to the research, design, and fabrication of high-performance student formula race cars as part of Bangladesh’s first Formula SAE team. Played a key role in the mechanical design process, focusing on vehicle dynamics, structural components, and CAD modeling. Collaborated with multidisciplinary teams to develop and test components for international competition, including Formula Bharat 2024, where the team proudly represented Bangladesh on a global motorsport engineering stage.</p>
        </div>
      </div>
    </div>
  )
}
