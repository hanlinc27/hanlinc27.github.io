import React from "react"
import { Link } from "gatsby"
import 'styles/fonts.css';

const PostLink = ({ post }) => (

  <div  className = "musings-text">
   
    <Link to={post.frontmatter.path}>
      {post.frontmatter.title} ({post.frontmatter.date})
 
    </Link>
    

  </div>

)

export default PostLink