import { useState, useEffect } from 'react';

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const images = [
    { src: "gallery1.jpg", alt: "Survey and conversation with farmers" },
    { src: "gallery2.jpg", alt: "Collaboration with BARI" },
    { src: "gallery3.jpg", alt: "Collaboration with farmers" },
    { src: "gallery5.jpg", alt: "Handover first agro monitoring system to BARI" },
    { src: "gallery6.jpg", alt: "Team SsytemSage" },
    { src: "gallery7.jpg", alt: "1st Runners-up in Youth Startup Summit 2025" },
    { src: "gallery8.jpg", alt: "Youth Startup Summit 2025" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="gallery" className="gallery-section">
      <div className="gallery-container">
        <div 
          className="gallery-slider"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div key={index} className="slide">
              <img 
                src={img.src} 
                alt={img.alt}
                className="gallery-image" 
              />
              <div className="image-caption">{img.alt}</div>
            </div>
          ))}
        </div>
        
        {/* Navigation dots */}
        <div className="gallery-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;