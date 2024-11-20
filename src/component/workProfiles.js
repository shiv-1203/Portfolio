import React from 'react';
import '../styles/Main.css';
import '../styles/workprofiles.css';
import Envelope from './mailenvelope';
class workprofile extends React.Component {
    render() {
        return (
            <div className='workprofile'>
                {/* Experience Section (Roadmap) */}
                <div className="experience-roadmap">
                    <h2>Experience</h2>
                    <div className="timeline">
                        <div className="timeline-item">
                            <div className="timeline-icon"></div>
                            <div className="timeline-content">
                                <div className="timeline-year">2024</div>
                                <span className="experience-role">Software Engineer-1 at Mastercard</span>
                                <span className="timeline-duration">June 2024 - Present</span>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-icon"></div>
                            <div className="timeline-content">
                                <div className="timeline-year">2024</div>
                                <span className="experience-role">Software Developer Intern at STEMpedia</span>
                                <span className="timeline-duration">January 2024 - June 2024</span>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-icon"></div>
                            <div className="timeline-content">
                                <div className="timeline-year">2023</div>
                                <span className="experience-role">Software Engineer Intern at Mastercard</span>
                                <span className="timeline-duration">May 2023 - July 2023</span>
                            </div>
                        </div>
                        <div className="timeline-item">
                            <div className="timeline-icon"></div>
                            <div className="timeline-content">
                                <div className="timeline-year">2022</div>
                                <span className="experience-role">Mentee at Amazon ML Summer School</span>
                                <span className="timeline-duration">June 2022 - July 2022</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Add more timeline items here if applicable */}
                <h2>Work-Profiles</h2>
                <Envelope className="envelope" />
            </div>
        );
    }
};
export default workprofile;