import './Projects.css';
import {HashLink as Link} from "react-router-hash-link";
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
                <div className="row">
                        <Link to="/blog/recentreads">
                        <img className="projectLogo" src={require('../Assets/ProjectIcons/recentreads.png')} alt="recentreads logo"/>
                        </Link>
                </div>
            </div>
        </div>
    )
}
        
export default Projects;
        
/*

*/