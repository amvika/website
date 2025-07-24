import React from 'react';
import './DiscouteScroll.css';

const DiscouteScroll = () => {
  // Create an array of discount messages to display in the scroll
  const discountMessages = [
    "HUGE DISCOUNTS AVAILABLE BEFORE 30TH JUNE - APPLY NOW!",
    "LIMITED TIME OFFER - SAVE BIG BEFORE JUNE 30TH!",
    "DON'T MISS OUT - SPECIAL PROMOTION ENDS JUNE 30TH!",
    "EXCLUSIVE DEALS - HURRY, OFFER EXPIRES JUNE 30TH!",
    "HUGE DISCOUNTS AVAILABLE BEFORE 30TH JUNE - APPLY NOW!",
    "LIMITED TIME OFFER - SAVE BIG BEFORE JUNE 30TH!",
    "DON'T MISS OUT - SPECIAL PROMOTION ENDS JUNE 30TH!",
    "EXCLUSIVE DEALS - HURRY, OFFER EXPIRES JUNE 30TH!"
  ];

  return (
    <div className="discount-scroll-container bg-[#066d73] py-3">
      <div className="discount-scroll">
        {discountMessages.map((message, index) => (
          <div className="discount-item" key={`discount-${index}`}>
            <span className="font-bold text-white flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm4.707 3.707a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L8.414 9l1.293-1.293z" clipRule="evenodd" />
              </svg>
              {message}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscouteScroll;