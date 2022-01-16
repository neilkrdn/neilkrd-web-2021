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
                        <a href="https://github.com/neilkrdn/BruinSource">
                        <img className="projectLogo" src={require('../Assets/ProjectIcons/bruinsource_logo.png')} alt="bruinsource logo"/>
                        </a>
                </div>
            </div>
        </div>
    )
}
        
export default Projects;
        
/*

*/