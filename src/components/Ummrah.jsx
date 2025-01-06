
export default function Ummrah() {

  const handleEmailClick = () => {
    window.location.href = 'mailto:road2righteousness@gmail.com';
  };

  return (
    <div className="mt-[6rem] md:m-[6rem] text-center font-merriweather mb-[6">
      <h1 className="text-[40px] p-2">Reserve Your Place Today!</h1>
      <h1 className="text-green-200 text-md p-2">Early bird prices end on 16th January 2025.</h1>
      
      <hr className="w-[80vw] mx-auto" />

      <div className="flex flex-col bg-green-800 justify-center gap-2 items-center border-2 border-white rounded-2xl m-[4vw]">
        <h2 className="p-4">*Full package including flights from Canada, Visa, Hotels & ground transfers </h2>
        <div className="flex gap-4">
          <img
            className="w-[100px] md:w-[400px] border-2 border-black rounded-2xl cursor-pointer"
            src="/ummrah1.jpg"
            alt="Ummrah Poster"
            onClick={() => window.open('public/ummrah1.jpg', '_blank')}
          />
          <img
            className="w-[100px] md:w-[400px] border-2 border-black rounded-2xl cursor-pointer"
            src="/ummrah2.jpg"
            alt="Ummrah Poster"
            onClick={() => window.open('public/ummrah2.jpg', '_blank')}
          />
        </div>

      <div className="relative w-64 bg-gradient-to-b from-green-600 to-green-800 border-white border rounded-lg p-6 text-white m-10">

        {/* Early Bird Tag */}
        <div className="absolute top-0 right-0 bg-black text-white text-sm py-1 px-3 rounded-tr-lg rounded-bl-lg">
          EARLY BIRD
        </div>

        {/* Pricing Section */}
        <div className="space-y-1 mb-2">
          <div className="flex gap-2 items-center mt-2">
            <span className="line-through">$3700</span>
            <span className="text-xl font-bold">$3500</span>
          </div>
          <div className="text-sm mb-4">
            SHARING WITH 3 OTHER PEOPLE
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-3 mb-6 border-t border-t-white">
          <div className="flex items-center gap-2 mt-2">
            <svg className="w-4 h-4 text-white border-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>Flights</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-white border-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>Visas</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-white border-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>Hotels - Quad sharing</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-white border-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
            </svg>
            <span>Ground transfers</span>
          </div>
        </div>

        {/* Book Now Button */}
        <button 
        onClick={handleEmailClick}
        className="w-full py-2 px-4 bg-green200 bg-green-200  text-black rounded-md hover:bg-green-400 transition-colors">
          CONTACT US
        </button>
      </div>

      </div>

    </div>
  )
}
