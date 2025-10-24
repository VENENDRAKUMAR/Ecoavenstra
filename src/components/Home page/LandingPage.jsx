import React, { useState, useEffect } from 'react';
import background_1 from '../../assets/background_1.mp4';
import Social from './Social';
import Modal from './Modal';
import ContactForm from '../ContactForm';
import TimeCard from './TimeCard';

const LandingPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsMobile(window.innerWidth > 960);
    };

    checkScreenWidth(); // Check initially

    window.addEventListener('resize', checkScreenWidth); // Add resize listener
    return () => window.removeEventListener('resize', checkScreenWidth); // Cleanup
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative h-screen">
      <div className="w-full absolute inset-0 overflow-hidden">
        <video className="videoTag w-full h-full object-cover" autoPlay loop muted>
          <source src="https://res.cloudinary.com/da17aac55/video/upload/v1742571096/background_1_vmaisy.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4">
        <div className="text-white font-bold flex flex-col sm:flex-row gap-2 text-3xl sm:text-5xl heading pt-10 text-center">
          <div>Elevate your</div>
          <div className="bg-gradient-to-r z-10 md:h-16 from-blue-600 via-green-500 to-blue-600 text-transparent bg-clip-text">
            Digital Presence
          </div>
          <div>with Ecoavenstra!</div>
        </div>

        <div className="py-4 sm:py-[2%] sub-heading text-center">
          <ul className="flex flex-col sm:flex-row gap-4 sm:gap-20 font-semibold text-lg sm:text-xl">
            <li>Landing Page & Portfolio Development</li>
            <li>Web / Software Design & Development</li>
          </ul>
        </div>

        <div className="py-4 sm:pb-[10%] button text-center">
          <button
            className="bg-blue-700 hover:bg-green-600 text-white font-bold text-lg py-2 px-6 sm:px-10 rounded-full"
            onClick={openModal}
          >
            Get in Touch
          </button>
        </div>
      </div>

      <div className="absolute -bottom-24 left-20 sm:bottom-auto sm:left-auto flex sm:justify-start z-20">
        <Social />
      </div>

      {/* {isMobile && (
        <div className="absolute bottom-24 right-10">
          <TimeCard />
        </div>
      )} */}

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ContactForm />
      </Modal>
    </div>
  );
};

export default LandingPage;
