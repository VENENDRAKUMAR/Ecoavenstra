import { useState, useEffect, useRef } from "react"
import AddBazaar from "/src/assets/AddBazaar.png";
import MarketPlace from "/src/assets/Market.png";
import EventX from "/src/assets/EventX.png";
import LuxeEstate from "/src/assets/RE1.png";
import PrestigeEstate from "/src/assets/RE2.png"; 
import laisalife from "/src/assets/laisalife.png";
import VdoAds from "/src/assets/VdoAds.png";
import Ecoavenstra from "/src/assets/image.png";

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Sample project data - replace with your own
  const projects = [
    {
      id: 12,
      title: "Ecoavenstra",
      description:
        "Ecoavenstra is a leading provider of innovative solutions in the field of environmental technology, specializing in sustainable practices and eco-friendly products.",
      image: Ecoavenstra, // Replace with your image path
      link: "https://www.ecoavenstra.com/",
    },
   
    {
      id: 1,
      title: "LaisaLife Sciences Pvt Ltd",
      description:
        "LaisaLife Sciences Pvt Ltd is a leading provider of innovative solutions in the life sciences industry, specializing in research and development, manufacturing, and distribution of high-quality products.",
      image: laisalife, // Replace with your image path
      link: "https://www.laisalife.com/",
    },
    {
      id: 2,
      title: "VdoAds",
      description:
        "VdoAds is a plateform where you can create a post and sell your product. It is built with Next.js, Framer Mortion , Redux , Express.js, Node.js, Typescript and Tailwind CSS.",
      image: VdoAds, // Replace with your image path
      link: "https://example.com/project1",
    },
    {
      id: 3,
      title: "EventX",
      description:
        "Eventx is a modern event management platform built with React, Node.js, and Express.js, providing a seamless and user-friendly experience for event organizers and attendees. It offers easy event creation, ticketing, and management in an intuitive and responsive interface.",
      image: EventX, // Replace with your image path
      link: "https://event-management-c59000r89-rahul-barves-projects.vercel.app/",
    },
    {
      id: 4,
      title: "MarketPlace",
      description:
        "Market Place is a full-stack e-commerce platform built with NextJS, Node.js, and Tailwind CSS. It offers a wide range of products, secure payment gateways, and a seamless shopping experience.",
      image: MarketPlace, // Replace with your image path
      link: "https://market-place-five-blond.vercel.app/",
    },
    
    {
      id: 6,
      title: "LuxeEstate",
      description:
        "LuxeEstate is a modern portfolio platform designed for builders to showcase their projects and achievements.  it allows users to display high-quality images, detailed project descriptions, and client testimonials, providing a professional and visually appealing way to highlight their work.",
      image: LuxeEstate, // Replace with your image path
      link: "https://example.com/project1",
    },
    {
      id: 7,
      title: "PrestigeEstate",
      description:
        "PrestigeEstate is a modern portfolio platform designed for builders to showcase their projects and achievements.  it allows users to display high-quality images, detailed project descriptions, and client testimonials, providing a professional and visually appealing way to highlight their work.",
      image: PrestigeEstate, // Replace with your image path
      link: "https://example.com/project1",
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isAnimating) {
        goToNext()
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [currentIndex, isAnimating])

  const goToPrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1))
    setTimeout(() => setIsAnimating(false), 500)
  }

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return
    setIsAnimating(true)
    setCurrentIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 100) {
      goToNext()
    } else if (touchStartX.current - touchEndX.current < -100) {
      goToPrevious()
    }
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-10 py-12 overflow-hidden">
      <div className="relative h-[650px] md:h-[800px] w-full rounded-2xl bg-gradient-to-r py-4 shadow-2xl overflow-hidden ">
        
        {/* Carousel content */}
        <div
          className="relative h-full w-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`absolute inset-0 flex flex-col items-center justify-center p-6 md:p-12 transition-all duration-500 ease-out ${
                  index === currentIndex
                    ? "opacity-100 translate-x-0 z-10"
                    : index < currentIndex
                      ? "opacity-0 -translate-x-full z-0"
                      : "opacity-0 translate-x-full z-0"
                }`}
              >
                <div className="w-full max-w-4xl">
                  {/* Project image container - rectangular format */}
                  <div className="relative overflow-hidden rounded-xl border border-slate-700 shadow-lg group mb-8">
                    <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className="w-full h-auto object-cover aspect-[16/9] transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/50 rounded-xl transition-all duration-300"></div>
                  </div>

                  {/* Project details below the image */}
                  <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white tracking-tight">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                        {project.name}
                      </span>
                    </h2>
                    <p className="text-slate-300 mb-6 text-lg max-w-2xl mx-auto">{project.description}</p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium transition-all duration-300 hover:from-blue-500 hover:to-purple-500 hover:shadow-lg hover:shadow-purple-500/20 focus:ring-2 focus:ring-purple-500/50 focus:outline-none"
                    >
                      <span>View Project</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center border border-white/10 hover:bg-black/50 transition-all duration-300 z-20 group"
          aria-label="Previous project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 group-hover:scale-110 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/30 backdrop-blur-sm text-white flex items-center justify-center border border-white/10 hover:bg-black/50 transition-all duration-300 z-20 group"
          aria-label="Next project"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 group-hover:scale-110 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white w-8" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work


