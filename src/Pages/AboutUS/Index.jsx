import React from 'react'
import Hero from './sections/Hero'
import OurServices from './sections/OurServices'
import OurBestProduct from './sections/OurBestProduct'
import OurFrancises from './sections/OurFrancises'
import ContactForm from '../../Components/ContactForm'
import OurProfile from './sections/OurProfile'

const Index = () => {
  return (
    <>
    <div className='h-28'></div>
    <Hero/>
    <OurProfile/>
    <OurBestProduct/>
    <OurServices/>
    <OurFrancises/>
    <ContactForm/>
    </>
  )
}

export default Index