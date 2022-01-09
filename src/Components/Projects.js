import './Projects.css';

function Projects()
{
    return (
        <div className="Projects" id="projects">
            <div className="box2">
                <div className="headcard">
                    Projects
                </div>
            </div>
            <div className="projects">
                <div className="row">
                    <div className="column left">
                        <a href="https://github.com/neilkrdn/BruinSource">
                        <img className="projectLogo" src={require('../Assets/ProjectIcons/bruinsource_logo.png')} alt="bruinsource logo"/>
                        </a>
                    </div>
                    <div className="column right">
                        A platform for students to join and collaborate on OpenSource projects within their interests,
                        experience, and skillsets. 
                    </div>
                </div>
            </div>
        </div>
    )
}
        
export default Projects;
        
/*

*/