import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../App.css';

const Home = () => {
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  const textTitle = useRef(null);
  const point = useRef(null);
  const photoAbout = useRef(null);
  const textAbout = useRef(null);
  const images = gsap.utils.toArray('.scroll-image');
  const containerRef = useRef(null);
  const testimonials = gsap.utils.toArray('.testimonial');

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
        duration: 1.5,   // Duration of each down/up cycle
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

    testimonials.forEach((testimonial) => {
      gsap.fromTo(
        testimonial,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 3,
          ease: 'sine.in',
          scrollTrigger: {
            trigger: testimonial,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

  }, [images, testimonials]);

  return (
    <div className="overflow-hidden ">

      {/* This is the first section */}
      <div className='flex bg-dark h-screen justify-center items-center flex-col'>
        <div className="flex justify-center items-center flex-col">
          <div className='flex'>
            <img ref={leftImgRef} src="public/leftLogo.png" className="text-5xl" alt="Logo" />
            <img ref={rightImgRef} src="public/rightLogo.png" className="text-5xl" alt="Logo" />
          </div>
          <h2 ref={textTitle} className="text-light p-10 tracking-widest text-2xl hidden md:block" style={{ letterSpacing: '0.4em' }}>R O A D 2 R I G H T E O U S N E S S</h2> 
        </div>


        <div className='absolute bottom-[10vh] flex items-center justify-center flex-col'>
          <img src='public/mouse.png' className="w-16 hidden md:block" alt="Mouse" />
          <img ref={point} src="public/arrow.png" className="w-12 m-2" alt="Arrow" />
        </div>
      </div>

      {/* This is the second section */}
      <div className='bg-dark h-[100vh] flex flex-col md:flex-row justify-center items-center'>
        <div className='m-0 p-0 w-full md:w-[50vw] flex justify-center items-center'>
          <img 
            ref={photoAbout} 
            src="public/people/sandLogo.jpg" 
            className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] rounded-full md:rounded-lg shadow-lg mx-2" 
            alt="Sand" 
          />
        </div>

        <div className='m-0 p-0 w-full md:w-[50vw] flex justify-center items-center'>
          <div ref={textAbout} className='flex flex-col items-center'>
            <div className='bg-dark flex flex-col items-center rounded-lg shadow-md p-6 w-[90%] sm:w-[80%] md:w-[500px] lg:w-[600px]'>
              <h2 className="text-3xl text-white mb-4">Our Mission</h2>
              <p className="text-center text-gray-300 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <button
              className="bg-dark text-light mt-4 p-2 w-[80%] sm:w-[60%] md:w-[200px] rounded-lg transition transform hover:scale-105 border-2 border-light"
              onClick={() => window.location.href = '/about'}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>



      {/* This is the third section */}
      <div className='flex bg-dark text-lime-50 h-[45vh] py-20'>
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

      {/* This is the fourth section */}
      <div className='bg-dark h-[85vh]'>
        <h2 className='w-screen flex justify-center text-light text-4xl mb-20'>Testimonials</h2>
          
        {/* Testimonial Section */}
        <div className='flex justify-center items-center flex-col gap-20'>
          <div className='flex items-center gap-10'>
            {/* Testimonial Image */}
            <img
              src='public/people/pp1.jpg' 
              alt='Person 1' 
              className='w-[150px] h-[150px] object-cover rounded-full border-2 border-light'
            />
            {/* Testimonial Text */}
            <div className='text-light text-lg max-w-[500px]'>
              <p>&quot;This retreat was a life-changing experience for me. The brotherhood, the spiritual growth, and the sense of community made it unforgettable.&quot;</p>
              <span className='block mt-4 text-sm font-bold'>- Brother A</span>
            </div>
          </div>

          <div className='flex items-center gap-10'>
            {/* Testimonial Text */}
            <div className='text-light text-lg max-w-[500px] text-right'>
              <p>&quot;Attending the retreat was one of the best decisions I&apos;ve ever made. It brought me closer to my brothers and deepened my spiritual connection. I left feeling refreshed and inspired.&quot;</p>
              <span className='block mt-4 text-sm font-bold'>- Brother B</span>
            </div>
            {/* Testimonial Image */}
            <img 
              src='public/people/pp2.jpg' 
              alt='Person 2' 
              className='w-[150px] h-[150px] object-cover rounded-full border-2 border-light'
            />
          </div>

          <div className='flex items-center gap-10'>
            {/* Testimonial Image */}
            <img 
              src='public/people/pp3.jpg' 
              alt='Person 3' 
              className='w-[150px] h-[150px] object-cover rounded-full border-2 border-light'
            />
            {/* Testimonial Text */}
            <div className='text-light text-lg max-w-[500px]'>
              <p>&quot;The retreat provided a perfect balance of reflection, camaraderie, and growth. It helped me find clarity and a sense of purpose. I’m grateful for the bond we built.&quot;</p>
              <span className='block mt-4 text-sm font-bold'>- Brother C</span>
            </div>
          </div>

          <button 
            className='bg-dark text-light p-2 rounded-lg transition transform hover:scale-105 mt-10 border-light border-2' 
            onClick={() => window.location.href = '/contact'}>
            Contact Us
          </button>

        </div>
      </div>
    </div>
  );
};

export default Home;
