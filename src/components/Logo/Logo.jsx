import React from "react";
import Zanoah from './Zanoah.png';
import './Logo.css';

const Logo = ()=> {
    return (
        <div>
            <div className="zanoahLogo"> <img src={Zanoah} style={{ height: 85, width: 180 }} alt='zanoah logo'/></div>
            
        </div>
    );
}

export default Logo;