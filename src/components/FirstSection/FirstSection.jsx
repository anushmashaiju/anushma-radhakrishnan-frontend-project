import { HiMiniArrowUpRight } from 'react-icons/hi2';
import './FirstSection.css';

const FirstSection = () => {
    return (
        <section className="first">
            <div className="first-content">
                <h1>We create award winning websites</h1>
                <div className='para-image'>
                    <div className="para">
                        <p>Based in San Francisco, we’re a digital products design& development studio that passionate with the creation high applicability of digital experiences
                        </p>
                        <button className="explorebtn">Explore <HiMiniArrowUpRight className='arrow' /></button>
                    </div>
                    <div className='inner-image'>
                        <img className='image1' src="assets\image1.png" alt="" />
                        
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FirstSection;
