// src/components/BannerScroll.jsx
import React, { useEffect, useState } from "react";

const BannerScroll = () => {
  // Array of banner images
  const banners = [
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Flovepik.com%2Fimage-401416682%2Freal-estate-poster-background.html&psig=AOvVaw3fTR2X-toiqlFskuulNzhr&ust=1725297890810000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNiugdGhoogDFQAAAAAdAAAAABAE",
    "https://via.placeholder.com/1200x400?text=Banner+2",
    "https://via.placeholder.com/1200x400?text=Banner+3",
    "https://via.placeholder.com/1200x400?text=Banner+4",
  ];

  const [currentBanner, setCurrentBanner] = useState(0);

  // Function to change banner every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
    }, 5000); // Change banner every 5000 milliseconds (5 seconds)

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [banners.length]);

  return (
    <div className="relative w-full h-64 overflow-hidden">
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentBanner ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={banner} alt={`Banner ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default BannerScroll;
