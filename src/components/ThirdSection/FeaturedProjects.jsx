
import './FeaturedProjects.css';
import { HiMiniArrowUpRight } from 'react-icons/hi2';

const FeaturedProjects = () => {
    return (
        <section className="featured-projects">

            <div className="projects-grid">
                {/* Project 1 */}
                <div className="projects-grid1">
                    <div className="project-card">
                    </div>
                    <div className="project-content">
                        
                        <div className="project-tags">
                            <span className="tag">Development</span>
                            <span className="tag">UI/UX</span>
                            <span className="tag">Illustration</span>
                        </div>
                        <h2>Roboto Landing Page</h2>
                    </div>
                </div>

                <div className="projects-grid-title">
                    <div className="project-content">
                        <ul>
                            <li>Featured work</li>
                        </ul>
                        <h1>Take a look at our projects</h1>
                    </div>
                </div>
                {/* Project 2 */}
                <div className="projects-grid2">
                    <div className="project-card">
                        <button className="view-project-btn">
                            View project <span><HiMiniArrowUpRight className='arrow' /></span>
                        </button>
                    </div>
                    <div className="project-content">
                    
                        <div className="project-tags">
                            <span className="tag">UI/UX</span>
                            <span className="tag">Illustration</span>
                        </div>
                        <h2>Poppin App Design</h2>
                    </div>
                </div>

                {/* Project 3 */}
                <div className="projects-grid3">
                    <div className="project-card">
                    </div>
                    <div className="project-content">
                    
                        <div className="project-tags">
                            <span className="tag">Development</span>
                            <span className="tag">UI/UX</span>
                            <span className="tag">Illustration</span>
                        </div>
                        <h2>Groteck Website</h2>
                    </div>
                </div>

                {/* Project 4 */}
                <div className="projects-grid4">
                    <div className="project-card">
                    </div>
                    <div className="project-content">
                   
                        <div className="project-tags">
                            <span className="tag">Branding</span>
                        </div>
                        <h2>Helvatica Branding</h2>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default FeaturedProjects;
