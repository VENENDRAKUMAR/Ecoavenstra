import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Technology.css';

const data = [
  
  {
    title: 'Frontend',
    categories: [
      { subtitle: 'Technologies', items: 'HTML5, CSS3, Javascript, Typescript, PHP, EJS' },
      { subtitle: 'Frameworks & Tools', items: 'Bootstrap, CodeIgniter, Laravel, ReactJS, Redux, WordPress, AntDesign, Reactstrap, React Bootstrap' }
    ]
  },
  {
    title: 'Backend',
    categories: [
      { subtitle: 'Technologies', items: 'NodeJS, Express JS, PHP, MySQL, MongoDB, PostgreSQL, GraphQL' },
      { subtitle: 'Frameworks & Tools', items: 'Nodemailer, CORS, JWT' }
    ]
  },
  {
    title: 'DevOps',
    categories: [
      { subtitle: 'CI/CD', items: 'Github Actions, Gitlab Pipelines, Azure Pipelines, Jenkins' },
      { subtitle: 'Monitoring, Tracking & Logging', items: 'Github Actions, Gitlab Pipelines, Azure Pipelines, Jenkins' }
    ]
  },
  {
    title: 'Cloud',
    categories: [
      { subtitle: 'Technologies', items: 'AWS, Azure, GCP' },
      { subtitle: 'Libraries', items: 'Serverless, AWS CLI' }
    ]
  },
  {
    title: 'Android',
    categories: [
      { subtitle: 'Languages', items: 'Kotlin, Java, JavaScript, Typescript' },
      { subtitle: 'Frameworks & Tools', items: 'Native Android, React Native, Expo, Android Studio, Push Notifications, Location Services, Google Places API, Google Fit & Biometric Authentication' }
    ]
  },
  {
    title: 'iOS',
    categories: [
      { subtitle: 'Languages', items: 'Swift, Objective-C, JavaScript, Typescript' },
      { subtitle: 'Frameworks & Tools', items: 'Native iOS, React Native, Expo, Xcode, Push Notifications, Location Services, Google Places API, Apple Health APIs, Biometric Authentication' }
    ]
  }
 
];

const Tchnology = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='px-4 py-8 bg-[#101010]'>
      <div data-aos="fade-up" className='text-white text-3xl sm:text-5xl flex justify-center font-semibold pt-4 pb-8 sm:pb-12'>
        Technologies We Master
      </div>
      <div className='flex flex-wrap justify-center gap-8'>
        {data.map((item, index) => (
          <div key={index} data-aos="flip-right" className="cyber-container noselect">
            <div className="cyber-canvas">
              <div className="cyber-card">
                <div className="card-content">
                  <div className="card-glare"></div>
                  <div className="cyber-lines">
                    <span></span><span></span><span></span><span></span>
                  </div>
                  <div className="title">{item.title}</div>
                  <div className="tech-content">
                    {item.categories.map((category, idx) => (
                      <div key={idx} className="category-content">
                        <div className='subtitle'>{category.subtitle}</div>
                        <div className='items'>{category.items}</div>
                      </div>
                    ))}
                  </div>
                  <div className="glowing-elements">
                    <div className="glow-1"></div>
                    <div className="glow-2"></div>
                    <div className="glow-3"></div>
                  </div>
                  <div className="card-particles">
                    <span></span><span></span><span></span>
                    <span></span><span></span><span></span>
                  </div>
                  <div className="corner-elements">
                    <span></span><span></span><span></span><span></span>
                  </div>
                  <div className="scan-line"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tchnology;
