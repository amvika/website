import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './TestimonialsSlider.css';

const testimonials = [
  {
    id: 1,
    text: "We were completely new to the world of business, but Amvika CA Services made it so easy. Our company was registered and GST filing started within days. Their team explained everything patiently.",
    name: "Rahul Sharma",
    position: "Co-founder, TechSavvy Solutions",
    category: "Startup Founder – GST & Company Registration",
    logo: "dropbox",
  },
  {
    id: 2,
    text: "I used to be worried about tax season every year. But with Amvika CA Services, filing my income tax has become stress-free. They handle everything on time and even helped me save through smart deductions!",
    name: "Pooja Verma",
    position: "Freelance Graphic Designer",
    category: "Freelancer – Income Tax Filing",
    logo: "slack",
  },
  {
    id: 3,
    text: "Getting our FSSAI and ISO certifications done was so simple with their help. We didn't have to run around or deal with any confusion. Now we operate with full confidence and credibility.",
    name: "Manish Patel",
    position: "Owner, PureSpice Foods", 
    category: "Small Business Owner – FSSAI & ISO Registration",
    logo: "figma",
  },
  {
    id: 4,
    text: "Amvika CA Services helped us get our digital signature in time for a crucial government tender. We submitted everything on time, thanks to their fast and professional work.",
    name: "Nikita Jain",
    position: "Manager, BuildRight Contractors",
    category: "Digital Signature & Tender Filing Support",
    logo: "notion",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ],
    appendDots: dots => (
      <div style={{ bottom: "-40px" }}>
        <ul style={{ 
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          margin: "0",
          padding: "0",
          listStyle: "none"
        }}> 
          {dots} 
        </ul>
      </div>
    ),
    customPaging: i => (
      <button
        style={{
          width: "12px",
          height: "12px",
          border: "none",
          borderRadius: "50%",
          background: "rgb(209 213 219)",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        className="hover:bg-orange-500 focus:bg-orange-500 active:bg-orange-500"
      />
    ),
    dotsClass: "slick-dots custom-dots"
  };

  // Rest of the component code remains the same...
  const getLogo = (logoName) => {
    // ... existing getLogo implementation
  };

  const getAvatar = (name) => {
    const initials = name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase();

    return (
      <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-lg">
        {initials}
      </div>
    );
  };

  return (
    <div className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mb-4"></div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-800">
            What Our Clients <span className="text-orange-500">Say About Us</span>
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Hear from our satisfied clients about their experience working with Amvika CA Services
          </p>
        </div>

        <div className="testimonial-slider mb-12">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="outline-none">
                <div className="bg-gray-50 rounded-2xl p-8 md:p-10  mx-2">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-2/3">
                      <div className="mb-6">
                        {getLogo(testimonial.logo)}
                      </div>
                      <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                        "{testimonial.text}"
                      </p>
                      <div className="flex items-center gap-4">
                        {getAvatar(testimonial.name)}
                        <div>
                          <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                          <p className="text-gray-600 text-sm">{testimonial.position}</p>
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-1/3 flex flex-col justify-between">
                      <div className="bg-orange-50 p-4 rounded-lg mb-6">
                        <h3 className="font-bold text-orange-600">{testimonial.category}</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;