import React from "react"
import Helmet from 'react-helmet';
// import { graphql } from 'gatsby';
import Layout from "../components/layout"

const imageTest = () => {
  return (
    <Layout>
      <Helmet>
        <title>Local Gatsby Image Test</title>
      </Helmet>
      
    </Layout>
  )
}

export default imageTest

/* export const query = graphql`
` */