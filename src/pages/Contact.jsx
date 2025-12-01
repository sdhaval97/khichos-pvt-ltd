import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SEO from '../components/SEO';
import dadiImage from '../assets/Dadi Illustration 1.png';

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formType, setFormType] = useState('customer'); // 'customer' or 'distributor'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    company: '', // for distributor
    location: '', // for distributor
  });

  // Set form type based on URL query parameter
  useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'customer' || type === 'distributor') {
      setFormType(type);
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic will be added later
    console.log('Form submitted:', { formType, ...formData });
    alert('Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <SEO
        title="Contact Us - KHiCHOS | Customer Enquiry & Distribution Partnership"
        description="Get in touch with KHiCHOS for customer enquiries or distribution partnership opportunities. Bring India's first ready-to-eat roasted papad to your region."
        keywords="contact khichos, khichos distributor, khichos partnership, buy khichos, khichos customer service, papad distributor india"
        canonicalUrl="/contact"
      />
      <div className="bg-gradient-to-br from-marigold via-orange-200 to-yellow-300 min-h-screen py-16 relative">
      {/* Fixed Dadi Illustration */}
      <img
        src={dadiImage}
        alt="Dadi"
        className="fixed bottom-2 right-2 w-16 md:w-20 lg:w-24 z-50 pointer-events-none"
      />
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-7xl font-christmas-sheep tracking-christmas text-seal-brown mb-6">
              Let's Talk!
            </h1>
            <p className="text-2xl md:text-3xl text-seal-brown">
              Questions? Ideas? Want to bring KHiCHOS to your region?
            </p>
          </div>

          {/* Form Type Toggle */}
          <div className="flex justify-center gap-4 mb-10">
            <button
              onClick={() => setFormType('customer')}
              className={`px-10 py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 ${
                formType === 'customer'
                  ? 'bg-gradient-to-r from-seal-brown to-amber-900 text-white shadow-2xl'
                  : 'bg-white text-seal-brown hover:shadow-xl'
              }`}
            >
              <span className="text-2xl mr-2">💬</span> Customer Enquiry
            </button>
            <button
              onClick={() => setFormType('distributor')}
              className={`px-10 py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 ${
                formType === 'distributor'
                  ? 'bg-gradient-to-r from-seal-brown to-amber-900 text-white shadow-2xl'
                  : 'bg-white text-seal-brown hover:shadow-xl'
              }`}
            >
              <span className="text-2xl mr-2">🤝</span> Partner With Us
            </button>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-10 md:p-14 border-t-8 border-seal-brown">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">
                {formType === 'customer' ? '📧' : '🚀'}
              </div>
              <h2 className="text-4xl font-christmas-sheep tracking-christmas text-seal-brown mb-4">
                {formType === 'customer' ? 'We\'re All Ears' : 'Let\'s Grow Together'}
              </h2>
              <p className="text-lg text-seal-brown">
                {formType === 'customer'
                  ? 'Got questions about KHiCHOS? Drop us a message!'
                  : 'Want to bring KHiCHOS to your market? We\'d love to partner!'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-seal-brown font-bold text-lg mb-3">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-marigold focus:border-seal-brown transition-all text-lg"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-seal-brown font-bold text-lg mb-3">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-marigold focus:border-seal-brown transition-all text-lg"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-seal-brown font-bold text-lg mb-3">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-marigold focus:border-seal-brown transition-all text-lg"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Distributor-specific fields */}
              {formType === 'distributor' && (
                <>
                  <div>
                    <label htmlFor="company" className="block text-seal-brown font-bold text-lg mb-3">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-marigold focus:border-seal-brown transition-all text-lg"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-seal-brown font-bold text-lg mb-3">
                      Location/Region *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-marigold focus:border-seal-brown transition-all text-lg"
                      placeholder="City, State, Country"
                    />
                  </div>
                </>
              )}

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-seal-brown font-bold text-lg mb-3">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-marigold focus:border-seal-brown resize-none text-lg"
                  placeholder={
                    formType === 'customer'
                      ? 'How can we help you?'
                      : 'Tell us about your distribution network...'
                  }
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-seal-brown to-amber-900 text-white py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transform hover:scale-105 transition-all"
              >
                {formType === 'customer' ? '📤 Send Message' : '🚀 Let\'s Partner Up!'}
              </button>
            </form>
          </div>

          {/* Contact Details and Map Section */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border-t-8 border-seal-brown">
              <h3 className="text-3xl font-christmas-sheep tracking-christmas text-seal-brown mb-6">
                📍 Visit Us
              </h3>
              <div className="space-y-4 text-seal-brown">
                <div>
                  <p className="font-bold text-xl mb-2">Mr. Jay Ganatra</p>
                  <p className="text-lg">Khichos Foods (OPC) Private Limited</p>
                </div>
                <div className="text-lg leading-relaxed">
                  <p>114, 1st Floor,</p>
                  <p>Alpine Industrial Estate,</p>
                  <p>Military Road, Marol,</p>
                  <p>Andheri (E), Mumbai,</p>
                  <p>Maharashtra - 400059</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-t-8 border-seal-brown">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0666666666665!2d72.8697!3d19.1176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8331f0c579f%3A0x5f3e3e3e3e3e3e3e!2sAlpine%20Industrial%20Estate%2C%20Military%20Road%2C%20Marol%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra%20400059!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '350px' }}
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
    </>
  );
};

export default Contact;
