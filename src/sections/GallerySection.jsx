import { useState, useEffect } from 'react';

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  
  const images = [
    { src: "gallery1.jpg", alt: "Survey and conversation with farmers" },
    { src: "gallery2.jpg", alt: "Collaboration with BARI" },
    { src: "gallery3.jpg", alt: "Collaboration with farmers" },
    { src: "gallery5.jpg", alt: "Handover first agro monitoring system to BARI" },
    { src: "gallery6.jpg", alt: "Team SystemSage" },
    { src: "gallery7.jpg", alt: "1st Runners-up in Youth Startup Summit 2025" },
    { src: "gallery8.jpg", alt: "Youth Startup Summit 2025" },
  ];

  // Auto-slide every 5 seconds when not paused
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length, isPaused]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section id="gallery" className="gallery-section">
      <div 
        className="gallery-container"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Navigation arrows */}
        <button className="gallery-arrow left-arrow" onClick={goToPrevious}>
          &#10094;
        </button>
        
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
                loading="lazy"
              />
              <div className="image-caption">
                <h3>{img.alt}</h3>
                <span>{index + 1} / {images.length}</span>
              </div>
            </div>
          ))}
        </div>
        
        <button className="gallery-arrow right-arrow" onClick={goToNext}>
          &#10095;
        </button>
        
        {/* Navigation dots */}
        <div className="gallery-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;