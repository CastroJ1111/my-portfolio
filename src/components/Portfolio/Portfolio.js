import "./Portfolio.css";
import PortfolioCard from "./PortfolioCard";
import PortfolioCardData from "./PortfolioCardData";

import React from "react";






const Portfolio = () => {
    return ( 
       <div className="container-port-section">
            <div className="portfolio-container">

                <div className="project-container">
                    {PortfolioCardData.map((val, ind) => {
                    return (
                        <div className="card-content">
                            <PortfolioCard
                                key = {ind}
                                imgsrc = {val.imgsrc}
                                title = {val.title}
                                text = {val.text}
                                view = {val.view}
                            />
                        </div>
                        
                        );
                    })}
                </div>

            </div>
        </div>


     );
};
 
export default Portfolio;