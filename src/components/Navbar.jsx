import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 z-999 w-full bg-dark text-white p-4 shadow-lg border-b-2 border-light">
      <div className="flex justify-between items-center w-full px-4">
        <img src='public/logo.png' className="w-10" alt="Logo" />
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
