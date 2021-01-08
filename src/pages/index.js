import React, { useState } from "react"
import Helmet from 'react-helmet';
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import PostLink from "../components/post-link"
import HeroHeader from "../components/heroHeader"
import '../utils/fontawesome';

const IndexPage = ({
  data: {
    site,
    allMarkdownRemark: { edges },
  },
}) => {


  const [itemsToShow, addMore] = useState(6);

  const Posts = edges
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description} />
      </Helmet>
      <HeroHeader/>
      <h2>Meine neuesten Abenteuer &darr;</h2>
      <div className="grids">
        {Posts.slice(0, itemsToShow)}
      </div>
      <div className="centered">
        <button className="button" onClick={() => addMore(itemsToShow + 3)}>mehr laden</button>
      </div>
    </Layout>
  )
}

export default IndexPage
export const pageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "DD MMMM YYYY")
            path
            title
            thumbnail
          }
        }
      }
    }
  }
`
