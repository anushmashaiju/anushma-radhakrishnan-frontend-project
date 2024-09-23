import { FaBehance, FaXTwitter } from 'react-icons/fa6';
import './ContactSection.css';
import { PiInstagramLogo } from 'react-icons/pi';
import { FiAperture } from 'react-icons/fi';
import { MdCall } from 'react-icons/md';
import { IoMdMail } from 'react-icons/io';
import { HiMiniArrowUpRight } from 'react-icons/hi2';

const ContactSection = () => {
  return (
    <div className="contact-section">
      <div className="contact-left">
        <h2>Feel free to connect with us!</h2>
        <div className="social-icons">
        <FaXTwitter />
        <PiInstagramLogo />
        <FiAperture />
        <FaBehance />
        </div>
        <p className="contact-phone"><MdCall /> 0972 663 633</p>
        <p className="contact-email"><IoMdMail /> hello@wefo.com</p>
      </div>
      <div className="contact-right">
        <form className="contact-form">
            <div className='label-req'>
          <label htmlFor="name">Name </label>
          <label className='req'>*</label></div>
          <input type="text" id="name" placeholder="Your name" required />
          
          <div className='label-req'>
          <label htmlFor="email">Email </label>
          <label className='req'>*</label></div>
        <input type="email" id="email" placeholder="Your email address" required />
          
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Write your message here..."></textarea>
          <button type="submit" className='send'>Send <HiMiniArrowUpRight className='arrow' /></button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
