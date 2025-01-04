import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="font-merriweather fixed top-0 left-0 z-20 w-full bg-dark text-white p-4 shadow-lg border-b-2 border-light">
      <div className="flex justify-between items-center w-full px-4 py-2 text-sm md:text-lg">
        <img src='./logo.png' className="w-10 hidden sm:block" alt="Logo" />
        <ul className="flex md:space-x-4 space-x-2">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          <l1><Link to="/ummrah" className="bg-blue-600 border-2 rounded-md p-2 ml-2 hover:bg-black transition duration-300 ease-in-out">Secure Your Place</Link></l1>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
