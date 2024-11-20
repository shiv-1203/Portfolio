import React from "react";
import "../styles/Main.css";
import "../styles/home.css";
class Home extends React.Component{
    render(){
        return(
            <div>
                <div className='content'>
                    <h1 className="name">Hi There, I'm <span style={{color:"#000060"}}>Shivam Mudaliar</span></h1><br></br>
                    <h3 className="position"> I am a <span style={{color:"#000060"}}>Software Developer</span></h3><br></br>
                    <span className='summary'>I am an Electronics and Communication Engineering graduate from NIT Surat. As a Software Developer, I thrive in dynamic environments where 
                        I can leverage my technical expertise to craft innovative and scalable solutions. 
                        I am passionate about optimizing systems, enhancing user experiences, and contributing to impactful projects that drive business growth. 
                        With a strong foundation in software development, I am committed to continuous learning and delivering results that exceed expectations.
                    </span>
                </div>
            </div>
        );
    }
};
export default Home;