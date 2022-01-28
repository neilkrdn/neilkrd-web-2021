import {HashLink as Link} from 'react-router-hash-link';
import Header from './Header.js'
import Footer from './Footer.js'
import './BlankPage.css'
import { Component } from 'react';

class BlankPage extends Component
{
    constructor()
    {
        super();
    }
    render() {
        return(
            <div className="BlankPage">
                <Header/>
                <div className="Empty">
                    You've reached a blank page.
                    
                    <Link to="/"><button className="buttons">Go Back</button></Link>
                </div>)
                <Footer/>
            </div>
        )
    }
}

export default BlankPage;