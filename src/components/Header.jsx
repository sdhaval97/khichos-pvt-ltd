import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-seal-brown text-white py-3 md:py-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/logo-white.png"
              alt="KHiCHOS"
              className="h-10 sm:h-12 md:h-14 lg:h-16"
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex gap-4 sm:gap-6 md:gap-8">
          <Link
            to="/"
            className="font-made-tommy font-medium hover:text-marigold transition-colors text-sm sm:text-base"
          >
            Home
          </Link>
          <Link
            to="/story"
            className="font-made-tommy font-medium hover:text-marigold transition-colors text-sm sm:text-base"
          >
            Our Story
          </Link>
          <Link
            to="/contact"
            className="font-made-tommy font-medium hover:text-marigold transition-colors text-sm sm:text-base"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
