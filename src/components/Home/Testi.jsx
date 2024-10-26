import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


const Testi = () => {

  gsap.registerPlugin(ScrollTrigger);


  useEffect(() => {

    const testimonials = gsap.utils.toArray('.testimonial');

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
  }
  ,[])

  return (
    <div>
      {/* This is the fourth section */}
      <div className='bg-dark h-[85vh]'>
        <div className='flex flex-col justify-center items-center h-full'>
          <h2 className='text-light text-4xl mb-20'>Testimonials</h2>
          
          {/* Testimonial Section */}
          <div className='flex justify-center items-center flex-col gap-20'>
      <div className='flex items-center gap-10 testimonial'>
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

      <div className='flex items-center gap-10 testimonial'>
        {/* Testimonial Text */}
        <div className='text-light text-lg max-w-[500px] text-right'>
          <p>&quot;Attending the retreat was one of the best decisions I've ever made. It brought me closer to my brothers and deepened my spiritual connection. I left feeling refreshed and inspired.&quot;</p>
          <span className='block mt-4 text-sm font-bold'>- Brother B</span>
        </div>
        {/* Testimonial Image */}
        <img 
          src='public/people/pp2.jpg' 
          alt='Person 2' 
          className='w-[150px] h-[150px] object-cover rounded-full border-2 border-light'
        />
      </div>

      <div className='flex items-center gap-10 testimonial'>
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
    </div>
  )
}

export default Testi;