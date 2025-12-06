import { useState, useEffect } from 'react';
import SEO from '../components/SEO';
import dadiImage from '../assets/Dadi Illustration 1.png';
import mockupImage from '../assets/Khichos Packaging Mock up 01 - edited.png';
import papadBowlImage from '../assets/papad-bowl.png';
import papadStackImage from '../assets/papad-stack.png';
import papadInPotImage from '../assets/papad-in-pot.png';
import papadPiece1 from '../assets/images/papad-piece-1-removebg-preview.png';
import papadPiece2 from '../assets/images/papad-piece-2-removebg-preview.png';
import customerSupportImage from '../assets/customer_support.png';
import partnerWithUsImage from '../assets/partner_with_us.png';

const Home = () => {
  const [showDadi, setShowDadi] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show Dadi when scrolled past the hero section (roughly 100vh)
      const scrollPosition = window.scrollY;
      const threshold = window.innerHeight * 0.8; // 80% of viewport height

      setShowDadi(scrollPosition > threshold);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SEO
        title="KHiCHOS - India's First Ready-to-Eat Roasted Papad | Zero Oil, Just Crunch"
        description="Discover KHiCHOS, India's first ready-to-eat roasted papad. No cooking, no frying, no waiting. Made with rice flour, naturally gluten-free, and just 5 clean ingredients. Only ₹20 for 25g pack."
        keywords="ready to eat papad, roasted papad, khichos, gluten free papad, healthy papad, rice papad, no oil papad, indian snacks, ready to eat snacks, clean label snacks"
        canonicalUrl="/"
      />
      <div className="bg-marigold min-h-screen relative" id="home">
      {/* Fixed Dadi Illustration - appears on scroll */}
      <img
        src={dadiImage}
        alt="Dadi"
        className={`fixed bottom-2 right-2 w-16 md:w-20 lg:w-24 z-50 pointer-events-none transition-all duration-500 ${
          showDadi ? 'translate-y-0 opacity-100' : 'translate-y-32 opacity-0'
        }`}
      />

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-2 pb-4 md:pt-4 md:pb-8 relative overflow-hidden">
        {/* Papad piece peeking from right side */}
        <img
          src={papadPiece1}
          alt=""
          className="absolute top-8 -right-16 md:-right-20 lg:-right-24 w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain pointer-events-none"
          style={{ transform: 'rotate(15deg)' }}
        />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto relative z-10">
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
              className="w-full max-w-xs md:max-w-sm h-auto object-cover drop-shadow-2xl transform hover:scale-105 transition-transform duration-300"
              style={{ objectPosition: '50% 5%' }}
            />
          </div>
        </div>
      </section>

      {/* About Section - Quick Product Overview */}
      <section id="about" className="py-16 md:py-24 bg-marigold relative overflow-hidden">
        {/* Papad piece peeking from left side */}
        <img
          src={papadPiece2}
          alt=""
          className="absolute top-8 -left-16 md:-left-20 lg:-left-24 w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain pointer-events-none"
          style={{ transform: 'rotate(-15deg)' }}
        />

        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-christmas-sheep tracking-christmas text-seal-brown mb-8">
              About KHiCHOS
            </h2>
            <p className="text-xl md:text-2xl text-seal-brown mb-12 leading-relaxed max-w-3xl mx-auto">
              India's first ready-to-eat roasted papad. Traditional taste, modern convenience. Made with just 5 clean ingredients, zero oil, and ready in 0 seconds.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-marigold rounded-2xl p-6 transform hover:scale-105 transition-transform">
                <div className="text-4xl md:text-5xl font-bold text-seal-brown mb-2">0</div>
                <div className="text-sm md:text-base text-seal-brown font-medium">Oil</div>
              </div>
              <div className="bg-marigold rounded-2xl p-6 transform hover:scale-105 transition-transform">
                <div className="text-4xl md:text-5xl font-bold text-seal-brown mb-2">0</div>
                <div className="text-sm md:text-base text-seal-brown font-medium">Cholesterol</div>
              </div>
              <div className="bg-marigold rounded-2xl p-6 transform hover:scale-105 transition-transform">
                <div className="text-4xl md:text-5xl font-bold text-seal-brown mb-2">5</div>
                <div className="text-sm md:text-base text-seal-brown font-medium">Ingredients</div>
              </div>
              <div className="bg-marigold rounded-2xl p-6 transform hover:scale-105 transition-transform">
                <div className="text-4xl md:text-5xl font-bold text-seal-brown mb-2">₹20</div>
                <div className="text-sm md:text-base text-seal-brown font-medium">25g Pack</div>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-seal-brown text-white rounded-2xl p-8">
                <div className="text-5xl mb-4">🍚</div>
                <h3 className="text-xl font-christmas-sheep tracking-christmas mb-3">100% Rice</h3>
                <p className="text-sm">Naturally gluten-free. Light on stomach, heavy on nostalgia.</p>
              </div>
              <div className="bg-seal-brown text-white rounded-2xl p-8">
                <div className="text-5xl mb-4">🔥</div>
                <h3 className="text-xl font-christmas-sheep tracking-christmas mb-3">Roasted, Not Fried</h3>
                <p className="text-sm">Zero oil. Pure roasted goodness. Just 0.3g fat per serve.</p>
              </div>
              <div className="bg-seal-brown text-white rounded-2xl p-8">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-xl font-christmas-sheep tracking-christmas mb-3">Ready to Eat</h3>
                <p className="text-sm">No cooking. No waiting. Open the pack and crunch.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section - Full Narrative */}
      <section id="story" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto relative">
            {/* Section 1: The Nostalgia Hook */}
            <div className="mb-16 md:mb-24 relative" style={{ zIndex: 10 }}>
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-christmas-sheep tracking-christmas text-seal-brown mb-8 md:mb-12 leading-tight text-center">
                Your Thali is Just Khali Without It.
              </h2>

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
                  <div className="bg-gradient-to-r from-seal-brown to-amber-900 rounded-2xl md:rounded-3xl shadow-2xl p-8 md:p-10 lg:p-12 relative overflow-hidden">
                    {/* Papad in Pot - Mobile only, bottom right corner */}
                    <div className="lg:hidden absolute right-2 bottom-2 opacity-20">
                      <img
                        src={papadInPotImage}
                        alt="Papad in Pot"
                        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 object-contain"
                      />
                    </div>

                    <div className="relative z-10">
                      <h3 className="text-3xl sm:text-4xl md:text-5xl font-christmas-sheep tracking-christmas text-white mb-6">
                        We Traded Legacy for Convenience.
                      </h3>
                      <div className="space-y-4 md:space-y-6">
                        <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed">
                          Slowly, we gave in. The "easy, greasy" fried snacks took over. Aloo and Maida crept into our diets because they were convenient. Our legacy got lost in the noise of "instant" everything.
                        </p>
                        <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed">
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
                  <div className="bg-gradient-to-r from-seal-brown to-amber-900 rounded-2xl md:rounded-3xl shadow-2xl p-8 md:p-10 lg:p-12">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-christmas-sheep tracking-christmas text-white mb-6">
                      For the Hustlers, The Nurturers, and Everyone In Between.
                    </h3>
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

            {/* Closing Quote - CENTER */}
            <div className="text-center max-w-4xl mx-auto relative" style={{ zIndex: 10 }}>
              <div className="bg-gradient-to-r from-seal-brown to-amber-900 rounded-2xl md:rounded-3xl shadow-2xl p-8 md:p-10 lg:p-12">
                <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-christmas-sheep tracking-christmas text-white leading-tight">
                  "Light on Fat. Heavy on Nostalgia."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-marigold relative">
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
                  <h3 className="text-4xl md:text-5xl font-christmas-sheep tracking-christmas text-seal-brown mb-4">
                    Customer Support
                  </h3>
                  <p className="text-2xl md:text-3xl text-seal-brown leading-relaxed italic">
                    We are incomplete without you,<br />
                    Would love to hear from you.
                  </p>
                  <div className="pt-6">
                    <p className="text-xl text-seal-brown font-medium mb-6">
                      Feel free to reach out to us at below co-ordinates:
                    </p>
                    <div className="space-y-4 max-w-sm">
                      <div className="flex items-center gap-4 bg-seal-brown text-white p-4 rounded-xl">
                        <span className="text-3xl">📞</span>
                        <a href="tel:18008900370" className="text-xl hover:text-marigold transition-colors">
                          1800 8900 370
                        </a>
                      </div>
                      <div className="flex items-center gap-4 bg-seal-brown text-white p-4 rounded-xl">
                        <span className="text-3xl">📧</span>
                        <a href="mailto:customercare@khichos.com" className="text-base md:text-xl hover:text-marigold transition-colors">
                          customercare@khichos.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Image */}
                <div className="flex items-center justify-center">
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
                  <h3 className="text-4xl md:text-5xl font-christmas-sheep tracking-christmas text-seal-brown mb-4">
                    Business
                  </h3>
                  <p className="text-2xl md:text-3xl text-seal-brown leading-relaxed italic">
                    Welcome, Let's Grow Together!!!
                  </p>
                  <div className="pt-6">
                    <p className="text-lg md:text-xl text-seal-brown font-medium mb-4">
                      If you are a Distributor, Exporter, Importer or wanting to place Bulk Orders
                    </p>
                    <p className="text-lg text-seal-brown mb-6">
                      You may reach out directly to our Founder and MD at below co-ordinates:
                    </p>
                    <div className="space-y-4 max-w-sm">
                      <div className="flex items-center gap-4 bg-seal-brown text-white p-4 rounded-xl">
                        <span className="text-3xl">📞</span>
                        <a href="tel:9004514169" className="text-xl hover:text-marigold transition-colors">
                          90045 14169
                        </a>
                      </div>
                      <div className="flex items-center gap-4 bg-seal-brown text-white p-4 rounded-xl">
                        <span className="text-3xl">📧</span>
                        <a href="mailto:jay@khichos.com" className="text-xl hover:text-marigold transition-colors">
                          jay@khichos.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Image */}
                <div className="flex items-center justify-center">
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
                  <p className="text-2xl md:text-3xl text-seal-brown leading-relaxed italic">
                    Looking for a place in your heart
                  </p>
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
                      href="https://maps.app.goo.gl/ZkJzNWJdZtv7vXZq7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-6 bg-seal-brown text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
                    >
                      📍 Open in Google Maps
                    </a>
                  </div>
                </div>

                {/* Right: Google Maps */}
                <div className="rounded-3xl overflow-hidden shadow-2xl">
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
      <section id="disclaimer" className="py-16 md:py-24 bg-seal-brown relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-christmas-sheep tracking-christmas text-white mb-4">
              Disclaimers
            </h2>
            <p className="text-xl md:text-2xl text-marigold">
              Stay Informed, Stay Safe
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-12">
            {/* Copyright */}
            <div id="disclaimer-copyright" className="bg-marigold rounded-3xl shadow-2xl p-8 md:p-12 scroll-mt-24">
              <h3 className="text-3xl md:text-4xl font-christmas-sheep tracking-christmas text-seal-brown mb-6">
                Copyright
              </h3>
              <p className="text-base md:text-lg text-seal-brown leading-relaxed">
                All content included in or made available through any of the availed service, such as text, graphics, logos, button icons, images, audio clips and data compilations is the property of Khichos Foods (OPC) Private Limited and shall be protected and governed by laws of the land in India. All unwarranted copies of content are strictly prohibited and illegal.
              </p>
            </div>

            {/* Privacy */}
            <div id="disclaimer-privacy" className="bg-marigold rounded-3xl shadow-2xl p-8 md:p-12 scroll-mt-24">
              <h3 className="text-3xl md:text-4xl font-christmas-sheep tracking-christmas text-seal-brown mb-6">
                Privacy
              </h3>
              <div className="space-y-4 text-base md:text-lg text-seal-brown leading-relaxed">
                <p>
                  At Khichos Foods (OPC) Private Limited, we value your privacy and are committed to protecting your personal information.
                </p>
                <p className="font-medium">Information Collection:</p>
                <p>
                  We collect only necessary information when you interact with our website or services, including contact details for customer support and business inquiries.
                </p>
                <p className="font-medium">Use of Information:</p>
                <p>
                  Your information is used solely for the purpose of responding to your inquiries, processing orders, and improving our services. We do not sell, trade, or share your personal information with third parties without your consent.
                </p>
                <p className="font-medium">Data Security:</p>
                <p>
                  We implement appropriate security measures to protect your information from unauthorized access, alteration, or disclosure.
                </p>
                <p>
                  For any privacy-related concerns, please contact us at the official contact details provided on this website.
                </p>
              </div>
            </div>

            {/* Scam Alert */}
            <div id="disclaimer-scam" className="bg-marigold rounded-3xl shadow-2xl p-8 md:p-12 scroll-mt-24 border-4 border-red-600">
              <h3 className="text-3xl md:text-4xl font-christmas-sheep tracking-christmas text-red-700 mb-6">
                ⚠️ Scam Alert
              </h3>
              <div className="space-y-4 text-base md:text-lg text-seal-brown leading-relaxed">
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
                <p className="font-bold text-red-700">
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

      </div>
    </>
  );
};

export default Home;
