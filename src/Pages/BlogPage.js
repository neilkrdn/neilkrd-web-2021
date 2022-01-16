import Header from "../Components/Header.js";
import './BlogPage.css'
import Footer from "../Components/Footer.js";
import { Component } from "react";
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push, get, child} from "firebase/database";
import firebaseApp from '../fb_db.js'
import { render } from '@testing-library/react';
import BlogPost from '../Components/BlogPost.js'
import {HashLink as Link} from "react-router-hash-link";

const scrollWithOffset = (el) => {
  const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
  const yOffset = -100; 
  window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}

class BlogPage extends Component
{
  constructor()
  {
    super();
    this.state = 
    {
      postNumber: 0,
      blogPosts: []
    }
    this.handlePostChange = this.handlePostChange.bind(this);
    this.handlePostBack = this.handlePostBack.bind(this);
  }

  handlePostChange()
  { 
      let numPosts = 0;
      const dbRef = ref(getDatabase());
      get(child(dbRef, `blogs`)).then((snapshot) => {

      if (snapshot.exists()) {
          console.log("nice!");
          numPosts = (Object.keys(snapshot.val()).length-1)
          if (this.state.postNumber < numPosts)
          {
            console.log("Increment")
            this.setState({ postNumber: this.state.postNumber + 1 })
          }
          else 
          {
            this.setState({ postNumber: 0 })
            console.log("Decrement")
          }
      } else {
          console.log("No data available");
      }
      }).catch((error) => {
          console.error(error);
      });
  }
  
  handlePostBack()
  {
    let numPosts = 0;
    const dbRef = ref(getDatabase());
      get(child(dbRef, `blogs`)).then((snapshot) => {
      if (snapshot.exists()) {
          console.log("nice!");
          numPosts = (Object.keys(snapshot.val()).length-1)
          if (this.state.postNumber > 0 )
          {
            console.log("Decrement")
            this.setState({ postNumber: this.state.postNumber - 1 })
          }
          else 
          {
            this.setState({ postNumber: numPosts })
            console.log("Increment")
          }
      } else {
          console.log("No data available");
      }
      }).catch((error) => {
          console.error(error);
      });
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
    if (this.state.blogPosts.length < Object.keys(snapshot.val()).length) {
        for (var i = Object.keys(snapshot.val()).length-1; i >= 0; i--)
        {
            var keys = Object.keys(snapshot.val());
            var tempPost=(snapshot.val()[keys[i]].blogPost)
            const post = <BlogPost 
                key={i}
                title={tempPost.title}
                subtitle={tempPost.subtitle}
                description={tempPost.description}
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
      <div className="BlogPage">
        <Header/>
        <div className="box">
          <div className="title" >
              Recent Reads
          </div>
        </div>
        <div id="top"></div>
        <div className="postBox" >

          <div className="posts">

            <div className="postContent">
            {this.state.blogPosts[this.state.postNumber]}
            </div>

            <div className="buttons">
              <Link smooth scroll={el => scrollWithOffset(el)} to="/blog#top"><button onClick={this.handlePostChange} className="forwardArticle">Next</button></Link>
              <Link smooth scroll={el => scrollWithOffset(el)} to="/blog#top" className="recolor"><button onClick={this.handlePostBack} className="backArticle">Back</button></Link>
              
            </div>
          </div>

          
          <Footer/>
        </div>
      </div>
    )
  }
}

export default BlogPage;