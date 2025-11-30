import { Link } from 'react-router-dom';
import { useState } from 'react';

const Header = () => {
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);

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

          {/* Contact Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setIsContactDropdownOpen(true)}
            onMouseLeave={() => setIsContactDropdownOpen(false)}
          >
            <button
              className="font-made-tommy font-medium hover:text-marigold transition-colors text-sm sm:text-base"
            >
              Contact
            </button>

            {/* Dropdown Menu */}
            {isContactDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl overflow-hidden min-w-[200px]">
                <Link
                  to="/contact?type=customer"
                  className="block px-6 py-3 text-seal-brown hover:bg-marigold hover:text-white transition-colors font-made-tommy text-sm sm:text-base"
                >
                  Customer Enquiry
                </Link>
                <Link
                  to="/contact?type=distributor"
                  className="block px-6 py-3 text-seal-brown hover:bg-marigold hover:text-white transition-colors font-made-tommy text-sm sm:text-base border-t border-gray-200"
                >
                  Partner With Us
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
