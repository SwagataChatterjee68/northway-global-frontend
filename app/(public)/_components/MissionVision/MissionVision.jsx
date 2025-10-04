import React from 'react'

export default function MissionVision () {
  return (
    <div className='mt-[15vh]'>
      <div className='mv__container '>
        <div className='xl:max-w-7xl mx-auto flex  items-center h-full px-4 md:px-10 xl:px-0 py-5'>
          <div className='text-left'>
            <div>
              <h3 className='headingText !text-white'>Our <span className='heading__color__text'>Mission</span></h3>
              <p className='heading__sub__text mt-5 text-shadow-2xs font-semibold !text-white pr-[20%]'>
                We aim to facilitate the smooth transition of students into new
                educational environments across the globe. Our mission is to
                provide support, resources, and guidance to ensure a successful
                migration experience.
              </p>
            </div>

            <div className='text-right mt-16 '>
              <h3 className='headingText !text-white'><span className='heading__color__text'>Our</span> Vission</h3>
              <p className='heading__sub__text mt-5 text-shadow-2xs font-semibold !text-white pl-[20%]'>
                We aim to facilitate the smooth transition of students into new
                educational environments across the globe. Our mission is to
                provide support, resources, and guidance to ensure a successful
                migration experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
