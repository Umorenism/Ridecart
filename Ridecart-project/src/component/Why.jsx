




import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { BiSolidQuoteAltLeft } from "react-icons/bi";


const testimonials = [
  {
    title: "RideCart makes commuting\nso easy!",
    content: "I never have to worry about who would pick up my deliveries, and the riders are always professional and on time. The app is smooth, and I love the real-time tracking feature. Highly recommended!",
    author: "Elizabeth MK",
    subtitle: "6 Months with RideCart",
  },
  {
    title: "Reliable and fast delivery!",
    content: "RideCart has never let me down. Their riders are courteous, and the delivery always arrives on time. I use it for my business regularly.",
    author: "James T.",
    subtitle: "1 Year with RideCart",
  },
  {
    title: "Excellent customer service.",
    content: "Every time I’ve had a question, support was quick to respond. That’s rare these days! RideCart is my go-to app.",
    author: "Maria L.",
    subtitle: "8 Months with RideCart",
  },
];

export default function Why() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-[626px] bg-[#EFF0F6] flex justify-center items-center p-4"
    >
      <div className="container max-w-[1270px] mx-auto flex flex-col md:flex-row md:gap-8 items-center justify-center py-8 md:py-16">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-2xl text-black sm:text-3xl md:text-4xl lg:text-[45px] mb-2 font-semibold max-w-md mx-auto md:mx-0 leading-tight">
            Why RideCart users are in love with this app
          </h1>
          <button className="mt-5 bg-[#EB203E]  text-white rounded-[11.18px] h-10 px-4 text-xs sm:text-sm hover:bg-red-600 transition">
            See all testimonials
          </button>
        </div>

        {/* Right Section: Testimonial */}
        <div className="w-full md:w-1/2 text-black rounded-[30px] md:rounded-[40px] p-6 md:p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[18px] font-[400]">TESTIMONIAL</h2>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-2 bg-[#D7D7D7] rounded-[5px] hover:bg-red-600 transition"
              >
                <FaArrowLeft className="text-black w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="p-2 bg-[#D7D7D7] rounded-[5px] hover:bg-red-600 transition"
              >
                <FaArrowRight className="text-black w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="space-y-8 ">
         
  <div className="relative max-w-md w-full">
  {/* Quote icon behind the text */}
  <BiSolidQuoteAltLeft className="absolute top-0 left-0 text-[60px] text-[#D7D7D7] " />
  
  {/* Testimonial Title */}
 <h3 className="relative w-full text-xl sm:text-2xl md:text-[30px] font-semibold pl-4 max-w-[1200px] whitespace-pre-line">
  {currentTestimonial.title}
</h3>

</div>



            <p className="text-xs text-[#1F233699] sm:text-sm max-w-md">
              {currentTestimonial.content}
            </p>
          </div>

          {/* Author */}
          <div className="flex gap-3 items-center mt-6">
            <div className="h-10 w-10 rounded-full bg-[#D9D9D9]"></div>
            <div className="flex flex-col">
              <h4 className="text-sm sm:text-base font-normal text-[#1F2336]">
                {currentTestimonial.author}
              </h4>
              <p className="text-xs text-[#1F233680]">
                {currentTestimonial.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
