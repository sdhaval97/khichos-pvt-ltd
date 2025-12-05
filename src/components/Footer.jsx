const Footer = () => {
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
    <footer className="bg-seal-brown text-white py-6 md:py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {/* Logo & Tagline */}
          <div className="text-center sm:text-left">
            <img
              src="/logo-white.png"
              alt="KHiCHOS"
              className="h-10 md:h-12 mb-3 md:mb-4 mx-auto sm:mx-0"
            />
            <p className="text-xs md:text-sm text-gray-300">
              India's First Ready-to-Eat Roasted Papad
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-christmas-sheep tracking-christmas text-lg md:text-xl mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button onClick={scrollToTop} className="text-xs md:text-sm hover:text-marigold transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('about')} className="text-xs md:text-sm hover:text-marigold transition-colors">
                  About
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('story')} className="text-xs md:text-sm hover:text-marigold transition-colors">
                  Story
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-xs md:text-sm hover:text-marigold transition-colors">
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h3 className="font-christmas-sheep tracking-christmas text-lg md:text-xl mb-3 md:mb-4">Get in Touch</h3>
            <p className="text-xs md:text-sm text-gray-300">
              Have questions? We'd love to hear from you.
            </p>
            <button
              onClick={() => scrollToSection('contact')}
              className="inline-block mt-4 bg-marigold text-seal-brown px-6 py-2 rounded font-medium hover:bg-yellow-500 transition-colors text-sm"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-6 md:mt-8 pt-4 md:pt-6 text-center">
          <p className="text-xs md:text-sm text-gray-400 mb-3 md:mb-4 max-w-4xl mx-auto">
            <strong>Disclaimer:</strong> All content on this website — including product descriptions, nutritional claims, health benefits, and usage recommendations — is provided for informational purposes only and should not be considered as professional advice. We do not provide medical, nutritional, or legal guidance. Please consult appropriate professionals before making decisions based on information found here.
          </p>
          <p className="text-xs md:text-sm text-gray-400">
            &copy; {new Date().getFullYear()} KHiCHOS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
