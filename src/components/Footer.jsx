const Footer = () => (
  <footer className="p-4 bg-dark border-t-2 border-t-light text-white py-6 grid grid-cols-1 md:grid-cols-2 text-sm">
    {/* Left Column (Social Media Links) */}
    <div className="flex flex-col items-start mb-4 md:mb-0">
      <div className="flex gap-4 mb-4 text-sm">
      <a href="https://www.instagram.com/theroad2righteousness?igsh=cmZjdjN4Y3N4aGZ4&utm_source=qr" target="_blank" rel="noopener noreferrer">
        <img className="w-8" src="/ig.png" alt="Instagram" />
      </a>
      <a href="https://youtube.com/@road2rightouesness?si=_JEdOx6w-D3M-z5J" target="_blank" rel="noopener noreferrer">
        <img className="w-8" src="/yt.png" alt="YouTube" />
      </a>
      <a href="https://www.tiktok.com/@theroad2righteousness?_t=ZM-8spPuIzukrd&_r=1" target="_blank" rel="noopener noreferrer">
        <img className="w-6" src="/tiktok.png" alt="TikTok" />
      </a>

      </div>
      <p className="text-sm mt-3">© 2025 Your Company. All rights reserved.</p>
    </div>

    {/* Right Column (Contact Info) */}
    <div className="flex flex-col items-start md:items-end gap-2">
      <p className="text-sm">Email: <a href="mailto:road2righteousness@gmail.com" className="text-blue-400 underline">road2righteousness@gmail.com</a></p>
      <p className="text-sm">WhatsApp: (905) 299-3902 for Br. Hamza</p>
      <p className="text-sm">WhatsApp: (249) 733-7489 for Br. Salman</p>
    </div>
  </footer>
);

export default Footer;
