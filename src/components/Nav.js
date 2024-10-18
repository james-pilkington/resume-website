import React, { useState } from 'react';

const Nav = ({ aboutRef, mainRef, testimonialsRef, contactRef }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false); 
    };

    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    };

    return(
        <nav>
            <label>James Pilkington</label>
            
            {/* Hamburger Icon for Mobile */}
            <div className="hamburger" onClick={toggleMenu}>
                ☰
            </div>

            <ul>
                <li><a  href="#home" onClick={() => scrollToSection(aboutRef)} style={{ background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}>Home</a></li>
                <li><a href="#about" onClick={() => scrollToSection(aboutRef)} style={{ background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}>About</a></li>
                <li><a href="#main" onClick={() => scrollToSection(mainRef)} style={{ background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}>Experience & Education</a></li>
                <li><a href="#testimonials" onClick={() => scrollToSection(testimonialsRef)} style={{ background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}>Testimonials</a></li>
                <li><a href="#contact" onClick={() => scrollToSection(contactRef)} style={{ background: 'none', border: 'none', color: 'inherit', textDecoration: 'underline', cursor: 'pointer' }}>Contact</a></li>

            </ul>
        </nav>
    )
}

export default Nav;


