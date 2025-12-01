import SEO from '../components/SEO';
import dadiImage from '../assets/Dadi Illustration 1.png';

const About = () => {
  return (
    <>
      <SEO
        title="Our Story - KHiCHOS | From Dadi's Kitchen to Your Snack Drawer"
        description="Learn how KHiCHOS transformed the traditional 4-hour papad-making process into India's first ready-to-eat roasted papad. Rice-based, zero oil, and ready in 0 seconds."
        keywords="khichos story, papad history, indian snack innovation, roasted papad, rice papad, traditional indian food, healthy snacks india"
        canonicalUrl="/story"
      />
      <div className="bg-gradient-to-br from-marigold via-yellow-300 to-orange-200 min-h-screen py-8 md:py-16 relative">
      {/* Fixed Dadi Illustration */}
      <img
        src={dadiImage}
        alt="Dadi"
        className="fixed bottom-2 right-2 w-16 md:w-20 lg:w-24 z-50 pointer-events-none"
      />
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Hero Title */}
          <div className="text-center mb-8 md:mb-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-christmas-sheep tracking-christmas text-seal-brown mb-4 md:mb-6">
              Our Story
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-seal-brown font-medium">
              From Dadi's Kitchen to Your Snack Drawer
            </p>
          </div>

          {/* Story Timeline - Visual & Unique */}
          <div className="space-y-6 md:space-y-12 mb-8 md:mb-16">
            {/* The Problem */}
            <div className="relative">
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 border-l-4 md:border-l-8 border-red-500 transform hover:scale-102 transition-transform">
                <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-3xl md:text-4xl">⏱️</span>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-christmas-sheep text-seal-brown mb-3 md:mb-4">The 4-Hour Tradition</h2>
                    <p className="text-base md:text-lg text-seal-brown leading-relaxed">
                      Making traditional papads meant grinding dal, steaming, kneading, rolling out perfect circles, sun-drying for days, and finally frying them right before serving.
                      <span className="font-bold block mt-2">Miss one step? No papad for you.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Realization */}
            <div className="relative">
              <div className="bg-gradient-to-r from-amber-100 to-yellow-100 rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 border-l-4 md:border-l-8 border-amber-500 transform hover:scale-102 transition-transform">
                <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-amber-500 rounded-full flex items-center justify-center">
                      <span className="text-3xl md:text-4xl">💡</span>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-christmas-sheep text-seal-brown mb-3 md:mb-4">The Lightbulb Moment</h2>
                    <p className="text-base md:text-lg text-seal-brown leading-relaxed">
                      Why does something so essential to Indian meals need to be this complicated? What if we honored the tradition
                      <span className="font-bold"> but removed the hassle?</span>
                    </p>
                    <p className="text-base md:text-lg text-seal-brown leading-relaxed mt-3">
                      What if papads were ready... right now?
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* The Solution */}
            <div className="relative">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 transform hover:scale-102 transition-transform">
                <div className="flex flex-col sm:flex-row items-start gap-4 md:gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center">
                      <span className="text-3xl md:text-4xl">✨</span>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-christmas-sheep mb-3 md:mb-4">Enter KHiCHOS</h2>
                    <p className="text-base md:text-xl leading-relaxed mb-3 md:mb-4">
                      We took rice (not dal), added traditional spices, perfected the roasting technique (no oil!),
                      and created something completely new.
                    </p>
                    <p className="text-lg md:text-2xl font-bold">
                      Not your grandmother's papad. But we think she'd approve.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What Makes Us Different - Icon Grid */}
          <div className="bg-seal-brown rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 mb-8 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-christmas-sheep text-white text-center mb-6 md:mb-10">
              What Makes Us Different?
            </h2>

            <div className="grid sm:grid-cols-2 gap-4 md:gap-8">
              <div className="bg-white bg-opacity-10 rounded-xl md:rounded-2xl p-5 md:p-6 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">🌾</div>
                <h3 className="text-xl md:text-2xl font-bold text-marigold mb-2 md:mb-3">Rice, Not Dal</h3>
                <p className="text-white text-sm md:text-base lg:text-lg">
                  Lighter, crispier, and naturally gluten-free. We broke from tradition to make it better.
                </p>
              </div>

              <div className="bg-white bg-opacity-10 rounded-xl md:rounded-2xl p-5 md:p-6 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">🔥</div>
                <h3 className="text-xl md:text-2xl font-bold text-marigold mb-2 md:mb-3">Roasted, Never Fried</h3>
                <p className="text-white text-sm md:text-base lg:text-lg">
                  Zero oil. Not air-fried. Purely roasted to perfection. Your arteries will thank us.
                </p>
              </div>

              <div className="bg-white bg-opacity-10 rounded-xl md:rounded-2xl p-5 md:p-6 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">⚡</div>
                <h3 className="text-xl md:text-2xl font-bold text-marigold mb-2 md:mb-3">Ready in 0 Seconds</h3>
                <p className="text-white text-sm md:text-base lg:text-lg">
                  Open pack. Eat. That's it. No cooking, no waiting, no oil splatters on your stove.
                </p>
              </div>

              <div className="bg-white bg-opacity-10 rounded-xl md:rounded-2xl p-5 md:p-6 backdrop-blur-sm">
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">🎯</div>
                <h3 className="text-xl md:text-2xl font-bold text-marigold mb-2 md:mb-3">A New Category</h3>
                <p className="text-white text-sm md:text-base lg:text-lg">
                  Not chips. Not crackers. Not traditional papad either. We're India's first ready-to-eat roasted papad.
                </p>
              </div>
            </div>
          </div>

          {/* Final Statement */}
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 lg:p-12 text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-christmas-sheep tracking-christmas text-seal-brown mb-4 md:mb-6">
              "They're not chips. They're not nachos."
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-seal-brown mb-4 md:mb-6">
              KHiCHOS don't fit into a category on the shelf.
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              We ARE the category.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-seal-brown mt-6 md:mt-8 font-medium">
              🇮🇳 India's Guilt-Free Desi Pride
            </p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default About;
