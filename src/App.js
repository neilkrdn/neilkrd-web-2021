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
        <div className="headcard">
          Projects
        </div>
    </div>

  );
}

export default App;
