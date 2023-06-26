import React from "react";
import '../CTA/CTA.css'
import CV from '../Document/RESUME.pdf'



const CTA = () => {
    return ( 
        <div className="cta">
            <p><a href={CV} download className="cvBtn">Download CV</a></p>
        </div>
     );
}
 
export default CTA;