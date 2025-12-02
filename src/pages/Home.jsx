import SEO from '../components/SEO';
import dadiImage from '../assets/Dadi Illustration 1.png';
import productImage from '../assets/Product Image copy 3.png';
import mockupImage from '../assets/Khichos Packaging Mock up 01.png';
import riceFlourImage from '../assets/Rice_flour.png';
import jeeraImage from '../assets/Jeera.png';
import papadKharImage from '../assets/Papad_Khar.png';
import pinkSaltImage from '../assets/Himalayan_Pink_Salt.png';
import greenChilliImage from '../assets/Green_Chilli.png';
import readyToEatIcon from '../assets/Ready_to_eat_icon.png';
import roastedIcon from '../assets/roasted_icon.png';
import cleanLabelIcon from '../assets/simple_label_icon.png';
import glutenFreeIcon from '../assets/gluten_free_icon.png';

const Home = () => {
  return (
    <>
      <SEO
        title="KHiCHOS - India's First Ready-to-Eat Roasted Papad | Zero Oil, Just Crunch"
        description="Discover KHiCHOS, India's first ready-to-eat roasted papad. No cooking, no frying, no waiting. Made with rice flour, naturally gluten-free, and just 5 clean ingredients. Only ₹20 for 25g pack."
        keywords="ready to eat papad, roasted papad, khichos, gluten free papad, healthy papad, rice papad, no oil papad, indian snacks, ready to eat snacks, clean label snacks"
        canonicalUrl="/"
      />
      <div className="bg-marigold min-h-screen relative">
      {/* Fixed Dadi Illustration */}
      <img
        src={dadiImage}
        alt="Dadi"
        className="fixed bottom-2 right-2 w-16 md:w-20 lg:w-24 z-50 pointer-events-none"
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-2 pb-4 md:pt-4 md:pb-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
          {/* Hero Text */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-seal-brown mb-4 md:mb-6 font-bold leading-tight tracking-wide">
              India's First Ready-to-Eat Roasted Papad
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl font-christmas-sheep tracking-christmas text-seal-brown mb-6 md:mb-8">
              Your thali is just khali without KHiCHOS
            </p>
            <p className="text-base sm:text-lg md:text-xl text-seal-brown mb-6 md:mb-8">
              No Cooking. No Waiting. Just Crunch.
            </p>
          </div>

          {/* Product Mockup */}
          <div className="flex items-center justify-center overflow-hidden">
            <img
              src={mockupImage}
              alt="KHiCHOS Packaging Mockup"
              className="w-full max-w-md h-auto object-cover drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              style={{ objectPosition: '50% 5%' }}
            />
          </div>
        </div>
      </section>


      {/* Product Section */}
      <section className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-christmas-sheep tracking-christmas text-seal-brown text-center mb-8 md:mb-12">
            The Easy Clean Crunch You Actually Deserve
          </h2>

          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Product Image */}
            <div className="order-2 md:order-1">
              <img
                src={productImage}
                alt="KHiCHOS Product"
                className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Details */}
            <div className="order-1 md:order-2 space-y-4 md:space-y-6">
              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 border-l-4 md:border-l-8 border-marigold transform hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-3 md:gap-4">
                  <img src={readyToEatIcon} alt="Ready to Eat" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex-shrink-0" />
                  <div>
                    <h4 className="font-christmas-sheep tracking-christmas text-seal-brown text-lg md:text-xl lg:text-2xl mb-2">Ready to Eat</h4>
                    <p className="text-seal-brown text-sm md:text-base lg:text-lg">No cooking. No waiting. Just open the pack and crunch – anytime, anywhere.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 border-l-4 md:border-l-8 border-red-500 transform hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-3 md:gap-4">
                  <img src={roastedIcon} alt="Roasted, Not Fried" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex-shrink-0" />
                  <div>
                    <h4 className="font-christmas-sheep tracking-christmas text-seal-brown text-lg md:text-xl lg:text-2xl mb-2">Roasted, Not Fried</h4>
                    <p className="text-seal-brown text-sm md:text-base lg:text-lg">Pure roasted. Zero oil. Not even air-fried. Just 0.3g fat per serve.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 border-l-4 md:border-l-8 border-green-500 transform hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-3 md:gap-4">
                  <img src={cleanLabelIcon} alt="Clean Label" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex-shrink-0" />
                  <div>
                    <h4 className="font-christmas-sheep tracking-christmas text-seal-brown text-lg md:text-xl lg:text-2xl mb-2">Clean Label</h4>
                    <p className="text-seal-brown text-sm md:text-base lg:text-lg">Just 5 traditional ingredients. No mixing. No maida. No udad.</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 border-l-4 md:border-l-8 border-amber-600 transform hover:translate-x-2 transition-transform duration-300">
                <div className="flex items-start gap-3 md:gap-4">
                  <img src={glutenFreeIcon} alt="Gluten Free" className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 flex-shrink-0" />
                  <div>
                    <h4 className="font-christmas-sheep tracking-christmas text-seal-brown text-lg md:text-xl lg:text-2xl mb-2">Gluten Free</h4>
                    <p className="text-seal-brown text-sm md:text-base lg:text-lg">Pure rice. Light on stomach. Heavy on nostalgia.</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 md:mt-8 p-6 md:p-8 bg-gradient-to-r from-seal-brown to-amber-900 text-white rounded-2xl md:rounded-3xl text-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <p className="text-3xl sm:text-4xl md:text-5xl font-christmas-sheep tracking-christmas mb-2 md:mb-3">Just ₹20</p>
                <p className="text-sm md:text-base lg:text-lg">25g pack | Lighter than you think</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="container mx-auto px-4 py-8 md:py-16 bg-gradient-to-b from-marigold to-yellow-400">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-seal-brown text-center mb-3 md:mb-4 font-bold">
            What Goes Into Every Crunch
          </h2>
          <p className="text-xl sm:text-2xl md:text-2xl font-christmas-sheep tracking-christmas text-seal-brown text-center mb-8 md:mb-12">
            Just 5 Clean Ingredients
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-8 md:mb-12">
            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl shadow-xl text-center transform hover:rotate-3 hover:scale-110 transition-all duration-300">
              <div className="mb-2 md:mb-4 flex items-center justify-center h-20 md:h-24 lg:h-28">
                <img src={riceFlourImage} alt="Rice Flour" className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain" />
              </div>
              <h4 className="font-christmas-sheep tracking-christmas text-seal-brown text-base md:text-lg lg:text-xl mb-1 md:mb-2">Rice Flour</h4>
              <p className="text-xs md:text-sm text-seal-brown">Pure & light</p>
            </div>

            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl shadow-xl text-center transform hover:rotate-3 hover:scale-110 transition-all duration-300">
              <div className="mb-2 md:mb-4 flex items-center justify-center h-20 md:h-24 lg:h-28">
                <img src={jeeraImage} alt="Jeera" className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain" />
              </div>
              <h4 className="font-christmas-sheep tracking-christmas text-seal-brown text-base md:text-lg lg:text-xl mb-1 md:mb-2">Jeera</h4>
              <p className="text-xs md:text-sm text-seal-brown">Cumin goodness</p>
            </div>

            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl shadow-xl text-center transform hover:rotate-3 hover:scale-110 transition-all duration-300">
              <div className="mb-2 md:mb-4 flex items-center justify-center h-20 md:h-24 lg:h-28">
                <img src={papadKharImage} alt="Papad Khar" className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain" />
              </div>
              <h4 className="font-christmas-sheep tracking-christmas text-seal-brown text-base md:text-lg lg:text-xl mb-1 md:mb-2">Papad Khar</h4>
              <p className="text-xs md:text-sm text-seal-brown">Traditional magic</p>
            </div>

            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl shadow-xl text-center transform hover:rotate-3 hover:scale-110 transition-all duration-300">
              <div className="mb-2 md:mb-4 flex items-center justify-center h-20 md:h-24 lg:h-28">
                <img src={pinkSaltImage} alt="Pink Salt" className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain" />
              </div>
              <h4 className="font-christmas-sheep tracking-christmas text-seal-brown text-base md:text-lg lg:text-xl mb-1 md:mb-2">Pink Salt</h4>
              <p className="text-xs md:text-sm text-seal-brown">Not regular salt</p>
            </div>

            <div className="bg-white p-4 md:p-6 lg:p-8 rounded-2xl md:rounded-3xl shadow-xl text-center transform hover:rotate-3 hover:scale-110 transition-all duration-300 col-span-2 md:col-span-1">
              <div className="mb-2 md:mb-4 flex items-center justify-center h-20 md:h-24 lg:h-28">
                <img src={greenChilliImage} alt="Green Chillies" className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain" />
              </div>
              <h4 className="font-christmas-sheep tracking-christmas text-seal-brown text-base md:text-lg lg:text-xl mb-1 md:mb-2">Green Chillies</h4>
              <p className="text-xs md:text-sm text-seal-brown">Right kick</p>
            </div>
          </div>

          <div className="bg-seal-brown text-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-10 text-center">
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-christmas-sheep tracking-christmas mb-3 md:mb-4">
              That's It. Nothing Else.
            </p>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
              Ingredients rooted in tradition. Made for the hustlers, the nurturers, and everyone in between.
            </p>
          </div>
        </div>
      </section>

      </div>
    </>
  );
};

export default Home;
