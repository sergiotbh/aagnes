import { graphql, useStaticQuery } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout';
import PictureList from '../../components/PictureList';

const ArticleDetailPage = ({ data }) => {

  const [article, setArticle] = useState()

  useEffect(() => {

    const objectData = data.mdx.frontmatter

    switch (objectData.variant) {
      case 'article':
        setArticle([{
          title: objectData.title,
          subtitle: objectData.excerpt,
          date: objectData.year,
          photos: objectData.embeddedImages
        }])
        break;
    
      default:
        break;
    }
    
  }, [])

  return (
    <Layout>
      <section
        className="w-full h-full scroll-pt-24 overflow-scroll snap-y snap-mandatory"
      >
        <Helmet>
          <title>Aagnes | Espacio</title>
        </Helmet>
        <div className="h-24 w-full" />
        {article && <PictureList
          projectData={article}
        />}
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        embeddedImages {
          childImageSharp {
            gatsbyImageData(width: 500)
          }
        }
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

      }
    }
  }
`
ArticleDetailPage.Layout = Layout
export default ArticleDetailPage;