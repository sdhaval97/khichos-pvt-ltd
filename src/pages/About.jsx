const About = () => {
  return (
    <div className="bg-marigold min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl text-seal-brown text-center mb-12">
            Our Story
          </h1>

          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 space-y-8">
            <div>
              <h2 className="text-3xl font-christmas-sheep text-seal-brown mb-4">
                The Khichos Story
              </h2>
              <p className="text-seal-brown leading-relaxed mb-4">
                Papads have always been part of our Indian Meal Culture. Yet it never was this easy to have.
              </p>
              <p className="text-seal-brown leading-relaxed mb-4">
                From grinding, steaming, kneading, rolling to drying and cooking, miss a step and there is no papad for you.
                For decades, that's just how it was – and it still is. We just did the hard work for you.
              </p>
              <p className="text-seal-brown leading-relaxed mb-4">
                <span className="font-bold">KHiCHOS</span> - papads that don't need waiting, cooking or anyone standing in the kitchen.
                They're ready when you are.
              </p>
            </div>

            <div className="bg-marigold bg-opacity-20 p-6 rounded-lg">
              <p className="text-xl font-christmas-sheep text-seal-brown text-center">
                Your thali is just khali without Khichos
              </p>
            </div>

            <div>
              <p className="text-seal-brown leading-relaxed mb-4">
                Honestly, your thali is just khali without Khichos, because no Indian meal feels complete without something crunchy on the side.
              </p>
              <p className="text-seal-brown leading-relaxed mb-4">
                From lunch plates to chai breaks to midnight binges, they just fit in - always.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-christmas-sheep text-seal-brown mb-4">
                The Guilt-Free Crunch
              </h3>
              <p className="text-seal-brown leading-relaxed mb-4">
                And if you're still counting calories, here's the fun:
              </p>
              <ul className="list-disc list-inside space-y-2 text-seal-brown ml-4">
                <li>Roasted, not fried</li>
                <li>Gluten Free</li>
                <li>Light & Crisp</li>
                <li>Made with just five clean traditional ingredients</li>
                <li>Just 0.3g fat per serve and zero cholesterol</li>
              </ul>
              <p className="text-seal-brown leading-relaxed mt-4">
                Your gut will actually thank you.
              </p>
            </div>

            <div className="bg-seal-brown text-white p-6 rounded-lg">
              <p className="text-xl font-christmas-sheep text-center mb-2">
                They're not chips. They're not nachos.
              </p>
              <p className="text-lg text-center">
                KHiCHOS don't fit into a category on the shelf. They are the category.
              </p>
              <p className="text-xl font-bold text-center mt-4 text-marigold">
                Our Guilt Free Desi Pride.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
