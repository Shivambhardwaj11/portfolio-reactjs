import React from 'react';
import bannerImage from '../assets/profile-banner.jpg';

const ImageBanner = () => {
  return (
    <div className="flex justify-center items-center mt-40 mb-[-140px] z-10 relative">
      <img
        src={bannerImage}
        alt="Profile"
        className="w-36 h-36   md:w-40 md:h-40 rounded-full object-cover shadow-xl ring-4 ring-primary transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

export default ImageBanner;



