import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import dadiImage from '../assets/Dadi Illustration 1.png';
import packetFrontImage from '../assets/Khichos Packet Front.png';
import packetBackImage from '../assets/Khichos Packet Back.png';
import papadBowlImage from '../assets/papad-bowl.png';
import papadStackImage from '../assets/papad-stack.png';
import papadInPotImage from '../assets/papad-in-pot.png';
import papadPiece1 from '../assets/images/papad-piece-1-removebg-preview.png';
import papadPiece2 from '../assets/images/papad-piece-2-removebg-preview.png';
import papadPiece3 from '../assets/images/papad-piece-3-removebg-preview.png';
import papadPiece4 from '../assets/images/papad-piece-4-removebg-preview.png';
import papadPiece5 from '../assets/images/papad-piece-5-removebg-preview.png';
import papadPiece6 from '../assets/images/papad-piece-6.png';
import customerSupportImage from '../assets/customer_support.png';
import partnerWithUsImage from '../assets/partner_with_us.png';
import patternImage1 from '../assets/pattern_image.png';
import patternImage2 from '../assets/pattern_image_2.png';

const Home = () => {
  const [showDadi, setShowDadi] = useState(false);
  const [modalMagnifierPosition, setModalMagnifierPosition] = useState({ x: 0, y: 0, cursorX: 0, cursorY: 0 });
  const [showModalMagnifier, setShowModalMagnifier] = useState(false);
  const [showFinalDadi, setShowFinalDadi] = useState(false);
  const [showSpeechBubble, setShowSpeechBubble] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showZoomModal, setShowZoomModal] = useState(false);
  const [modalFlipped, setModalFlipped] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show Dadi when scrolled past the hero section (roughly 100vh)
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight * 0.8; // 80% of viewport height

      // Show final Dadi CTA when in final section
      const finalSection = document.getElementById('final-cta');
      if (finalSection) {
        const rect = finalSection.getBoundingClientRect();
        const isInFinalSection = rect.top < window.innerHeight * 0.5 && rect.bottom > 0;

        if (isInFinalSection) {
          setShowDadi(false); // Hide small Dadi
          setShowScrollTop(true); // Show scroll to top button when Dadi is hidden
          if (!showFinalDadi) {
            setShowFinalDadi(true);
            // Show speech bubble after Dadi animation completes (1s)
            setTimeout(() => setShowSpeechBubble(true), 1000);
          }
        } else {
          // Show small Dadi when not in final section
          setShowDadi(scrollPosition > threshold);
          setShowScrollTop(false); // Hide scroll to top button when Dadi is visible
          setShowFinalDadi(false);
          setShowSpeechBubble(false);
        }
      } else {
        setShowDadi(scrollPosition > threshold);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showFinalDadi]);

  const handleModalMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setModalMagnifierPosition({ x, y, cursorX: e.clientX, cursorY: e.clientY, imgLeft: left, imgTop: top, imgWidth: width, imgHeight: height });
  };

  const scrollToNextSection = () => {
    const whySection = document.getElementById('why-khichos');
    if (whySection) {
      const headerOffset = 80;
      const elementPosition = whySection.getBoundingClientRect().top;
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
    <>
      <SEO
        title="KHiCHOS - India's First Ready-to-Eat Roasted Papad | Zero Oil, Just Crunch"
        description="Discover KHiCHOS, India's first ready-to-eat roasted papad. No cooking, no frying, no waiting. Made with rice flour, naturally gluten-free, and just 5 clean ingredients. Only ₹20 for 25g pack."
        keywords="ready to eat papad, roasted papad, khichos, gluten free papad, healthy papad, rice papad, no oil papad, indian snacks, ready to eat snacks, clean label snacks"
        canonicalUrl="/"
      />
      <div
        className="min-h-screen relative"
        id="home"
        style={{
          backgroundColor: '#FFC107',
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(139, 69, 19, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(139, 69, 19, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 40% 80%, rgba(139, 69, 19, 0.02) 0%, transparent 50%),
            repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(139, 69, 19, 0.01) 10px, rgba(139, 69, 19, 0.01) 20px)
          `,
          backgroundSize: '100% 100%',
          backgroundAttachment: 'fixed'
        }}
      >
      {/* Fixed Dadi Illustration - appears on scroll, fades down when final section appears */}
      <img
        src={dadiImage}
        alt="Dadi"
        className={`fixed bottom-2 right-2 w-16 md:w-20 lg:w-24 z-50 pointer-events-none transition-all duration-500 ${
          showFinalDadi
            ? 'translate-y-32 opacity-0'
            : showDadi
              ? 'translate-y-0 opacity-100'
              : 'translate-y-32 opacity-0'
        }`}
      />

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center px-4 py-8 relative overflow-hidden">
        {/* Papad piece on top-left */}
        <img
          src={papadPiece3}
          alt=""
          className="absolute left-2 top-8 sm:left-8 sm:top-12 md:left-12 md:top-16 lg:left-16 lg:top-20 w-24 h-24 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 object-contain pointer-events-none z-20"
          style={{
            transform: 'rotate(-25deg)',
            filter: 'drop-shadow(4px 4px 8px rgba(101, 67, 33, 0.5))'
          }}
        />

        {/* Papad piece on top-right */}
        <img
          src={papadPiece5}
          alt=""
          className="absolute right-2 top-8 sm:right-8 sm:top-12 md:right-12 md:top-16 lg:right-16 lg:top-20 w-24 h-24 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 object-contain pointer-events-none z-20"
          style={{
            transform: 'rotate(20deg)',
            filter: 'drop-shadow(4px 4px 8px rgba(101, 67, 33, 0.5))'
          }}
        />

        {/* Papad piece on bottom-left */}
        <img
          src={papadPiece4}
          alt=""
          className="absolute left-2 bottom-16 sm:left-8 sm:bottom-12 md:left-12 md:bottom-16 lg:left-16 lg:bottom-20 w-24 h-24 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 object-contain pointer-events-none z-20"
          style={{
            transform: 'rotate(15deg)',
            filter: 'drop-shadow(4px 4px 8px rgba(101, 67, 33, 0.5))'
          }}
        />

        {/* Papad piece on bottom-right */}
        <img
          src={papadPiece6}
          alt=""
          className="absolute right-2 bottom-16 sm:right-8 sm:bottom-12 md:right-12 md:bottom-16 lg:right-16 lg:bottom-20 w-24 h-24 sm:w-40 sm:h-40 md:w-52 md:h-52 lg:w-64 lg:h-64 object-contain pointer-events-none z-20"
          style={{
            transform: 'rotate(-20deg)',
            filter: 'drop-shadow(4px 4px 8px rgba(101, 67, 33, 0.5))'
          }}
        />

        {/* Welcome To text */}
        <div className="mb-2 relative z-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide text-seal-brown">
            welcome to
          </h1>
        </div>

        {/* Product Packet with 3D Flip and Zoom Effect */}
        <div className="mb-2 relative z-10">
          <div
            className="relative inline-block"
            style={{ perspective: '1000px' }}
          >
            {/* 3D Flip Container */}
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
                  className="w-48 sm:w-56 md:w-64 lg:w-72 h-auto object-contain drop-shadow-2xl"
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
                  className="w-48 sm:w-56 md:w-64 lg:w-72 h-auto object-contain drop-shadow-2xl"
                />
              </div>
            </div>

            {/* Magnifying Glass Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowZoomModal(true);
                setModalFlipped(isFlipped);
              }}
              className="absolute bottom-2 right-2 bg-seal-brown text-white p-3 md:p-4 rounded-full shadow-lg hover:bg-amber-900 transition-all z-20 cursor-pointer active:scale-95"
              aria-label="Zoom in"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
              </svg>
            </button>
          </div>

          {/* Instruction text */}
          <p className="text-xs md:text-sm text-seal-brown text-center mt-2 opacity-70">
            Click to flip
          </p>
        </div>

        {/* Subtitle */}
        <div className="mb-1 relative z-10">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-seal-brown font-bold text-center px-2">
            The Easy Clean Crunch You Actually Deserve!!!
          </p>
        </div>

        {/* Down Arrow */}
        <button
          onClick={scrollToNextSection}
          className="text-seal-brown hover:text-amber-900 transition-all transform hover:translate-y-2 animate-bounce relative z-10 p-2 cursor-pointer active:scale-95"
          aria-label="Scroll to next section"
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
      <section id="why-khichos" className="min-h-screen py-16 md:py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-christmas-sheep tracking-christmas text-seal-brown mb-12 text-center">
            Why KHiCHOS?
          </h2>

          <div className="relative max-w-7xl mx-auto min-h-[600px] sm:min-h-[700px] md:min-h-[800px]">
            {/* Center Papad Bowl */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <img
                src={papadInPotImage}
                alt="Papad Bowl"
                className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain drop-shadow-2xl"
              />
            </div>

            {/* Papad 1 - Top (12 o'clock) - It's ROASTED */}
            <div className="absolute top-[2%] left-1/2 transform -translate-x-1/2 hover:scale-105 transition-transform">
              <div className="relative flex items-center justify-center">
                <img src={papadPiece1} alt="" className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain drop-shadow-2xl" style={{ transform: 'rotate(0deg)' }} />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div>
                    <p className="text-seal-brown font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">It's ROASTED</p>
                    <p className="text-seal-brown font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">Not Fried</p>
                    <p className="text-seal-brown font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">Not Air Fried</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Papad 2 - Top Right (2 o'clock) - Just Rice */}
            <div className="absolute top-[12%] right-[2%] sm:right-[5%] md:right-[8%] transform hover:scale-105 transition-transform">
              <div className="relative flex items-center justify-center">
                <img src={papadPiece2} alt="" className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain drop-shadow-2xl" style={{ transform: 'rotate(60deg)' }} />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div>
                    <p className="text-seal-brown font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">Just Rice</p>
                    <p className="text-seal-brown font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">Gluten Free</p>
                    <p className="text-seal-brown font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">Guilt Free</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Papad 3 - Bottom Right (4 o'clock) - Low Fat */}
            <div className="absolute bottom-[12%] right-[2%] sm:right-[5%] md:right-[8%] transform hover:scale-105 transition-transform">
              <div className="relative flex items-center justify-center">
                <img src={papadPiece3} alt="" className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain drop-shadow-2xl" style={{ transform: 'rotate(120deg)' }} />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div>
                    <p className="text-seal-brown font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">Low Fat</p>
                    <p className="text-seal-brown font-bold text-[10px] sm:text-xs md:text-sm lg:text-base leading-tight">0.3g per Serve</p>
                    <p className="text-seal-brown font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">Zero Trans Fat</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Papad 4 - Bottom (6 o'clock) - Pink Salt */}
            <div className="absolute bottom-[2%] left-1/2 transform -translate-x-1/2 hover:scale-105 transition-transform">
              <div className="relative flex items-center justify-center">
                <img src={papadPiece4} alt="" className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain drop-shadow-2xl" style={{ transform: 'rotate(180deg)' }} />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div>
                    <p className="text-seal-brown font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">Pink Salt</p>
                    <p className="text-seal-brown font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">No Iodised Salt</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Papad 5 - Bottom Left (8 o'clock) - Zero Cholesterol */}
            <div className="absolute bottom-[12%] left-[2%] sm:left-[5%] md:left-[8%] transform hover:scale-105 transition-transform">
              <div className="relative flex items-center justify-center">
                <img src={papadPiece5} alt="" className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain drop-shadow-2xl" style={{ transform: 'rotate(240deg)' }} />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div>
                    <p className="text-seal-brown font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">Zero</p>
                    <p className="text-seal-brown font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">Cholesterol</p>
                    <p className="text-seal-brown font-bold text-[10px] sm:text-xs md:text-sm lg:text-base leading-tight italic">You read it right</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Papad 6 - Top Left (10 o'clock) - Zero Added Sugar */}
            <div className="absolute top-[12%] left-[2%] sm:left-[5%] md:left-[8%] transform hover:scale-105 transition-transform">
              <div className="relative flex items-center justify-center">
                <img src={papadPiece6} alt="" className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain drop-shadow-2xl" style={{ transform: 'rotate(300deg)' }} />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <div>
                    <p className="text-seal-brown font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">Zero Added</p>
                    <p className="text-seal-brown font-bold text-xs sm:text-sm md:text-base lg:text-lg leading-tight">Sugar</p>
                    <p className="text-seal-brown font-bold text-[10px] sm:text-xs md:text-sm lg:text-base leading-tight">0.3g per serve</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - Full Narrative */}
      <section id="story" className="min-h-screen py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto relative space-y-12 md:space-y-16">

            {/* Section Header */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-christmas-sheep tracking-christmas text-seal-brown text-center mb-8">
              Our Story
            </h2>

            {/* Section 1: The Beginning */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-r from-seal-brown to-amber-900 rounded-2xl md:rounded-3xl shadow-2xl p-8 md:p-10 lg:p-12">
                <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed mb-6">
                  There always was this humble khichiya papad, loved across homes, part of every meal, our asli desi crunch.
                </p>
                <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-bold mb-4">
                  But then came the hustle:
                </p>
                <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed">
                  Morning rush, traffic jams, meetings, unread emails,<br />
                  School-bus runs, house chores, chasing kids, homework wars,
                </p>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={papadBowlImage}
                  alt="KHiCHOS Papad Bowl"
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain transform hover:scale-105 transition-transform duration-300"
                  style={{ filter: 'drop-shadow(8px 8px 12px rgba(101, 67, 33, 0.4))' }}
                />
              </div>
            </div>

            {/* Section 2: The Problem */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="hidden lg:flex justify-center items-center order-1">
                <img
                  src={papadStackImage}
                  alt="KHiCHOS Papad Stack"
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain opacity-90 transform hover:scale-105 transition-transform duration-300"
                  style={{ filter: 'drop-shadow(8px 8px 12px rgba(101, 67, 33, 0.4))' }}
                />
              </div>
              <div className="bg-gradient-to-r from-seal-brown to-amber-900 rounded-2xl md:rounded-3xl shadow-2xl p-8 md:p-10 lg:p-12 order-2">
                <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-bold mb-6">
                  Deadlines at work, chaos at home, who had the time to wait?
                </p>
                <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed mb-4">
                  So fried took over, aloo maida crept in,<br />
                  We gave in to the easy greasy "I-don't-care4u" fried snacks,
                </p>
                <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed">
                  And slowly, our legacy got lost.
                </p>
              </div>
            </div>

            {/* Section 3: The Solution */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="bg-gradient-to-r from-seal-brown to-amber-900 rounded-2xl md:rounded-3xl shadow-2xl p-8 md:p-10 lg:p-12">
                <p className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed font-bold mb-6">
                  But not anymore!!!
                </p>
                <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed mb-6">
                  <span className="font-christmas-sheep tracking-christmas text-2xl md:text-3xl">KHiCHOS</span> brings it all back —
                </p>
                <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed">
                  No cooking. No waiting.<br />
                  Just open the pack and crunch — anytime, anywhere.
                </p>
              </div>
              <div className="flex justify-center items-center">
                <img
                  src={papadInPotImage}
                  alt="KHiCHOS Papad in Pot"
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain opacity-90 transform hover:scale-105 transition-transform duration-300"
                  style={{ filter: 'drop-shadow(8px 8px 12px rgba(101, 67, 33, 0.4))' }}
                />
              </div>
            </div>

            {/* Section 4: The Ingredients */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="hidden lg:flex justify-center items-center order-1">
                <img
                  src={papadBowlImage}
                  alt="Clean Ingredients"
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain transform hover:scale-105 transition-transform duration-300"
                  style={{ filter: 'drop-shadow(8px 8px 12px rgba(101, 67, 33, 0.4))' }}
                />
              </div>
              <div className="bg-gradient-to-r from-seal-brown to-amber-900 rounded-2xl md:rounded-3xl shadow-2xl p-8 md:p-10 lg:p-12 order-2">
                <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed mb-4">
                  Made with rice, jeera, papad khar, pink salt & green chillies.
                </p>
                <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed font-bold">
                  Clean Ingredients, rooted in tradition.
                </p>
              </div>
            </div>

            {/* Section 5: The Promise */}
            <div className="text-center max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-seal-brown to-amber-900 rounded-2xl md:rounded-3xl shadow-2xl p-8 md:p-10 lg:p-12">
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-christmas-sheep tracking-christmas text-white leading-tight mb-6">
                  "Light on fat (just 0.3 g per serve),<br />
                  Heavy on Nostalgia."
                </p>
                <p className="text-lg md:text-xl lg:text-2xl text-white leading-relaxed mb-8">
                  For the hustlers, the nurturers, and everyone in between,
                </p>
                <div className="flex items-center justify-center gap-3">
                  <p className="text-xl md:text-2xl lg:text-3xl font-christmas-sheep tracking-christmas text-white">
                    KHiCHOS
                  </p>
                  <span className="text-lg md:text-xl text-white">—</span>
                  <p className="text-base md:text-lg lg:text-xl text-white italic">
                    the easy clean crunch you actually deserve.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-christmas-sheep tracking-christmas text-seal-brown mb-4">
              Get in Touch
            </h2>
            <p className="text-xl md:text-2xl text-seal-brown">
              We'd love to hear from you
            </p>
          </div>

          {/* Customer Support Subsection */}
          <div id="contact-customer" className="mb-16 scroll-mt-24">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left: Text Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-4xl md:text-5xl font-christmas-sheep tracking-christmas text-seal-brown">
                      Customer Support
                    </h3>
                    {/* Small image inline - mobile only */}
                    <img
                      src={customerSupportImage}
                      alt="Customer Support"
                      className="w-16 h-16 md:hidden object-contain flex-shrink-0"
                    />
                  </div>
                  <p className="text-2xl md:text-3xl text-seal-brown leading-relaxed italic mb-6">
                    We would love to hear from you
                  </p>
                  <div className="pt-6">
                    <p className="text-xl text-seal-brown font-medium mb-6">
                      Feel free to reach out to us at below co-ordinates:
                    </p>
                    <div className="space-y-4 max-w-sm w-full">
                      <a href="tel:18008900370" className="flex items-center gap-4 bg-seal-brown text-white p-5 md:p-4 rounded-xl hover:bg-amber-900 transition-all cursor-pointer active:scale-95 w-full touch-manipulation">
                        <svg className="w-6 h-6 md:w-7 md:h-7 text-white pointer-events-none flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-lg md:text-xl pointer-events-none">1800 8900 370</span>
                      </a>
                      <a href="mailto:customercare@khichos.com" className="flex items-center gap-4 bg-seal-brown text-white p-5 md:p-4 rounded-xl hover:bg-amber-900 transition-all cursor-pointer active:scale-95 w-full touch-manipulation">
                        <svg className="w-6 h-6 md:w-7 md:h-7 text-white pointer-events-none flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-base md:text-xl pointer-events-none break-all">customercare@khichos.com</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right: Image - only visible on desktop */}
                <div className="hidden md:flex items-center justify-center">
                  <img
                    src={customerSupportImage}
                    alt="Customer Support"
                    className="w-full max-w-lg h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Business Subsection */}
          <div id="contact-business" className="mb-16 scroll-mt-24">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left: Text Content */}
                <div className="space-y-6">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-4xl md:text-5xl font-christmas-sheep tracking-christmas text-seal-brown">
                      Business
                    </h3>
                    {/* Small image inline - mobile only */}
                    <img
                      src={partnerWithUsImage}
                      alt="Business Partnership"
                      className="w-16 h-16 md:hidden object-contain flex-shrink-0"
                    />
                  </div>
                  <p className="text-2xl md:text-3xl text-seal-brown leading-relaxed italic mb-6">
                    Let's grow together
                  </p>
                  <div className="pt-6">
                    <p className="text-lg md:text-xl text-seal-brown font-medium mb-4">
                      If you are a Distributor, Exporter, Importer or wanting to place Bulk Orders
                    </p>
                    <p className="text-lg text-seal-brown mb-6">
                      You may reach out directly to our Founder and MD at below co-ordinates:
                    </p>
                    <div className="space-y-4 max-w-sm w-full">
                      <a href="tel:9004514169" className="flex items-center gap-4 bg-seal-brown text-white p-5 md:p-4 rounded-xl hover:bg-amber-900 transition-all cursor-pointer active:scale-95 w-full touch-manipulation">
                        <svg className="w-6 h-6 md:w-7 md:h-7 text-white pointer-events-none flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-lg md:text-xl pointer-events-none">90045 14169</span>
                      </a>
                      <a href="mailto:jay@khichos.com" className="flex items-center gap-4 bg-seal-brown text-white p-5 md:p-4 rounded-xl hover:bg-amber-900 transition-all cursor-pointer active:scale-95 w-full touch-manipulation">
                        <svg className="w-6 h-6 md:w-7 md:h-7 text-white pointer-events-none flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span className="text-lg md:text-xl pointer-events-none">jay@khichos.com</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right: Image - only visible on desktop */}
                <div className="hidden md:flex items-center justify-center">
                  <img
                    src={partnerWithUsImage}
                    alt="Business Partnership"
                    className="w-full max-w-lg h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Location Subsection */}
          <div id="contact-location" className="scroll-mt-24">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                {/* Left: Text Content */}
                <div className="space-y-6">
                  <h3 className="text-4xl md:text-5xl font-christmas-sheep tracking-christmas text-seal-brown mb-4">
                    Where are we located
                  </h3>
                  <div className="pt-6">
                    <p className="text-lg md:text-xl text-seal-brown font-medium mb-2">
                      Khichos Foods (OPC) Private Limited
                    </p>
                    <p className="text-base md:text-lg text-seal-brown leading-relaxed">
                      114, 1st Floor, Alpine Industrial Estate,<br />
                      Military Road, Marol, Andheri E,<br />
                      Mumbai - 400059, Maharashtra, India.
                    </p>
                    <a
                      href="https://www.google.com/maps/place/Alpine+Industrial+Estate/@19.118926,72.8839311,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c81069819ce3:0xa2d5eb01f9601abf!8m2!3d19.118926!4d72.886506!16s%2Fg%2F11cm44g88f"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-6 bg-seal-brown text-white px-8 py-4 rounded-2xl text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Open in Google Maps
                    </a>
                  </div>
                </div>

                {/* Right: Google Maps */}
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-seal-brown">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.743022637546!2d72.88393113169653!3d19.118926259244667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c81069819ce3%3A0xa2d5eb01f9601abf!2sAlpine%20Industrial%20Estate!5e0!3m2!1sen!2sin!4v1764596486172!5m2!1sen!2sin"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Khichos Foods Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimers Section */}
      <section id="disclaimer" className="min-h-screen py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-christmas-sheep tracking-christmas text-seal-brown mb-4">
              Disclaimers
            </h2>
            <p className="text-xl md:text-2xl text-seal-brown">
              Stay Informed, Stay Safe
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Copyright */}
            <div id="disclaimer-copyright" className="bg-gradient-to-r from-seal-brown to-amber-900 rounded-3xl shadow-2xl p-8 md:p-12 scroll-mt-24">
              <h3 className="text-3xl md:text-4xl font-christmas-sheep tracking-christmas text-white mb-6">
                Copyright
              </h3>
              <p className="text-base md:text-lg text-white leading-relaxed">
                All content included in or made available through any of the availed service, such as text, graphics, logos, button icons, images, audio clips and data compilations is the property of Khichos Foods (OPC) Private Limited and shall be protected and governed by laws of the land in India. All unwarranted copies of content are strictly prohibited and illegal.
              </p>
            </div>

            {/* Scam Alert */}
            <div id="disclaimer-scam" className="bg-gradient-to-r from-seal-brown to-amber-900 rounded-3xl shadow-2xl p-8 md:p-12 scroll-mt-24">
              <h3 className="text-3xl md:text-4xl font-christmas-sheep tracking-christmas text-white mb-6">
                Scam Alert
              </h3>
              <div className="space-y-4 text-base md:text-lg text-white leading-relaxed">
                <p className="font-bold text-xl">
                  www.khichos.com is our official website.
                </p>
                <p>
                  Contact numbers and email co-ordinates provided on this website are our only official co-ordinates.
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>We do not have any other sub domains or other websites.</li>
                  <li>We do not have any retail outlets of our own in the name of Khichos or similar.</li>
                  <li>Mr. Jay Lalit Ganatra is our sole promoter director.</li>
                </ul>
                <p className="font-bold">
                  Hence beware of any other individuals or organizations claiming to represent KHICHOS. They may be trying to deceive you. We hold no responsibility for any interactions or losses incurred through such unauthorized individuals or entities.
                </p>
                <p>
                  If you receive a suspicious call, email, or see a fake website or come across any suspicious activity related to our product or our brand, please contact Khichos Foods (OPC) Private Limited at the customer care details or address provided on our website.
                </p>
                <p className="italic">
                  We appreciate you taking the effort to stay informed and would further appreciate your help in reaching out to us and highlighting any such instances.
                </p>
                <p className="font-medium text-center text-xl mt-6">
                  Thank You.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section with Large Dadi and Speech Bubble */}
      <section id="final-cta" className="h-screen relative flex items-center justify-center py-8 md:py-12 pt-24 md:pt-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center">
            {/* Large Dadi emerges in center */}
            <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
              {/* Speech Bubble - appears above Dadi on mobile, to the right on desktop */}
              <div
                className={`bg-seal-brown text-white px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5 rounded-3xl shadow-2xl transition-all duration-500 w-48 md:w-64 lg:w-80 md:absolute md:left-[calc(100%+1rem)] md:top-[15%] lg:left-[calc(100%+2rem)] lg:top-[20%] ${
                  showSpeechBubble ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`}
              >
                <p className="text-sm md:text-xl lg:text-2xl font-christmas-sheep tracking-christmas text-center leading-relaxed">
                  not tried yet?<br />
                  go grab one!
                </p>
                {/* Triangle pointer - points down on mobile, left on desktop */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-full w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-seal-brown md:hidden"></div>
                <div className="hidden md:block absolute left-0 top-1/2 -translate-x-full -translate-y-1/2 w-0 h-0 border-t-[12px] border-b-[12px] border-r-[12px] border-t-transparent border-b-transparent border-r-seal-brown"></div>
              </div>

              {/* Large Dadi Image - emerges from bottom */}
              <img
                src={dadiImage}
                alt="Dadi"
                className={`w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-contain drop-shadow-2xl transition-all duration-1000 ${
                  showFinalDadi ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
                }`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-seal-brown text-white p-4 md:p-5 rounded-full shadow-2xl hover:bg-amber-900 transition-all transform hover:scale-110 z-50 cursor-pointer active:scale-95"
          aria-label="Scroll to top"
        >
          <svg className="w-6 h-6 md:w-7 md:h-7 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* Zoom Modal */}
      {showZoomModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100] p-4"
          onClick={() => setShowZoomModal(false)}
        >
          <div
            className="relative rounded-2xl p-6 md:p-8 max-w-4xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{
              backgroundColor: '#FFC107',
              backgroundImage: `
                radial-gradient(circle at 20% 30%, rgba(139, 69, 19, 0.03) 0%, transparent 50%),
                radial-gradient(circle at 80% 70%, rgba(139, 69, 19, 0.03) 0%, transparent 50%),
                radial-gradient(circle at 40% 80%, rgba(139, 69, 19, 0.02) 0%, transparent 50%),
                repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(139, 69, 19, 0.01) 10px, rgba(139, 69, 19, 0.01) 20px)
              `
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowZoomModal(false)}
              className="absolute top-4 right-4 bg-seal-brown text-white p-3 md:p-4 rounded-full hover:bg-amber-900 transition-all z-10 cursor-pointer active:scale-95"
              aria-label="Close"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Rotate Button */}
            <button
              onClick={() => setModalFlipped(!modalFlipped)}
              className="absolute top-4 left-4 bg-seal-brown text-white px-5 py-3 md:px-6 md:py-4 rounded-full hover:bg-amber-900 transition-all z-10 flex items-center gap-2 cursor-pointer active:scale-95"
              aria-label="Rotate"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span className="text-sm md:text-base font-medium pointer-events-none">Rotate</span>
            </button>

            {/* Zoomed Image with 3D Flip */}
            <div className="flex items-center justify-center mt-16 mb-8" style={{ perspective: '1500px' }}>
              <div
                className="relative"
                style={{
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.8s',
                  transform: modalFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* Front Side */}
                <div
                  style={{
                    backfaceVisibility: 'hidden',
                    position: modalFlipped ? 'absolute' : 'relative',
                  }}
                >
                  <img
                    src={packetFrontImage}
                    alt="KHiCHOS Packet Front - Zoomed"
                    className="max-w-full h-auto max-h-[70vh] object-contain drop-shadow-2xl"
                    onMouseMove={handleModalMouseMove}
                    onMouseEnter={() => setShowModalMagnifier(true)}
                    onMouseLeave={() => setShowModalMagnifier(false)}
                  />
                </div>

                {/* Back Side */}
                <div
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                    position: modalFlipped ? 'relative' : 'absolute',
                    top: 0,
                    left: 0,
                  }}
                >
                  <img
                    src={packetBackImage}
                    alt="KHiCHOS Packet Back - Zoomed"
                    className="max-w-full h-auto max-h-[70vh] object-contain drop-shadow-2xl"
                    onMouseMove={handleModalMouseMove}
                    onMouseEnter={() => setShowModalMagnifier(true)}
                    onMouseLeave={() => setShowModalMagnifier(false)}
                  />
                </div>
              </div>

              {/* Magnifier Glass - positioned over the image at cursor location */}
              {showModalMagnifier && modalMagnifierPosition.imgLeft !== undefined && (
                <div
                  className="fixed rounded-full border-4 border-seal-brown shadow-2xl pointer-events-none overflow-hidden"
                  style={{
                    width: '200px',
                    height: '200px',
                    left: `${modalMagnifierPosition.imgLeft + (modalMagnifierPosition.x / 100) * modalMagnifierPosition.imgWidth - 100}px`,
                    top: `${modalMagnifierPosition.imgTop + (modalMagnifierPosition.y / 100) * modalMagnifierPosition.imgHeight - 100}px`,
                    backgroundImage: `url(${modalFlipped ? packetBackImage : packetFrontImage})`,
                    backgroundSize: `${modalMagnifierPosition.imgWidth * 4}px ${modalMagnifierPosition.imgHeight * 4}px`,
                    backgroundPosition: `-${(modalMagnifierPosition.x / 100) * modalMagnifierPosition.imgWidth * 4 - 100}px -${(modalMagnifierPosition.y / 100) * modalMagnifierPosition.imgHeight * 4 - 100}px`,
                    backgroundRepeat: 'no-repeat',
                    zIndex: 150,
                    backgroundColor: 'white'
                  }}
                >
                  {/* Crosshair positioned at exact cursor location */}
                  <div
                    className="absolute bg-seal-brown rounded-full"
                    style={{
                      width: '8px',
                      height: '8px',
                      left: `${modalMagnifierPosition.cursorX - (modalMagnifierPosition.imgLeft + (modalMagnifierPosition.x / 100) * modalMagnifierPosition.imgWidth - 100) - 4}px`,
                      top: `${modalMagnifierPosition.cursorY - (modalMagnifierPosition.imgTop + (modalMagnifierPosition.y / 100) * modalMagnifierPosition.imgHeight - 100) - 4}px`,
                      boxShadow: '0 0 0 2px white, 0 0 0 4px rgba(0,0,0,0.3)'
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      </div>
    </>
  );
};

export default Home;
