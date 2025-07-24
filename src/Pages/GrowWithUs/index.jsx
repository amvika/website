import React, { useRef } from 'react'
import Home from './Sections/Home'
import OurFeatures from './Sections/OurFeatures'
import OurCourses from './Sections/OurCourses'
import Testimonials from './Sections/Testimonials'
import ExtraSection from './Sections/ExtraSection'
import EnrollForm from './Sections/EnrollForm'

const Index = () => {
  const enrollFormRef = useRef(null);
  
  const scrollToEnrollForm = () => {
    enrollFormRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <>
    <div className='h-20'></div>
    <Home scrollToEnrollForm={scrollToEnrollForm} />
    <OurFeatures/>
    <OurCourses scrollToEnrollForm={scrollToEnrollForm} />
    <Testimonials/>
    <ExtraSection/>
    <div ref={enrollFormRef}>
      <EnrollForm/>
    </div>
    </>
  )
}

export default Index