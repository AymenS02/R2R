import { useEffect } from 'react';
import { gsap } from 'gsap';

const Contact = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      '.Founders',
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 2.5, ease: 'sine.out', stagger: 0.6 }
    )
    .fromTo(
      '.Rulers',
      { x: 400, opacity: 0, ease: 'sine.out' },
      { x: 0, opacity: 1, duration: 2 }
    );

    return () => {
      tl.kill();
    };
  }, []);

  const handleEmailClick = () => {
    window.location.href = 'mailto:road2righteousness@gmail.com';
  };

  return (
    <div className="font-merriweather min-h-screen bg-black flex flex-col items-center py-12 px-4 pt-16">
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between m-12">
        <div className="w-full md:w-1/2 text-white p-6">
          <h1 className="Founders text-5xl font-bold mb-4">Hamza & Salman</h1>
          <p className="Founders text-2xl italic mb-6">Founders of Я2R</p>
          <p className="Founders text-lg mb-6">
            Hamza & Salman plan to bring brotherhood through Islam and guide the community on the path to righteousness. R2R is about creating a support system that uplifts each other through faith and togetherness.
          </p>
        </div>
        <div className="w-full md:w-1/3 flex justify-center items-center mt-8">
          <img
            src="/people/group.jpg"
            alt="Rulers"
            className="Rulers rounded-lg shadow-lg"
            style={{ width: '400px', height: '300px' }}
          />
        </div>
      </div>

      <div className="mt-20 w-full max-w-6xl sm:border-2 border-white rounded-lg">
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold text-white">Join the R2R Brotherhood - A Journey Together!</h2>
        </div>
        <div className="w-full max-w-6xl shadow-lg rounded-lg p-8">
          <div className="flex justify-center">
            <button
              onClick={handleEmailClick}
              className="bg-black text-white font-semibold border-2 border-white py-3 px-8 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none transition duration-300"
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20 w-full max-w-6xl">
        <div className="flex gap-6 md:justify-start justify-center">
          <img className="w-10" src="/ig.png" />
          <img className="w-10" src="/yt.png" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
