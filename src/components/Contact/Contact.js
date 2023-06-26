import '../Contact/Contact.css'
import Phone from   '../Contact/phone.jpg'
import Email from   '../Contact/email.jpg'
import Address from   '../Contact/address.jpg'
import { useRef } from 'react'
import emailjs  from 'emailjs-com'
import { useState } from 'react'




const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
    
        emailjs.sendForm('service_jjccaa', 'template_jjccaa', formRef.current, 'tjWEkoXM7QFkRSE2E')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    }

    
    
    return (  
        <div className='c'>
            <div className="c-bg"></div>
                <div className="c-wrapper">

                    <div className="c-left">
                        <h1>Let's Discuss your project</h1>
                        <div className="c-info">
                            <div className="c-info-item">
                                <img src={Phone} alt="" className='c-icon'/>
                                +63 995 887 0559 <br/> +63 966 346 1451
                            </div>
                            <div className="c-info-item">
                                <img src={Email} alt="" className='c-icon'/>
                                emj022593@gmail.com
                            </div>
                            <div className="c-info-item">
                                <img src={Address} alt="" className='c-icon'/>
                                <p>Gumaoc West SJDM Bulacan</p>
                            </div>
                        </div>
                    </div>


                    <div className="c-right">
                        <p className='c-desc'> 
                            <b>Get in Touch</b>
                        </p>
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <input type="text" placeholder='Name' name='user_name'/>
                            <input type="text" placeholder='Subject' name='user_subject'/>
                            <input type="text" placeholder='Email' name='user_email'/>
                            <textarea placeholder='Message' name="message" cols="30" id="" rows="7"></textarea>
                           
                            <button >Submit</button>
                            { done && "Thank You..." }
                        </form>
                    </div>
                </div>
            
        </div>
    );
}
 
export default Contact;