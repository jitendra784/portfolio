import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; 

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-neutral-900 bg-opacity-80 backdrop-blur-md">
      <nav className="container mx-auto w-full flex justify-between items-center px-4 py-3">
        <Link
          to="/"
          className="font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-xl"
        >
          Jitendra Singh Bhandari
        </Link>

       
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className={`md:flex space-x-6 md:space-x-6 md:static absolute top-16 left-0 w-full md:w-auto bg-neutral-900 md:bg-transparent md:flex-row flex-col items-center text-left transition-all duration-300 ease-in-out ${isOpen ? 'flex' : 'hidden'}`}>
          {[
            { name: "Home", to: "/" },
            { name: "About Me", to: "/about" },
            { name: "Service", to: "/services" },
            { name: "Project", to: "/projects" },
            { name: "Team", to: "/team" },
            { name: "Testimonials", to: "/testimonials" },
            { name: "Contact", to: "/contact" },
          ].map((link) => (
            <li key={link.name} className="py-2 md:py-0">
              <Link
                to={link.to}
                className="text-white hover:text-red-500 duration-300"
                onClick={() => setIsOpen(false)} 
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
