import { graphql } from "gatsby"
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image"
import React, { useRef, useState, useEffect, createRef } from "react"
import Layout from "../components/Layout"
import { SmallSubtitle, Subtitle } from "../components/TextComponents"
import { getCurrentIdx, useCurrentIdx, useOnScreen } from "../utils/Generic"

const projects = [
  {
    id: "casaCedros",
    name: "Casa Cedros",
    location: "Tapalpa, Jalisco",
    year: "2022",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
  },
  {
    id: "ranchoSanFrancisco",
    name: "Rancho San Francisco",
    location: "Guadalajara, Jalisco",
    year: "2022",
  },
]

const EspacioPage = ({ data }) => {

  let projectPhotos = data.projectPhotos.edges.reduce((carry, value) => {
    return {...carry, [value.node.relativeDirectory.replace("project_", "")]: {photos: []}};
  }, {});


  data.projectPhotos.edges.forEach(element => {
    projectPhotos[element.node.relativeDirectory.replace("project_", "")].photos.push(element.node.childImageSharp)
  });

  const projectList = projects.map((i, n) => {
    const photos = projectPhotos[i.id.replace("project_", "")].photos
    return {...i, photos}
  })

  return (
    <section
      className="w-full h-full scroll-pt-24 overflow-scroll snap-y snap-mandatory"
    >
      <div className="h-24 w-full" />
      <ProjectList
        projectData={projectList}
      />
    </section>
  )
}

const ProjectList = ({ projectData }) => {
  const elRefs = useRef([]);
  const wrapperRef = useRef()

  if (elRefs.current.length !== projectData.length) {
    // add or remove refs
    elRefs.current = Array(projectData.length)
      .fill()
      .map((_, i) => elRefs.current[i] || createRef());
  }

  const onScreenEls = useOnScreen(elRefs, '-200px')

  const [currentIdx, setCurrentIdx] = useState(0)

  useEffect(() => {
    setCurrentIdx(getCurrentIdx(onScreenEls[0]))
  }, [onScreenEls])

  const scrollToIdx = (idx) => {
    elRefs.current[idx].current.scrollIntoView({behavior: 'smooth'})
    setTimeout(() => {
      elRefs.current[idx].current.scrollIntoView({behavior: 'smooth'})
    }, 1500);
  }

  return (
    <div ref={wrapperRef}>
      {projectData.map((i, n) => {
        const id = "project-wrapper-"+n
        const isOnScreen = onScreenEls.includes(id)

        return (
          [<div
            key={'wrapper-'+n}
            className={`hidden md:block flex-shrink-0 w-24 lg:w-48 h-fit sticky float-right`}
            style={{
              top: (isOnScreen || currentIdx > n) ? (n) * 24 + 96 : 'auto',
              bottom: (currentIdx > n) ? 'auto' : (projectData.length - n) * 24,
            }}
          >
            <button
              onClick={() => scrollToIdx(n)}
            >
              <Subtitle customStyle={`mb-2 text-left ${isOnScreen ? 'opacity-100' : 'opacity-20'}`}>{i.name}</Subtitle>
            </button>
            <SmallSubtitle customStyle={`mb-1 transition-opacity duration-500 ${isOnScreen ? 'opacity-100' : 'opacity-0'}`}>{i.location}</SmallSubtitle>
            <SmallSubtitle customStyle={`mb-1 transition-opacity duration-500 ${isOnScreen ? 'opacity-100' : 'opacity-0'}`}>{i.year}</SmallSubtitle>
          </div>,
          <ProjectSection
            projectData={i}
            elementId={id}
            key={n}
            isOnScreen={isOnScreen}
            innerRef={elRefs.current[n]}
          />]
        )
      })}
    </div>
  )
}

const ProjectSection = ({ projectData, elementId, isOnScreen, innerRef }) => {

  return (
    <div
      className={`flex justify-end md:mr-10 mb-4 transition-opacity duration-500 ${isOnScreen ? 'opacity-100' : 'opacity-10'}`}
      ref={innerRef}
      id={elementId}
    >
      <div className="grid lg:grid-cols-[repeat(2,minmax(100px,_450px))] gap-4 ">
        {
          projectData.photos.map((i, n) => 
            <GatsbyImage
              image={getImage(i)}
              className="snap-start"
              alt="Aagnes"
            />
          )
        }
        {/* <StaticImage
          src="../images/aagnes_1.jpg"
          className="snap-start"
          alt="Aagnes"
        />
        <StaticImage
          src="../images/aagnes_1.jpg"
          className="snap-start"
          alt="Aagnes"
        />
        <StaticImage
          src="../images/aagnes_1.jpg"
          className="snap-start"
          alt="Aagnes"
        />
        <StaticImage
          src="../images/aagnes_1.jpg"
          className="snap-start"
          alt="Aagnes"
        /> */}
      </div>
      <div className="w-0.5 bg-black mx-4" />
    </div>
  )
}

export const query = graphql`
  query{
    projectPhotos: allFile(
      filter: {relativeDirectory: {regex: "/project/"}}
    ) {
        edges {
          node {
            childImageSharp{
              gatsbyImageData(
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP, AVIF]
                quality: 40,
              )
            }
            relativeDirectory
          }
        }
      }
    }
`

EspacioPage.Layout = Layout
export default EspacioPage;
