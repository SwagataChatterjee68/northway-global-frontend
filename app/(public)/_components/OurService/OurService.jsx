'use client'
import React from 'react'
import SectionHeading from '../utlities/SectionHeading/SectionHeading'
import { FaPlane, FaPassport, FaGraduationCap, FaFileAlt } from 'react-icons/fa'
import { MdOutlineLocalOffer } from 'react-icons/md'



export default function OurService () {
  const servicesData = [
    {
      id: 1,
      title: 'Study Abroad',
      description:
        'Our comprehensive study abroad services, assisting students in finding the absolute right educational institutions and ensuring a smooth transition to their desired study destinations.',
      icon: FaPlane
    },
    {
      id: 2,
      title: 'Immigration',
      description:
        'Our comprehensive immigration and work permit services to help our clients navigate the complex process of living and working abroad. From visa applications to work permit renewals.',
      icon: FaPassport
    },
    {
      id: 3,
      title: 'Scholarship',
      description:
        'Our dedicated team helps students explore and apply for scholarships, providing valuable resources and guidance to maximize their chances of securing funding for their education.',
      icon: FaGraduationCap
    },
    {
      id: 4,
      title: 'Easy Application',
      description:
        'From initial consultation to document preparation and submission, our streamlined approach guarantees efficient and accurate applications to your desired educational institutions.',
      icon: FaFileAlt
    }
  ]

  return (
    <div className='section__spacing bg-[#FFF9F3]  '>
      <div className=' py-20'>
        <SectionHeading
          text='Service'
          Icon={MdOutlineLocalOffer}
          title='Our '
          colorTitle='Service'
          subtitle='We provide the best services to meet the needs of our clients. With a focus on quality and customer satisfaction, we aim to deliver exceptional solutions tailored to each individual. From personalized consultations to innovative solutions, our team is dedicated to helping you succeed every step of the way.'
        />

        <section className='common__top__spacing'>
          <div className='os__parent'>
            {servicesData.map(service => {
              const Icon = service.icon
              return (
                <div key={service.id} className='os__child__parent group'>
                  <div className='text-[#FF9100] group-hover:text-white  text-4xl mb-4'>
                    <Icon />
                  </div>
                  <h3 className='group-hover:!text-white  text-black/80 text__medium mb-2'>
                    {service.title}
                  </h3>
                  <p className='base__text group-hover:text-white'>
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </div>
  )
}
