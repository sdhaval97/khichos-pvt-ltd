import { useState } from 'react';
import SEO from '../components/SEO';
import packetFrontImage from '../assets/Khichos Packet Front.png';
import packetBackImage from '../assets/Khichos Packet Back.png';
import papadInPotImage from '../assets/papad-in-pot.png';

const Home = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <>
      <SEO
        title="KHiCHOS - India's First Ready-to-Eat Roasted Papad | Zero Oil, Just Crunch"
        description="Discover KHiCHOS, India's first ready-to-eat roasted papad. No cooking, no frying, no waiting. Made with rice flour, naturally gluten-free, and just 5 clean ingredients. Only ₹20 for 25g pack."
        keywords="ready to eat papad, roasted papad, khichos, gluten free papad, healthy papad, rice papad, no oil papad, indian snacks, ready to eat snacks, clean label snacks"
        canonicalUrl="/"
      />

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Welcome To Text */}
        <div className="mb-4 md:mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-christmas-sheep tracking-christmas text-seal-brown">
            welcome to
          </h1>
        </div>

        {/* 3D Rotating Packet */}
        <div className="relative" style={{ perspective: '1000px' }}>
          <div
            className="relative cursor-pointer"
            style={{
              transformStyle: 'preserve-3d',
              transition: 'transform 0.8s',
              transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
              width: 'fit-content'
            }}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Front Side */}
            <div
              style={{
                backfaceVisibility: 'hidden',
                position: isFlipped ? 'absolute' : 'relative',
                width: '100%',
                height: '100%'
              }}
            >
              <img
                src={packetFrontImage}
                alt="KHiCHOS Packet Front"
                className="w-48 sm:w-56 md:w-64 lg:w-80 h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Back Side */}
            <div
              style={{
                backfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)',
                position: isFlipped ? 'relative' : 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
            >
              <img
                src={packetBackImage}
                alt="KHiCHOS Packet Back"
                className="w-48 sm:w-56 md:w-64 lg:w-80 h-auto object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Down Arrow */}
        <button
          onClick={() => {
            const whySection = document.getElementById('why-khichos');
            if (whySection) {
              whySection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="absolute bottom-8 right-8 text-seal-brown hover:text-amber-900 transition-all transform hover:translate-y-2 animate-bounce cursor-pointer active:scale-95"
          aria-label="Scroll to Why Khichos section"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 md:h-12 md:w-12 pointer-events-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </section>

      {/* Why Khichos Section */}
      <section
        id="why-khichos"
        className="h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-20"
      >
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-christmas-sheep tracking-christmas text-seal-brown mb-6 md:mb-8">
          Why KHiCHOS?
        </h2>

        {/* Features Grid */}
        <div className="flex items-center justify-center gap-3 md:gap-4 lg:gap-6 max-w-6xl">
          {/* Left Column - 3 Features */}
          <div className="flex flex-col gap-2 md:gap-3 w-44 md:w-52">
            <div className="bg-seal-brown/20 backdrop-blur-sm rounded-xl px-3 py-2 md:px-4 md:py-3 min-h-[60px] flex flex-col justify-center">
              <h3 className="font-bold text-xs md:text-sm text-gray-900">ROASTED</h3>
              <p className="text-[10px] md:text-xs text-gray-800 leading-tight">Not fried · Not air fried</p>
            </div>
            <div className="bg-seal-brown/20 backdrop-blur-sm rounded-xl px-3 py-2 md:px-4 md:py-3 min-h-[60px] flex flex-col justify-center">
              <h3 className="font-bold text-xs md:text-sm text-gray-900">PINK SALT</h3>
              <p className="text-[10px] md:text-xs text-gray-800">No iodised salt</p>
            </div>
            <div className="bg-seal-brown/20 backdrop-blur-sm rounded-xl px-3 py-2 md:px-4 md:py-3 min-h-[60px] flex flex-col justify-center">
              <h3 className="font-bold text-xs md:text-sm text-gray-900">JUST RICE</h3>
              <p className="text-[10px] md:text-xs text-gray-800 leading-tight">Gluten free · Guilt free</p>
            </div>
          </div>

          {/* Center - Papad Pot Image */}
          <div className="flex items-center justify-center">
            <img
              src={papadInPotImage}
              alt="Papad Pot"
              className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain drop-shadow-2xl"
            />
          </div>

          {/* Right Column - 3 Features */}
          <div className="flex flex-col gap-2 md:gap-3 w-44 md:w-52">
            <div className="bg-seal-brown/20 backdrop-blur-sm rounded-xl px-3 py-2 md:px-4 md:py-3 min-h-[60px] flex flex-col justify-center">
              <h3 className="font-bold text-xs md:text-sm text-gray-900">ZERO CHOLESTEROL</h3>
              <p className="text-[10px] md:text-xs text-gray-800">You read it right</p>
            </div>
            <div className="bg-seal-brown/20 backdrop-blur-sm rounded-xl px-3 py-2 md:px-4 md:py-3 min-h-[60px] flex flex-col justify-center">
              <h3 className="font-bold text-xs md:text-sm text-gray-900">ZERO ADDED SUGAR</h3>
              <p className="text-[10px] md:text-xs text-gray-800 leading-tight">Just 0.3g total sugar per serve</p>
            </div>
            <div className="bg-seal-brown/20 backdrop-blur-sm rounded-xl px-3 py-2 md:px-4 md:py-3 min-h-[60px] flex flex-col justify-center">
              <h3 className="font-bold text-xs md:text-sm text-gray-900">UNBELIEVABLY LOW FAT</h3>
              <p className="text-[10px] md:text-xs text-gray-800 leading-tight">Only 0.3g fat per serve · Zero trans fat</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section
        id="story"
        className="h-screen flex flex-col items-center pt-24 px-4"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-christmas-sheep tracking-christmas text-seal-brown">
          Our Story
        </h2>
      </section>

      {/* Customer Support Section */}
      <section
        id="contact-customer"
        className="h-screen flex flex-col items-center pt-24 px-4"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-christmas-sheep tracking-christmas text-seal-brown">
          Customer Support
        </h2>
      </section>

      {/* Business Support Section */}
      <section
        id="contact-business"
        className="h-screen flex flex-col items-center pt-24 px-4"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-christmas-sheep tracking-christmas text-seal-brown">
          Grow With Us
        </h2>
      </section>

      {/* Location Section */}
      <section
        id="contact-location"
        className="h-screen flex flex-col items-center pt-24 px-4"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-christmas-sheep tracking-christmas text-seal-brown">
          Where We Are Located
        </h2>
      </section>

      {/* Disclaimers Section */}
      <section
        id="disclaimer"
        className="h-screen flex flex-col items-center pt-24 px-4"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-christmas-sheep tracking-christmas text-seal-brown">
          Disclaimers
        </h2>
      </section>

      {/* Final Conclusion Section */}
      <section className="h-screen flex flex-col items-center justify-center px-4">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-christmas-sheep tracking-christmas text-seal-brown text-center">
          Thank You!
        </h2>
      </section>
    </>
  );
};

export default Home;
