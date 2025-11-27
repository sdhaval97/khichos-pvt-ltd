import { useState } from 'react';

const Contact = () => {
  const [formType, setFormType] = useState('customer'); // 'customer' or 'distributor'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    company: '', // for distributor
    location: '', // for distributor
  });

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
    <div className="bg-marigold min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl text-seal-brown text-center mb-12">
            Get in Touch
          </h1>

          {/* Form Type Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setFormType('customer')}
              className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                formType === 'customer'
                  ? 'bg-seal-brown text-white'
                  : 'bg-white text-seal-brown hover:bg-gray-100'
              }`}
            >
              Customer Enquiry
            </button>
            <button
              onClick={() => setFormType('distributor')}
              className={`px-8 py-3 rounded-lg font-medium transition-colors ${
                formType === 'distributor'
                  ? 'bg-seal-brown text-white'
                  : 'bg-white text-seal-brown hover:bg-gray-100'
              }`}
            >
              Distributor/Importer
            </button>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-christmas-sheep text-seal-brown mb-6 text-center">
              {formType === 'customer' ? 'Customer Enquiry' : 'Become a Distributor'}
            </h2>
            <p className="text-center text-seal-brown mb-8">
              {formType === 'customer'
                ? 'Have questions about our products? We\'d love to hear from you!'
                : 'Interested in distributing KHiCHOS? Let\'s connect!'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-seal-brown font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-seal-brown"
                  placeholder="Your full name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-seal-brown font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-seal-brown"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-seal-brown font-medium mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-seal-brown"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Distributor-specific fields */}
              {formType === 'distributor' && (
                <>
                  <div>
                    <label htmlFor="company" className="block text-seal-brown font-medium mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-seal-brown"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-seal-brown font-medium mb-2">
                      Location/Region *
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-seal-brown"
                      placeholder="City, State, Country"
                    />
                  </div>
                </>
              )}

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-seal-brown font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-seal-brown resize-none"
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
                className="w-full bg-seal-brown text-white py-4 rounded-lg font-bold text-lg hover:bg-opacity-90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
