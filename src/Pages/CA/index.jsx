import React from 'react'
import Hero from './Components/Section/Hero'
import InfiniteLogoScroll from './Components/InfiniteLogoScroll/InfiniteLogoScroll'
import Services from './Components/Section/Services'
import Branding1 from './Components/Section/Branding1'
import Branding2 from './Components/Section/Branding2'
import Branding3 from './Components/Section/Branding3'
import Testimonials from './Components/Section/Testimonials'
import Franchise from './Components/Section/Franchise'


const index = () => {
    return (
        <>
        <div className='h-10'></div>
            <Hero />
            {/* <InfiniteLogoScroll/> */}
            <Services/>
            <Branding1/>
            <Branding2/>
            <Franchise/>
            <Testimonials/>
            <Branding3/>
            
            </>
    )
}

export default index