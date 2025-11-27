import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-seal-brown text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo-white.png"
            alt="KHiCHOS"
            className="h-12 md:h-16"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex gap-6 md:gap-8">
          <Link
            to="/"
            className="font-made-tommy font-medium hover:text-marigold transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="font-made-tommy font-medium hover:text-marigold transition-colors"
          >
            Our Story
          </Link>
          <Link
            to="/contact"
            className="font-made-tommy font-medium hover:text-marigold transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
