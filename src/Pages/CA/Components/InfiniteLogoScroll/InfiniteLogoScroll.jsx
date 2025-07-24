import React from 'react'
import techLogos from '../../Assets/tech-logos'
import './InfiniteLogoScroll.css'

const logos =[
  "https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo-1.png",
  "https://static.wixstatic.com/media/abcd49_89bda12adbb94b0da694fabb686fca79~mv2.png/v1/fill/w_348,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/hd-white-zoom-text-logo-transparent-background-31631799412q5jodqetzl_edited.png",
  // "https://www.vyopta.com/wp-content/uploads/2019/08/Microsoft-Logo-White.png",
  "https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png",
  "https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo-1.png",
  "https://static.wixstatic.com/media/abcd49_89bda12adbb94b0da694fabb686fca79~mv2.png/v1/fill/w_348,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/hd-white-zoom-text-logo-transparent-background-31631799412q5jodqetzl_edited.png",
  // "https://www.vyopta.com/wp-content/uploads/2019/08/Microsoft-Logo-White.png",
  "https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png",
  "https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo-1.png",
  "https://static.wixstatic.com/media/abcd49_89bda12adbb94b0da694fabb686fca79~mv2.png/v1/fill/w_348,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/hd-white-zoom-text-logo-transparent-background-31631799412q5jodqetzl_edited.png",
  // "https://www.vyopta.com/wp-content/uploads/2019/08/Microsoft-Logo-White.png",
  "https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png",
  "https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo-1.png",
  "https://static.wixstatic.com/media/abcd49_89bda12adbb94b0da694fabb686fca79~mv2.png/v1/fill/w_348,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/hd-white-zoom-text-logo-transparent-background-31631799412q5jodqetzl_edited.png",
  // "https://www.vyopta.com/wp-content/uploads/2019/08/Microsoft-Logo-White.png",
  "https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png",
  "https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo-1.png",
  "https://static.wixstatic.com/media/abcd49_89bda12adbb94b0da694fabb686fca79~mv2.png/v1/fill/w_348,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/hd-white-zoom-text-logo-transparent-background-31631799412q5jodqetzl_edited.png",
  // "https://www.vyopta.com/wp-content/uploads/2019/08/Microsoft-Logo-White.png",
  "https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png",
  "https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo-1.png",
  "https://static.wixstatic.com/media/abcd49_89bda12adbb94b0da694fabb686fca79~mv2.png/v1/fill/w_348,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/hd-white-zoom-text-logo-transparent-background-31631799412q5jodqetzl_edited.png",
  // "https://www.vyopta.com/wp-content/uploads/2019/08/Microsoft-Logo-White.png",
  "https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png",
  "https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo-1.png",
  "https://static.wixstatic.com/media/abcd49_89bda12adbb94b0da694fabb686fca79~mv2.png/v1/fill/w_348,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/hd-white-zoom-text-logo-transparent-background-31631799412q5jodqetzl_edited.png",
  // "https://www.vyopta.com/wp-content/uploads/2019/08/Microsoft-Logo-White.png",
  "https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png",
  "https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo-1.png",
  "https://static.wixstatic.com/media/abcd49_89bda12adbb94b0da694fabb686fca79~mv2.png/v1/fill/w_348,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/hd-white-zoom-text-logo-transparent-background-31631799412q5jodqetzl_edited.png",
  // "https://www.vyopta.com/wp-content/uploads/2019/08/Microsoft-Logo-White.png",
  "https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png",
  "https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo-1.png",
  "https://static.wixstatic.com/media/abcd49_89bda12adbb94b0da694fabb686fca79~mv2.png/v1/fill/w_348,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/hd-white-zoom-text-logo-transparent-background-31631799412q5jodqetzl_edited.png",
  // "https://www.vyopta.com/wp-content/uploads/2019/08/Microsoft-Logo-White.png",
  "https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png",
  "https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo-1.png",
  "https://static.wixstatic.com/media/abcd49_89bda12adbb94b0da694fabb686fca79~mv2.png/v1/fill/w_348,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/hd-white-zoom-text-logo-transparent-background-31631799412q5jodqetzl_edited.png",
  // "https://www.vyopta.com/wp-content/uploads/2019/08/Microsoft-Logo-White.png",
  "https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png",
  "https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo-1.png",
  "https://static.wixstatic.com/media/abcd49_89bda12adbb94b0da694fabb686fca79~mv2.png/v1/fill/w_348,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/hd-white-zoom-text-logo-transparent-background-31631799412q5jodqetzl_edited.png",
  // "https://www.vyopta.com/wp-content/uploads/2019/08/Microsoft-Logo-White.png",
  "https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png",
  "https://white.logodownload.org/wp-content/uploads/2020/11/google-white-logo-1.png",
  "https://static.wixstatic.com/media/abcd49_89bda12adbb94b0da694fabb686fca79~mv2.png/v1/fill/w_348,h_168,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/hd-white-zoom-text-logo-transparent-background-31631799412q5jodqetzl_edited.png",
  // "https://www.vyopta.com/wp-content/uploads/2019/08/Microsoft-Logo-White.png",
  "https://wildfiresocial.com/wp-content/uploads/2019/01/amazon-logo-white._cb1509666198_.png",
]

const InfiniteLogoScroll = () => {
  // Create duplicate arrays to ensure smooth infinite scrolling
  const duplicatedLogos = [...techLogos, ...techLogos]
  
  return (
    <div className="infinite-logo-container bg-[#f97316] p-8">
      {/* First row - scrolling left to right */}
      <div className="logo-scroll ">
        {logos.map((logo, index) => (
          <div className="logo-item" key={`logo-1-${index}`}>
            <img src={logo} alt={`Technology Logo ${index}`} />
          </div>
        ))}
      </div>
      
      {/* Second row - scrolling right to left (reverse) */}
      
    </div>
  )
}

export default InfiniteLogoScroll