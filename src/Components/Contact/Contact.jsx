import React,{useRef,useState} from 'react';
import "./Contact.css";
// import Phone from '../../img/phone.png';
// import Location from '../../img/location.png';
// import Email from '../../img/email.png';
import emailjs from '@emailjs/browser';



export default function Contact() {
    const formRef = useRef()
    const [done, setDone] = useState(false);
    const submitHandler = (e) =>{
        e.preventDefault();
        emailjs.sendForm('service_49a7guy', 'template_76w4k0j', formRef.current, 'user_aB05ZMutS2MzWJf7LYoX5')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });

    }
  return (
    <>
    <div className="c">
        <div className="c-bg"></div>
        <div className="c-wrapper">
            <div className="c-left">
            <h1 className="c-title">
            Let's Discuss Your Project
            </h1>
            <div className="c-info">
                <div className="c-info-items">
                    <img className="c-icon" src="https://thumbs.gfycat.com/CelebratedAlienatedChinesecrocodilelizard-max-1mb.gif" alt="phone-icon"></img> +91 7407203431
                </div>
                <div className="c-info-items">
                    <img className="c-icon" src="http://homestaybajet.com/webview/images/emailIcon.gif" alt="phone-icon"></img> lucksharma2017@gmail.com
                </div>
                <div className="c-info-items">
                    <img className="c-icon" src="https://media2.giphy.com/media/SYLWGfCZ8SaYUsuacR/giphy.gif?cid=790b7611768409e0e983974f1d2360197691fcc82d0c0007&rid=giphy.gif&ct=s" alt="phone-icon"></img>Delhi NCR, India 🇮🇳
                </div>
            </div>
            </div>
            <div className="c-right">
            <div className="c-desc">
            <p> <b>What's Your story?</b> I'm Intrested in freelance opportunities.
            If you have other requests or questions, don't hesitate to use the form.
            </p>
            </div>
            <form ref={formRef} onSubmit={submitHandler}>
                <input type="text" placeholder="Name" name="user_name" required></input>
                <input type="text" placeholder="Subject" name="user_subject" required></input>
                <input type="text" placeholder="Email" name="user_email" required></input>
                <textarea rows="5" placeholder="Enter Your Message" name="message"></textarea>
                <button type="submit">Submit</button> <span>{done && "Thanks for Contacting Me Soon I'll reply for your query..."}</span>

            </form>
            
            </div>
        </div>
    </div>
      
    </>
  )
}
