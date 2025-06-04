import { Link } from "react-router-dom";

function Nav() {
  return (
    <header className="sticky top-0 z-1   bg-opacity-80 backdrop-blur-md">
  <nav className="container mx-auto  w-full flex pt-4 pb-3 justify-evenly items-center  ">
        <Link
          to="/"
          className="font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-xl"
        >
          Jitendra Singh Bhandari
        </Link>

        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-red-500 duration-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-red-500 duration-500">
              About_us
            </Link>
          </li>
          <li>
            <Link to="/services" className="text-white hover:text-red-500 duration-500">
              Service
            </Link>
          </li>
          <li>
            <Link to="/projects" className="text-white hover:text-red-500 duration-500">
              Project
            </Link>
          </li>
          <li>
            <Link to="/team" className="text-white hover:text-red-500 duration-500">
              Team
            </Link>
          </li>
          <li>
            <Link to="/testimonials" className="text-white hover:text-red-500 duration-500">
              Testimonials
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-red-500 duration-500">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
