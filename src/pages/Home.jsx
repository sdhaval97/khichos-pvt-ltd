const Home = () => {
  return (
    <div className="bg-marigold min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-7xl text-seal-brown mb-6">
          India's First Ready-to-Eat Roasted Papad
        </h1>
        <p className="text-2xl md:text-3xl font-christmas-sheep text-seal-brown mb-8">
          Your thali is just khali without KHiCHOS
        </p>
        <p className="text-lg md:text-xl text-seal-brown max-w-3xl mx-auto mb-8">
          No Cooking. No Waiting. Just Crunch.
        </p>
      </section>

      {/* Product Section - Will add details when you share product info */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-4xl text-seal-brown text-center mb-8">
            The Papad You Don't Need to Wait For
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Image Placeholder */}
            <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500">Product Image</p>
            </div>

            {/* Product Details */}
            <div>
              <h3 className="text-3xl font-christmas-sheep text-seal-brown mb-4">
                KHiCHOS
              </h3>
              <p className="text-seal-brown mb-4">
                Ready-to-eat roasted rice papad. Clean, crisp, and guilt-free.
              </p>

              <div className="space-y-4">
                <div className="bg-marigold bg-opacity-20 p-4 rounded">
                  <h4 className="font-bold text-seal-brown">Ready to Eat</h4>
                  <p className="text-sm text-seal-brown">Just open and enjoy. No cooking needed.</p>
                </div>

                <div className="bg-marigold bg-opacity-20 p-4 rounded">
                  <h4 className="font-bold text-seal-brown">Roasted, Not Fried</h4>
                  <p className="text-sm text-seal-brown">Only 0.3g fat per serving. Zero oil.</p>
                </div>

                <div className="bg-marigold bg-opacity-20 p-4 rounded">
                  <h4 className="font-bold text-seal-brown">Clean Label</h4>
                  <p className="text-sm text-seal-brown">Just 5 ingredients: Rice, Jeera, Papad Khar, Pink Salt, Green Chillies</p>
                </div>

                <div className="bg-marigold bg-opacity-20 p-4 rounded">
                  <h4 className="font-bold text-seal-brown">Gluten Free</h4>
                  <p className="text-sm text-seal-brown">Pure rice. No maida, no udad.</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-seal-brown text-white rounded">
                <p className="text-sm">Price: ₹20 | Weight: 25g</p>
              </div>
            </div>
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
