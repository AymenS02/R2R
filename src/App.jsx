import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Home from './components/Home.jsx';
import Ummrah from './components/Ummrah.jsx';
import Footer from './components/Footer.jsx';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ummrah" element={<Ummrah />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
