import React from 'react'
import Hero from './Sections/Hero'
import Branding1 from './Sections/Branding1'
import Branding2 from './Sections/Branding2'
import Faq from './Sections/Faq'
import Franchise from './Sections/Francise'
import AiSection from './Sections/AiSection'
import QrCode from '../../Components/QrCode'

const Index = () => {
  return (
    <>
    <div className='h-28'></div>
    <Hero/>
    <Branding1/>
    <QrCode/>
    <AiSection/>
    <Branding2/>
    <Franchise/>
    <Faq/>
    </>
  )
}

export default Index