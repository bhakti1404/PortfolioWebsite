import React from 'react'
import './About.css'
import profile_img from '../../assets/profile_photo.jpg'
import html from '../../assets/Skills/html.png'
import css from '../../assets/Skills/css.png'
import js from '../../assets/Skills/js.png'
import react from '../../assets/Skills/react.png'
import tailwind from '../../assets/Skills/tailwind.png'
import nextjs from '../../assets/Skills/nextjs.png'
import nodejs from '../../assets/Skills/nodejs.png'
import firebase from '../../assets/Skills/firebase.png'
import git from '../../assets/Skills/git.png'
import github from '../../assets/Skills/github.png'
import mongodb from '../../assets/Skills/mongodb.png'
import bootstrap from '../../assets/Skills/bootstrap.png'

function About() {
    return (
        <section id='About'>
            <div className='about'>
                <div className="abouttitle">
                    <h1>Skills and Tools</h1>
                </div>
                <div className="aboutsections">
                    {/* <div className="aboutleft">
                        <img src={profile_img} alt="" />
                    </div> */}
                    <div className="aboutright">
                        <div className="aboutpara">
                            <p>The Skills, Tools and Technologies I use</p>
                        </div>
                        <div className="aboutskills">
                            <div className="aboutskillsfirst">
                                <img src={html} alt="" style={{ height: '70px' }} />
                                <img src={css} alt="" />
                                <img src={js} alt="" />
                                <img src={react} alt="" />
                                <img src={tailwind} alt="" />
                                <img src={bootstrap} alt="" />
                                <img src={firebase} alt="" />
                            </div>
                            <div className="aboutskillssecond">
                                <img src={nextjs} alt="" />
                                <img src={nodejs} alt="" />
                                <img src={git} alt="" />
                                <img src={github} alt="" />
                                <img src={mongodb} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="linebreak">
                <hr />
            </div>
        </section>
    )
}

export default About