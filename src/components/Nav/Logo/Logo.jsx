import React from "react";
import Zanoah from './Zanoah.png';
import './Logo.css';
import Navigation from '../../Nav/Navigation/Navigation';


const Logo = ()=> {
    return (
        <div>
            <div className="zanoahLogo"> <img src={Zanoah} style={{ height: 65, width: 140, paddingTop:'15px', paddingLeft:'10px' }} alt='zanoah logo'/>
            <Navigation />
        </div>
        </div>
    );
}

export default Logo;