import React from "react";
import Zanoah from './Zanoah.png';
import './Logo.css';

const Logo = ()=> {
    return (
        <div>
            <div className="zanoahLogo"> <img src={Zanoah} style={{ height: 60, width: 115 }} alt='zanoah logo'/>Zanoah</div>
            
        </div>
    );
}

export default Logo;