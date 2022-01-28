import { Component } from "react";
import Header from '../../Components/Header.js'
import Footer from '../../Components/Footer.js'
import './Dashboard.css'
import {HashLink as Link} from 'react-router-hash-link';
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import {Routes, Route} from 'react-router-dom';
import BlankPage from '../../Components/BlankPage.js'

class Dashboard extends Component
{
    constructor()
    {
        super();
    }
    render() {
        const auth = getAuth();
        console.log(auth);
        if (auth.currentUser == null)
        {
            console.log("not signed in")
            return <BlankPage/>
        }
        else if (auth.currentUser.email != ("neilkardan@gmail.com"))
        {
            return <BlankPage/>
        }
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