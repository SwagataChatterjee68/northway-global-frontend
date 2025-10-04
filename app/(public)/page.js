import AboutUs from './_components/AboutUs/AboutUs'
import Blogs from './_components/Blogs/Blogs'
import CTA from './_components/CTA/CTA'
import HeroBanner from './_components/HeroBanner/HeroBanner'
import MissionVision from './_components/MissionVision/MissionVision'
import OurService from './_components/OurService/OurService'
import OurVideo from './_components/OurVideo/OurVideo'
import StudyDestination from './_components/StudyDestination/StudyDestination'
import Testimonial from './_components/Testimonial/Testimonial'

export default function Home () {
  return (
    <div className='primary__color'>
      <HeroBanner />
      <AboutUs heading='About' colorText='Us' />
      <MissionVision />
      <OurService />
      <CTA />
      <StudyDestination />
      <OurVideo />
      <Testimonial />
      <Blogs />
    </div>
  )
}
