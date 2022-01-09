import './BlogPostCreation.css';
import Header from '../Components/Header.js';

function BlogPostCreation() 
{
    return (
        <div className="Creation">
            <Header/>

            <h1>
                Write Blog Post
            </h1>
            <form className="Inputs">
                <div className='boxName'>
                Title
                </div>
                <div className="Title">
                    <input
                        type="text"
                        placeholder="Post Title..."
                        required
                    />
                </div>
                <div className='boxName'>
                Subtitle
                </div>
                <div className="Subtitle">
                    <input
                        type="text"
                        placeholder="Post Subtitle..."
                        required
                    />
                </div>
                <div className='boxName'>
                Description
                </div>
                <div className="Description">
                    <textarea
                        type="text"
                        placeholder="Post Description..."
                        required
                    />
                </div>
                <div className='boxName'>
                Signature
                </div>
                <div className="Signature">
                    <input
                        type="text"
                        placeholder="Written by..."
                        required
                     
                    />
                </div>
                <div className="Buttons">
                    <button type="button" className="BackToBlog">Back to Blog</button>
                    <button type="button" className="CreateNewPost">Create New Post</button>
                </div>
            </form>
        </div>
    )
}

export default BlogPostCreation;