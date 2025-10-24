import React from 'react';

const PlansHome = () => {
  const plans = ['BASIC', 'PREMIUM', 'CUSTOMIZE'];
  const features = [
    { name: 'Web development', basic: '49999₹ ', premium: '99999₹', customize: 'as per requirment' },
    { name: 'eCommerce Development', basic: '99999₹', premium: '199999₹', customize: 'as per requirment' },
    { name: 'Portfolio design and development', basic: '24999₹', premium: '49999₹', customize: 'as per requirment' },
    { name: 'Landing Page development', basic: '24999₹', premium: '49999₹', customize: 'as per requirment' },
    { name: 'Digital marketing', basic: null, premium: null, customize: 'as per requirment' },
  ];

  return (
    <div className="bg-black text-white p-4 md:p-6 md:pb-20" >
      <div className=' flex justify-center py-4 md:py-6 font-semibold text-3xl md:text-5xl'>
        Our Plans
      </div>
      <div className=" hidden md:flex overflow-x-auto ">
        <table className= " w-full border-collapse text-sm md:text-base">
          <thead>
            <tr>
              <th className="p-2 md:p-4 border-b border-gray-700"></th>
              {plans.map((plan) => (
                <th key={plan} className="p-2 md:p-4 border-b border-gray-700 text-center">{plan}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-[#222222]" : "bg-black"}>
                <td className="p-2 md:p-4 border-b border-gray-700">{feature.name}</td>
                {plans.map((plan) => (
                  <td key={plan} className="p-2 md:p-4 border-b border-gray-700 text-center">
                    {renderFeatureStatus(feature[plan.toLowerCase()])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4 md:hidden">
        {features.map((feature, index) => (
          <div key={index} className={`mb-4 p-4 ${index % 2 === 0 ? "bg-[#222222]" : "bg-black"}`}>
            <h3 className="font-bold mb-2">{feature.name}</h3>
            {plans.map((plan) => (
              <div key={plan} className="flex justify-between mb-1">
                <span>{plan}:</span>
                <span>{renderFeatureStatus(feature[plan.toLowerCase()])}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const renderFeatureStatus = (status) => {
  return status ? status : 'Not Available';
};

export default PlansHome;