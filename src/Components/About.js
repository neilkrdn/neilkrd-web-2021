import './About.css';

function About() 
{
    return (
        <div className="about" id="about">
            <div className="box2">
                <div className="headcard">
                    About
                </div>
            </div>
            <div className="row">
                <div className="column left">
                    <img className="aboutMe" src={require('../Assets/aboutme.JPG')} alt="picture of neil"/>
                </div>
                <div className="column right">
                    <div className="aboutMeDescription">
                    I'm a current student at the University of California: Los Angeles, where I study Computer Science.
                    <br></br><br></br>
                    In my degree, I will be completing a technical breadth in Technology Management and upper divisions in Linguistics.
                    <br></br><br></br>
                    In my free time, I love to read, paint, and stay active. Check out my blog for reviews of books I've recently completed.
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;