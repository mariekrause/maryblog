import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import '../utils/fontawesome.js';


export default () => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
        site {
          siteMetadata {
            home {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      <div className="hero-header">
        <div className="headline">{data.site.siteMetadata.home.title}</div>
        <div 
          className="primary-content" 
          dangerouslySetInnerHTML={{ __html: data.site.siteMetadata.home.description}}
        />
        <Link to='/about' className="button -primary -upper">Das bin ich! &rarr;</Link>
        <Link to='/contact' className="button -primary">Kontakt &rarr;</Link>
      </div>
    )}
  />
)