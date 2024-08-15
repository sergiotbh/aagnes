import { graphql, Link, useStaticQuery } from 'gatsby';
import React, { useEffect, useRef, useState } from 'react';
import AagnesLogoBlack from '../images/aagnes_logo_black.svg'
import AagnesLogoWhite from '../images/aagnes_logo_white.svg'
import MonogramBlack from '../images/monogram_black.svg'
import { waitFor } from '../utils/Generic';
import HeroBanner from './HeroBanner';
import { PrimaryLink, SecondaryLink } from './TextComponents';
import IconMenu from '../images/icon_menu.svg';
import IconClose from '../images/icon_x.svg';
import { Helmet } from 'react-helmet';

import { AppStateProvider, useAppState } from '../context/appStateContext';

const Layout = ({ children, location, title, description, url }) => {

  const { isIndex, initialState, handleScroll } = useAppState()
  const generalContainerRef = useRef()

  useEffect(() => {
    generalContainerRef.current.scrollTop = 0
  }, [])

  const data = useStaticQuery(query)

  const defaults = data.site.siteMetadata;

  const seo = {
    title: title || defaults.title,
    description: description || defaults.description,
    image: defaults.image,
    url: url || defaults.url
  };
  const ogImage = data.featuredImage?.childImageSharp?.gatsbyImageData;

  const metas = [
    // basic seo
    {
      name: 'description',
      content: seo.description,
    },
    {
      name: 'og:image',
      content: ogImage.images.fallback.src,
    },
    {
      name: 'og:image:width',
      content: `${ogImage.width}`,
    },
    {
      name: 'og:image:height',
      content: `${ogImage.height}`,
    },
    {
      name: 'og:type',
      content: 'website',
    },
    {
      name: 'og:title',
      content: seo.title,
    },
    {
      name: 'og:description',
      content: seo.description,
    },
    {
      name: 'og:site_name',
      content: data.site.siteMetadata.og.siteName,
    },
    {
      name: 'og:url',
      content: `${data.site?.siteMetadata?.url}`,
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:description',
      content: seo.description,
    },
    {
      name: 'twitter:title',
      content: seo.title,
    },
    {
      name: 'twitter:image',
      content: ogImage.images.fallback.src,
    },
  ];

  return (
    <main className="h-screen w-screen overflow-hidden fixed md:static">
      <div
        className={`h-screen w-screen snap-y snap-mandatory ${isIndex ? 'overflow-scroll' : 'overflow-hidden'}`}
        ref={generalContainerRef}
        onScroll={() => handleScroll(generalContainerRef.current.scrollTop)}
      >
        <Helmet
          htmlAttributes={{
            lang: 'es'
          }}
        >
          <title>Aagnes</title>
          {metas.map(meta => (
            <meta key={meta.name} name={meta.name} content={meta.content} />
          ))}
        </Helmet>
        {isIndex && initialState && <section className="absolute -z-10 w-full pointer-events-none">
          <HeroBanner
            images={data.homeHeroPhotos.edges}
          />
        </section>}
        {isIndex && <div className="h-1/3 snap-start opacity-0" />}
        <section className={`flex h-screen w-screen transform ease-in transition-all duration-500 ${initialState ? 'bg-transparent' : 'bg-white'} bg-opacity-100`}>
          <Sidebar
            initialState={initialState}
            isIndex={isIndex}
            location={location}
          />
          <div className="pl-20 md:pl-0 md:w-full">
            {children}
          </div>
        </section>
      </div>
    </main>
  )
}

const Sidebar = ({ initialState, isIndex, location }) => {

  const [copied, setCopied] = useState(false)
  const [contactVisible, setContactVisible] = useState(false)
  const [logoVisible, setLogoVisible] = useState(false)
  const [isSidebarVisible, setIsSidebarVisible] = useState(isIndex)

  useEffect(() => {
    waitFor(500)
    setLogoVisible(true)
  }, [])

  const handleCopy = () => {
    navigator.clipboard.writeText('hola@aagnes.mx')
    setCopied(true)
  }

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false)
      }, 1500);
    }
  }, [copied])

  return (
    <div className="flex flex-col relative">
      <button
        onClick={() => setIsSidebarVisible(visible => !visible)}
        className={`fixed z-50 top-8 left-2 w-8 h-8 ${initialState || isIndex ? 'opacity-0' : 'opacity-100'} md:hidden`}
      >
        <img
          src={isSidebarVisible ? IconClose : IconMenu}
          className="h-full w-full"
          alt="Menu"
        />
      </button>
      <section
        className={`fixed md:static z-40 inline-flex flex-col h-full pt-24 pl-2 pr-0 lg:pl-10 lg:pr-10 pb-10 snap-start transition-all duration-1000 bg-white ${isSidebarVisible ? 'pointer-events-auto' : 'pointer-events-none'} ${(isSidebarVisible && !isIndex) ? 'bg-opacity-80' : 'bg-opacity-0'} md:pointer-events-auto md:bg-opacity-0`}
      >
        <a href="/">
          <div className={`hidden lg:flex h-12 lg:w-48 2xl:w-72 transition-opacity duration-1000 ${logoVisible ? 'opacity-100' : 'opacity-0'}`}>
            <img
              src={AagnesLogoWhite}
              alt="Aagnes"
              className={`w-20 lg:w-48 transform transition-opacity duration-500 ${initialState ? 'opacity-100' : 'opacity-0'} absolute`}
            />
            <img
              src={AagnesLogoBlack}
              alt="Aagnes"
              className={`w-20 lg:w-48 transform transition-opacity duration-500 ${initialState ? 'opacity-0' : 'opacity-100'} absolute`}
            />
          </div>
          <div className={`lg:hidden w-48 h-12 lg:w-48 2xl:w-72 transition-opacity duration-1000 ${logoVisible ? 'opacity-100' : 'opacity-0'}`}>
            <img
              src={AagnesLogoWhite}
              alt="Aagnes"
              className={`w-48 transform transition-opacity duration-1000 ${initialState ? 'opacity-100' : 'opacity-0'} absolute`}
            />
            <button
              onClick={() => setIsSidebarVisible(visible => !visible)}
            >
              <img
                src={MonogramBlack}
                alt="Aagnes"
                className={`w-16 transform transition-opacity duration-1000 ${initialState ? 'opacity-0' : 'opacity-100'} absolute -mt-4`}
              />
            </button>
          </div>
        </a>
        <div className={`flex flex-col h-full justify-between transform transition-transform duration-1000 ${isSidebarVisible ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
          <ul className={`flex flex-col child:inline-flex transition-opacity duration-1000 ${initialState ? 'opacity-0' : 'opacity-100'}`}>
            <li className="mt-3 py-1">
              <Link
                to="/espacio"
                onClick={() => setIsSidebarVisible(false)}
              >
                <PrimaryLink
                  selected={location?.pathname?.includes('espacio')}
                >Espacio</PrimaryLink>
              </Link>
            </li>
          </ul>
          <ul className={`flex flex-col child:inline-flex transition-opacity duration-1000 ${initialState ? 'opacity-0' : 'opacity-100'} pb-36 md:pb-12`}>
            <li className="mt-1 py-1 md:py-0">
              <Link
                to="/press"
                onClick={() => setIsSidebarVisible(visible => !visible)}
              >
                <SecondaryLink>Prensa</SecondaryLink>
              </Link>
            </li>
            <li className="mt-1 py-1 md:py-0">
              <Link
                to="/about"
                onClick={() => setIsSidebarVisible(visible => !visible)}
              >
                <SecondaryLink>Estudio</SecondaryLink>
              </Link>
            </li>
            <li className="mt-1 py-1 md:py-0 flex flex-col">
              <button
                onClick={() => setContactVisible(!contactVisible)}
                className="inline-flex"
              >
                <SecondaryLink>Contacto</SecondaryLink>
              </button>
              <ul className={`ml-3 flex flex-col child:inline-flex transition-[max-height] duration-700 ${contactVisible ? 'max-h-14' : 'max-h-0'} overflow-hidden`}>
                <li className="mt-1 py-1 md:py-0">
                  <a href="https://www.instagram.com/____aagnes/" target="_blank" rel="noreferrer" >
                    <SecondaryLink selected>Instagram</SecondaryLink>
                  </a>
                </li>
                <li className="mt-1 py-1 md:py-0">
                  <button
                    onClick={handleCopy}
                    className="text-left"
                  >
                    <SecondaryLink selected>E-mail<br className="md:hidden" /> <span className={`pl-1 transition-opacity duration-1000 ${copied ? 'opacity-100' : 'opacity-0'}`}>(Copied to clipboard!)</span>
                    </SecondaryLink>
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

const LayoutWrapper = ({ location, children }) => (
  <AppStateProvider location={location}>
    <Layout>{children}</Layout>
  </AppStateProvider>
)

export default LayoutWrapper

export const query = graphql`
  query{
    site {
      siteMetadata {
        url
        title
        description
        image
        og {
          siteName
        }
      }
    }
    featuredImage: file(
      absolutePath: { glob: "**/src/images/aagnes_meta.png" }
    ) {
      childImageSharp {
        gatsbyImageData(layout: FIXED, width: 792)
      }
    }
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

