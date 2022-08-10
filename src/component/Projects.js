import React from "react";
import { FaGithub, FaGlobe } from "react-icons/fa";
import "../styles/Main.css";
import "../styles/project.css";
class Projects extends React.Component {
    render() {
        function weather() {
            window.open("https://github.com/shiv-1203/Weather_Report", "_blank");
        }
        function tictactoe() {
            window.open("https://github.com/shiv-1203/Tic-Tac-Toe", "_blank");
        }
        function chrome() {
            window.open("https://github.com/shiv-1203/Chrome_Extension-To-Do-List-", "_blank");
        }
        function githome() {
            window.open("https://github.com/shiv-1203/Simple_Responsive_FrontPage", "_blank");
        }
        function webhome() {
            window.open("https://shiv-1203.github.io/Simple_Responsive_FrontPage/", '_blank');
        }
        function gittodo() {
            window.open("https://github.com/shiv-1203/To-do-List", "_blank");
        }
        function webtodo() {
            window.open("https://shiv-1203.github.io/To-do-List/", "_blank");
        }
        function gitjob() {
            window.open("https://github.com/shiv-1203/Job-Portal", "_blank");
        }
        function webjob() {
            window.open("https://shiv-1203.github.io/Job-Portal/", "_blank");
        }
        function gitportfolio() {
            window.open("https://github.com/shiv-1203/Portfolio", "_blank");
        }
        function webportfolio() {
            window.open("https://shiv-1203.github.io/Portfolio/", "_blank");
        }
        return (
            <div className="projects">
                <h1 className="projecttitle">Web Development</h1>
                <div className="displayimage portfolio" per="Portfolio">
                    <div className="hide"><div className="innercontent">Portfolio
                        <FaGithub className="github1" onclick={gitportfolio} />
                        <FaGlobe className="github1" onclick={webportfolio}/>
                        <div className="description">An online representation of my work samples</div>
                    </div>
                    </div>
                </div>
                <div className="displayimage todolist" per="Portfolio">
                <div className="hide"><div className="innercontent">To-Do-List
                    <FaGithub className="github1" onClick={gittodo} />
                    <FaGlobe className="github1" onClick={webtodo} />
                    <div className="description">A simple Todolist to note the daily tasks and delete the task when completed</div>
                </div>
                </div>
                </div>
                <div className="displayimage job" per="Portfolio">
                <div className="hide"><div className="innercontent">Job-Portal
                        <FaGithub className="github1" onclick={gitjob}/>
                        <FaGlobe className="github1" onclick={webjob}/>
                        <div className="description">A job-portal where data fetched using API's and build using ReactJs</div>
                </div>
                </div>
                </div>
                <div className="displayimage homepage" per="Portfolio">
                <div className="hide"><div className="innercontent">HomePage
                    <FaGithub className="github1" onClick={githome} />
                    <FaGlobe className="github1" onClick={webhome} />
                    <div className="description">It's a simple design of responsive HomePage</div>
                </div>
                </div>
                </div>
                <h1 className="projecttitle">Chrome Extension</h1>
                <div className="displayimage1 chrome-extension">
                <div className="hide"><div className="innercontent">To-Do-List
                    <FaGithub className="github1" onClick={chrome} />
                    <div className="description">It's a chrome extension to note down your task and delete it when completed</div>
                </div>
                </div>
                </div>
                <h1 className="projecttitle">Python</h1>
                <div className="displayimage1 weather">
                <div className="hide"><div className="innercontent">Weather Report
                    <FaGithub className="github1" onClick={weather} />
                    <div className="description">It basically fetches the weather report for the user entered city and stores the output in a text file</div>
                </div>
                </div>
                </div>
                <h1 className="projecttitle">C++</h1>
                <div className="displayimage1 tictactoe">
                <div className="hide"><div className="innercontent">Tic-Tac-Toe
                    <FaGithub className="github1" onClick={tictactoe} />
                    <div className="description">This is a two-player tic-tac-toe game which was built using basic C++ functions</div>
                </div>
                </div>
                </div>
            </div>
        );
    }
};
export default Projects;