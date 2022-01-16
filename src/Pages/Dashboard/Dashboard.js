import { Component } from "react";
import Header from '../../Components/Header.js'
import Footer from '../../Components/Footer.js'
import './Dashboard.css'
import {HashLink as Link} from 'react-router-hash-link';
class Dashboard extends Component
{
    constructor()
    {
        super();
    }
    render() {
        return (
            <div className="Dashboard">
                <Header/>
                <div className="box">
                    <div className="title">
                        Creator Dashboard
                    </div>
                </div>
                <div className="body">
                    <div className="main">
                        <Link to="/dashboard/create/recentreads"><button className="buttons">Recent Reads</button></Link>
                        <Link to="/dashboard/create/researchbible"><button className="buttons">Research Bible</button></Link>
                        <Link to="/dashboard/create/showerthoughts"><button className="buttons">Shower Thoughts</button></Link>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}
export default Dashboard;