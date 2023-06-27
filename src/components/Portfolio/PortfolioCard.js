import { NavLink } from "react-router-dom";
import React from "react";
import PortfolioCardData from "./PortfolioCardData";

const PortfolioCard = (props) => {
    return ( 

        <div className="portfolio-card">
            <img src={props.imgsrc} alt="" />
            <h2 className="portfolio-title">{props.title}</h2>
            <div className="portfolio-details">
                <p>{props.text}</p>
                <div className="portfolio-btn">
                    <NavLink to={props.view} className="btn">view</NavLink>
                    {/* <NavLink to={props.view} className="btn">source</NavLink> */}
                </div>
            </div>
        </div>
     ); 
}
 
export default PortfolioCard;