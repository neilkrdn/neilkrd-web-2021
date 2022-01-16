import './About.css';

function About() 
{
    return (
        <div className="About" id="about">
            <div className="box2">
                <div className="headcard">
                    About
                </div>
            </div>
            <div className="aboutMe">
                <span>
                <img className="aboutMeImage" src={require('../Assets/aboutme.JPG')} alt="picture of neil"/>
                </span>
                <div className="aboutMeDescription">
                    I'm a current student at the University of California, Los Angeles, where I study Computer Science.
                    <br></br><br></br>
                    In my degree, I will be completing a technical breadth in Technology Management and upper division courses in Linguistics.
                    <br></br><br></br>
                    I'm an Amazon Future Engineer Scholar and have worked on various projects in a full-stack capacity. I previously interned for Amazon's Alexa Video in Seattle for summer 2021 and I will be returning to Amazon in summer 2022 to their San Francisco office.
                    <br></br><br></br>
                    In my free time, I love to read, paint, and stay active. Check out my blog for reviews of books I've recently completed.
                </div>
            </div>
        </div>
    )
}
export default About;