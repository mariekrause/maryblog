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
        <a href="https://instagram.com/maryftf" target="_blank" rel="noreferrer">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/palette.jpeg')`, marginBottom: 0}}>
          <h1 className="post-title">Instagram</h1>
          <p><br></br>Das ist mein Tagebuch in Bildern - hier gibt es regelmäßig kreative Inhalte aus den 
          Bereichen Reisen, Grafikdesign und täglicher Wahnsinn &rarr;</p>
        </div>
        </a>
        <a href="https://twitter.com/maryftf" target="_blank" rel="noreferrer">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/tweet.jpeg')`, marginBottom: 0}}>
          <h1 className="post-title">Twitter</h1>
          <p>Meine Welt in 280 Zeichen<br></br>Neuigkeiten darüber, was mich bewegt (meistens Züge) gibt es hier &rarr;</p>
        </div>
        </a>
        <a href="https://youtube.com/marytheidiot1" target="_blank" rel="noreferrer">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/film.jpeg')`, marginBottom: 0}}>
          <h1 className="post-title">YouTube</h1>
          <p>Auf meinem YouTube Kanal findet ihr meine größeren Projekte - ob Roadtrip durch Europa oder
            Alltagswahnsinn der Corona-Zeit &rarr;</p>
        </div>
        </a>
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