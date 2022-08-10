import React from "react";
import "../styles/Main.css";
import "../styles/skills.css";
import $ from 'jquery'
class Skills extends React.Component {
    render() {
        $(document).ready(function () {
            $('.skill-percent').each(function () {
                var per = $(this).attr("per");
                $(this).css("width", per + "%");
                $({ animatedValue: 0 }).animate({ animatedValue: per }, {
                    duration: 1000,
                    step: function () {
                        $(this).attr('per', Math.floor(this.animatedValue) + '%');
                    },
                    complete: function () {
                        $(this).attr('per', Math.floor(this.animatedValue) + '%');
                    }
                });
            });
        });
        return (
            <div className="Skills">
                <h1>Technical Skills</h1>
                <div className="indiSkill">C</div>
                <div className="skill-bar">
                    <div className="skill-percent" per="80"></div>
                </div>
                <div className="indiSkill">C++</div>
                <div className="skill-bar">
                    <div className="skill-percent" per="85"></div>
                </div>
                <div className="indiSkill">HTML & CSS</div>
                <div className="skill-bar">
                    <div className="skill-percent" per="80"></div>
                </div>
                <div className="indiSkill">JavaScript</div>
                <div className="skill-bar">
                    <div className="skill-percent" per="80"></div>
                </div>
                <div className="indiSkill">ReactJs</div>
                <div className="skill-bar">
                    <div className="skill-percent" per="75"></div>
                </div>
                <div className="indiSkill">Bootstrap</div>
                <div className="skill-bar">
                    <div className="skill-percent" per="85"></div>
                </div>
                <div className="indiSkill">Python(Basic)</div>
                <div className="skill-bar">
                    <div className="skill-percent" per="90"></div>
                </div>
                <div className="indiSkill">Problem Solving</div>
                <div className="skill-bar">
                    <div className="skill-percent" per="80"></div>
                </div>
                <div className="indiSkill">MS-Office</div>
                <div className="skill-bar">
                    <div className="skill-percent" per="85"></div>
                </div>
                <h1>Soft Skills</h1>
                <div className="indiSkill">Team-Work</div>
                <div className="skill-bar">
                    <div className="skill-percent" per="85"></div>
                </div>
                <div className="indiSkill">Time Management</div>
                <div className="skill-bar">
                    <div className="skill-percent" per="85"></div>
                </div>
            </div>
        );
    }
};
export default Skills;