import { useState } from 'react';

const Header = () => {
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);

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

          {/* Navigation - Centered */}
          <nav className="flex gap-6 sm:gap-8 md:gap-12 absolute left-1/2 -translate-x-1/2">
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
        </div>
      </div>
    </header>
  );
};

export default Header;
