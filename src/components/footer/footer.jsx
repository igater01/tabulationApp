import React from "react";
import './footer.css';
import img from "./gdscbu_logo.png";

const Footer=()=>{
    return(
        <footer>
            <div className="waves">
                <div className="wave" id="wave1"></div>
                <div className="wave" id="wave2"></div>
                <div className="wave" id="wave3"></div>
                <div className="wave" id="wave4"></div>
            </div>
            
               <img className="logo_image" src={img} alt="logo" />
            
            
           
        </footer>
    )
}

export default Footer;