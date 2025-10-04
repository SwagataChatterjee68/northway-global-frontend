'use client'
import { useState, useEffect } from 'react'

export default function VideoGalleryCmp() {

  const [galleryData, setGalleryData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
  
        const response = await fetch(
          'https://nortway.mrshakil.com/api/gallery/video/'
        )
        if (!response.ok) {
          throw new Error('Failed to fetch video data.')
        }
        const data = await response.json()
        setGalleryData(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchVideos()
  }, [])

  const visibleGallery = showAll ? galleryData : galleryData.slice(0, 6)

  if (isLoading) {
    return <div className='text-center py-10'>Loading Videos...</div>
  }
  if (error) {
    return <div className='text-center text-red-500 py-10'>Error: {error}</div>
  }
  return (
    <div className=''>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {visibleGallery.map(item => (
          <div key={item.id} className='overflow-hidden rounded-lg'>
          <div className='h-full '>
            <iframe
              className='w-full h-[30vh] xl:h-[35vh] rounded-lg'
              src={item.video_url} 
              title={`Video gallery item ${item.id}`}
              frameBorder='0'
              allow='autoplay; fullscreen; picture-in-picture'
              allowFullScreen
            ></iframe>
            </div>
          </div>
        ))}
      </div>

      
      {galleryData.length > 6 && (
        <div className='text-center mt-16'>
          <button
            onClick={() => setShowAll(!showAll)}
            className='px-6 py-2 rounded-md bg-[#ff9100] text-white cursor-pointer transition-transform duration-200 hover:scale-105'
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  )
}