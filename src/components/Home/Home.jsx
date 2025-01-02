import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../App.css';

const Home = () => {
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  const textTitle = useRef(null);
  const point = useRef(null);

  
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const timeline = gsap.timeline();

    // Animate left and right images simultaneously
    timeline.fromTo(
      leftImgRef.current,
      { x: '-100vw', opacity: 0 },
      { x: '0%', opacity: 1, duration: 5.5, ease: 'power3.out' },
      0 // Start at the beginning of the timeline
    );

    timeline.fromTo(
      rightImgRef.current,
      { x: '100vw', opacity: 0 },
      { x: '0%', opacity: 1, duration: 5.5, ease: 'power3.out' },
      0 // Start at the beginning of the timeline (same time as leftImg)
    );

    // Animate textTitle after left and right images finish
    timeline.fromTo(
      textTitle.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 3.5, ease: 'power3.out' },
      '-=2' // Start right after the previous animations finish
    );

    // Animate the point one second after textTitle finishes
    timeline.fromTo(
      point.current,
      { y: 0, opacity: 0 },
      { 
        y: 60, 
        opacity: 1, 
        duration: 1.5, 
        ease: 'sine.out', 
        repeat: -1, 
      },
      '-=1' // Start 1 second after textTitle animation
    );

    const container = document.querySelector(".image-container");
    const containerWidth = container.scrollWidth; // Total width of the container
  
    // Duplicate the images to create a seamless infinite scroll
    gsap.to(container, {
      x: `-${containerWidth / 2}px`, // Animate to half of the container width
      duration: 20, // Adjust speed as needed
      repeat: -1, // Infinite repetition
      ease: "linear", // Smooth linear animation
      modifiers: {
        x: gsap.utils.wrap(-containerWidth, 0), // Wrap the animation seamlessly
      },
    });

    // Optional cleanup if animations need to stop when the component unmounts
    return () => {
      timeline.kill();
      gsap.killTweensOf(container);
    };
    
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
          <h2 ref={textTitle} className="text-light p-10 tracking-widest text-2xl hidden md:block" style={{ letterSpacing: '0.4em' }}>R O A D 2 R I G H T E O U S N E S S</h2> 
        </div>


        <div className='absolute bottom-[10vh] flex items-center justify-center flex-col'>
          <img src='/mouse.png' className="w-16 hidden md:block" alt="Mouse" />
          <img ref={point} src="/arrow.png" className="w-12 m-2" alt="Arrow" />
        </div>
      </div>

      {/* This is the second section */}
      <div className='bg-dark h-[100vh] flex flex-col md:flex-row justify-center items-center'>
        <div className='m-0 p-0 w-full md:w-[50vw] flex justify-center items-center'>
          <img 
            src="/people/sandLogo.jpg" 
            className="w-[250px] sm:w-[300px] md:w-[400px] lg:w-[500px] rounded-full md:rounded-lg shadow-lg mx-2" 
            alt="Sand" 
          />
        </div>

        <div className='m-0 p-0 w-full md:w-[50vw] flex justify-center items-center'>
          <div className='flex flex-col items-center'>
            <div className='bg-dark flex flex-col items-center rounded-lg shadow-md p-6 w-[90%] sm:w-[80%] md:w-[500px] lg:w-[600px]'>
              <h2 className="text-3xl text-white mb-4">Our Mission</h2>
              <p className="text-center text-gray-300 text-sm sm:text-base">
              At ЯIIR, we aim to awaken the desire already within you to do something meaningful. By hosting events and building a strong community, we&apos;re proving that our faith isn&apos;t in conflict with the modern West, but can thrive without compromise.</p>
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
      <div className="flex bg-dark text-lime-50 h-[45vh] py-20 mb-20">
        <div className="image-container flex space-x-4 overflow-hidden w-full">
          <img
            src="/people/pose.JPG"
            className="h-[400px] snap-center flex-shrink-0 border-2 border-black"
            alt="Pose"
          />
          <img
            src="/people/Lpose.JPG"
            className="h-[400px] snap-center flex-shrink-0 border-2 border-black"
            alt="Lpose"
          />
          <img
            src="/people/beach.JPG"
            className="h-[400px] snap-center flex-shrink-0 border-2 border-black"
            alt="Beach"
          />
          <img
            src="/people/3man.JPG"
            className="h-[400px] snap-center flex-shrink-0 border-2 border-black"
            alt="3man"
          />
          <img
            src="/people/playing.JPG"
            className="h-[400px] snap-center flex-shrink-0 border-2 border-black"
            alt="Playing"
          />
          <img
            src="/hike.JPG"
            className="h-[400px] snap-center flex-shrink-0 border-2 border-black"
            alt="Hike"
          />
        </div>
      </div>

      {/* This is the fourth section */}
      <div className='bg-dark min-h-[85vh]'>
        <h2 className='w-screen flex justify-center text-light text-4xl mb-20'>Testimonials</h2>

        {/* Testimonial Section */}
        <div className='flex justify-center items-center flex-col gap-20'>
          <div className='flex flex-col md:flex-row items-center gap-10'>
            {/* Testimonial Image */}
            <img
              src='/people/pp1.jpg' 
              alt='Person 1' 
              className='w-[150px] h-[150px] object-cover rounded-full border-2 border-light'
            />
            {/* Testimonial Text */}
            <div className='text-light text-lg max-w-[500px]'>
              <p>&quot;This retreat was a life-changing experience for me. The brotherhood, the spiritual growth, and the sense of community made it unforgettable.&quot;</p>
              <span className='block mt-4 text-sm font-bold'>- Brother Sami</span>
            </div>
          </div>

          <div className='flex flex-col md:flex-row items-center gap-10'>
            {/* Testimonial Image - First on mobile, last on desktop */}
            <img 
              src='/people/pp2.jpg' 
              alt='Person 2' 
              className='md:order-last w-[150px] h-[150px] object-cover rounded-full border-2 border-light'
            />
            {/* Testimonial Text */}
            <div className='text-light text-lg max-w-[500px] text-right'>
              <p>&quot;Attending the retreat was one of the best decisions I&apos;ve ever made. It brought me closer to my brothers and deepened my spiritual connection. I left feeling refreshed and inspired.&quot;</p>
              <span className='block mt-4 text-sm font-bold'>- Brother Shamas</span>
            </div>
          </div>

          <div className='flex flex-col md:flex-row items-center gap-10'>
            {/* Testimonial Image */}
            <img 
              src='/people/pp3.jpg' 
              alt='Person 3' 
              className='w-[150px] h-[150px] object-cover rounded-full border-2 border-light'
            />
            {/* Testimonial Text */}
            <div className='text-light text-lg max-w-[500px]'>
              <p>&quot;The retreat provided a perfect balance of reflection, camaraderie, and growth. It helped me find clarity and a sense of purpose. I’m grateful for the bond we built.&quot;</p>
              <span className='block mt-4 text-sm font-bold'>- Brother Zaheer</span>
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
