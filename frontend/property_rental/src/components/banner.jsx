import React, { useState, useEffect, useRef } from "react";
import "./Banner.css";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const carouselRef = useRef(null);
  const totalImages = 4; // Update this based on the number of images

  useEffect(() => {
    let interval;
    if (isHovered) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex < totalImages - 1 ? prevIndex + 1 : 0
        );
      }, 1500); // Adjust the time for smoother transitions
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovered]);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  }, [currentIndex]);

  return (
    <div className="carousel-container  overflow-hidden relative w-full  h-[100vh]" // Adjust the height to 50% of the viewport height
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  >

  <div className="carousel flex transition-transform duration-500 ease-in-out cursor-pointer " ref={carouselRef}>
    <img src="./images/landscape5.jpg" alt="Image 1" className="w-full h-full object-cover opacity-95" />
    <img src="./images/view2.jpg" alt="Image 2" className="w-full h-full object-cover opacity-95" />
    
    <img src="./images/view5.jpg" alt="Image 4" className="w-full h-full object-cover opacity-95" />
    <img src="./images/landscape6.jpg" alt="Image 4" className="w-full h-full object-cover opacity-95" />
  </div>
</div>
    
  );
};

export default Banner;
