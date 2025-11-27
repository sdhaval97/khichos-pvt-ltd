import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-seal-brown text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Tagline */}
          <div>
            <img
              src="/logo-white.png"
              alt="KHiCHOS"
              className="h-12 mb-4"
            />
            <p className="text-sm text-gray-300">
              India's First Ready-to-Eat Roasted Papad
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-christmas-sheep text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm hover:text-marigold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-marigold transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-marigold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-christmas-sheep text-xl mb-4">Get in Touch</h3>
            <p className="text-sm text-gray-300">
              Have questions? We'd love to hear from you.
            </p>
            <Link
              to="/contact"
              className="inline-block mt-4 bg-marigold text-seal-brown px-6 py-2 rounded font-medium hover:bg-yellow-500 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} KHiCHOS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
