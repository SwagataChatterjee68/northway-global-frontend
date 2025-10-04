import React from 'react'

export default function PopularUniversities ({ universities }) {
  return (
    <div className='relative h-auto w-full mt-[15vh]'>
      {/* Background image */}
      <div
        className='absolute inset-0 bg-[url("https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/unibg-66db347170e15.webp")] 
                   bg-cover bg-center bg-no-repeat bg-fixed'
      ></div>

      {/* Overlay */}
      <div className='absolute inset-0 bg-black/50'></div>
      {/* Content */}
      <div className='relative max-w-5xl mx-auto text-center pt-[10vh] '>
        <h3 className='headingText !text-white'>
          Popular {" "}
          <span className='banner__color__title'>Universities</span>
        </h3>
        <div className='max-w-5xl mx-auto pb-[10vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-[5vh] px-4 md:px-10 xl:px-0'>
          {universities.map((uni, index) => (
            <div
              key={index}
              className='flex flex-col justify-center items-center text-center h-40 bg-white shadow-md rounded-lg overflow-hidden text-black'
            >
              <img
                src={uni.img}
                alt={uni.name}
                className='w-20 h-20 object-contain mb-3'
              />
              <p className='font-medium'>{uni.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
