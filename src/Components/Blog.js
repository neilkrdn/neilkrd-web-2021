import './Blog.css'
import BlogPost from './BlogPost.js'
function Blog() {
    return (
        <div className="Blog" id="blog">
            <div className="box2">
                <div className="headcard">
                    Blog
                </div>
            </div>
            <div className="MostRecent">
                <BlogPost />
            </div>
         </div>
    )
}

export default Blog;