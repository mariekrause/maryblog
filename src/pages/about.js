import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const AboutPage = ({
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
      <div>
        <h1 id="heading">Willkommen in meiner Welt.</h1>
            <p>Die Kurzfassung:</p>
            <div class="aboutspan">
            <span id="first_impression">Mein Name ist <strong>Marie Krause</strong>, ich bin 20 Jahre alt und studiere im 5. Semester 
                <strong> Digitale Medien an der DHBW Mannheim</strong>. Und zwar Dual - das heißt, ich kenne mich nicht nur mit der Theorie aus, sondern sammle parallel 
                auch Erfahrungen im praktischen Unternehmensumfeld (drei mal dürft ihr raten, wo).
            </span>
            <p class="line">Mein Studium gibt mir eine Bandbreite an Wissensgebieten mit auf den Weg - <strong>Wirtschaft, Informatik und Gestaltung</strong>.
                Doch nichts kann meinen Willen ersetzen, ständig Neues zu lernen. Offenheit, grenzenlose Neugier und meine Begeisterung für
                neues Wissen machen mich aus.
                </p>
            <p class="line">In meiner Freizeit bin ich für mein Leben gern unterwegs - Deutschland, Europa, weltweit - am liebsten mit dem Zug. Alles über meine
                Abenteuer erfahrt Ihr <a href="https://www.instagram.com/maryftf" target="_blank" rel="noreferrer">auf Instagram</a> oder in meinen Blog-Artikeln.
                In <strong>"Think Outside Your Box"</strong> möchte ich meine Erfahrungen im letzten Studienjahr festhalten - Höhen und Tiefen, Abenteuer und Lebenskrisen - alles ist dabei
                </p>
            <p class="subline1">Willst du mehr erfahren? Dann kontaktiere mich doch <a href="/contact_new">hier</a>.</p>
              </div>
            </div>
      
    </Layout>
  )
}
export default AboutPage
export const pageQuery = graphql`
  query AboutPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`