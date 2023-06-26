import './toggle.css'
import sun from  './icon.jpg'
import moon from  './moon.png'
import { useContext } from 'react'
import {ThemeContext} from '../../context'

const Toggle = () => {
    const theme =useContext(ThemeContext);

    const handleClick = () =>{
        theme.dispatch({type: "TOGGLE"})
    }


    return ( 
        <div className="t">
            <img src={sun} alt="" />
            <img src={moon} alt="" />
            <div className="t-button" onClick={handleClick}></div>
        </div>
     );
}
 
export default Toggle;