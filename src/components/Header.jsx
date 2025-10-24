import React, { useState } from 'react';
import Logo from "../assets/Ecoavenstra1_logo.png";
import Navbar from './Navbar';

const Title = () => {
  return (
    <a href="/">
      <img
        className="h-12 px-4 pt-3"
        alt="logo"
        src={Logo}
      />
    </a>
  );
};

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  const closeSidebar =()=>{
    setIsOpen(false)
  }

  return (
    <div className='sticky top-0 flex w-full bg-[#000000]  h-14 justify-between items-center z-50'>
      <Title />
      <div className='hidden md:flex items-center mx-6'>
        <Navbar />
      </div>
      <button
        className='md:hidden text-white px-4 focus:outline-none'
        onClick={toggleSidebar}
      >
        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}></path>
        </svg>
      </button>
      <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className='fixed right-0 top-0 h-full w-64 bg-[#000000] p-4 shadow-lg'>
          <button
            className='text-white mb-4 focus:outline-none'
            onClick={toggleSidebar}
          >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18L18 6M6 6l12 12'></path>
            </svg>
          </button>
          <Navbar closeSidebar={closeSidebar} toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </div>
  );
};

export default Header;
