import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
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
      <div className="two-grids -contact">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">Oh, Hallo da draußen!</h1>
          <p>Gibt es etwas Neues? Lass es mich wissen! &rarr;</p>
        </div>
        <div>
          
          <form className="form-container" action="POST" data-netlify="true">
            <div>
              <label htmlFor="name">Dein Name</label>
              <input type="text" name="name" id="name"/>
            </div>
            <div>
              <label htmlFor="email">Deine Email-Adresse</label>
              <input type="email" name="email" id="email"/>
            </div>
            <div>
              <label htmlFor="subject">Dein Betreff</label>
              <input type="text" name="subject" id="subject"/>
            </div>
            <div>
              <label htmlFor="message">Deine Nachricht</label>
              <textarea name="message" id="message"></textarea>
            </div>
            <div style={{display: "flex", justifyContent: "flex-end"}}>
              <input type="submit" className="button -primary" style={{marginRight: 0}} />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`