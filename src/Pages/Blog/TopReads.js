import { Component } from "react";
import './TopReads.css';
import BlogNav from '../../Components/BlogNav.js'
import Header from '../../Components/Header.js'
import Footer from '../../Components/Footer.js'

class TopReads extends Component
{
    constructor()
    {
        super();
    }


    render() {
        return (
            <div className="TopReads">
                <Header/>
                <div className="box">
                    <div className="title" >
                        Top Reads
                    </div>
                </div>
                <BlogNav/>
                <div className="body">
                    <div className="main">
                        Coming soon.
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default TopReads;