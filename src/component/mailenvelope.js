import React from "react";
import {FaHackerrank } from "react-icons/fa";
import '../styles/Main.css';
import '../styles/mailenvelope.css';
import gfg from '../Images/gfg.png';
import codechef from '../Images/codechef.png';
import leetcode from '../Images/leetcode.png';
class Envelope extends React.Component{
    render(){
        function hackerrank(){
            window.open("https://www.hackerrank.com/mathivanan_shiv1","_blank");
        }
        function gfg1(){
            window.open("https://auth.geeksforgeeks.org/user/mathivananshivam/practice/","_blank");
        }
        function codechef1(){
            window.open("https://www.codechef.com/users/shiv12mudaliar","_blank");
        }
        function leetcode1(){
            window.open("https://leetcode.com/shiv12am_03/","_blank");
        }
        return(
            <div className="work">
                <div className="letter-image">
                    <div className="animated-mail">
                        <div className="back-fold"></div>
                        <div className="letter">
                            <div className="letter-border"></div>
                            <div className="letter-content"><FaHackerrank className="worklogo" onClick={hackerrank}/></div>
                        </div>
                        <div className="top-fold"></div>
                        <div className="body"></div>
                        <div className="left-fold"></div>
                    </div>
                    <div className="shadow"></div>
                </div>
                <div className="letter-image">
                    <div className="animated-mail">
                        <div className="back-fold"></div>
                        <div className="letter">
                            <div className="letter-border"></div>
                            <div className="letter-content"><img src={gfg} alt="gfg" className="worklogo" onClick={gfg1}/></div>
                        </div>
                        <div className="top-fold"></div>
                        <div className="body"></div>
                        <div className="left-fold"></div>
                    </div>
                    <div className="shadow"></div>
                </div>
                <div className="letter-image">
                    <div className="animated-mail">
                        <div className="back-fold"></div>
                        <div className="letter">
                            <div className="letter-border"></div>
                            <div className="letter-content"><img src={codechef} alt="codechef" className="worklogo" onClick={codechef1}/></div>
                        </div>
                        <div className="top-fold"></div>
                        <div className="body"></div>
                        <div className="left-fold"></div>
                    </div>
                    <div className="shadow"></div>
                </div>
                <div className="letter-image">
                    <div className="animated-mail">
                        <div className="back-fold"></div>
                        <div className="letter">
                            <div className="letter-border"></div>
                            <div className="letter-content"><img src={leetcode} alt="leetcode" className="worklogo" onClick={leetcode1}/></div>
                        </div>
                        <div className="top-fold"></div>
                        <div className="body"></div>
                        <div className="left-fold"></div>
                    </div>
                    <div className="shadow"></div>
                </div>
            </div>
        );
    }
};
export default Envelope;