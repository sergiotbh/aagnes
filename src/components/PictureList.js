import React, { useRef, useState, useEffect, createRef } from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { SmallSubtitle, Subtitle } from "../components/TextComponents"
import { getCurrentIdx, useOnScreen } from "../utils/Generic"


const PictureList = ({ projectData }) => {
  const elRefs = useRef([]);
  const wrapperRef = useRef()

  if (elRefs.current.length !== projectData.length) {
    // add or remove refs
    elRefs.current = Array(projectData.length)
      .fill()
      .map((_, i) => elRefs.current[i] || createRef());
  }

  const onScreenEls = useOnScreen(elRefs, '-150px')

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
    <div ref={wrapperRef} className="pb-28">
      {projectData.map((i, n) => {
        const id = "project-wrapper-"+n
        const isOnScreen = onScreenEls.includes(id)

        const { title, date, subtitle } = i

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
              <Subtitle customStyle={`mb-2 text-left ${isOnScreen ? 'opacity-100' : 'opacity-20'}`}>{title}</Subtitle>
            </button>
            <SmallSubtitle customStyle={`mb-1 transition-opacity duration-500 ${isOnScreen ? 'opacity-100' : 'opacity-0'}`}>{subtitle}</SmallSubtitle>
            <SmallSubtitle customStyle={`mb-1 transition-opacity duration-500 ${isOnScreen ? 'opacity-100' : 'opacity-0'}`}>{date}</SmallSubtitle>
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
  return(
  <div
    className={`flex justify-end md:mx-10 mb-4 transition-opacity duration-500 ${isOnScreen ? 'opacity-100' : 'opacity-10'}`}
    ref={innerRef}
    id={elementId}
  >
    <div className="grid lg:grid-cols-[repeat(2,minmax(100px,_1450px))] gap-4 mr-4">
      <div
        className={`flex flex-col md:hidden justify-end items-end snap-start`}
      >
        <Subtitle customStyle={`mb-2 text-left ${isOnScreen ? 'opacity-100' : 'opacity-20'}`}>{projectData.name}</Subtitle>
        <SmallSubtitle customStyle={`mb-1 transition-opacity duration-500`}>{projectData.location}</SmallSubtitle>
        <SmallSubtitle customStyle={`mb-1 transition-opacity duration-500`}>{projectData.year}</SmallSubtitle>
      </div>
      {
        projectData.photos?.map((i, n) => <GatsbyImage
            key={'image'+n}
            image={getImage(i)}
            className={`snap-start ${(i.childImageSharp.gatsbyImageData.width > i.childImageSharp.gatsbyImageData.height) ? 'md:col-span-2' : 'md:col-span-1'} xl:min-h-[85vh]`}
            alt="Aagnes"
          />
        )
      }
    </div>
  </div>
)}
export default PictureList;