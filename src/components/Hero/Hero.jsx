import React from 'react'
import Typed from 'typed.js';
import './Hero.css'
import developerImg from '../../assets/developer.png'
import { Link } from 'react-scroll';


function Hero() {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
            strings: ['Web Developer', 'App Developer', 'Metaverse Developer'],
            typeSpeed: 50,
        });

        return () => {
            // Destroy Typed instance during cleanup to stop animation
            typed.destroy();
        };
    }, []);
    return (
        <section id='Home'>
            <div className='hero'>
                <div className="leftsection">
                    Hi, I'm <span className='bhaktiText'>Bhakti</span>,
                    <div>
                        and i am Passionate
                    </div>
                    <span className='developertext' ref={el}></span>
                    <div className="actionbuttons">

                        <Link to="Contact" smooth={true} duration={900} className="connectwithme">
                            Connect With Me
                        </Link>

                        <a href="/Bhakti_Resume.pdf" target="_blank" rel="noopener noreferrer">
                            <div className="myresume">My Resume</div>
                        </a>

                    </div>
                </div>
                <div className="rightsection">
                    <img src={developerImg} alt="Developer Image" />
                </div>

            </div>
            <div className="linebreak">
                <hr />
            </div>
        </section>
    )
}

export default Hero