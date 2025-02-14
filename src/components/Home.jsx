import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import Carousel from './Carousel';

const Home = () => {
  const navigate = useNavigate();
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('popupShown')) {
      setTimeout(() => {
        setIsPopupVisible(true);
      }, 10000);
      localStorage.setItem('popupShown', 'true');
    }
  }, []);

  const closePoster = () => setIsPopupVisible(false);

  return (
    <div className="overflow-hidden font-merriweather mb-[6rem]">
      {isPopupVisible && (
        <div className="poster fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            className="bg-gray-800 border-2 border-white p-6 rounded-lg shadow-lg w-[90%] max-w-md relative"
          >
            <h1 className="text-white font-bold text-center pb-4 text-xl">Ummrah Trip 2025</h1>
            <button className="absolute top-0 right-2 text-white text-2xl" onClick={closePoster}>
              &times;
            </button>
            <img src="/ummrah1.jpg" alt="Sign Up Poster" className="w-full rounded-md mb-4 border border-white" />
            <button className="bg-blue-500 text-white font-bold px-4 py-2 rounded-lg w-full" onClick={() => navigate('/ummrah')}>
              Secure Your Place Now!
            </button>
          </motion.div>
        </div>
      )}

      <div className='flex bg-dark h-screen justify-center items-center flex-col'>
        <div className="flex justify-center items-center flex-col">
          <div className='flex'>
            <motion.img
              src="/leftLogo.png"
              className="text-5xl"
              alt="Logo"
              initial={{ x: '-100vw', opacity: 0 }}
              animate={{ x: '0%', opacity: 1 }}
              transition={{ duration: 5.5, ease: 'easeOut' }}
            />
            <motion.img
              src="/rightLogo.png"
              className="text-5xl"
              alt="Logo"
              initial={{ x: '100vw', opacity: 0 }}
              animate={{ x: '0%', opacity: 1 }}
              transition={{ duration: 5.5, ease: 'easeOut' }}
            />
          </div>
          <motion.h2
            className="text-light p-10 tracking-widest text-2xl hidden md:block"
            style={{ letterSpacing: '0.4em' }}
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 3.5, ease: 'easeOut', delay: 3 }}
          >
            R O A D 2 R I G H T E O U S N E S S
          </motion.h2>
        </div>
        <div className='absolute bottom-[10vh] flex items-center justify-center flex-col'>
          <img src='/mouse.png' className="w-16 hidden md:block" alt="Mouse" />
          <motion.img
            src="/arrow.png"
            className="w-12 m-2"
            initial={{ y: 0, opacity: 0 }}
            animate={{ y: 60, opacity: 1 }}
            transition={{ duration: 1.5, ease: 'easeOut', repeat: Infinity, repeatType: 'reverse' }}
            alt="Arrow"
          />
        </div>
      </div>


      <Carousel />




      <div className="bg-dark min-h-[85vh] mt-[150px]">
        <motion.h2
          className="w-screen flex justify-center text-light text-4xl mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          Testimonials
        </motion.h2>

        {/* Testimonial Section */}
        <div className="flex justify-center items-center flex-col gap-20">
          <motion.div
            className="flex flex-col md:flex-row items-center gap-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Testimonial Image */}
            <motion.img
              src="/people/pp1.jpg"
              alt="Person 1"
              className="w-[150px] h-[150px] object-cover rounded-full border-2 border-light"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true, amount: 0.2 }}
            />
            {/* Testimonial Text */}
            <div className="text-light text-lg max-w-[500px]">
              <p>
                &quot;This retreat was a life-changing experience for me. The brotherhood, the spiritual growth, and the sense of community made it unforgettable.&quot;
              </p>
              <span className="block mt-4 text-sm font-bold">- Brother Sami (Age: 21)</span>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row items-center gap-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Testimonial Image - First on mobile, last on desktop */}
            <motion.img
              src="/people/pp2.jpg"
              alt="Person 2"
              className="md:order-last w-[150px] h-[150px] object-cover rounded-full border-2 border-light"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true, amount: 0.2 }}
            />
            {/* Testimonial Text */}
            <div className="text-light text-lg max-w-[500px] text-right">
              <p>
                &quot;Attending the retreat was one of the best decisions I&apos;ve ever made. It brought me closer to my brothers and deepened my spiritual connection. I left feeling refreshed and inspired.&quot;
              </p>
              <span className="block mt-4 text-sm font-bold">- Brother Shamas (Age: 24)</span>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col md:flex-row items-center gap-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.9 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Testimonial Image */}
            <motion.img
              src="/people/pp3.jpg"
              alt="Person 3"
              className="w-[150px] h-[150px] object-cover rounded-full border-2 border-light"
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true, amount: 0.2 }}
            />
            {/* Testimonial Text */}
            <div className="text-light text-lg max-w-[500px]">
              <p>
                &quot;The retreat provided a perfect balance of reflection, camaraderie, and growth. It helped me find clarity and a sense of purpose. I’m grateful for the bond we built.&quot;
              </p>
              <span className="block mt-4 text-sm font-bold">- Brother Zaheer (Age: 18)</span>
            </div>
          </motion.div>

          <button
            className="bg-dark text-light p-2 mb-20 rounded-lg transition transform hover:scale-105 mt-10 border-light border-2"
            onClick={() => navigate('/contact')}
          >
            Contact Us
          </button>
        </div>
      </div>

    </div>
  );
};

export default Home;
