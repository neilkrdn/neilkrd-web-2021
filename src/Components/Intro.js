import './Intro.css'

function Intro()
{
    return (
        <div className="Intro" id="intro">
          <div className="box">
              <div className="tagline">
              Neil Kardan
                <div className="subtag">
                  Designer | Developer | Scholar
                </div>
              </div>
            
          </div>
          <img className="coverImg" src={require('../Assets/coverImg.jpg')} alt="picture of neil"/>
        </div>
    )
}        
        
export default Intro; 