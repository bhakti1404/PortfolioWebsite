import React from 'react';
import './Services.css';

function Services() {
  return (
    <section id='Services'>
      <div className="services">
        <div className="servicestitle">
          <h1>MY SERVICES</h1>
        </div>
        <div className="servicescontainer">
          <div className="servicecard">
            <div className="servicecarddetails">
              <h2>💻 Website Development</h2>
              <p>
                I specialize in building responsive and high-performing websites using modern technologies. Whether it's a static site, portfolio, or a business landing page, I ensure a professional, fast, and SEO-friendly experience.
              </p>
            </div>
          </div>

          <div className="servicecard">
            <div className="servicecarddetails">
              <h2>📱Mobile App Development</h2>
              <p>
                I create mobile applications for Android and iOS . With a focus on smooth navigation and intuitive UI, I develop cross-platform apps tailored to your business needs — from e-commerce to personal projects.
              </p>
            </div>
          </div>

          <div className="servicecard servicecard2"  >
            <div className="servicecarddetails">
              <h2>🕶️ Metaverse / VR Development</h2>
              <p>
                I develop immersive virtual experiences for Metaverse platforms. From virtual showrooms to event simulations, I bring interactive 3D environments to life, combining creativity with technology.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="linebreak">
        <hr />
      </div>
    </section>
  );
}

export default Services;
