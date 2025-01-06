
export default function Ummrah() {
  return (
    <div className="mt-[30vh] text-center font-merriweather">
      <h1 className="text-[40px] p-2">Reserve Your Place Today</h1>
      <h1 className="text-blue-200 text-md p-2">Early bird prices end on 16th January 2025.</h1>
      
      <hr className="w-[80vw] mx-auto" />

      <div className="flex flex-col bg-blue-200 justify-center items-center gap-20 border-2 border-white rounded-2xl m-[4vw]">
        <h2 className="p-4">Full package including flights from Canada, Visa, Hotels </h2>
        <div className="flex flex-col max-w-[250px] border-2 border-white rounded-2xl p-4">
          <h3>Quad Room</h3>
          <p>Price: $5000</p>
          <button>Book Now</button>
        </div>

        </div>
      <img className="w-20" src="public/ummrah1.jpg" alt="Ummrah Poster" />
    </div>
  )
}
