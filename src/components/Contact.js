import React from 'react'

function Contact() {
    return (
        <div className="contact-title">
            <h2 className="contact-title-text">Contact <span className='green-text'>Me</span> </h2>
        <div className="contact-container">
            <div className="icon-container">
                <a href="https://github.com/Dimavich" className='contact-icons'><i class="fab fa-github-square contact-icon"></i><p className="contact-text">GitHub</p></a>
                <a href="https://www.linkedin.com/in/dmitriy-babich-22216a202" className='contact-icons'><i class="fab fa-linkedin contact-icon"></i><p className="contact-text">Linked In</p></a>
                <a href="mailto:dmitriy.babich0@gmail.com" className='contact-icons'><i class="fas fa-envelope contact-icon"></i><p className="contact-text">Email</p></a>
                <a href="https://www.instagram.com/dirmid/" className='contact-icons'><i class="fab fa-instagram contact-icon"></i><p className="contact-text"></p><p className="contact-text">Instagram</p></a>
                <a href="https://docs.google.com/document/d/1_9y3sKZc4lIWV55ED-1Avp6Wk4XE_LqWGEc9L3-m7zo/edit?usp=sharing" className='contact-icons'><i class="fas fa-file-word contact-icon"></i><p className="contact-text">Resume</p></a>
            </div>
        </div>
        </div>
    )
}

export default Contact
