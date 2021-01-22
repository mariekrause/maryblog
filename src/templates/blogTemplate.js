import React from "react"
import Helmet from 'react-helmet';
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/fontawesome';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data // data.markdownRemark holds your post data
  const { siteMetadata } = site
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <Helmet>
        <title>{frontmatter.title} | {siteMetadata.title}</title>
        <meta name="description" content={frontmatter.metaDescription} />
      </Helmet>
      <div className="blog-post-container">
        <article className="post">
          
          {!frontmatter.featuredimage && (
            <div className="post-featuredimage">
              <h1 className="post-title">{frontmatter.title}</h1>
              <div className="post-meta">{frontmatter.date}</div>
            </div>
          )}
          {!!frontmatter.featuredimage && (
            <div className="post-featuredimage" style={{backgroundImage: `url(${frontmatter.featuredimage})`}}>
              <h1 className="post-title">{frontmatter.title}</h1>
              <p className="post-author">von Marie Krause</p>
              <div className="post-meta">{frontmatter.date}</div>
              <div className="post-socials">
                <a className='icons' href='https://twitter.com/maryftf' target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={['fab', 'twitter']} size="1x" className="contacticon_header"/>
                </a>

                <a className='icons' href='https://instagram.com/maryftf' target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={['fab', 'instagram']} size="1x" className="contacticon_header"/>
                </a>
      
                <a className='icons' href='https://www.linkedin.com/in/mariekr/' target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={['fab', 'linkedin']} size="1x" className="contacticon_header"/>
                </a>

                <a className='icons' href='https://github.com/mariekrause' target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={['fab', 'github-square']} size="1x" className="contacticon_header"/>
                </a>
                
                <a className='icons' href='https://youtube.com/marytheidiot1' target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={['fab', 'youtube']} size="1x" className="contacticon_header"/>
                </a>

                <a className='icons' href='https://traewelling.de/profile/maryftf' target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon={['fas', 'subway']} size="1x" className="contacticon_header"/>
                </a>
              </div>
            </div>
          )}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
      <div className="authorBox">
        <img src="/assets/autor.svg" className="author" alt="author"></img>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        featuredimage
        thumbnail
        metaDescription
      }
    }
  }
`