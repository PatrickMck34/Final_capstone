import './about.css'
const AboutModal = () => {

    return (
        <div id="about-modal-container">
            <h2 id="about-modal-prompt">About Me</h2>
            <h3>Simply-Amazin is an amazon-esque clone. Get in touch with the creator:</h3>
            <div id="contact-info-container">
        
                <div id="patrick-contact-container">
                    <p className="contact-name">Patrick McKinney</p>
                    <div className="contact-links-container">
                        <a className="link-button" href="https://github.com/PatrickMck34" target="_blank"><i class="fa-brands fa-github fa-xl link-icon" /></a>
                        <a className="link-button" href="https://www.linkedin.com/in/patrick-mckinney-97aab0245" target="_blank"><i class="fa-brands fa-linkedin fa-xl link-icon" /></a>
                    </div>
                </div>
                
        
                   
                </div>
            </div>
      
    )
}

export default AboutModal