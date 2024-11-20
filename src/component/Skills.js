import React, { useEffect, useRef } from "react";
import "../styles/Main.css";
import "../styles/skills.css";

const Skills = () => {
    const skills = [
        { name: "C", percent: 80 },
        { name: "C++", percent: 85 },
        { name: "HTML & CSS", percent: 80 },
        { name: "Core Java", percent: 75 },
        { name: "SQL", percent: 80 },
        { name: "Spring Boot", percent: 80 },
        { name: "JavaScript", percent: 80 },
        { name: "ReactJs", percent: 75 },
        { name: "Bootstrap", percent: 85 },
        { name: "Python (Basic)", percent: 90 },
        { name: "Problem Solving", percent: 80 },
        { name: "MS-Office", percent: 85 },
    ];

    const softSkills = [
        { name: "Team-Work", percent: 85 },
        { name: "Time Management", percent: 85 },
        { name: "Leadership", percent: 85 },
    ];

    const developerTools = [
        { name: "Git", percent: 80 },
        { name: "Github", percent: 80 },
        { name: "IntelliJ", percent: 85 },
        { name: "VS-Code", percent: 80 },
    ];

    const databaseAndComputerFundamentals = [
        { name: "Oracle", percent: 70 },
        { name: "Data Structures and Algorithms", percent: 70 },
        { name: "DBMS", percent: 70 },
        { name: "OOPS", percent: 85 }
    ];

    const circleRef = useRef([]);

    useEffect(() => {
        // Animate radial bars on component mount
        circleRef.current.forEach((circle, index) => {
            const percent = circle.getAttribute("data-percent");
            const radius = circle.r.baseVal.value;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (percent / 100) * circumference;
            circle.style.transition = 'stroke-dashoffset 2s ease';
            circle.style.strokeDashoffset = offset;
        });
    }, []);

    return (
        <div className="Skills">
            {/* Technical Skills Card */}
            <div className="card">
                <div className="card-header">Technical Skills</div>
                <div className="skills-content">
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <div className="skill-name">{skill.name}</div>
                            <div className="skill-circle">
                                <svg width="100" height="100" viewBox="0 0 120 120">
                                    <circle
                                        cx="60"
                                        cy="60"
                                        r="50"
                                        stroke="#ddd"
                                        strokeWidth="8"
                                        fill="none"
                                    />
                                    <circle
                                        ref={(el) => circleRef.current[index] = el}
                                        cx="60"
                                        cy="60"
                                        r="50"
                                        stroke="darkblue"
                                        strokeWidth="8"
                                        fill="none"
                                        strokeDasharray="314"
                                        strokeDashoffset="314"
                                        data-percent={skill.percent}
                                    />
                                </svg>
                                <div className="percent-text">{skill.percent}%</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Soft Skills */}
            <div className="card">
                <div className="card-header">Soft Skills</div>
                <div className="skills-content">
                    {softSkills.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <div className="skill-name">{skill.name}</div>
                            <div className="skill-circle">
                                <svg width="100" height="100" viewBox="0 0 120 120">
                                    <circle
                                        cx="60"
                                        cy="60"
                                        r="50"
                                        stroke="#ddd"
                                        strokeWidth="8"
                                        fill="none"
                                    />
                                    <circle
                                        ref={(el) => circleRef.current[index + skills.length] = el}
                                        cx="60"
                                        cy="60"
                                        r="50"
                                        stroke="#2c3e50"
                                        strokeWidth="8"
                                        fill="none"
                                        strokeDasharray="314"
                                        strokeDashoffset="314"
                                        data-percent={skill.percent}
                                    />
                                </svg>
                                <div className="percent-text">{skill.percent}%</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Developer Tools */}
            <div className="card">
                <div className="card-header">Developer Tools</div>
                <div className="skills-content">
                    {developerTools.map((tool, index) => (
                        <div key={index} className="skill-card">
                            <div className="skill-name">{tool.name}</div>
                            <div className="skill-circle">
                                <svg width="100" height="100" viewBox="0 0 120 120">
                                    <circle
                                        cx="60"
                                        cy="60"
                                        r="50"
                                        stroke="#ddd"
                                        strokeWidth="8"
                                        fill="none"
                                    />
                                    <circle
                                        ref={(el) => circleRef.current[index + skills.length + softSkills.length] = el}
                                        cx="60"
                                        cy="60"
                                        r="50"
                                        stroke="purple"
                                        strokeWidth="8"
                                        fill="none"
                                        strokeDasharray="314"
                                        strokeDashoffset="314"
                                        data-percent={tool.percent}
                                    />
                                </svg>
                                <div className="percent-text">{tool.percent}%</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Database and Computer Fundamentals */}
            <div className="card">
                <div className="card-header">Database and Computer Fundamentals</div>
                <div className="skills-content">
                    {databaseAndComputerFundamentals.map((skill, index) => (
                        <div key={index} className="skill-card">
                            <div className="skill-name">{skill.name}</div>
                            <div className="skill-circle">
                                <svg width="100" height="100" viewBox="0 0 120 120">
                                    <circle
                                        cx="60"
                                        cy="60"
                                        r="50"
                                        stroke="#ddd"
                                        strokeWidth="8"
                                        fill="none"
                                    />
                                    <circle
                                        ref={(el) => circleRef.current[index + skills.length + softSkills.length + developerTools.length] = el}
                                        cx="60"
                                        cy="60"
                                        r="50"
                                        stroke="maroon"
                                        strokeWidth="8"
                                        fill="none"
                                        strokeDasharray="314"
                                        strokeDashoffset="314"
                                        data-percent={skill.percent}
                                    />
                                </svg>
                                <div className="percent-text">{skill.percent}%</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
