import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Scrolli = () => {

  const containerRef = useRef(null);


  gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {

    const images = gsap.utils.toArray('.scroll-image');

    gsap.to(images, {
      x: "100vw",
      ease: "linear",
      duration: 10, // Duration of one full cycle
      repeat: -1, // Infinite loop
      yoyo: true, // Repeat back to start
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0), // Creates the infinite looping effect
      },
    });
  }
  ,[])

  return (
    <div>
      <div className='bg-dark text-lime-50 h-[45vh] flex py-20'>
        <div className='m-0 p-0 relative flex w-[100vw] '>
          <div ref={containerRef} className=' justify-center w-[100vw] py-[10px] flex flex-nowrap gap-10 overflow-hidden'>
            <img src="public/people/pose.jpg" className="h-[400px] scroll-image border-2 border-black" alt="Logo" />
            <img src="public/people/Lpose.jpg" className=" h-[400px] scroll-image border-2 border-black"  alt="Logo" />
            <img src="public/people/beach.jpg" className=" h-[400px] scroll-image border-2 border-black" alt="Logo" />
            <img src="public/people/3man.jpg" className=" h-[400px] scroll-image border-2 border-black" alt="Logo" />
            <img src="public/people/playing.jpg" className="h-[400px] scroll-image border-2 border-black" alt="Logo" />
            <img src="public/hike.jpg" className=" h-[400px] scroll-image border-2 border-black" alt="Logo" />
            <img src="public/people/pose.jpg" className="h-[400px] scroll-image border-2 border-black" alt="Logo" />
            <img src="public/people/Lpose.jpg" className=" h-[400px] scroll-image border-2 border-black"  alt="Logo" />
            <img src="public/people/beach.jpg" className=" h-[400px] scroll-image border-2 border-black" alt="Logo" />
            <img src="public/people/3man.jpg" className=" h-[400px] scroll-image border-2 border-black" alt="Logo" />
            <img src="public/people/playing.jpg" className="h-[400px] scroll-image border-2 border-black" alt="Logo" />
            <img src="public/hike.jpg" className=" h-[400px] scroll-image border-2 border-black" alt="Logo" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scrolli;