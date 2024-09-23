import './LeaderSection.css'; // Import your CSS file for styling
import { PiInstagramLogo } from 'react-icons/pi';
import { FaLinkedinIn, FaXTwitter } from 'react-icons/fa6';

const leaders = [
  {
    name: 'Cody Fisher',
    title: 'CEO Founder',
    highlighted: true, // Determines whether the card is highlighted
    socialLinks: [
      { icon: <FaXTwitter />, link: '#' }, // Replace 'X' with actual icons (e.g., Font Awesome)
      { icon:   <PiInstagramLogo />, link: '#' }, // Example placeholder icons
      { icon: <FaLinkedinIn />, link: '#' },
    ],
  },
  {
    name: 'Kristin Watson',
    title: 'Manager',
    highlighted: false,
    socialLinks: [
      { icon: <FaXTwitter />, link: '#' }, // Replace 'X' with actual icons (e.g., Font Awesome)
      { icon:   <PiInstagramLogo />, link: '#' }, // Example placeholder icons
      { icon: <FaLinkedinIn />, link: '#' },
    ],
  },
  {
    name: 'Leslie Alexander',
    title: 'Design Leader',
    highlighted: false,
    socialLinks: [
      { icon: <FaXTwitter />, link: '#' }, // Replace 'X' with actual icons (e.g., Font Awesome)
      { icon:   <PiInstagramLogo />, link: '#' }, // Example placeholder icons
      { icon: <FaLinkedinIn />, link: '#' },
    ],
  },
];

const LeaderSection = () => {
  return (
    <div className="leader-section">
      <div className="leader-intro">
        <p className="leader-tag">• Our Leader</p>
        <h2 className="leader-heading">
          Each product is crafted with passion and dedication. Meet our leader!
        </h2>
      </div>

      <div className="leader-cards">
        {leaders.map((leader, index) => (
          <div
            key={index}
            className={`leader-card ${leader.highlighted ? 'highlighted' : ''}`}
          >
            <div className="leader-info">
              <h3>{leader.name}</h3>
              <p>{leader.title}</p>
            </div>
            <div className="leader-social">
              {leader.socialLinks.map((social, idx) => (
                <a href={social.link} key={idx} className="social-icon">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderSection;
