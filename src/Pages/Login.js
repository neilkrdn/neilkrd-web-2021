import { Component } from 'react';
import './Login.css'
import React from "react";
import ReactDOM from "react-dom";
import Header from '../Components/Header.js'
import Footer from '../Components/Footer.js'
import {HashLink as Link} from "react-router-hash-link"
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { BrowserRouter, Route } from 'react-router-dom';

class Login extends Component
{
    constructor()
    {
        super();
        this.state =
        {
            email: '',
            password: '',
            loggedIn: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.signIn = this.signIn.bind(this);
    }
    renderDashboardButton = () => {
        if (this.state.loggedIn)
        {
            console.log("dashboard button");
            return 
        }
    }
    handleSubmit(e)
    {
        e.preventDefault();
        this.signIn(this.state.email, this.state.password);
    }

    handleChange(e) 
    {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    signIn(email, password) {
        const auth = getAuth();
        signOut(auth).then(() =>
        {
            console.log("signed out")
            this.setState({ loggedIn: false })
        })
        .catch((error) =>
        {
            console.log(error);
        })
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            if (auth.currentUser.email == ("neilkardan@gmail.com"))
            {
                console.log(auth)
                this.setState
                ({
                    loggedIn: true
                })
                this.renderDashboardButton();
            }
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
        });
    }

    render() {
        return (
            <div className="Login">
                <Header/>
                <div className="page">
                <div className="message">
                    <p>Hey! Are you Neil Kardan?</p>
                    <p>Prove it! Sign in here.</p>
                    <form onSubmit={this.handleSubmit}>
                    <input
                            type="text"
                            name="email"
                            placeholder="Email..."
                            onChange={this.handleChange}
                            value={this.state.email}
                    />
                    <input
                            type="password"
                            name="password"
                            placeholder="Password..."
                            onChange={this.handleChange}
                            value={this.state.password}
                        />

                    <div className="buttons">
                        <Link to="/">
                            <button className="home">
                                    Home
                            </button>
                        </Link>
                        <button type="submit" className="continue">
                            Continue
                        </button>
                        {this.renderDashboardButton}
                    </div>
                    </form>
                {(this.state.loggedIn === true) &&
                <button>
                    <Link to="/dashboard">Dashboard</Link>
                    </button>
                }

                </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Login;