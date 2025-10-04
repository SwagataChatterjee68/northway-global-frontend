import Banner from "../../_components/Banner/Banner"
import BlogList from "../../_components/Blogs/Blogs"
import StudentSpeaks from "../../_components/StudentSpeaks/StudentSpeaks"
import ApplicationProcess from "../../_components/StudyDestinationCmp/ApplicationProcess/ApplicationProcess"
import Careers from "../../_components/StudyDestinationCmp/Careers/Careers"
import EducationCost from "../../_components/StudyDestinationCmp/EducationCost/EducationCost"
import FaqArea from "../../_components/StudyDestinationCmp/FaqArea/FaqArea"
import AtAGlance from "../../_components/StudyDestinationCmp/Glance/Glance"
import PopularUniversities from "../../_components/StudyDestinationCmp/PopularUniversities/PopularUniversities"
import WhyStudy from "../../_components/StudyDestinationCmp/WhyStudy/WhyStudy"
import Testimonial from "../../_components/Testimonial/Testimonial"

export default function page () {
  const studyAbroadData = [
    {
      id: 1,
      tooltipText: ' Study In USA',
      image:
        'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/irelandWhyStudy.jpg',
      title: 'Why Study ',
      colorText: 'in USA?',
      description:
        'We strive to build a global community where quality higher education empowers curious learners and encourages them to transform their lives. We deploy cutting-edge technologies on the Northway platform to simplify students international education journeys. We blend technology and innovation to transform the higher education landscape with institutions, partners, and industry stakeholders.',
      quickFactsTitle: 'Quick Facts',
      quickFacts: [
        { id: 1, text: 'Expert Guidance.' },
        { id: 2, text: 'Seamless Transitions.' },
        { id: 3, text: 'Study Abroad Success.' },
        { id: 4, text: 'Academic Excellence.' }
      ]
    }
  ]
  const educationCostData = [
    {
      id: 1,
      tooltipText: 'Education Cost',
      image:
        'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/cost.webp',
      title: 'Cost of ',
      colorText: 'Education',
      description:
        'Tuition fees vary based on the state, the university funding model, and the student’s country of origin. So, listing an average is a rather difficult task. However, thanks to the folks at College Board, they’ve rendered an estimate of last year’saverage tuition costs, which will roughly reflect the next few years.',
      quickFactsTitle: 'Quick Facts',
      quickFacts: [
        { id: 1, text: 'Total Expenses 41535' },
        { id: 2, text: 'Tuition Fees for one-year (Indicative) 25000 .' },
        { id: 3, text: 'Living and Accommodation 15000.' },
        { id: 4, text: 'Airfare from India to USA 1000.' },
        { id: 5, text: 'Visa Fees (Visa & SEVIS) 535.' }
      ]
    }
  ]
  const careersData = [
    {
      id: 1,
      tooltipText: ' Careers',
      image:
        'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/irelandCareer.jpg',
      title: 'Careers ',
      colorText: '& Industry',
      description:
        'One of the most technologically powerful and dynamic countries, USA is the largest & most dominant economy globally. Sectors that empower this world’s most productive economy include Healthcare, Technology, Construction, Retail, Manufacturing, Finance & Insurance and Real Estate. Top jobs with high remuneration prospects for international students include Medicine, Computer & Information Systems Managers, Architectural & Engineering Managers and Marketing & Financial Managers. Standard of living in the USA is among the highest in the world with high per capita income. This nation performs very well in many measures of well-being such as income &wealth, health status, jobs and earnings, education & skills and environmental quality.'
    }
  ]

  const glanceData = [
    {
      id: 1,
      factor: 'Average tuition fees (per year)',
      value: [
        "Bachelor's degree - $10,000-$55,000",
        "Master's degree - $15,000-$60,000"
      ]
    },
    {
      id: 2,
      factor: 'Duration',
      value: [
        "Bachelor's degree - 3-4 years",
        "Master's degree - 1-2 years",
        'Ph.D. - 6 years'
      ]
    },
    {
      id: 3,
      factor: 'Eligibility criteria',
      value: [
        "Academic credentials - High school completion, Bachelor's or Master's degree in related fields.",
        'Documents - Passport, Student visa (F, M, or J) for USA, LOR',
        'Test scores - GMAT/GRE, IELTS/TOEFL/PTE'
      ]
    },
    {
      id: 4,
      factor: 'Popular courses',
      value: [
        'Nursing',
        'Engineering',
        'MSc Computer Science',
        'Business Management'
      ]
    },
    {
      id: 5,
      factor: 'Student visa fees (F, M, and J visas)',
      value: ['$185 (Application fee)']
    }
  ]

  const universities = [
    {
      img: 'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/universitity/uni1-66db36043eb12.webp',
      name: 'University of Connecticut'
    },
    {
      img: 'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/universitity/uni2-66db364355225.webp',
      name: 'Arizona State University'
    },
    {
      img: 'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/universitity/uni3-66db368f59e38.webp',
      name: 'University of California'
    },
    {
      img: 'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/universitity/columbia.webp',
      name: 'Columbia University'
    },
    {
      img: 'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/universitity/priceton.webp',
      name: 'Princeton University'
    },
    {
      img: 'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/universitity/harvard.webp',
      name: 'Harvard University'
    },
    {
      img: 'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/universitity/yale.webp',
      name: 'Yale University'
    },
    {
      img: 'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/universitity/stanford.webp',
      name: 'Stanford University'
    },
    {
      img: 'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/universitity/nyu.jpg',
      name: 'Nyc University'
    }
  ]

  const faqsData = [
    {
      title: 'Academic powers',
      description:
        'The USA is home to some of the best universities in the world. Most of the USA universities have been frequently placed high in international university rankings, as per the 2023 QS World Ranking. The US is home to 33 of the top 100 universities.'
    },
    {
      title: 'Excellent international student support system',
      description:
        'American colleges are well-versed in the difficulties faced by international students and regularly hold orientation programs, workshops, and training to support them. Students from various cultures and nations study in the United States. On an average day, one can find students on the college campus from at least 10-15 different nationalities.'
    },
    {
      title: 'Successful post-college career',
      description:
        'American jobs offer the highest wages. After completing their education, a large number of brilliant applicants relocate to the US to earn more money. Students who have studied in the United States have an advantage, as they can access exclusive career prospects and develop skills relevant to the workforce.'
    },
    {
      title: 'Career opportunities',
      description:
        'Starting salaries for graduates from the top colleges in the USA are competitive. Even tier-2 university graduates can earn over $50,000 if they find the right employment. Graduates in STEM industries typically start at $66,123. Studying in the USA offers experiential learning through internships and job placements.'
    }
  ]

  return (
    <div>
      <div>
        <Banner
          colorText='Study In'
          text='Usa'
          url={
            'https://pub-5955669eccb64965b91474a798f31ae3.r2.dev/usa/usa.png'
          }
          des='We strive to build a global community where quality higher education empowers curious learners and encourages them to transform their lives. We deploy cutting-edge technologies on the Northway platform to simplify students international education journeys. We blend technology and innovation to transform the higher education landscape with institutions, partners, and industry stakeholders.'
        />
      </div>
      <ApplicationProcess />
      <WhyStudy studyAbroadData={studyAbroadData} />
      <Careers careersData={careersData} />
      <PopularUniversities universities={universities} />
      <EducationCost educationCostData={educationCostData} />
      <AtAGlance glanceData={glanceData} colorText='Usa' />
      <StudentSpeaks />
      <Testimonial />
      <FaqArea
        faqsData={faqsData}
        des='Studying in the USA can offer a variety of benefits, making it
                an attractive destination for international students. Here are
                some reasons why study in USA is a popular choice.'
      />
      <BlogList />
    </div>
  )
}
