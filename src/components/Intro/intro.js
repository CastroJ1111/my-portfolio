import './intro.css'
import img1 from './image.jpg';
import TypeWriterEffect from 'react-typewriter-effect';


const Intro = () => {
    return ( 

        <div className="i">

            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className='i-intro'>Hello I'm</h2>
                    <h1 className='i-name'>
                    <span>     
                    <TypeWriterEffect
                        textStyle={{
                        fontFamily: 'Red Hat Display',
                        fontWeight: 500,
                        fontSize: '1.5em',
                        }}
                        startDelay={2000}
                        cursorColor="#3F3D56"
                        multiText={[
                        ' Jay Castro',
                        ]}
                        multiTextDelay={2000}
                        typeSpeed={90}
                        multiTextLoop
                    />
                    </span></h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item"> Web Developer</div>               
                        </div>
                    </div>
                    <p className="i-desc">
                        Im a Full Stack Web Developer   student of KodeGo with Passionate in Writing Codes and  in Web Designing.  
                    </p>
                </div>
            </div>

            
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={img1} className='i-img' />
            </div>
            
        </div>

    );
}
 
export default Intro;