import dadiImage from '../assets/Dadi Illustration 1.png';
import productImage from '../assets/Product Image copy 3.png';

const Home = () => {
  return (
    <div className="bg-marigold min-h-screen relative">
      {/* Fixed Dadi Illustration */}
      <img
        src={dadiImage}
        alt="Dadi"
        className="fixed bottom-2 right-2 w-16 md:w-20 lg:w-24 z-50 pointer-events-none"
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          {/* Hero Text */}
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-seal-brown mb-6 font-bold">
              India's First Ready-to-Eat Roasted Papad
            </h1>
            <p className="text-2xl md:text-3xl font-christmas-sheep tracking-christmas text-seal-brown mb-8">
              Your thali is just khali without KHiCHOS
            </p>
            <p className="text-lg md:text-xl text-seal-brown mb-8">
              No Cooking. No Waiting. Just Crunch.
            </p>
          </div>

          {/* Product Mockup Placeholder */}
          <div className="flex items-center justify-center">
            <div className="bg-white bg-opacity-30 rounded-3xl border-4 border-dashed border-seal-brown p-12 w-full max-w-md h-96 flex items-center justify-center">
              <p className="text-seal-brown text-xl font-bold text-center">Product Packet Mockup</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl text-seal-brown text-center mb-12 font-bold">
            The Story
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-3xl shadow-xl p-10 transform hover:scale-105 transition-transform duration-300">
              <p className="text-seal-brown text-xl leading-relaxed">
                Papads have always been part of our Indian Meal Culture. Yet it never was this easy to have.
              </p>
            </div>
            <div className="bg-seal-brown text-white rounded-3xl shadow-xl p-10 transform hover:scale-105 transition-transform duration-300">
              <p className="text-xl leading-relaxed">
                From grinding, steaming, kneading, rolling to drying and cooking, miss a step and there is no papad for you.
                For decades, that's just how it was – and it still is. <span className="font-bold text-marigold">We just did the hard work for you.</span>
              </p>
            </div>
            <div className="bg-gradient-to-br from-marigold to-yellow-500 rounded-3xl shadow-xl p-10 transform hover:scale-105 transition-transform duration-300">
              <p className="text-seal-brown text-xl leading-relaxed font-bold">
                KHiCHOS – papads that don't need waiting, cooking or anyone standing in the kitchen. They're ready when you are.
              </p>
            </div>
            <div className="bg-white rounded-3xl shadow-xl p-10 transform hover:scale-105 transition-transform duration-300">
              <p className="text-seal-brown text-2xl leading-relaxed font-semibold">
                From lunch plates to chai breaks to midnight binges, they just fit in—always.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-christmas-sheep tracking-christmas text-seal-brown text-center mb-12">
            The Easy Clean Crunch You Actually Deserve
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Product Image */}
            <div className="order-2 md:order-1">
              <img
                src={productImage}
                alt="KHiCHOS Product"
                className="w-full h-auto object-contain drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Product Details */}
            <div className="order-1 md:order-2 space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 border-l-8 border-marigold transform hover:translate-x-2 transition-transform duration-300">
                <h4 className="font-christmas-sheep tracking-christmas text-seal-brown text-2xl mb-2">🎉 Ready to Eat</h4>
                <p className="text-seal-brown text-lg">No cooking. No waiting. Just open the pack and crunch – anytime, anywhere.</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border-l-8 border-red-500 transform hover:translate-x-2 transition-transform duration-300">
                <h4 className="font-christmas-sheep tracking-christmas text-seal-brown text-2xl mb-2">🔥 Roasted, Not Fried</h4>
                <p className="text-seal-brown text-lg">Pure roasted. Zero oil. Not even air-fried. Just 0.3g fat per serve.</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border-l-8 border-green-500 transform hover:translate-x-2 transition-transform duration-300">
                <h4 className="font-christmas-sheep tracking-christmas text-seal-brown text-2xl mb-2">✨ Clean Label</h4>
                <p className="text-seal-brown text-lg">Just 5 traditional ingredients. No mixing. No maida. No udad.</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border-l-8 border-amber-600 transform hover:translate-x-2 transition-transform duration-300">
                <h4 className="font-christmas-sheep tracking-christmas text-seal-brown text-2xl mb-2">🌾 Gluten Free</h4>
                <p className="text-seal-brown text-lg">Pure rice. Light on stomach. Heavy on nostalgia.</p>
              </div>

              <div className="mt-8 p-8 bg-gradient-to-r from-seal-brown to-amber-900 text-white rounded-3xl text-center shadow-2xl transform hover:scale-105 transition-transform duration-300">
                <p className="text-5xl font-christmas-sheep tracking-christmas mb-3">Just ₹20</p>
                <p className="text-lg">25g pack | Lighter than you think</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="container mx-auto px-4 py-16 bg-gradient-to-b from-marigold to-yellow-400">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl md:text-6xl text-seal-brown text-center mb-4 font-bold">
            What Goes Into Every Crunch
          </h2>
          <p className="text-2xl font-christmas-sheep tracking-christmas text-seal-brown text-center mb-12">
            Just 5 Clean Ingredients
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            <div className="bg-white p-8 rounded-3xl shadow-xl text-center transform hover:rotate-3 hover:scale-110 transition-all duration-300">
              <div className="text-6xl mb-4">🍚</div>
              <h4 className="font-christmas-sheep tracking-christmas text-seal-brown text-xl mb-2">Rice Flour</h4>
              <p className="text-sm text-seal-brown">Pure & light</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl text-center transform hover:rotate-3 hover:scale-110 transition-all duration-300">
              <div className="text-6xl mb-4">🌿</div>
              <h4 className="font-christmas-sheep tracking-christmas text-seal-brown text-xl mb-2">Jeera</h4>
              <p className="text-sm text-seal-brown">Cumin goodness</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl text-center transform hover:rotate-3 hover:scale-110 transition-all duration-300">
              <div className="text-6xl mb-4">💎</div>
              <h4 className="font-christmas-sheep tracking-christmas text-seal-brown text-xl mb-2">Papad Khar</h4>
              <p className="text-sm text-seal-brown">Traditional magic</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl text-center transform hover:rotate-3 hover:scale-110 transition-all duration-300">
              <div className="text-6xl mb-4">🧂</div>
              <h4 className="font-christmas-sheep tracking-christmas text-seal-brown text-xl mb-2">Pink Salt</h4>
              <p className="text-sm text-seal-brown">Not regular salt</p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-xl text-center transform hover:rotate-3 hover:scale-110 transition-all duration-300 col-span-2 md:col-span-1">
              <div className="text-6xl mb-4">🌶️</div>
              <h4 className="font-christmas-sheep tracking-christmas text-seal-brown text-xl mb-2">Green Chillies</h4>
              <p className="text-sm text-seal-brown">Right kick</p>
            </div>
          </div>

          <div className="bg-seal-brown text-white rounded-3xl shadow-2xl p-10 text-center">
            <p className="text-4xl md:text-5xl font-christmas-sheep tracking-christmas mb-4">
              That's It. Nothing Else.
            </p>
            <p className="text-xl md:text-2xl">
              Ingredients rooted in tradition. Made for the hustlers, the nurturers, and everyone in between.
            </p>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-seal-brown text-center mb-12 font-christmas-sheep tracking-christmas">
            And If You're Still Counting Calories...
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-2xl p-10 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="bg-marigold rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-6 shadow-lg">
                <p className="text-6xl font-christmas-sheep tracking-christmas text-seal-brown">0.3g</p>
              </div>
              <p className="text-2xl font-bold text-seal-brown mb-2">Fat per serve</p>
              <p className="text-seal-brown">Practically guilt-free!</p>
            </div>

            <div className="bg-gradient-to-br from-seal-brown to-amber-900 rounded-3xl shadow-2xl p-10 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="bg-marigold rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-6 shadow-lg">
                <p className="text-7xl font-christmas-sheep tracking-christmas text-seal-brown">0</p>
              </div>
              <p className="text-2xl font-bold text-white mb-2">Cholesterol</p>
              <p className="text-white">Heart-friendly snacking</p>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-2xl p-10 text-center transform hover:scale-105 transition-transform duration-300">
              <div className="bg-marigold rounded-full w-32 h-32 mx-auto flex items-center justify-center mb-6 shadow-lg">
                <p className="text-7xl font-christmas-sheep tracking-christmas text-seal-brown">0</p>
              </div>
              <p className="text-2xl font-bold text-seal-brown mb-2">Oil drops used</p>
              <p className="text-seal-brown">Completely oil-free</p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-marigold to-yellow-400 rounded-3xl shadow-xl p-8 text-center">
            <p className="text-3xl md:text-4xl font-bold text-seal-brown">
              Your gut will actually thank you. 🙏
            </p>
          </div>
        </div>
      </section>

      {/* Nutrition Facts Section - Placeholder */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-4xl text-seal-brown text-center mb-8">
            Nutrition Facts
          </h2>
          <p className="text-center text-seal-brown">
            Detailed nutrition information will be added here
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
