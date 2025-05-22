import React from 'react'
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faInstagram, faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';




function Contact() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "4bfc164a-53dd-4d8d-a19f-9bba44134388");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
        }
        if (res.success) {
            console.log("Success", res);
            event.target.reset(); // Clear form
            alert("Thank you! Your message has been sent.");
          }
          
    };
    return (
        <section id='Contact'>
            <div className="contact">
                <div className="contacttitle">
                    <h1>Get In Touch</h1>
                </div>
                <div className="contactcontainer">
                    <div className="contactleft">
                        <p>Let's Talk</p>
                        <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                        <div className="contactemail">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <p>bhakti1404@gmail.com</p>
                        </div>
                        <div className="contactphone">
                            <FontAwesomeIcon icon={faPhone} />
                            <p>7058528767</p>
                        </div>
                        <div className="contactlocation">
                            <FontAwesomeIcon icon={faLocationDot} />
                            <p>Nashik, Maharshtra, India</p>
                        </div>
                        <div className="contactsocialmedia">
                            <p>Social Media</p>
                            <div className="contactsocialicon">
                                <FontAwesomeIcon className='Icon' icon={faGithub} />
                                <FontAwesomeIcon className='Icon' icon={faLinkedin} />
                                <FontAwesomeIcon className='Icon' icon={faInstagram} />
                                <FontAwesomeIcon className='Icon' icon={faFacebook} />
                                <FontAwesomeIcon className='Icon' icon={faWhatsapp} />
                            </div>
                        </div>
                    </div>
                    <form onSubmit={onSubmit} className="contactright">
                        <label htmlFor="name">Name:</label>
                        <input id="name" name="name" type="text" placeholder="Name" required />

                        <label htmlFor="email">Email:</label>
                        <input id="email" name="email" type="email" placeholder="Email" required />

                        <label htmlFor="message">Send me a message:</label>
                        <textarea id="message" name="message" rows="4" placeholder="Type your message here..." required></textarea>

                        <button type='submit' className='contactsubmit'>Submit Now</button>
                    </form>

                </div>
            </div>
            <div className="linebreak">
                <hr />
            </div>
        </section>
    )
}

export default Contact