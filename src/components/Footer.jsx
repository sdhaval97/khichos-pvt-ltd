import { Link } from 'react-router-dom';

const Footer = () => {
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
                <Link to="/" className="text-xs md:text-sm hover:text-marigold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/story" className="text-xs md:text-sm hover:text-marigold transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-xs md:text-sm hover:text-marigold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
            <h3 className="font-christmas-sheep tracking-christmas text-lg md:text-xl mb-3 md:mb-4">Get in Touch</h3>
            <p className="text-xs md:text-sm text-gray-300">
              Have questions? We'd love to hear from you.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-4 bg-marigold text-seal-brown px-6 py-2 rounded font-medium hover:bg-yellow-500 transition-colors text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-6 md:mt-8 pt-4 md:pt-6 text-center text-xs md:text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} KHiCHOS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
