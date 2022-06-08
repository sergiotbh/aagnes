import React, { useEffect, useState } from 'react';
import VerticalLogoWhite from '../images/aagnes_vertical_logo_white.svg'
import QrLink from '../images/aagnes_qr.svg'
import BackgroundImage from 'gatsby-background-image'
import { graphql } from 'gatsby';

const CardPage = ({data}) => {

  const [isOverlayVisible, setIsOverlayVisible] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsOverlayVisible(false)
    }, 1000);
  }, [])

  return(
    <main className="min-h-screen w-screen flex justify-center items-center bg-gray-200">
      <a
        href={data.cardFile.publicURL}
        target="_blank"
        download
      >
        <div className={`w-[390px] h-[844px] flex flex-col justify-between bg-white shadow-xl scale-75 relative`}>
          <div className={`absolute flex justify-center items-center z-40 top-0 left-0 bg-gray-400 h-full w-full transition-opacity duration-2500 ${isOverlayVisible ? 'opacity-90' : 'opacity-0'}`}>
            <h2 className="font-sans font-semibold text-xl text-white">Tap to save to your photos</h2>
          </div>
          <BackgroundImage
            fluid={data.cardBg.childImageSharp.fluid}
            alt=""
            className="flex p-5 h-1/2 justify-end bg-right-bottom bg bg-cover"
          >
            <h2
              className="font-serif uppercase h-56 text-xl vertical-rl text-white"
            >
              Interior Architecture & Object Design
            </h2>
            <img
              src={VerticalLogoWhite}
              className="h-48"
              alt="Aagnes"
            />
            <img
              src={VerticalLogoWhite}
              className="h-48"
              alt="Aagnes"
            />
            <img
              src={VerticalLogoWhite}
              className="h-48"
              alt="Aagnes"
            />
          </BackgroundImage>
          <section className="flex flex-col justify-end items-start relative h-1/2 p-5 pt-0">
            <div
              className="vertical-rl"
            >
              <h2 className="font-semibold italic uppercase text-xl leading-tight">Omar Godínez</h2>
              <h2 className="font-semibold italic uppercase text-xl leading-none">Miguel A. Nava</h2>
            </div>
            <div className="flex items-end">
              <img
                src={QrLink}
                alt="QR Code Link to Instagram"
                className="w-48 m-2 mb-0 ml-0"
              />
              <div className="flex flex-col font-serif text-xl text-left leading-tight">
                <span>hola@aagnes.mx</span>
                <span>@____aagnes</span>
                <span>aagnes.mx</span>
              </div>
            </div>
          </section>
        </div>
      </a>
    </main>
  )
}

export const query = graphql`
  query {
    cardBg: file(relativePath: { eq: "card_graphic.jpg" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 390) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    cardFile: file(relativePath: { eq: "business_card.jpg" }) {
      name
      publicURL
    }
  }
`

export default CardPage;