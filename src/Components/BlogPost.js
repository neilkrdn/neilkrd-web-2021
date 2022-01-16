import './BlogPost.css'
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, push } from "firebase/database";
import firebaseApp from '../fb_db.js'
import { Component } from 'react';
import { render } from '@testing-library/react';

class BlogPost extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            title: this.props.title,
            subtitle: this.props.subtitle,
            description: this.props.description,
            signature: this.props.signature,
            read: this.props.read,
            write: this.props.write
        }
    }

    render() {
        return (
            <div className="BlogPost">
                <div className="Title">
                    {this.state.title}
                    <div className="Subtitle">
                    {this.state.subtitle}
                    </div>
                </div>
                <p>
                    <NewlineText text={this.state.description}></NewlineText>
                </p>
                <div className="Sign">
                {this.state.signature}
                </div>
                <div className="dates">
                    Read in {this.state.read}
                    <br></br>
                    Written {this.state.write}
                </div>
        </div>
        );
    }
}

function NewlineText(props) {
    const text = props.text;
    const newText = text.split('\n').map(str => <p><br></br>{str}</p>);
    return newText;
  }

export default BlogPost;