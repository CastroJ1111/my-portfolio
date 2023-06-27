import React, { useContext } from "react";
import Intro from "./components/Intro/intro";
import Navigation from "./components/Navigation/Navigation";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import MySkills from "./components/MySkills/MySkills";
import Toggle from "./components/Toggle/toggle";
import Portfolio from "./components/Portfolio/Portfolio";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeContext } from "./context";




function App() {
    const theme =useContext(ThemeContext);
    const darkMode = theme.state.darkmode;

  return (

    <div  className="App"> 
       
      <BrowserRouter>
      <Navigation></Navigation>
        <Routes>
          <Route path="" element={ <Intro/> }></Route>
          {/* <Route path="/Work" element={ <Work/> }></Route> */}
          <Route path="/MySkills" element={ <MySkills/> }></Route>
          <Route path="/Contact" element={ <Contact/> }></Route>
          <Route path="/Portfolio" element={ <Portfolio/> }></Route>
        </Routes>
       
        
    </BrowserRouter>
    </div>

    
  );
};

export default App;
