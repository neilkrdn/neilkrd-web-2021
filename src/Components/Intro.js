import './Intro.css';

function Intro()
{
    return (
        <div className="intro" id="home">
          <div className="box">
            <div className="tagline">
            Neil Kardan
            <div className="subtag">
              Designer | Developer | Scholar
            </div>
            </div>
            
            <img className="coverImg" src={require('../Assets/coverImg.jpg')} alt="picture of neil"/>
          </div>
      </div>
    )
}        
        
export default Intro; 