import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    text: "Ecoavenstra has been instrumental in helping us scale our business operations. Their team's commitment and expertise in web development exceeded our expectations. We were particularly impressed with their ability to understand our unique requirements and deliver a tailored solution. I highly recommend them to anyone looking for quality service and professionalism.",
    name: "Ravi Kumar",
    work: "Owner, RK Constructions",
    
  },
  {
    text: "Working with Ecoavenstra was a refreshing experience. Their team demonstrated a deep understanding of our project needs and delivered a high-quality product on time. The communication was seamless, and they were always available to address our concerns. I would not hesitate to work with them again in the future.",
    name: "Amanda Johnson",
    work: "Project Manager, GreenTech Innovations",
    
  },
  {
    text: "The team at Ecoavenstra has truly helped me bring my vision to life. From the initial consultation to the final product, they were professional, creative, and dedicated. Their design and development skills are top-notch, and I’m thrilled with the results. EcoAvenstra has earned my trust, and I look forward to continuing our partnership.",
    name: "Ankit Mehta",
    work: "Entrepreneur, Ankit Fashions",
   
  },
  {
    text: "Ecoavenstra provided exceptional service and delivered a solution that far surpassed our expectations. Their attention to detail, responsiveness, and technical expertise made the entire process smooth and enjoyable. The end product has received rave reviews from our users, and we couldn’t be happier with the outcome.",
    name: "Sophie Martin",
    work: "CEO, Blue Horizon Ventures",
    
  },
  {
    text: "Ecoavenstra’s team is highly skilled and professional. They took the time to understand our complex requirements and delivered a solution that perfectly aligned with our business goals. Their dedication to quality and customer satisfaction is evident in the work they do. I highly recommend EcoAvenstra to anyone looking for a reliable technology partner.",
    name: "Rajesh Sharma",
    work: "CTO, Tech Innovators Pvt Ltd",
   
  },
];

const Recommendation = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-[#101010]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 pr-8">
            <h2 className="text-blue-500 text-lg font-bold uppercase">Testimonial</h2>
            <h3 className="text-3xl font-bold text-gray-300 mt-2 mb-4">Trust We Earn</h3>
            <p className="text-gray-200 leading-relaxed">
              We are working as a leading web-based application  in India with 100+ happy customer's businesses with 100% satisfaction. At Ecoavenstra, we offer to you various opportunities to build and care for your start-up or enterprise with advanced technology and we also offer you a broad range of UI/UX development with design services based on business requirements. First, we earn trust in return.
            </p>
          </div>
          <div className="w-full md:w-1/2 bg-white shadow-md rounded-lg p-8 mt-8 md:mt-0">
            <div
              className={`transition-opacity duration-500 ease-out ${fade ? 'opacity-100' : 'opacity-0'}`}
              key={currentTestimonial}
            >
              <h4 className="text-gray-500 text-sm font-bold uppercase">Our Happy Clients</h4>
              <h5 className="text-xl font-bold text-gray-800 mt-2 mb-4">What Client's Say?</h5>
              <p className="text-gray-600 leading-relaxed">{testimonials[currentTestimonial].text}</p>
              <div className="mt-4 flex items-center">
                
                <div>
                  <p className="text-gray-800 font-bold">{testimonials[currentTestimonial].name}</p>
                  <p className="text-gray-500">{testimonials[currentTestimonial].work}</p>
                  <div className="flex mt-2">
                    {[...Array(5)].map((_, starIndex) => (
                      <svg key={starIndex} className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.198 3.686a1 1 0 00.95.69h3.887c.969 0 1.371 1.24.588 1.81l-3.148 2.324a1 1 0 00-.364 1.118l1.198 3.686c.3.921-.755 1.688-1.54 1.118l-3.148-2.324a1 1 0 00-1.175 0l-3.148 2.324c-.785.57-1.84-.197-1.54-1.118l1.198-3.686a1 1 0 00-.364-1.118L2.228 9.113c-.783-.57-.38-1.81.588-1.81h3.887a1 1 0 00.95-.69l1.198-3.686z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full mx-1 ${index === currentTestimonial ? 'bg-gray-800' : 'bg-gray-300'}`}
                  onClick={() => setCurrentTestimonial(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommendation;
