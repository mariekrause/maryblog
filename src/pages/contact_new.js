import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPageNew = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>Contact — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <h1>Die Reise geht weiter - mehr von mir:</h1>
      <div className="two-grids">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/palette.jpeg')`, marginBottom: 0}}>
          <h1 className="post-title">Instagram</h1>
          <p>Mehr Bilder, mehr Details, mehr Ich!<br></br> Das ist mein Tagebuch auf Instagram &rarr;</p>
        </div>
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/tweet.jpeg')`, marginBottom: 0}}>
          <h1 className="post-title">Twitter</h1>
          <p>Meine Welt in 280 Zeichen<br></br><br></br>Alles was mich bewegt (meistens Züge) gibt es hier &rarr;</p>
        </div>
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/film.jpeg')`, marginBottom: 0}}>
          <h1 className="post-title">YouTube</h1>
          <p>Meine Welt in 280 Zeichen<br></br>Alles was mich bewegt (meistens Züge) gibt es hier &rarr;</p>
        </div>
        <div>
        </div>
      </div>
      
    </Layout>
  )
}
export default ContactPageNew
export const pageQuery = graphql`
  query ContactPageNewQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`