import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../App.css';
import Testi from './Testi';
import Scrolli from './Scroll';
import { Scroll } from '@react-three/drei';

const Home = () => {
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  const textTitle = useRef(null);
  const point = useRef(null);
  const photoAbout = useRef(null);
  const textAbout = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  
  useEffect(() => {

    gsap.fromTo(leftImgRef.current, 
      { x: '-100vw', opacity: 0 }, 
      { x: '0%', opacity: 1, duration: 5.5, ease: 'power3.out' } 
    );

    gsap.fromTo(rightImgRef.current, 
      { x: '100vw', opacity: 0 }, 
      { x: '0%', opacity: 1, duration: 5.5, ease: 'power3.out' } 
    );

    gsap.fromTo(textTitle.current, 
      { y: 80, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 3.5, delay: 3.5, ease: 'power3.out' } 
    );

    gsap.fromTo(point.current, 
      { y: 0, opacity: 0 }, // Starting state
      { 
        y: 60,           // Move down by 60px
        opacity: 1,      // Fade out
        duration: 1.0,   // Duration of each down/up cycle
        ease: 'sine.out', // Smooth motion
        repeat: -1,      // Repeat infinitely
        delay: 4.5,      // Start after a 4.5 second delay
      }
    );
    
    gsap.fromTo(photoAbout.current, 
      { x: "-100vw"}, 
      { 
      x: 0, 
      opacity: 1, 
      duration: 2.5, 
      ease: 'sine.out',
      scrollTrigger: {
        trigger: photoAbout.current,
        start: 'top 90%',
        end: 'top 30%',
        toggleActions: 'play none none none'
      }
      } 
    );

    gsap.fromTo(textAbout.current, 
      { x: "100vw"}, 
      { 
      x: 0, 
      opacity: 1, 
      duration: 2.5, 
      ease: 'sine.out',
      scrollTrigger: {
        trigger: photoAbout.current,
        start: 'top 90%',
        end: 'top 30%',
        toggleActions: 'play none none none'
      }
      } 
    );

  }, []);

  return (
    <div className="overflow-hidden ">

      {/* This is the first section */}
      <div className='flex bg-dark h-screen justify-center items-center flex-col'>
        <div className="flex justify-center items-center flex-col">
          <div className='flex'>
            <img ref={leftImgRef} src="public/leftLogo.png" className="text-5xl" alt="Logo" />
            <img ref={rightImgRef} src="public/rightLogo.png" className="text-5xl" alt="Logo" />
          </div>
          <h2 ref={textTitle} className="text-light p-10 tracking-widest text-2xl" style={{ letterSpacing: '0.4em' }}>R O A D 2 R I G H T E O U S N E S S</h2> 
        </div>


        <div className='absolute bottom-[10vh] flex items-center justify-center flex-col'>
          <img src='public/mouse.png' className="w-16" alt="Mouse" />
          <img ref={point} src="public/arrow.png" className="w-12 m-2" alt="Arrow" />
        </div>
      </div>

      {/* This is the second section */}
      <div className='bg-dark h-[100vh] flex justify-center items-center'>
        <div className='flex justify-center items-center'>


          <div className='m-0 p-0 w-[50vw] flex justify-center items-center'>
            <img ref={photoAbout} src="public/people/sandLogo.jpg" className="xl:w-[600px] xl:rounded-lg w-[400px] rounded-full mx-2 shadow-lg" alt="Sand" />
          </div>



          <div className='m-0 p-0 w-[50vw] flex justify-center items-center'>
            <div ref={textAbout} className='flex flex-col items-center'>
              <div className='bg-dark flex flex-col items-center rounded-lg shadow-md p-8 w-[800px] lg:w-[500px]'>
                <h2 className="text-3xl text-white mb-4">Our Mission</h2>
                <p className="text-center text-gray-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </p>
              </div>
              <button
                className="bg-dark text-light mt-4 p-2 w-[400px] lg:w-[200px] rounded-lg transition transform hover:scale-105 border-2 border-light"
                onClick={() => window.location.href = '/about'}
              >
                Learn More
              </button>
            </div>
          </div>


        </div>
      </div>



      {/* This is the third section */}
      <Scrolli />

      {/* This is the fourth section */}
      <Testi />

    </div>
  );
};

export default Home;
