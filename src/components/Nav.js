import React from 'react';

const Nav = ({ aboutRef, mainRef, testimonialsRef, contactRef }) => {

    const scrollToSection = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
    };
    return(
        <nav>
            <label>James Pilkington</label>
            
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