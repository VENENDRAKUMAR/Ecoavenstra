import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaBuilding } from 'react-icons/fa';

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    status: 'Pending'
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ text: '', type: '' });

    try {
      const requestData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        status: formData.status
      };

      const response = await fetch('https://ecoavenstra-be.onrender.com/api/v1/admin/enquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ 
          text: 'Thank you for your enquiry! We will get back to you soon.', 
          type: 'success' 
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          status: 'Pending'
        });
      } else {
        setMessage({ 
          text: data.message || 'Something went wrong. Please try again.', 
          type: 'error' 
        });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage({ 
        text: 'Network error. Please check your connection and try again.', 
        type: 'error' 
      });
    } finally {
      setLoading(false);
    }
  };

  const benefits = [
    {
      title: "Brand strengthening",
      icon: "🎯",
    },
    {
      title: "Endless business access",
      icon: "🌐",
    },
    {
      title: "Excellent market tools",
      icon: "🛠️",
    },
    {
      title: "Cost-effective Strategies",
      icon: "💰",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        {/* Left side - Text content */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Why a <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 text-transparent bg-clip-text">website or app</span> is needed<br />
            for your business
          </h1>
          <div className="text-cyan-400 text-lg">
            <p>WE ARE HERE FOR YOU!</p>
            <p className="text-2xl md:text-3xl font-semibold text-white">
              Get A Free Consultation 
            </p>
          </div>
          
          
          {/* Benefits Grid */}
          <div className="grid grid-cols-2 gap-6 mt-8">
            {benefits.map((benefit, index) => (
              <div key={index} 
                className="flex items-center space-x-3 p-4 bg-gray-800/50 rounded-lg border border-cyan-500/20 
                backdrop-blur-sm hover:border-cyan-500/40 transition-all duration-300 hover:shadow-lg 
                hover:shadow-cyan-500/10"
              >
                <span className="text-2xl">{benefit.icon}</span>
                <span className="text-cyan-100 font-medium">{benefit.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Form */}
        <div className="bg-gray-900/80 p-8 rounded-2xl border border-cyan-500/20 backdrop-blur-sm shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-500" />
              <input
                type="text"
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-lg 
                focus:outline-none focus:border-cyan-500 text-white placeholder-gray-400"
                placeholder="Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative">
              <FaPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-500" />
              <input
                type="tel"
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-lg 
                focus:outline-none focus:border-cyan-500 text-white placeholder-gray-400"
                placeholder="Contact Number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-500" />
              <input
                type="email"
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-lg 
                focus:outline-none focus:border-cyan-500 text-white placeholder-gray-400"
                placeholder="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="relative">
              <FaBuilding className="absolute left-3 top-1/2 -translate-y-1/2 text-cyan-500" />
              <textarea
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-cyan-500/20 rounded-lg 
                focus:outline-none focus:border-cyan-500 text-white placeholder-gray-400 min-h-[120px] resize-y"
                placeholder="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            {message.text && (
              <div className={`rounded-lg p-3 text-sm ${
                message.type === 'success' 
                  ? 'bg-emerald-500/20 text-emerald-200 border border-emerald-500/30' 
                  : 'bg-red-500/20 text-red-200 border border-red-500/30'
              }`}>
                {message.text}
              </div>
            )}
            
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-emerald-500 text-black font-bold 
              rounded-lg transition-all duration-300 ${
                loading 
                  ? 'opacity-70 cursor-not-allowed' 
                  : 'hover:shadow-lg hover:shadow-cyan-500/25'
              }`}
            >
              {loading ? 'Sending...' : 'Grab A Free Consultation With Us'}
            </button>
          </form>
        </div>
      </div>

      
    </section>
  );
};

export default EnquiryForm;
