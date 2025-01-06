import { useEffect, useRef } from 'react';
import { gsap } from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';

const Carousel = () => {
  const containerRef = useRef(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    const imageWidth = slider.children[0].offsetWidth;
    const totalWidth = imageWidth * slider.children.length;
    
    // Clone the images for seamless infinite scroll
    const images = [...slider.children];
    images.forEach(img => {
      const clone = img.cloneNode(true);
      slider.appendChild(clone);
    });

    // Set initial position
    gsap.set(slider, {
      x: 0
    });

    // Create the infinite animation
    const animation = gsap.to(slider, {
      x: -totalWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
      paused: true
    });

    // Start animation
    animation.play();

    // Pause on hover
    slider.addEventListener('mouseenter', () => animation.pause());
    slider.addEventListener('mouseleave', () => animation.play());

    // Cleanup
    return () => {
      animation.kill();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full bg-dark mb-20 overflow-hidden"
    >
      <div 
        ref={sliderRef}
        className="flex space-x-4"
      >
        <img
          src="/api/placeholder/400/400"
          className="h-[400px] flex-shrink-0 border-2 border-black"
          alt="Pose"
        />
        <img
          src="/api/placeholder/400/400"
          className="h-[400px] flex-shrink-0 border-2 border-black"
          alt="Lpose"
        />
        <img
          src="/api/placeholder/400/400"
          className="h-[400px] flex-shrink-0 border-2 border-black"
          alt="Beach"
        />
        <img
          src="/api/placeholder/400/400"
          className="h-[400px] flex-shrink-0 border-2 border-black"
          alt="3man"
        />
        <img
          src="/api/placeholder/400/400"
          className="h-[400px] flex-shrink-0 border-2 border-black"
          alt="Playing"
        />
        <img
          src="/api/placeholder/400/400"
          className="h-[400px] flex-shrink-0 border-2 border-black"
          alt="Hike"
        />
      </div>
    </div>
  );
};

export default Carousel;