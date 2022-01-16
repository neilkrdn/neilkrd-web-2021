import './App.css';
import './Pages/Landing.css'
import Neil from './Assets/coverImg.png'
import Header from "./Components/Header.js";
import Intro from "./Components/Intro.js";
import Projects from "./Components/Projects.js";
import Blog from "./Components/Blog.js";
import About from "./Components/About.js";
import Footer from "./Components/Footer.js"

function App() {
  return (
    <div className="App">
        <Header/>
        <Intro />
        <Projects />
        <Blog />
        <About />
        <Footer />
      </div> 
  );
}

export default App;
