 import React from 'react';
 import '../styles/Main.css';
 import '../styles/workprofiles.css';
 import Envelope from './mailenvelope';
 class workprofile extends React.Component{
    render(){
        return(
            <div className='workprofile'>
                <h1>Work-Profiles</h1>
                <Envelope className="envelope"/>
            </div>
        );
    }
 };
 export default workprofile;