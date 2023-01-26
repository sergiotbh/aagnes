import React from "react"
import { graphql } from "gatsby";
import Layout from "../components/Layout";

const IndexPage = ({}) => {


  return (
    <main>

    </main>
  )
}

export const query = graphql`
  query{
    homeHeroPhotos: allFile(
      filter: {relativeDirectory: {eq: "homeHeroPhotos"}}
      sort: { fields: absolutePath, order: ASC }
    ) {
      edges {
        node {
          childImageSharp{
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
              quality: 50,
            )
          }
      }
      }
    }
  }
`;

IndexPage.Layout = Layout
export default IndexPage
