import SEO from '../components/SEO';
import dadiImage from '../assets/Dadi Illustration 1.png';
import papadBowlImage from '../assets/papad-bowl.png';
import papadStackImage from '../assets/papad-stack.png';
import papadInPotImage from '../assets/papad-in-pot.png';

const About = () => {
  return (
    <>
      <SEO
        title="Our Story - KHiCHOS | From Dadi's Kitchen to Your Snack Drawer"
        description="Learn how KHiCHOS transformed the traditional 4-hour papad-making process into India's first ready-to-eat roasted papad. Rice-based, zero oil, and ready in 0 seconds."
        keywords="khichos story, papad history, indian snack innovation, roasted papad, rice papad, traditional indian food, healthy snacks india"
        canonicalUrl="/story"
      />
      <div className="bg-marigold min-h-screen py-8 md:py-16 relative">
      {/* Fixed Dadi Illustration */}
      <img
        src={dadiImage}
        alt="Dadi"
        className="fixed bottom-2 right-2 w-16 md:w-20 lg:w-24 z-50 pointer-events-none"
      />
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto relative">
          {/* Section 1: The Nostalgia Hook */}
          <div className="mb-16 md:mb-24 relative" style={{ zIndex: 10 }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-christmas-sheep tracking-christmas text-seal-brown mb-8 md:mb-12 leading-tight text-center">
              Your Thali is Just Khali Without It.
            </h1>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center relative">
              {/* Product Image - LEFT */}
              <div className="flex justify-center md:justify-end">
                <img
                  src={papadBowlImage}
                  alt="KHiCHOS Papad Bowl"
                  className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain transform hover:scale-105 transition-transform duration-300"
                  style={{ filter: 'drop-shadow(8px 8px 12px rgba(101, 67, 33, 0.4))' }}
                />
              </div>

              {/* Text Content - RIGHT */}
              <div className="space-y-4 md:space-y-6">
                <p className="text-lg sm:text-xl md:text-2xl text-seal-brown leading-relaxed">
                  There was always the humble Khichiya papad—our asli desi crunch. It was the sidekick to every meal, loved across homes. But then came the hustle.
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-seal-brown leading-relaxed">
                  Morning rush, traffic jams, unread emails, and chasing deadlines. Who had the time to stand over a stove and roast a papad?
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: The Problem - LEFT ALIGNED */}
          <div className="mb-16 md:mb-24 relative" style={{ zIndex: 10 }}>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="lg:ml-8">
                <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-8 md:p-10 lg:p-12 relative overflow-hidden">
                  {/* Papad in Pot - Mobile only, bottom right corner */}
                  <div className="lg:hidden absolute right-2 bottom-2 opacity-20">
                    <img
                      src={papadInPotImage}
                      alt="Papad in Pot"
                      className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                    />
                  </div>

                  <div className="relative z-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-christmas-sheep tracking-christmas text-seal-brown mb-6">
                      We Traded Legacy for Convenience.
                    </h2>
                    <div className="space-y-4 md:space-y-6">
                      <p className="text-base md:text-lg lg:text-xl text-seal-brown leading-relaxed">
                        Slowly, we gave in. The "easy, greasy" fried snacks took over. Aloo and Maida crept into our diets because they were convenient. Our legacy got lost in the noise of "instant" everything.
                      </p>
                      <p className="text-base md:text-lg lg:text-xl text-seal-brown leading-relaxed">
                        We realized that while popcorn moved from the cooker to the microwave to the ready-to-eat bag, the papad was left behind in the kitchen. It was time for an evolution.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Papad Stack Image - RIGHT */}
              <div className="hidden lg:flex justify-center items-center">
                <img
                  src={papadStackImage}
                  alt="KHiCHOS Papad Stack"
                  className="w-80 h-80 lg:w-[28rem] lg:h-[28rem] object-contain opacity-90 transform hover:scale-105 transition-transform duration-300"
                  style={{ filter: 'drop-shadow(8px 8px 12px rgba(101, 67, 33, 0.4))' }}
                />
              </div>
            </div>
          </div>

          {/* Section 3: The Solution - RIGHT ALIGNED */}
          <div className="mb-16 md:mb-24 relative" style={{ zIndex: 10 }}>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Papad in Pot Image - LEFT */}
              <div className="hidden lg:flex justify-center items-center">
                <img
                  src={papadInPotImage}
                  alt="KHiCHOS Papad in Pot"
                  className="w-80 h-80 lg:w-[28rem] lg:h-[28rem] object-contain opacity-90 transform hover:scale-105 transition-transform duration-300"
                  style={{ filter: 'drop-shadow(8px 8px 12px rgba(101, 67, 33, 0.4))' }}
                />
              </div>

              <div className="lg:mr-8">
                <div className="bg-gradient-to-r from-seal-brown to-amber-900 rounded-2xl md:rounded-3xl shadow-2xl p-8 md:p-10 lg:p-12 relative overflow-hidden">
                  <div className="absolute right-4 bottom-4 md:right-8 md:bottom-8 opacity-20 md:opacity-30">
                    <img
                      src={dadiImage}
                      alt="Dadi Illustration"
                      className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain"
                    />
                  </div>

                  <div className="relative z-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-christmas-sheep tracking-christmas text-white mb-6">
                      For the Hustlers, The Nurturers, and Everyone In Between.
                    </h2>
                    <div className="space-y-4 md:space-y-6">
                      <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed">
                        Khichos brings it all back. No cooking. No waiting. Just open the pack and crunch.
                      </p>
                      <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed">
                        We kept the ingredients rooted in tradition—Rice, Jeera, and Pink Salt—but modernized the format for your fast-paced life. It's the easy, clean crunch you actually deserve.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Quote - CENTER */}
          <div className="text-center max-w-4xl mx-auto relative" style={{ zIndex: 10 }}>
            <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-8 md:p-10 lg:p-12">
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-christmas-sheep tracking-christmas text-seal-brown leading-tight">
                "Light on Fat. Heavy on Nostalgia."
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
