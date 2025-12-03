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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  // Set form type based on URL query parameter
  useEffect(() => {
    const type = searchParams.get('type');
    if (type === 'customer' || type === 'distributor') {
      setFormType(type);
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Select the appropriate Google Sheets URL based on form type
      const sheetUrl = formType === 'customer'
        ? import.meta.env.VITE_GOOGLE_SHEETS_CUSTOMER_URL
        : import.meta.env.VITE_GOOGLE_SHEETS_DISTRIBUTOR_URL;

      if (!sheetUrl || sheetUrl.includes('YOUR_')) {
        throw new Error('Google Sheets URL not configured. Please check your .env file.');
      }

      // Prepare form data
      const submitData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      };

      // Add distributor-specific fields if applicable
      if (formType === 'distributor') {
        submitData.company = formData.company;
        submitData.location = formData.location;
      }

      // Submit to Google Sheets using fetch with no-cors mode
      await fetch(sheetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submitData),
      });

      // Note: With no-cors, we can't read the response, so we assume success
      setSubmitStatus('success');

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        company: '',
        location: '',
      });

      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');

      // Clear error message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
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
      <div className="bg-marigold min-h-screen py-16 relative">
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
              {formType === 'customer'
                ? 'Questions? Ideas? We\'d love to hear from you!'
                : 'Want to bring KHiCHOS to your region? Let\'s partner up!'}
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

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-100 border-2 border-green-500 text-green-800 px-6 py-4 rounded-2xl mb-6">
                <p className="font-bold text-lg">✅ Success!</p>
                <p>Thank you for your message! We&apos;ll get back to you soon.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-100 border-2 border-red-500 text-red-800 px-6 py-4 rounded-2xl mb-6">
                <p className="font-bold text-lg">❌ Error</p>
                <p>Something went wrong. Please try again or contact us directly.</p>
              </div>
            )}

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
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-seal-brown to-amber-900 text-white py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transform hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span>⏳ Sending...</span>
                ) : (
                  <span>{formType === 'customer' ? '📤 Send Message' : '🚀 Let\'s Partner Up!'}</span>
                )}
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
                <div className="pt-4 space-y-3 border-t-2 border-gray-200">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📧</span>
                    <a href="mailto:jay@khichos.com" className="text-lg hover:text-amber-900 transition-colors">
                      jay@khichos.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    <a href="tel:+919819714169" className="text-lg hover:text-amber-900 transition-colors">
                      +91 98197 14169
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-t-8 border-seal-brown">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.743022637546!2d72.88393113169653!3d19.118926259244667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c81069819ce3%3A0xa2d5eb01f9601abf!2sAlpine%20Industrial%20Estate!5e0!3m2!1sen!2sin!4v1764596486172!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '300px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Khichos Foods Location"
              ></iframe>
              <div className="p-4">
                <a
                  href="https://maps.app.goo.gl/your-location-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-seal-brown to-amber-900 text-white py-3 rounded-xl font-bold text-center hover:shadow-xl transform hover:scale-105 transition-all"
                >
                  🗺️ Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Contact;
