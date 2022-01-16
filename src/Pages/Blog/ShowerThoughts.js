import { Component } from "react";
import BlogNav from '../../Components/BlogNav.js'
import Header from '../../Components/Header.js'
import Footer from '../../Components/Footer.js'
import './ShowerThoughts.css'

class ShowerThoughts extends Component
{
    constructor()
    {
        super();
    }

    render()
    {
        return(
            <div className="ShowerThoughts">
                <Header/>
                <div className="box">
                    <div className="title" >
                        Shower Thoughts
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

export default ShowerThoughts;