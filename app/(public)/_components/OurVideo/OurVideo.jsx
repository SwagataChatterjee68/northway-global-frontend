'use client'
import React, { useState, useEffect } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { GoPlay } from 'react-icons/go'
import { IoMdClose } from 'react-icons/io'

export default function OurVideo() {
  const [isOpen, setIsOpen] = useState(false)
  const [videoUrl, setVideoUrl] = useState('')
  const [videoData, setVideoData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('https://nortway.mrshakil.com/api/gallery/video/')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setVideoData(data)
      } catch (error) {
        setError(error.message)
        console.error('Failed to fetch videos:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchVideos()
  }, [])

  const settings = {
    dots: false,
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 3,
    speed: 500,
    draggable: true,
    arrows: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  }

  const openModal = url => {
    setVideoUrl(url)
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setVideoUrl('')
  }

  return (
    <div className='mt-[10vh] mb-[30vh] lg:mt-[15vh] relative'>
      <div className='relative py-20 bg-[url("https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/others/ourVideo.webp")] bg-no-repeat w-full bg-cover bg-center h-[60vh] 2xl:h-[50vh]'>
        <div className='absolute inset-0 bg-black/60'></div>
        <div className='relative z-10'>
          <h2 className='headingText text-center !text-white'>
            Our <span className='heading__color__text'>Video</span>
          </h2>
          <p className='heading__sub__text text-center max-w-3xl mx-auto px-4 !text-white'>
            Explore insights and success stories from our students who have embarked on their study abroad journeys.
          </p>
        </div>
      </div>

      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 max-w-6xl w-full px-10'>
        {isLoading ? (
          <div className='text-center text-white'>Loading Videos...</div>
        ) : error ? (
          <div className='text-center text-red-500 bg-white p-4 rounded-lg'>Error: {error}</div>
        ) : (
          <Slider {...settings}>
            {videoData.map(video => (
              <div key={video.id} className='2xl:px-3 px-0'>
                <div
                  className='slide-item relative mx-auto transition-transform duration-300 ease-in-out cursor-pointer'
                  onClick={() => openModal(video.video_url)}
                >
                  <img
                    src={video.thumbnail_url}
                    alt={video.title || `Video ${video.id}`}
                    className='w-full h-60 md:h-72 object-cover rounded-lg transition-all duration-300'
                  />
                  <div className='absolute inset-0 rounded-md flex items-center justify-center bg-black/20'>
                    <GoPlay className='text-5xl text-white' />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        )}
      </div>

  
      {isOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/80' onClick={closeModal}>
          <div className='relative w-full max-w-3xl px-4' onClick={(e) => e.stopPropagation()}>
            <button
              className='absolute -top-10 right-2 text-white text-3xl z-50'
              onClick={closeModal}
            >
              <IoMdClose />
            </button>
            <div className='relative pt-[56.25%]'>
              <iframe
                src={videoUrl}
                title='YouTube Video'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                className='absolute top-0 left-0 w-full h-full'
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        /* Styles remain the same */
      `}</style>
    </div>
  )
}