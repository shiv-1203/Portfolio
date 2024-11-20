import {FaEnvelope, FaGithub, FaLinkedinIn} from 'react-icons/fa';
import React from "react";
import "../styles/Main.css";
import "../styles/footer.css";
class Footer extends React.Component{
    render(){
        var date = new Date().getFullYear();
        const openInNewTab=url=>{
            window.open(url,'_blank','noopener,noreferrer');
        };
        return(
            <div className="Footer">
                <footer className="foot">Shivam Mudaliar &copy; {date}</footer>
                <FaGithub className='github' onClick={()=>openInNewTab("https://github.com/shiv-1203")}/>
                <FaLinkedinIn className='github' onClick={()=>openInNewTab("https://linkedin.com/in/shivam-mudaliar-145a58201")}/>
                <FaEnvelope className="Linkedin" onClick={()=>openInNewTab('mailto:mathivanan.shivam@gmail.com')}/>
            </div>
        );
    }
};
export default Footer;