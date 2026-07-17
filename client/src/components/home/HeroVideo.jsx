import React from 'react';

const HeroVideo = () => {
  return (
    <section className="w-full">
      <div className="relative w-full aspect-video md:aspect-auto md:h-[90vh] lg:h-[105vh] overflow-hidden bg-black">
        {/* Video Background */}
        <iframe
          className="absolute top-1/2 left-1/2 w-full h-full md:w-[100vw] md:h-[56.25vw] md:min-h-[120vh] md:min-w-[215vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-100 contrast-[1.05] saturate-[1.1] md:scale-105"
          src="https://www.youtube.com/embed/xJ05rWqlS8w?autoplay=1&mute=1&loop=1&playlist=xJ05rWqlS8w&controls=0&showinfo=0&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1&vq=hd2160&hd=1"
          title="Background Animation"
          allow="autoplay; encrypted-media; picture-in-picture"
          frameBorder="0"
        ></iframe>
      </div>
    </section>
  );
};

export default HeroVideo;
