'use client'
import { useState, useEffect } from 'react'

export default function PhotoGalleryCmp () {
  const [gallery, setGallery] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const response = await fetch('https://nortway.mrshakil.com/api/gallery/photo/')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setGallery(data)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchGalleryData()
  }, [])

  
  const visibleGallery = showAll ? gallery : gallery.slice(0, 9)

  
  if (loading) {
    return <div className='text-center section__spacing'>Loading...</div>
  }

  if (error) {
    return <div className='text-center section__spacing'>Error: {error}</div>
  }

  return (
    <div className=' section__spacing'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
        {visibleGallery.map(item => (
          <div key={item.id} className='overflow-hidden rounded-lg'>
            <img
              src={item.photo}
              alt={`Gallery ${item.id}`}
              className='w-full h-[40vh] object-cover hover:scale-105 transition-transform duration-300'
            />
          </div>
        ))}
      </div>

      
      {gallery.length > 9 && (
        <div className='text-center mt-16'>
          <button
            onClick={() => setShowAll(!showAll)}
            className='px-6 py-2 rounded-md bg-[#ff9100] text-white cursor-pointer '
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  )
}