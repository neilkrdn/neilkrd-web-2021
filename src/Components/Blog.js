import './Blog.css'
import BlogPost from './BlogPost.js'
import Header from './Header.js'
import Footer from './Footer.js'
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push, get, child} from "firebase/database";
import firebaseApp from '../fb_db.js'
import { Component } from 'react';
import { render } from '@testing-library/react';
import { Link } from "react-router-dom";



class Blog extends Component
{
    constructor()
    {
        super();
        this.state =
        {
            blogPosts: []
        }
    }
    
    accessBlogPosts()
    {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `blogs`)).then((snapshot) => {
        if (snapshot.exists()) {
            this.generateBlogPosts(snapshot)
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
            console.error(error);
        });
    }

    generateBlogPosts(snapshot)
    {
        console.log(this.state.blogPosts.length < Object.keys(snapshot.val()).length)
        if (this.state.blogPosts.length < Object.keys(snapshot.val()).length) {
            for (var i = Object.keys(snapshot.val()).length-1; i >= 0; i--)
            {
                var keys = Object.keys(snapshot.val());
                var tempPost=(snapshot.val()[keys[i]].blogPost)
                const post = <BlogPost 
                    key={i}
                    title={tempPost.title}
                    subtitle={tempPost.subtitle}
                    description={tempPost.description.substring(0, tempPost.description.indexOf('\n'))}
                    signature={tempPost.signature}
                    read={tempPost.read}
                    write={tempPost.write}
                    date={tempPost.date}
                    time={tempPost.time}
                />
                this.setState({blogPosts: [...this.state.blogPosts, post]});
            }
        }
    }

    render() {
        this.accessBlogPosts();
        return (
            <div className="Blog" id="blog">
                <div className="box2">
                    <div className="headcard">
                        Blog
                    </div>
                </div>
                <div className="MostRecent">
                    {this.state.blogPosts[0]}
                </div>
                <div className="toBlog">
                    <button>
                        <Link to="/blog/recentreads">
                        Keep reading...
                        </Link>
                    </button>
                </div>
            </div>
        )
    }
}

export default Blog;