
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import './TestimonialSection.css';

const TestimonialSection = () => {
  return (
    <div className="testimonial-section">
      <div className="testimonial-content">
        <ul>
        <li className="testimonial-tag"> Testimonials</li>
        </ul>
        <div>
        <h2 className="testimonial-text">
          A studio filled with passion, professionalism, and boundless creativity. They exceeded my expectations with their excellent services, high-quality products, and affordable prices. I’m extremely satisfied!
        </h2>
        <div className="testimonial-author">
        <img
          src="https://randomuser.me/api/portraits/women/65.jpg"
          alt="Author"
          className="author-image"
        />
        <div className="author-info">
          <p className="author-name">Kathryn Murphy</p>
          <p className="author-title">Senior Marketing, Spotify</p>
        </div>
      </div>
      <div className="testimonial-navigation">
        <button className="nav-button"><GoArrowLeft /></button>
        <button className="nav-button"><GoArrowRight /></button>
      </div>
      </div>
      </div>
    </div>

  );
};

export default TestimonialSection;
