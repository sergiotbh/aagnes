import { StaticQuery, graphql, Link } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
import AagnesLogoBlack from '../images/aagnes_logo_black.svg'
import AagnesLogoWhite from '../images/aagnes_logo_white.svg'
import MonogramBlack from '../images/monogram_black.svg'
import MonogramWhite from '../images/monogram_white.svg'
import { waitFor } from '../utils/Generic';
import HeroBanner from './HeroBanner';
import { PrimaryLink, SecondaryLink } from './TextComponents';

const Layout = ({children, location}) => {

  const [offsetY, setOffsetY] = useState(0)
  const [initialState, setInitialState] = useState(true)

  const path = location?.pathname || ''
  const isIndex = location?.pathname === '/'
  const generalContainerRef = useRef()

  const handleScroll = () => {
    setOffsetY(generalContainerRef.current.scrollTop)
  }
  
  useEffect(() => {
    generalContainerRef.current.scrollTop = 0
  }, [])

  useEffect(() => {
    setInitialState(isIndex && offsetY < 250)
  }, [isIndex, offsetY])

  return(
    <main className="h-screen w-screen overflow-hidden">
      <StaticQuery
        query={query}
        render={data => (
          <div
            className={`h-screen w-screen snap-y snap-mandatory ${isIndex ? 'overflow-scroll' : 'overflow-hidden'}`}
            ref={generalContainerRef}
            onScroll={handleScroll}
          >
            {isIndex && <section className="absolute -z-10 w-full pointer-events-none">
              <HeroBanner
                images={data.homeHeroPhotos.edges}
                paused={offsetY > 250}
              />
            </section>}
            {isIndex && <div className="h-1/3 snap-start opacity-0"/>}
            <section className={`h-screen w-screen flex transform ease-in transition-all duration-500 ${initialState ? 'bg-transparent' : 'bg-white'} bg-opacity-90`}>
              <Sidebar
                initialState={initialState}
              />
              {children}
            </section>
          </div>
        )}
      />
    </main>
  )
}

const Sidebar = ({initialState}) => {
  const [copied, setCopied] = useState(false)
  const [contactVisible, setContactVisible] = useState(false)
  const [logoVisible, setLogoVisible] = useState(false)

  useEffect(() => {
    waitFor(1000)
    setLogoVisible(true)
  })

  const handleCopy = () => {
    navigator.clipboard.writeText('hola@aagnes.mx')
    setCopied(true)
  }

  useEffect(() => {
    if(copied){
      setTimeout(() => {
        setCopied(false)
      }, 1500);
    }
  }, [copied])

  return(
    <section
      className={`inline-flex flex-col justify-between h-full pt-24 pl-2 pr-0 lg:pl-10 lg:pr-10 pb-10 snap-start `}
    >
      <div>
        <a href="/">
          <div className={`hidden lg:flex h-12 lg:w-48 2xl:w-72 transition-opacity duration-1000 ${logoVisible ? 'opacity-100' : 'opacity-0'}`}>
            <img
              src={AagnesLogoWhite}
              alt="Aagnes"
              className={`w-20 lg:w-48 transform transition-opacity duration-1000 ${initialState ? 'opacity-100' : 'opacity-0'} absolute`}
            />
            <img
              src={AagnesLogoBlack}
              alt="Aagnes"
              className={`w-20 lg:w-48 transform transition-opacity duration-1000 ${initialState ? 'opacity-0' : 'opacity-100'} absolute`}
            />
          </div>
          <div className={`lg:hidden w-14 h-12 lg:w-48 2xl:w-72 transition-opacity duration-1000 ${logoVisible ? 'opacity-100' : 'opacity-0'}`}>
            <img
              src={MonogramWhite}
              alt="Aagnes"
              className={`w-16 lg:w-48 transform transition-opacity duration-1000 ${initialState ? 'opacity-100' : 'opacity-0'} absolute`}
            />
            <img
              src={MonogramBlack}
              alt="Aagnes"
              className={`w-16 lg:w-48 transform transition-opacity duration-1000 ${initialState ? 'opacity-0' : 'opacity-100'} absolute`}
            />
          </div>
        </a>
        <ul className={`flex flex-col child:inline-flex transition-opacity duration-1000 ${initialState ? 'opacity-0' : 'opacity-100'}`}>
          {/* <li className="mt-6">
            <Link
              to="/objeto"
            >
              <PrimaryLink 
              // selected={path?.contains('objeto')}
              >Objeto</PrimaryLink>
            </Link>
          </li> */}
          <li className="mt-3">
            <Link
              to="/espacio"
            >
              <PrimaryLink
                // selected={path?.contains('espacio')}
              >Espacio</PrimaryLink>
            </Link>
          </li>
          {/* <li className="mt-3">
            <Link
              to="/espacio"
            >
              <PrimaryLink
                // selected={path?.contains('lienzo')}
              >Lienzo</PrimaryLink>
            </Link>
          </li> */}
        </ul>
      </div>
      <ul className={`flex flex-col child:inline-flex transition-opacity duration-1000 ${initialState ? 'opacity-0' : 'opacity-100'} pb-24 md:pb-12`}>
        <li className="mt-1">
          <Link
            to="/about"
          >
            <SecondaryLink>About Us</SecondaryLink>
          </Link>
        </li>
        <li className="mt-1 flex flex-col">
          <button
            onClick={() => setContactVisible(!contactVisible)}
            className="inline-flex"
          >
            <SecondaryLink>Contact</SecondaryLink>
          </button>
          <ul className={`ml-3 flex flex-col child:inline-flex transition-[max-height] duration-700 ${contactVisible ? 'max-h-10' : 'max-h-0'} overflow-hidden`}>
            <li className="mt-1">
              <a href="https://www.instagram.com/____aagnes/" target="_blank">
                <SecondaryLink selected>Instagram</SecondaryLink>
              </a>
            </li>
            <li className="mt-1">
              <button
                onClick={handleCopy}
              >
                <SecondaryLink selected>E-mail <span className={`pl-1 transition-opacity duration-1000 ${copied ? 'opacity-100' : 'opacity-0'}`}> (Copied to clipboard)</span>
                </SecondaryLink>
              </button>
            </li>
          </ul>
        </li>
      </ul>
    </section>
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

export default Layout;