import React, { useEffect } from "react";
import "../styles/Main.css";
import "../styles/Navbar.css";
import {BrowserRouter as Router,Routes,Route, useNavigate} from 'react-router-dom';
import $ from 'jquery';
export default function Navbar(){
    let navigate=useNavigate();
    useEffect(()=>{
        navigate("/");
    },[]);
    $(document).ready(function(){
        $('div.Navbar .navelem').click(function(ev){
            $('div.Navbar .navelem').removeClass('selected');
            $(this).addClass('selected');
        });
    });
    return(
        <div className="Navbar">
            <a className="navelem selected" onClick={()=>(navigate("/"))}>Home</a>
            <a className="navelem" onClick={()=>(navigate("/skills"))}>Skills</a>
            <a className="navelem" onClick={()=>(navigate("/projects"))}>Projects</a>
            <a className="navelem" onClick={()=>(navigate("/workprofiles"))}>WorkProfiles</a>
            <a className="navelem" onClick={()=>(navigate("/contact"))}>Contact</a>
        </div>
    );
};