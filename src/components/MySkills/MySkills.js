import './MySkills.css'
import {ImHtmlFive} from 'react-icons/im'
import {IoLogoCss3} from 'react-icons/io'
import {SiJavascript} from 'react-icons/si'
import {DiReact} from 'react-icons/di'
import {FaBootstrap} from 'react-icons/fa'
import {FaFigma} from 'react-icons/fa'



const MySkills = () => {
    return ( 

        <div className="container main-container">
            <div className='container myskills__container'>
                
                <div className="myskills__frontend">
                    <h3>Tech Stack</h3>
                    <div className="skills__content">
                        <article className='skills__details'>
                            <ImHtmlFive className='skills__details-icon'/>
                            <div>
                                <h3>HTML</h3>
                            </div>
                        </article>
                        <article className='skills__details'>
                            <IoLogoCss3 className='skills__details-icon'/>
                            <div>
                                <h3>CSS</h3>
                            </div>
                        </article>
                        <article className='skills__details'>
                            <SiJavascript className='skills__details-icon'/>
                            <div>
                                <h3>Javascript</h3>
                            </div>
                        </article>

                        <article className='skills__details'>
                            <DiReact className='skills__details-icon'/>
                            <div>
                                <h3>React</h3>
                            </div>
                        </article>

                        <article className='skills__details'>
                            <FaBootstrap className='skills__details-icon'/>
                            <div>
                                <h3>Boostrap</h3>
                            </div>
                        </article>

                        <article className='skills__details'>
                            <FaFigma className='skills__details-icon'/>
                            <div>
                                <h3>Figma</h3>
                            </div>
                        </article>
                    </div>
                </div>
                {/*  END OF FRONT END */}





                {/* OTHERS */}
                <div className="myskills__others">
                    <h3>OTHERS</h3>

                    <div className="container__other">
                        <article> <p>Telecom Network Assessment and Legacy Terminals </p></article>
                    </div>
                    <div className="container__other">                    
                        <article> <p>Network Feasibility and Updating Cid status Internal database</p></article>                   
                    </div>
                    <div className="container__other">                    
                        <article><p>Equipment Design and Endorsement for Approval Network Pre-Test</p></article>                   
                    </div>

          

                </div>


            </div>
        </div>


     );
}
 
export default MySkills;