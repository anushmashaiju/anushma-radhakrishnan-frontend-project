// App.js
import './App.css';

import LeaderSection from './components/FifthSection/LeaderSection';
import FirstSection from './components/FirstSection/FirstSection';
import Footer from './components/Footer/Footer';
import ServicesSection from './components/FourthSection/ServicesSection';
import Navbar from './components/Navbar/Navbar';
import SecondSection from './components/SecondSection/SecondSection';
import ContactSection from './components/SeventhSection/ContactSection';
import TestimonialSection from './components/SixthSection/TestimonialSection';
import FeaturedProjects from './components/ThirdSection/FeaturedProjects';


function App() {
  return (
    <div className="App">
      <Navbar />
      <FirstSection />
      <SecondSection />
      <FeaturedProjects />
      <ServicesSection />
      <LeaderSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
