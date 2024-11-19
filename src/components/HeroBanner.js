import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React, { useEffect, useState } from 'react';
import { waitFor } from '../utils/Generic';

const HeroBanner = ({images}) => {

  const [currentImage, setCurrentImage] = useState(-1)

  const [topSrc, setTopSrc] = useState()
  const [bottomSrc, setBottomSrc] = useState()
  const [topVisible, setTopVisible] = useState(false)

  const [copied, setCopied] = useState(false)
  
  const initialLoading = async () => {
    setCurrentImage(currentImage => currentImage >= images.length - 1 ? 0 : currentImage + 1)

    setInterval(() => setCurrentImage(currentImage => currentImage >= images.length - 1 ? 0 : currentImage + 1)
    , 4000);
  }

  useEffect(() => {
    initialLoading()
  }, [])

  useEffect(() => {
    const setImageSources = async () => {
      setTopSrc(getImage(images[currentImage]?.node.childImageSharp))
      await waitFor(800)
      setTopVisible(true)
      await waitFor(1500)
      setBottomSrc(getImage(images[currentImage]?.node.childImageSharp))
    }

    setImageSources()
  }, [currentImage])

  useEffect(() => {
    setTopVisible(false)
  }, [bottomSrc])

  useEffect(() => {
    if(copied){
      setTimeout(() => {
          setCopied(false)
        },
      1000);
    }
  }, [copied])

  return(
    <div className="relative h-screen bg-black overflow-hidden">
      <div className='absolute h-full w-full'>
        {/* bottom */}
        <div className='absolute h-full'>
          {bottomSrc && <GatsbyImage
            image={bottomSrc}
            loading='eager'
            imgStyle={{
              objectFit: "cover",
              objectPosition: "50% 100%"
            }}
            className="h-full"
            alt=""
          />}
        </div>
        {/* top */}
        <div 
          className={`absolute h-full transform ${topVisible ? 'transition-opacity' : 'transition-none'} duration-2000 ${topVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {topSrc && <GatsbyImage
            image={topSrc}
            loading='eager'
            imgStyle={{
              objectFit: "cover",
              objectPosition: "50% 100%"
            }}
            className="h-full"
            alt=""
          />}
        </div>
      </div>
    </div>
  )
}

export default HeroBanner;