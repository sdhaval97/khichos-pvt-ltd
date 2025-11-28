const Header = () => {
  return (
    <header className="bg-seal-brown text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo-white.png"
            alt="KHiCHOS"
            className="h-12 md:h-16"
          />
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 md:gap-8">
          <a
            href="#"
            className="font-made-tommy font-medium hover:text-marigold transition-colors"
          >
            Home
          </a>
          {/* <a
            href="#"
            className="font-made-tommy font-medium hover:text-marigold transition-colors"
          >
            Our Story
          </a>
          <a
            href="#"
            className="font-made-tommy font-medium hover:text-marigold transition-colors"
          >
            Contact
          </a> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
