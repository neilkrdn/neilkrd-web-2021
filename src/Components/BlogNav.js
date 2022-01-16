import { Component } from "react";
import './BlogNav.css'
import {HashLink as Link} from "react-router-hash-link";

class BlogNav extends Component
{
    constructor()
    {
        super();
    }
    render() {
        return (
            <div className="BlogNav">
                <div className="blogNav">
                    <div className="navBar">
                        <Link className="blogLink" to="/blog/recentreads">Recent Reads</Link>
                        <Link className="blogLink" to="/blog/topreads">Top Reads</Link>
                        <Link className="blogLink" to="/blog/researchbible">Research Bible</Link>
                        <Link className="blogLink" to="/blog/showerthoughts">Shower Thoughts</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default BlogNav;