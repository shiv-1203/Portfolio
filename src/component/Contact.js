import React from "react";
import "../styles/Main.css";
import "../styles/contact.css";
function Contact() {
    return (
        <div>
            <div className="maincontact">
                <div className="incircle"></div>
                <div className="contact">
                    <div className="circle"></div>
                    <h2>Email</h2>
                    <input type="email" placeholder="write your email here" required />
                    <h2>Name</h2>
                    <input type="text" id="Name" placeholder="write your name here" required />
                    <h2>Suggesstions</h2>
                    <textarea placeholder="write your suggesstions here" id="suggesstions" className="textarea" required />
                    <input type="submit" value="Submit" className="submit" />
                </div>
            </div>
            <div className="outcircle"></div>
        </div>
    );
};
export default Contact;