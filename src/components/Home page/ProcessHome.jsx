import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProcessHome = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const steps = [
    {
      number: '01',
      title: 'Initial Engagement',
      description: 'The first step involves initial contact, understanding your needs, and setting up meetings to explore your vision and business requirements.'
    },
    {
      number: '02',
      title: 'Planning & Documentation',
      description: 'We gather requirements, plan the project, estimate costs, and create necessary documentation including proposals, agreements, and technical specs.'
    },
    {
      number: '03',
      title: 'Design & Development',
      description: 'In this step, we focus on designing the user interface and experience, followed by the development of the front-end, back-end, and database using relevant technologies.'
    },
    {
      number: '04',
      title: 'Testing & Integration',
      description: 'After development, we rigorously test the application and integrate various components to ensure everything works smoothly.'
    },
    {
      number: '05',
      title: 'Launch & Post-Launch',
      description: 'Finally, we launch the product, provide user training, and offer ongoing maintenance and support to ensure long-term success.'
    }
  ];

  return (
    <div className="bg-black text-white p-8 py-20 flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 pr-0 md:pr-8 flex flex-col justify-center items-center mb-8 md:mb-0">
        <div className="text-4xl font-semibold mb-2 bg-blue-200 text-black p-2 w-full md:w-[400px] flex justify-center py-8 transform transition-transform duration-700 -skew-y-6 hover:skew-y-1 ease-in-out">
          Our process
        </div>
        <div className="text-4xl font-semibold mb-2 bg-green-200 text-black p-2 w-full md:w-[400px] flex justify-center py-8 transform transition-transform duration-700 skew-y-3 hover:skew-y-6 ease-in-out">
          Simple, seamless
        </div>
        <div className="text-4xl font-semibold bg-blue-100 text-black p-2 w-full md:w-[400px] flex justify-center py-8 transform -skew-y-3 transition-transform duration-700 ease-in-out hover:skew-y-2">
          Streamlined.
        </div>
      </div>
      <div className="w-full md:w-1/2 space-y-8 relative">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start relative">
            <div className="absolute -left-4 w-16 h-16 bg-[#1c3987] rounded-full flex flex-col items-center justify-center text-3xl font-bold z-10">
              <div>{step.number}</div>
              <div className="font-thin text-xs">Step</div>
            </div>
            <div className="ml-20">
              <h4 className="text-blue-500 font-bold mb-1">{step.title}</h4>
              <p className="text-sm text-gray-400">{step.description}</p>
            </div>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default ProcessHome;
