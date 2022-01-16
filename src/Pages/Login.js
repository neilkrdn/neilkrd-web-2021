import { Component } from 'react';
import './Login.css'
import Header from '../Components/Header.js'
import Footer from '../Components/Footer.js'
import {HashLink as Link} from "react-router-hash-link"

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

class Login extends Component
{
    constructor()
    {
        super();
        this.state =
        {
            email: '',
            password: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit()
    {
        this.signIn(this.state.email, this.state.password)
    }

    handleChange(e) 
    {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    signIn(email, password) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log("successfully signed in")
            return true;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            return false;
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
                    
                    <input
                            type="text"
                            name="email"
                            placeholder="Email..."
                            onChange={this.handleChange}
                    />
                    <input
                            type="password"
                            name="password"
                            placeholder="Password..."
                            onChange={this.handleChange}
                        />

                    <div className="buttons">
                        <Link to="/">
                            <button className="home">
                                    Home
                            </button>
                        </Link>
                        <button className="continue" onClick={this.handleSubmit()}>
                            Continue
                        </button>
                    </div>

                </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Login;