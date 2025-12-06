import { useState } from 'react';

const Header = () => {
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 120; // Increased offset to account for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header className="bg-seal-brown text-white py-3 md:py-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={scrollToTop} className="cursor-pointer">
              <img
                src="/logo-white.png"
                alt="KHiCHOS"
                className="h-10 sm:h-12 md:h-14 lg:h-16"
              />
            </button>
          </div>

          {/* Hamburger Menu Button - Mobile Only */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 z-50"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          {/* Navigation - Desktop Centered */}
          <nav className="hidden md:flex gap-6 md:gap-12 absolute left-1/2 -translate-x-1/2">
            <button
              onClick={scrollToTop}
              className="font-made-tommy font-medium hover:text-marigold transition-colors text-sm sm:text-base"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="font-made-tommy font-medium hover:text-marigold transition-colors text-sm sm:text-base"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('story')}
              className="font-made-tommy font-medium hover:text-marigold transition-colors text-sm sm:text-base"
            >
              Story
            </button>

            {/* Contact Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsContactDropdownOpen(true)}
              onMouseLeave={() => setIsContactDropdownOpen(false)}
            >
              <button
                onClick={() => scrollToSection('contact-customer')}
                className="font-made-tommy font-medium hover:text-marigold transition-colors text-sm sm:text-base"
              >
                Contact
              </button>

              {/* Dropdown Menu */}
              {isContactDropdownOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-1">
                  <div className="bg-white rounded-lg shadow-xl overflow-hidden min-w-[180px] whitespace-nowrap">
                    <button
                      onClick={() => { scrollToSection('contact-customer'); setIsContactDropdownOpen(false); }}
                      className="block w-full text-left px-5 py-2.5 text-seal-brown hover:bg-marigold hover:text-white transition-colors font-made-tommy text-sm"
                    >
                      Customer Support
                    </button>
                    <button
                      onClick={() => { scrollToSection('contact-business'); setIsContactDropdownOpen(false); }}
                      className="block w-full text-left px-5 py-2.5 text-seal-brown hover:bg-marigold hover:text-white transition-colors font-made-tommy text-sm border-t border-gray-200"
                    >
                      Business
                    </button>
                    <button
                      onClick={() => { scrollToSection('contact-location'); setIsContactDropdownOpen(false); }}
                      className="block w-full text-left px-5 py-2.5 text-seal-brown hover:bg-marigold hover:text-white transition-colors font-made-tommy text-sm border-t border-gray-200"
                    >
                      Location
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection('disclaimer')}
              className="font-made-tommy font-medium hover:text-marigold transition-colors text-sm sm:text-base"
            >
              Disclaimer
            </button>
          </nav>

          {/* Mobile Menu - Slides from top */}
          <div className={`md:hidden fixed top-0 right-0 w-full bg-seal-brown transform transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
            <nav className="flex flex-col pt-20 pb-8 px-8 space-y-4">
              <button
                onClick={() => { scrollToTop(); setIsMobileMenuOpen(false); }}
                className="font-made-tommy font-medium hover:text-marigold transition-colors text-lg text-left py-3 border-b border-gray-700"
              >
                Home
              </button>
              <button
                onClick={() => { scrollToSection('about'); setIsMobileMenuOpen(false); }}
                className="font-made-tommy font-medium hover:text-marigold transition-colors text-lg text-left py-3 border-b border-gray-700"
              >
                About
              </button>
              <button
                onClick={() => { scrollToSection('story'); setIsMobileMenuOpen(false); }}
                className="font-made-tommy font-medium hover:text-marigold transition-colors text-lg text-left py-3 border-b border-gray-700"
              >
                Story
              </button>

              {/* Contact Section with Sub-items */}
              <div className="border-b border-gray-700">
                <button
                  onClick={() => { scrollToSection('contact-customer'); setIsMobileMenuOpen(false); }}
                  className="font-made-tommy font-medium hover:text-marigold transition-colors text-lg text-left py-3 w-full"
                >
                  Contact
                </button>
                <div className="pl-4 pb-3 space-y-2">
                  <button
                    onClick={() => { scrollToSection('contact-customer'); setIsMobileMenuOpen(false); }}
                    className="block text-sm text-gray-300 hover:text-marigold transition-colors py-2"
                  >
                    Customer Support
                  </button>
                  <button
                    onClick={() => { scrollToSection('contact-business'); setIsMobileMenuOpen(false); }}
                    className="block text-sm text-gray-300 hover:text-marigold transition-colors py-2"
                  >
                    Business
                  </button>
                  <button
                    onClick={() => { scrollToSection('contact-location'); setIsMobileMenuOpen(false); }}
                    className="block text-sm text-gray-300 hover:text-marigold transition-colors py-2"
                  >
                    Location
                  </button>
                </div>
              </div>

              <button
                onClick={() => { scrollToSection('disclaimer'); setIsMobileMenuOpen(false); }}
                className="font-made-tommy font-medium hover:text-marigold transition-colors text-lg text-left py-3 border-b border-gray-700"
              >
                Disclaimer
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
