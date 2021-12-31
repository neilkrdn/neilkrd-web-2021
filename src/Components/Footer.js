import './Footer.css'

function Footer() {
    return (
        <footer className="footy">
          <a href="https://www.linkedin.com/in/neilkardan">
            <img className="footIcon" src={require('../Assets/FooterIcons/linkedin.png')} alt="linkedin" />
          </a>
          <a href="mailto:neilkardan@gmail.com">
            <img className="footIcon" src={require('../Assets/FooterIcons/mail.png')} alt="mail" /> 
          </a>
          <a href="https://www.github.com/neilkrdn">
            <img className="footIcon" src={require('../Assets/FooterIcons/github.png')} alt="github" /> 
          </a>
        </footer>
    )
}
        
export default Footer;