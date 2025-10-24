import React from "react";
import bgimage from "/src/assets/bg-about.png";
import logo1 from "/src/assets/Ecoavenstra_logo.png";
import logo2 from "/src/assets/Ecoavenstra1_logo.png";
import office from "/src/assets/office-img.png";
import WhyChooseUs from "./Home page/WhyChooseUs";
import Service_section from "./Home page/Service_section";
import EnquiryForm from "./Home page/EnquiryForm";

const stats = [
  { value: "4+", label: "Years In Business" },
  { value: "45+", label: "Happy Clients" },
  { value: "50+", label: "Projects Completed" },
  { value: "40k+", label: "Line of Code" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-black text-gray-800">
      {/* Header Section */}
      <div className="bg-black h-auto md:h-96 text-white py-8 flex justify-center relative">
        <div className="absolute inset-0">
          <img 
            src={bgimage} 
            alt="" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 justify-center flex flex-col items-center text-center relative z-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            About <span className="text-blue-600">Us</span>
          </h1>
          <p className="text-base md:text-lg max-w-2xl">
            Unlock the potential of your concept, enterprise, aspiration, and bring it to
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Text Section */}
        <div className="order-2 md:order-1">
          <h2 className="text-2xl md:text-3xl text-white font-semibold mb-4 flex items-center gap-2">
            Who <span className="text-blue-700">We Are</span>
          </h2>
          <p className="text-[#868686] leading-relaxed mb-6">
            Ecoavenstra stands out as the ideal partner for your digital journey, offering a comprehensive range of web solutions and software solutions tailored to your business needs. From web design and development to e-commerce solutions, mobile apps, and digital marketing, we provide everything you need to establish a strong online presence. What sets us apart is our commitment to delivering affordable excellence—visually stunning and user-friendly websites that align with your brand identity, all without exceeding your budget. Backed by a team of skilled professionals, we focus on empowering businesses with innovative strategies and a customer-centric approach to unlock their full potential in the digital world. With a proven track record as a leading web design company in India, Ecoavenstra ensures end-to-end support, guiding you from concept to execution. Trust us to transform your online presence with the perfect blend of creativity, technology, and strategy.
          </p>
          <button className="w-full md:w-auto mt-6 bg-[#1c3987] text-white px-6 py-2 rounded hover:bg-blue-700 transition duration-300">
            Learn More
          </button>
        </div>

        {/* Image Section */}
        <div className="order-1 md:order-2 w-full max-w-sm mx-auto flex flex-col shadow-lg shadow-[#5e84bd] rounded-3xl bg-[#161616] gap-4 py-10">
          <div className="text-white font-bold text-xl bg-[#1c3987] px-2 rounded-md self-center">
            Our Brand Identities
          </div>
          <div className="w-48 md:w-60 mx-auto">
            <img 
              src= {logo1}
              alt="Ecoavenstra Logo" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-48 md:w-60 mx-auto">
            <img 
              src= {logo2}
              alt="Ecoavenstra Secondary Logo" 
              className="w-full h-auto"
            />
          </div>
          <div className="text-white font-bold text-center">By Ecoavenstra Hr Infotech Pvt.Ltd.</div>
        </div>
      </main>

      {/* Number Section */}
      <div className="bg-black/90 rounded-2xl p-4 md:p-8 mx-4 md:mx-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="py-4">
              <div className="text-3xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-lg text-gray-200">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <WhyChooseUs />
      <Service_section/>

      {/* Feature Section */}
      <div className="bg-[#101010] rounded-3xl mx-4 md:mx-20 p-6 md:p-12 my-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative aspect-square w-full max-w-2xl mx-auto">
            <img
              src={office}
              alt="Isometric illustration of office workspace"
              className="object-contain w-full h-auto"
            />
          </div>
          <div className="space-y-8">
            <section className="space-y-4">
              <h2 className="text-2xl md:text-4xl font-bold text-white">Mission</h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                At Ecoavenstra, our mission is to help businesses of all sizes establish a strong and effective online presence through our innovative web development solutions. We aim to deliver customized and high-quality digital products that meet the specific needs of each client, while also providing excellent customer service and support.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl md:text-4xl font-bold text-white">Vision</h2>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                Our vision at Ecoavenstra is to become a leading web development company that is recognized for our expertise, innovation, and commitment to client success. We strive to empower businesses with the tools they need to thrive in the digital age, while also forming a collaborative and growth-oriented company culture that values creativity, integrity, and excellence.
              </p>
            </section>
          </div>
        </div>
      </div>


      <EnquiryForm />

      {/* Consultation Section */}
      <div className="px-4 md:px-16">
      <div className="bg-[#151515] w-full rounded-3xl p-6 md:p-8">
  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
    {/* Text Section */}
    <div className="text-center md:text-left space-y-4 flex-grow">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
        Get Free Consultation Now!
      </h2>
      <p className="text-gray-400 text-sm sm:text-base md:text-lg">
        Let's create a powerful website that grows with your business.
      </p>
    </div>

    {/* Button Section */}
    <div className="flex-shrink-0">
      <a href="tel:+919752505639" className="block">
        <button
          className="text-white border bg-[#1c3987] border-white hover:bg-green-600 hover:text-black transition-colors rounded-full text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4"
        >
          Consult Now
        </button>
      </a>
    </div>
  </div>
</div>
</div>

    </div>
  );
};

export default About;