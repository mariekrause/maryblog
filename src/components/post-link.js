import React from "react"
import { Link } from "gatsby"
import Image from "react-graceful-image"

const PostLink = ({ post }) => (
  <article className="card ">
    <Link to={post.frontmatter.path}>
      {!!post.frontmatter.thumbnail && (
        <Image src={post.frontmatter.thumbnail} 
          alt={post.frontmatter.title + "- Titelbild"}
          placeholderColor="#eeeeee"
       />
      )}
    </Link>
    <header>
      <h2 className="post-title">
        <Link to={post.frontmatter.path} className="post-link">
          {post.frontmatter.title}
        </Link>
      </h2>
      <div className="post-meta">{post.frontmatter.date}</div>
    </header>
  </article>
)
export default PostLink
