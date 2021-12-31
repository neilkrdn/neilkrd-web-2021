import './App.css';
import './Pages/Landing.css'
import Neil from './Assets/coverImg.png'
import Header from "./Components/Header.js";


function App() {
  return (
    <div className="App">
      <Header />
       <div className="intro">
         <div className="box">
           <div className="tagline">
            Neil Kardan
           </div>
           <img className="coverImg" src={require('./Assets/coverImg.jpg')} alt="picture of neil"/>
         </div>
       </div>
       <div className="box2">
          <div className="headcard">
            Projects
          </div>
        </div>
        <div className="projects">
          <div className="row">
              <div className="column left">
                  <img className="projectLogo" src={require('./Assets/ProjectIcons/bruinsource_logo.png')} alt="bruinsource logo"/>
              </div>
              <div className="column right">
                  A platform for students to join and collaborate on OpenSource projects within their interests,
                  experience, and skillsets. 
              </div>
          </div>
        </div>


        <footer className="footy">
          <a href="https://www.linkedin.com/in/neilkardan">
            <img className="footIcon" src={require('./Assets/FooterIcons/linkedin.png')} alt="linkedin" />
          </a>
          <a href="mailto:neilkardan@gmail.com">
            <img className="footIcon" src={require('./Assets/FooterIcons/mail.png')} alt="mail" /> 
          </a>
          <a href="https://www.github.com/neilkrdn">
            <img className="footIcon" src={require('./Assets/FooterIcons/github.png')} alt="github" /> 
          </a>
        </footer>

      </div>
  );
}

export default App;
