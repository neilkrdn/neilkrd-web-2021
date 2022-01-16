import { Component } from "react";
import BlogNav from '../../Components/BlogNav.js'
import Header from '../../Components/Header.js'
import Footer from '../../Components/Footer.js'
import './ResearchBible.css'

class ResearchBible extends Component
{
    constructor()
    {
        super();
    }

    render()
    {
        return(
            <div className="ResearchBible">
                <Header/>
                <div className="box">
                    <div className="title" >
                        Research Bible
                    </div>
                </div>
                <BlogNav/>
                <div className="body">
                    <div className="main">
                        Coming soon!
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
    
}

export default ResearchBible;