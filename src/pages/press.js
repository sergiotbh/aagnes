import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { Helmet } from 'react-helmet';
import { Paragraph, SecondaryLink, Subtitle } from '../components/TextComponents';
import Layout from '../components/Layout'

const PressPage = ({ data }) => {
  const articles = data.allMdx.edges

  return (
    <div className="flex flex-col md:flex-row overflow-y-scroll h-full w-full justify-start md:justify-between pt-24">
      <Helmet>
        <title>Aagnes | Prensa</title>
      </Helmet>
      <ul>
        <li>
          {articles.map((article, index) => {
            return (
              <Article
                articleData={article.node.frontmatter}
                key={index + ''}
              />
            )
          })}
        </li>
      </ul>
    </div>
  )
}

const Article = ({ articleData }) => {
  const { title, year, excerpt, imageSrc, slug, embeddedImages, fullArticle } = articleData

  const articleImage = getImage(imageSrc)

  return (
    <div className="flex flex-col-reverse md:flex-row pb-24">
      <div>
        <GatsbyImage
          image={articleImage}
          className="w-full md:w-[280px] xl:w-[500px] 2xl:w-[800px]"
          layout="fullWidth"
          imgStyle={{
            objectFit: "contain"
          }}
          alt={title}
        />
      </div>
      <div className="md:pl-4 max-w-md 2xl:max-w-4xl">
        <Subtitle customStyle="text-left pt-5 md:pt-0">
          {title}
        </Subtitle>
        <Paragraph customStyle="pb-4">
          {year}
        </Paragraph>
        <Subtitle customStyle="text-left pb-4 md:pb-2 2xl:pr-96">
          {`“${excerpt}”`}
        </Subtitle>
        {embeddedImages?.length > 0 ? <Link to={`/article/${slug}`}>
          <SecondaryLink>Ver artículo</SecondaryLink>
        </Link> :
          <a href={fullArticle}>
            <SecondaryLink>Ver artículo</SecondaryLink>
          </a>}
      </div>
    </div>
  )
}

PressPage.Layout = Layout
export default PressPage;

export const query = graphql`
  query{
    allMdx(
      filter: {frontmatter: {variant: {eq: "article"}}}
    ) {
        edges {
          node {
            frontmatter {
              title
              year
              slug
              excerpt
              imageSrc {
                childImageSharp {
                  gatsbyImageData(width: 500)
                }
              }
              variant
              embeddedImages {
                id
              }
              fullArticle
            }
          }
        }
      }
    }
`