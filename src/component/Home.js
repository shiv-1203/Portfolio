import React from "react";
import "../styles/Main.css";
import "../styles/home.css";
class Home extends React.Component{
    render(){
        return(
            <div>
                <div className='content'>
                    <h1 className="name">Hi There, I'm <span style={{color:"darkblue"}}>Shivam Mudaliar</span></h1><br></br>
                    <h3> I am a <span style={{color:"darkblue"}}>Web Developer</span></h3><br></br>
                    <span className='summary'>High-achieving undergraduate student with an aptitude for Web Development. Experienced in 
                    web development through personal projects. Excited to work and gain real-world experience
                    <li className="list">I am greatly interested in Artificial Intelligence and Machine Learning.</li>
                    <li className="list">Currently I am Learning DSA and working on Problem Solving Skills.</li>
                    </span>
                </div>
            </div>
        );
    }
};
export default Home;