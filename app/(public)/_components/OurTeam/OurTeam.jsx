import React from 'react'
import SectionHeading from '../utlities/SectionHeading/SectionHeading'
import { GiTeamIdea } from 'react-icons/gi'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

export default function OurTeam () {
  const teamMembers = [
    {
      id: 1,
      name: 'Dr. Anam Dar',
      title: 'Head of Business and Law School',
      image:
        'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/team/photo-1536331307320-5316320e97cc.avif',
      socials: [
        { icon: <FaFacebookF />, link: 'https://facebook.com' },
        { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com' }
      ]
    },
    {
      id: 2,
      name: 'Professor Nazrul Islam',
      title: 'Professor',
      image:
        'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/team/nazmul.avif',
      socials: [
        { icon: <FaFacebookF />, link: 'https://facebook.com' },
        { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com' }
      ]
    },
    {
      id: 3,
      name: 'Professor Nazrul Islam',
      title: 'Ph.D in Innovation Management',
      image:
        'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/team/photo-1536331307320-5316320e97cc.avif',
      socials: [
        { icon: <FaFacebookF />, link: 'https://facebook.com' },
        { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com' }
      ]
    },
    {
      id: 4,
      name: 'Dr. Anam Dar',
      title: 'Head of Business and Law School',
      image:
        'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/team/nazmul.avif',
      socials: [
        { icon: <FaFacebookF />, link: 'https://facebook.com' },
        { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com' }
      ]
    },
    {
      id: 5,
      name: 'Professor Nazrul Islam',
      title: 'Professor',
      image:
        'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/team/photo-1536331307320-5316320e97cc.avif',
      socials: [
        { icon: <FaFacebookF />, link: 'https://facebook.com' },
        { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com' }
      ]
    },
    {
      id: 6,
      name: 'Professor Nazrul Islam',
      title: 'Ph.D in Innovation Management',
      image:
        'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/team/nazmul.avif',
      socials: [
        { icon: <FaFacebookF />, link: 'https://facebook.com' },
        { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com' }
      ]
    }
  ]

  const teamMembersExecutive = [
    {
      id: 1,
      name: 'Dr. Mohammad Shafiq',
      title: 'Director',
      image:
        'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/team/photo-1536331307320-5316320e97cc.avif',
      socials: [
        { icon: <FaFacebookF />, link: 'https://facebook.com' },
        { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com' }
      ]
    },
    {
      id: 2,
      name: 'S M Saiful Islam',
      title: 'Head of Operations (BD)',
      image:
        'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/team/nazmul.avif',
      socials: [
        { icon: <FaFacebookF />, link: 'https://facebook.com' },
        { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com' }
      ]
    },
    {
      id: 3,
      name: 'Valentina Bouzo',
      title: 'Head of Operations (UK)',
      image:
        'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/team/photo-1536331307320-5316320e97cc.avif',
      socials: [
        { icon: <FaFacebookF />, link: 'https://facebook.com' },
        { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com' }
      ]
    },
    {
      id: 4,
      name: 'Isabella Micu',
      title: 'Partnership Management (UK)',
      image:
        'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/team/nazmul.avif',
      socials: [
        { icon: <FaFacebookF />, link: 'https://facebook.com' },
        { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com' }
      ]
    },
    {
      id: 5,
      name: 'Bickey Kumar Shah',
      title: 'Country Director (Nepal)',
      image:
        'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/team/photo-1536331307320-5316320e97cc.avif',
      socials: [
        { icon: <FaFacebookF />, link: 'https://facebook.com' },
        { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com' }
      ]
    },
    {
      id: 6,
      name: 'Dr. Mohammad Shafiq',
      title: 'Director',
      image:
        'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/team/photo-1536331307320-5316320e97cc.avif',
      socials: [
        { icon: <FaFacebookF />, link: 'https://facebook.com' },
        { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com' }
      ]
    },
    {
      id: 7,
      name: 'S M Saiful Islam',
      title: 'Head of Operations (BD)',
      image:
        'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/team/nazmul.avif',
      socials: [
        { icon: <FaFacebookF />, link: 'https://facebook.com' },
        { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com' }
      ]
    },
    {
      id: 8,
      name: 'Valentina Bouzo',
      title: 'Head of Operations (UK)',
      image:
        'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/team/photo-1536331307320-5316320e97cc.avif',
      socials: [
        { icon: <FaFacebookF />, link: 'https://facebook.com' },
        { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com' }
      ]
    },
    {
      id: 9,
      name: 'Isabella Micu',
      title: 'Business Development (UK)',
      image:
        'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/team/nazmul.avif',
      socials: [
        { icon: <FaFacebookF />, link: 'https://facebook.com' },
        { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com' }
      ]
    },
    {
      id: 10,
      name: 'Valentina Bouzo',
      title: 'Business Development (UK)',
      image:
        'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/team/photo-1536331307320-5316320e97cc.avif',
      socials: [
        { icon: <FaFacebookF />, link: 'https://facebook.com' },
        { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com' }
      ]
    },
    {
      id: 11,
      name: 'Isabella Micu',
      title: 'Business Development (UK)',
      image:
        'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/team/nazmul.avif',
      socials: [
        { icon: <FaFacebookF />, link: 'https://facebook.com' },
        { icon: <FaLinkedinIn />, link: 'https://linkedin.com' },
        { icon: <FaInstagram />, link: 'https://instagram.com' }
      ]
    }
  ]

  return (
    <div className='section__spacing'>
      <SectionHeading
        text='Team'
        Icon={GiTeamIdea}
        title='Meet '
        colorTitle='Our Team'
        subtitle='Meet our amazing team members who bring everything together.'
      />

      <div className='mt-16 text-center'>
        <h3 className='ot__sutitle'>Advisory Board Members</h3>
        <p className='heading__sub__text  max-w-2xl mx-auto'>
          Our advisory board members play a crucial role in guiding our
          organization towards it's mission of empowering students through
          educational scholarships.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-8 my-16'>
        {teamMembers.map(member => (
          <div
            key={member.id}
            className=' flex flex-col items-center text-center group  '
          >
            <div className='overflow-hidden rounded-md'>
              <img
                src={member.image}
                alt={member.name}
                className=' rounded-md object-cover h-[35vh] w-full  mb-4 hover:scale-110 ease-in-out duration-1000 hover:rounded-md'
              />
            </div>
            <h3 className='text__medium'>{member.name}</h3>
            <p className='text__base mb-4'>{member.title}</p>

            {/* Social Icons */}
            <div className='flex space-x-3'>
              {member.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 bg-gray-100 group-hover:bg-[#ff9100] group-hover:text-white rounded-full duration-500 ease-in-out  text-gray-600 transition'
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* executive team  */}
      <div className='mt-20 text-center'>
        <h3 className='ot__sutitle'>Advisory Board Members</h3>
        <p className='heading__sub__text  max-w-2xl mx-auto'>
          Our advisory board members play a crucial role in guiding our
          organization towards it's mission of empowering students through
          educational scholarships.
        </p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-8 my-16 space-y-10 '>
        {teamMembersExecutive.map(member => (
          <div
            key={member.id}
            className=' flex flex-col items-center text-center group'
          >
            <div className='rounded-md overflow-hidden'>
              <img
                src={member.image}
                alt={member.name}
                className=' rounded-md object-cover h-[35vh] w-full  mb-4 hover:scale-110 duration-1000 ease-in-out '
              />
            </div>
            <h3 className='text__medium'>{member.name}</h3>
            <p className='text__base mb-4'>{member.title}</p>

            {/* Social Icons */}
            <div className='flex space-x-3'>
              {member.socials.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 bg-gray-100 group-hover:bg-[#ff9100] group-hover:text-white rounded-full duration-500 ease-in-out  text-gray-600 transition'
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
