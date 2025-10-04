import React from 'react'
import TooltipBtn from '../../utlities/TooltipBtn/TooltipBtn'

export default function Careers ({ careersData }) {
  return (
    <div className='section__spacing'>
      {careersData?.map(item => (
        <div key={item.id} className='grid lg:grid-cols-2 items-center gap-16 h-full'>
          <div>
            <TooltipBtn text={item.tooltipText} />
            <h3 className='headingText'>
              {item.title}{' '}
              <span className='banner__color__title'>{item.colorText}</span>
            </h3>

            <p className='heading__sub__text'>{item.description}</p>
          </div>
          <img
            src={item.image}
            alt={item.title}
            className='w-full h-[50vh] object-cover rounded-lg '
          />
        </div>
      ))}
    </div>
  )
}
