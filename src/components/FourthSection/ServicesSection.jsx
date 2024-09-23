
import { HiMiniArrowUpRight } from 'react-icons/hi2';
import './ServicesSection.css'; // Import your CSS file for styling

const ServicesSection = () => {
  return (
    <div className="services-container">
      <div className="services-intro">
        <p className="services-tag">• Our Services</p>
        <h2 className="services-heading">
          We are a close-knit team of experts dedicated to crafting memorable and <span>emotionally engaging websites, digital experiences, and native apps.
          </span></h2>
      </div>

      <div className="services-grid">
        <div className="service-card highlighted-card">
          <div className='service-card-heading'>
          <h3>BRAND IDENTITY </h3>
          <HiMiniArrowUpRight className='arrow-round' />
          </div>
          <p>
            We provide digital solutions such as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company’s values
          </p>

        </div>

        <div className="service-card">
        <div className='service-card-heading'>
          <h3>UX/UI DESIGN</h3>
          <HiMiniArrowUpRight className='arrow-round' />
          </div>
          <p>
            We provide digital solutions such as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company’s values
          </p>
   
        </div>

        <div className="service-card">
        <div className='service-card-heading'>
          <h3>WEBFLOW DEVELOPER</h3>
          <HiMiniArrowUpRight className='arrow-round' />
          </div>
          <p>
            We provide digital solutions such as Website Design, Mobile App Design, Landing Page design, Illustration, Animation, etc that increase company’s values
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
