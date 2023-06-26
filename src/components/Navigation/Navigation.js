
import React, {useState} from 'react'
import { Link } from "react-router-dom";
import '../Navigation/Navigation.css'
import CTA from '../CTA/CTA';


// import icons
import {TbGridDots} from 'react-icons/tb'
import {AiFillCloseCircle} from 'react-icons/ai'




const NavigationBar = () => {


    const [active, setActive] = useState('menuDiv')
    const showNavbar = () => {
        setActive ('menuDiv activeNavbar')
    }


    const removeNavbar = () => {
        setActive ('menuDiv')
    }  


    return ( 

<div className="header flex">
            <div className = {active}>
                <ul className="menuLists">
                    <li className="navItem">
                        <Link to="" onClick={removeNavbar} className="menuLink">HOME</Link>
                    </li>
                    <li className="navItem">
                        <Link to="./Work" onClick={removeNavbar} className="menuLink">WORK</Link>
                    </li>
                    <li className="navItem">
                        <Link to="./Contact" onClick={removeNavbar} className="menuLink">CONTACT</Link>
                    </li>
                    <li className="navItem">
                        <Link to="/MySkills" onClick={removeNavbar} className="menuLink">SKILLS</Link>
                    </li>

                    <li className="navItem">
                        <Link to="./Portfolio" onClick={removeNavbar} className="menuLink">PROJECTS WEBSITE</Link>
                    </li>

                    
                </ul>

                <div onClick={removeNavbar} className="closeNavbar">
                    <AiFillCloseCircle className='icon'/>
                </div>
            </div>
            

            <div className="resume">
                <CTA className="download"/>
            </div>
            <div onClick={showNavbar} className="toggleNavbar">
                <TbGridDots className='icon'/>
            </div>

        </div>
    );
}
 
export default NavigationBar;