import React, { useState, useEffect } from 'react';
import imageSrc from '../images/media/DeveloperMarioMoreno.png';
import instagramPubSrc from '../images/media/InstagramPub.png';
import './ImageComponent.css'; // Importa el archivo CSS específico para ImageComponent

function ImageComponent() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [imageSrc, instagramPubSrc];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000); // Cambia de imagen cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="image-component">
      <div className="image-carousel">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={index === 0 ? "Developer Mario Moreno" : "Instagram Publicidad"}
            className={`carousel-image ${index === currentImage ? 'active' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageComponent;