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
            <div className="subtag">
              Designer | Developer | Scholar
            </div>
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
                <a href="https://github.com/neilkrdn/BruinSource">
                  <img className="projectLogo" src={require('./Assets/ProjectIcons/bruinsource_logo.png')} alt="bruinsource logo"/>
                </a>
              </div>
              <div className="column right">
                  A platform for students to join and collaborate on OpenSource projects within their interests,
                  experience, and skillsets. 
              </div>
          </div>
        </div>
        <div className="box2">
          <div className="headcard">
            Blog
          </div>
        </div>
        <p> Coming soon </p>
        <div className="box2">
          <div className="headcard">
            About
          </div>
        </div>
        <div className="row">
          <div className="column left">
            <img className="aboutMe" src={require('./Assets/aboutme.JPG')} alt="picture of neil"/>
          </div>
          <div className="column right">
            <div className="aboutMeDescription">
              I'm a current student at the University of California: Los Angeles, where I study Computer Science.
              <br></br><br></br>
              In my degree, I will be completing a technical breadth in Technology Management and upper divisions in Linguistics.
              <br></br><br></br>
              In my free time, I love to read, paint, and stay active. Check out my blog posts for reviews of my recently finished books!
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
