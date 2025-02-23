import { graphql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/Layout"
import PictureList from "../components/PictureList"

const EspacioPage = ({ data }) => {

  const projects = data.allMdx.edges.map((item) => {
    const project = item.node.frontmatter
    return {
    title: project.title,
    subtitle: project.location,
    date: project.year,
    photos: project.embeddedImages,
  }})

  return (
    <section
      className="w-full h-full scroll-pt-24 overflow-scroll snap-y snap-mandatory"
    >
      <Helmet>
        <title>Aagnes | Espacio</title>
      </Helmet>
      <div className="h-24 w-full" />
      <PictureList
        projectData={projects}
      />
    </section>
  )
}


export const query = graphql`
{
  allMdx(
    filter: {frontmatter: {variant: {eq: "project"}}}
    sort: {frontmatter: {year: DESC}}
  ) {
    edges {
      node {
        frontmatter {
          title
          year
          slug
          excerpt
          location
          embeddedImages {
            childImageSharp {
              gatsbyImageData(width: 2000)
            }
          }
          variant
        }
      }
    }
  }
}`

EspacioPage.Layout = Layout
export default EspacioPage;
