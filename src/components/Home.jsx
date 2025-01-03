import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Home = () => {
  const navigate = useNavigate();

  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  const textTitle = useRef(null);
  const point = useRef(null);
  const [isPopupVisible, setIsPopupVisible] = useState(false);


  
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    if (!localStorage.getItem('popupShown')) {
      // Show the pop-up after 10 seconds
      setTimeout(() => {
        setIsPopupVisible(true);
        gsap.fromTo('.popup', { opacity: 0 }, { opacity: 1, duration: 1 });
      }, 10000);

      // Mark the pop-up as shown in localStorage
      localStorage.setItem('popupShown', 'true');
    }

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

  const closePoster = () => {
    gsap.to(".poster", {
      opacity: 0,
      scale: 0.5,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => setIsPopupVisible(false),
    });
  };
  return (
    <div className="overflow-hidden font-merriweather">

      <div className="relative">

        {isPopupVisible  && (
          <div className="poster fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-800 border-2 border-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative">
              <h1 className="text-white font-bold text-center pb-4 text-xl">Ummrah Trip 2025</h1>
              <button
                className="absolute top-0 right-2 text-white text-2xl"
                onClick={closePoster}
              >
                &times;
              </button>
              <img
                src="/ummrah1.jpg"
                alt="Sign Up Poster"
                className="w-full rounded-md mb-4 border border-white"
              />
              {/* <h2 className="text-2xl text-center font-bold mb-4">
                Sign Up Now
              </h2> */}
              <button
                className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg w-full"
                onClick={() => navigate('/ummrah')}
              >
                Secure Your Place Now!
              </button>
            </div>
          </div>
        )}
      </div>

      {/* This is the first section */}
      <div className='flex bg-dark h-screen justify-center items-center flex-col'>
        <div className="flex justify-center items-center flex-col">
          <div className='flex'>
            <img ref={leftImgRef} src="/leftLogo.png" className="text-5xl" alt="Logo" />
            <img ref={rightImgRef} src="/rightLogo.png" className="text-5xl" alt="Logo" />
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
              onClick={() => navigate('/about')}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>


      {/* This is the third section */}
      <div className="flex bg-dark mb-20 box-border border-4 border-blue-500 p-0 w-[100vw] h-[100vh] overflow-hidden">
        <div className='container'>
          <div className='indicator'></div>
          <div className='gallery'>
            <div className='gallery-item'>
              <img src='/people/pose.JPG' alt='Person 1' />
            </div>
            <div className='gallery-item'>
              <img src='/people/Lpose.JPG' alt='Person 1' />
            </div>
            <div className='gallery-item'>
              <img src='/people/beach.JPG' alt='Person 1' />
            </div>
            <div className='gallery-item'>
              <img src='/people/3man.JPG' alt='Person 1' />
            </div>
            <div className='gallery-item'>
              <img src='/people/playing.JPG' alt='Person 1' />
            </div>
            <div className='gallery-item'>
              <img src='/hike.JPG' alt='Person 1' />
            </div>
          </div>
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
            className='bg-dark text-light p-2 mb-20 rounded-lg transition transform hover:scale-105 mt-10 border-light border-2' 
            onClick={() => navigate('/contact')}>
            Contact Us
          </button>

        </div>
      </div>
    </div>
  );
};

export default Home;
