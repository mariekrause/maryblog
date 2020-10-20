import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navigation from "../components/navigation"
import 'prismjs/themes/prism-okaidia.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../utils/fontawesome';

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div className="site-wrapper">
      <header className="site-header">
        <div className="site-title">
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <Navigation />
      </header>
      {children}
      <footer className="site-footer">
        <a className='icons' href='https://twitter.com/maryftf'>
          <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" className="contacticon"/>
        </a>

        <a className='icons' href='https://instagram.com/maryftf'>
          <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" className="contacticon"/>
        </a>
      
        <a className='icons' href='https://www.linkedin.com/in/mariekr/'>
          <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" className="contacticon"/>
        </a>

        <a className='icons' href='https://github.com/mariekrause'>
          <FontAwesomeIcon icon={['fab', 'github-square']} size="2x" className="contacticon"/>
        </a>
        
        <a className='icons' href='https://youtube.com/marytheidiot1'>
          <FontAwesomeIcon icon={['fab', 'youtube']} size="2x" className="contacticon"/>
        </a>
        <p>&copy; {new Date().getFullYear()} maryftf &bull; powered by GatsbyJS, Netlify & GitHub</p>
      </footer>
    </div>
  )
}
