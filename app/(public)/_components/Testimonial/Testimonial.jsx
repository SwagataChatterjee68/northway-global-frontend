'use client'
import React, { useState, useEffect } from 'react'
import SectionHeading from '../utlities/SectionHeading/SectionHeading'
import { GiNothingToSay } from 'react-icons/gi'
import { FaQuoteLeft, FaStar, FaUserCircle } from 'react-icons/fa' // Import a fallback icon
import Marquee from 'react-fast-marquee'

export default function Testimonial() {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch('https://nortway.mrshakil.com/api/testimonial/')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setTestimonials(data)
      } catch (error) {
        setError(error.message)
        console.error('Failed to fetch testimonials:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  if (loading) {
    return <div className='section__spacing text-center'>Loading testimonials...</div>
  }

  if (error) {
    return <div className='section__spacing text-center'>Error: {error}</div>
  }

  return (
    <div className='section__spacing '>
      <div className=' relative'>
        <SectionHeading
          text='Testimonials'
          Icon={GiNothingToSay}
          title='What’s Our '
          colorTitle='student say'
          subtitle='Our students have shared their incredible journeys and successes, from gaining admissions to top universities to receiving life-changing scholarships. Hear directly from them about how our dedicated support made their study abroad experience smooth and rewarding.'
        />
      </div>

      <div className='common__top__spacing tes__container relative  common__top__spacing'>
        {/* Desktop View */}
        <div className='hidden lg:block'>
          <Marquee
            gradient={true}
            speed={50}
            pauseOnHover
            autoFill={true}
            gradientColor='#EAEAEA'
          >
            {testimonials.map((item, index) => (
              <div
                key={item.id || index}
                className='bg-white rounded-md border border-black/10  p-6 w-72 lg:w-80 xl:w-96 flex-shrink-0 mx-1'
              >
                <FaQuoteLeft className='text-3xl text-gray-300 ' />
                <p className='text__base mb-4 mt-2'>{item.comments}</p>
                <div className='flex items-center mb-2'>
                  {[...Array(item.star)].map((_, i) => (
                    <FaStar key={i} className='text-[#ff9100] mr-1' />
                  ))}
                </div>
                <div className='flex items-center mt-4'>
                  {/* --- CHANGE IS HERE --- */}
                  {item.profile_image ? (
                    <img
                      src={item.profile_image} // Use 'profile_image' field from API
                      alt={item.name}
                      className='w-12 h-12 rounded-full mr-3 object-cover' // Added object-cover
                    />
                  ) : (
                    <FaUserCircle className='w-12 h-12 rounded-full mr-3 text-gray-400' /> // Fallback icon
                  )}
                  <div>
                    <h4 className='text__medium'>{item.name}</h4>
                    <p className='text__base'>{item.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>

        {/* Mobile and Tablet View */}
        <div className='lg:hidden block -z-50'>
          <Marquee speed={50} pauseOnHover autoFill={true}>
            {testimonials.map((item, index) => (
              <div
                key={item.id || index}
                className='bg-white rounded-md border border-black/10  p-6 w-72 lg:w-80 xl:w-96 flex-shrink-0 mx-1'
              >
                <FaQuoteLeft className='text-3xl text-gray-300 ' />
                <p className='text__base mb-4 mt-2'>{item.comments}</p>
                <div className='flex items-center mb-2'>
                  {[...Array(item.star)].map((_, i) => (
                    <FaStar key={i} className='text-[#ff9100] mr-1' />
                  ))}
                </div>
                <div className='flex items-center mt-4'>
                   {/* --- CHANGE IS HERE --- */}
                  {item.profile_image ? (
                    <img
                      src={item.profile_image} // Use 'profile_image' field from API
                      alt={item.name}
                      className='w-12 h-12 rounded-full mr-3 object-cover'
                    />
                  ) : (
                    <FaUserCircle className='w-12 h-12 rounded-full mr-3 text-gray-400' />
                  )}
                  <div>
                    <h4 className='text__medium'>{item.name}</h4>
                    <p className='text__base'>{item.designation}</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  )
}