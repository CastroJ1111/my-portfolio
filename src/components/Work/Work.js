import  '../Work/Work.css'
import telco from '../Work/telconetwork.jpg'




const Work = () => {
    return ( 

            <div className="container-work">

                <div className="wrapper">
                    <div className="work-page">
                        <div className="work-field">
                            <img src={telco} alt="" className='telcoImg'/>
                        </div>
                    </div>
                </div> 


                
                <div className="work-info">
                    <h3>Telecom Network Support Engr</h3>
                    <h4>(Technical)</h4>
                    <p>Project Management  of Migration Legacy to Modernized Telecom Network Infrastructure / Infinera/DNA  by Globe Network through Network Data gathering and effective planning of assessment, implementation of Approved Proposal and Designs, We provide high quality,  reliable services in our  Different Clients.</p>

                </div> 
            </div>
            
     );
}
 
export default Work;