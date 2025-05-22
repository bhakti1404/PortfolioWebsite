import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    } else if (entry.target.id === 'Home' && !entry.isIntersecting) {
                        setActiveSection('');
                    }
                });
            },
            {
                threshold: [0.7], // Only trigger when 70% of the section is visible
                rootMargin: '-30% 0px -60% 0px' // Adjust viewport margins
            }
        );

        // Observe all sections
        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <div className='navbar'>
            <div className="leftnav">
                <span className='logo'>B</span>hakti
            </div>
            <div className="rightnav">
                <ul>
                    <li>
                        <Link 
                            to="Home" 
                            smooth={true} 
                            duration={500}
                            spy={true}
                            offset={-50}
                            className={activeSection === 'Home' ? 'active' : ''}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="Services" 
                            smooth={true} 
                            duration={500}
                            spy={true}
                            offset={-50}
                            className={activeSection === 'Services' ? 'active' : ''}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="About" 
                            smooth={true} 
                            duration={600}
                            spy={true}
                            offset={-50}
                            className={activeSection === 'About' ? 'active' : ''}
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="Projects" 
                            smooth={true} 
                            duration={700}
                            spy={true}
                            offset={-50}
                            className={activeSection === 'Projects' ? 'active' : ''}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link 
                            to="Contact" 
                            smooth={true} 
                            duration={800}
                            spy={true}
                            offset={-50}
                            className={activeSection === 'Contact' ? 'active' : ''}
                        >
                            ContactMe
                        </Link>
                    </li>
                </ul>
            </div>
            <a
                href="https://github.com/bhakti1404"
                target="_blank"
                rel="noopener noreferrer"
                className="github"
            >
                View Github Profile
            </a>
        </div>
    );
};

export default Navbar;