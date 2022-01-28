import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push } from "firebase/database";
import firebaseApp from '../../fb_db.js'
import './BlogPostCreation.css';
import Header from '../../Components/Header.js';
import React, { Component } from 'react';
import Footer from '../../Components/Footer.js';
import {HashLink as Link} from 'react-router-hash-link'
import {getAuth} from "firebase/auth";
import BlankPage from "../../Components/BlankPage.js"

class BlogPostCreation extends Component
{
    constructor()
    {
        super();
        this.state = {
            currentTitle: '',
            currentSubtitle: '',
            currentDescription: '',
            currentSignature: '',
            currentRead: '',
            currentWritten: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) 
    {
        this.setState({
          [e.target.name]: e.target.value
        });
    }

    handleSubmit(e)
    {
        e.preventDefault();
        var today = new Date();
        var date = (today.getMonth()+1) + '/' + today.getDate() + '/' + today.getFullYear();
        var time = today.getTime();
        const blogPost  = {
          title: this.state.currentTitle,
          subtitle: this.state.currentSubtitle,
          description: this.state.currentDescription,
          signature: this.state.currentSignature,
          read: this.state.currentRead,
          write: this.state.currentWritten,
          date: date,
          time: time
        }

        const blogDb = getDatabase(firebaseApp);
        const blogListRef = ref(blogDb, 'blogs');
        const newPostRef = push(blogListRef);
        
        set(newPostRef, 
            {
                blogPost
            }
        )
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
            <div className="Creation">
                <Header />
                <div className="wrapper">
                    <h1>
                        Create a Recently Read
                    </h1>
                    <form className="Inputs">
                        <div className='boxName'>
                        Title
                        </div>
                        <div className="Title">
                            <input
                                type="text"
                                name="currentTitle"
                                placeholder="Post Title..."
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='boxName'>
                        Subtitle
                        </div>
                        <div className="Subtitle">
                            <input
                                type="text"
                                name="currentSubtitle"
                                placeholder="Post Subtitle..."
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='boxName'>
                        Description
                        </div>
                        <div className="Description">
                            <textarea
                                type="text"
                                name="currentDescription"
                                placeholder="Post Description..."
                                required
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='boxName'>
                        Signature
                        </div>
                        <div className="Signature">
                            <input
                                type="text"
                                name="currentSignature"
                                placeholder="Written by..."
                                required
                                onChange={this.handleChange}
                                />
                        </div>
                        <div className='boxName'>
                        Date Written
                        </div>
                        <div className="DateWritten">
                            <input
                                type="text"
                                name="currentWritten"
                                placeholder="Written..."
                                required
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='boxName'>
                        Date Read
                        </div>
                        <div className="DateRead">
                            <input
                                type="text"
                                name="currentRead"
                                placeholder="Read in..."
                                required
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="Buttons">
                            <Link to="/dashboard"><button type="button" className="BackToBlog">Back to Dashboard</button></Link>
                            <button type="button" className="CreateNewPost" onClick={this.handleSubmit}>Create New Post</button>
                        </div>
                    </form>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default BlogPostCreation;