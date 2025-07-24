import React from 'react'
import Hero from './Sections/Hero'
import WhatWeProvide from './Sections/WhatWeProvide'
import ContactForm from '../../Components/ContactForm'
import GrowthFocus from './Sections/Growth'
import Faq from '../AmbikaSoftware/Sections/Faq'

const index = () => {
    return (
        <>
            <div className='h-28'></div>
            <Hero/>
            <WhatWeProvide/>
            <Faq/>
            <GrowthFocus/>
            <ContactForm/>
        </>
    )
}

export default index