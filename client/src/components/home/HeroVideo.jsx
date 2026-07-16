import React from 'react';

const HeroVideo = () => {
  return (
    <div className="w-full">
      <div className="relative w-full h-[90vh] md:h-[105vh] overflow-hidden">
        {/* Video Background */}
        <iframe
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[120vh] min-w-[215vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-100 contrast-[1.05] saturate-[1.1] scale-105"
          src="https://www.youtube.com/embed/xJ05rWqlS8w?autoplay=1&mute=1&loop=1&playlist=xJ05rWqlS8w&start=10&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&vq=hd1080&hd=1"
          title="Background Animation"
          allow="autoplay; encrypted-media; picture-in-picture"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default HeroVideo;
