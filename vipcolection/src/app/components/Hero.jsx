import React from 'react';

const Hero = () => {
  return (
    <div className='w-full py-16 relative '>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 relative z-1'>
      </div>
      <video className='w-full h-90 object-cover absolute top-0 left-0 z-0' src='/videos/bgvideo.mp4' autoPlay loop muted controlsList="nodownload nodisplayfullscreen"></video>
    </div>
  );
}
export default Hero;