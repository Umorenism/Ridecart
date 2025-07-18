

import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
// import sta from '../assets/zigzigcard.svg';
import sta from '../assets/zigzigcard.svg'

const cardData = [
  {
    title: 'Card One',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://via.placeholder.com/600x400',
    buttons: [
      { text: 'Book Ride', position: 'left' },
   
    ],
  },
  {
    title: 'Card Two',
    description: 'Integer nec odio. Praesent libero. Sed cursus ante dapibus.',
    image: 'https://via.placeholder.com/600x400',
    buttons: [
    
    { text: 'More Info', position: 'middle' },
    
    ],
  },
  {
    title: 'Card Three',
    description: 'Sed nisi. Nulla quis sem at nibh elementum imperdiet.',
    image: 'https://via.placeholder.com/600x400',
    buttons: [
      { text: 'Request', position: 'left' },
      
    ],
  },
];

export default function Services() {
  return (
    <>
    <div className="bg-[#1F2336] min-h-screen relative flex justify-center items-center px-4">
      <div className="w-full max-w-[1281px] py-12">
        <div className="text-center text-white mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            At Ridecart, we make life easier by bringing together rides, deliveries,
            shopping, and errands—all in one seamless platform.
          </p>
        </div>

        {/* Cards container */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch">
  {cardData.map((card, index) => (
    <motion.div
      key={index}
      className="relative h-[440px] w-full max-w-[413px] rounded-[12px] overflow-hidden shadow-lg bg-cover bg-center"
      style={{ backgroundImage: `url(${card.image})` }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-start items-start p-4">
        <motion.h2
          className="text-white text-2xl font-semibold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {card.title}
        </motion.h2>
        <motion.p
          className="text-white mt-2 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          {card.description}
        </motion.p>

        {/* Buttons */}
        <div className="flex gap-2 mt-6">
          {card.buttons.map((btn, i) => (
            <motion.button
              key={i}
              className={`px-4 py-2 text-sm rounded-[11.5px] transition duration-300 ${
                btn.position === 'middle'
                  ? 'bg-black text-white border border-white'
                  : 'bg-[#EB203E] text-white'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 + i * 0.2, duration: 0.5 }}
            >
              {btn.text}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  ))}
</div>

      </div>

    </div>
   {/* <img src={sta} alt="" />  */}

   <div className="relative w-full bg-black bg-opacity-50  mx-auto h-72 rounded-lg overflow-hidden shadow-lg">
      <img
        src={sta}
        alt="Statistics"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0  sm:flex flex-col  justify-around items-start p-6 text-black">
       {/* <div className="mb-3">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-orange-500"></div>
            <h1 className="text-[#1F2336E5] text-lg font-semibold">Our Statistics</h1>
          </div>
          <h3 className='text-black font-semibold text-[28px] '>Why choose RideCart</h3>
          <p className='text-black text-sm  max-w-md font-medium'>
            At RideCart, we combine rides, deliveries, shopping, and errands into one seamless experience.
            Whether you're on the move, sending a package, or need a quick errand handled, we've got you covered.
          </p>
        </div> */}

        <div>
        <div className="sm:w-1/2 mb-6 sm:mb-0">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-3 w-3 rounded-full bg-orange-500"></div>
            <h1 className="text-lg font-semibold text-[#1F2336E5]">Our Statistics</h1>
          </div>
          <h3 className="text-3xl sm:text-4xl text-black font-bold mb-2">Why choose RideCart</h3>
          <p className="max-w-md text-sm sm:text-base font-medium text-[#1F233699]">
            At RideCart, we combine rides, deliveries, shopping, and errands into one seamless experience.
            Whether you're on the move, sending a package, or need a quick errand handled, we've got you covered.
          </p>
        </div>


        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 sm:w-1/2">
          {[
            { end: 100, suffix: '%', label: 'Customer Satisfaction' },
            { end: 500, suffix: '+', label: 'Rides Completed' },
            { end: 250, suffix: '+', label: 'Packages Delivered' },
            { end: 300, suffix: '+', label: 'Errands Run' },
          ].map((stat, i) => (
            <div key={i}>
              <h1 className="text-2xl sm:text-3xl font-bold">
                <CountUp end={stat.end} duration={2} />{stat.suffix}
              </h1>
              <p className="text-sm sm:text-base font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
        </div>
            


       

        </div>
       
        {/* <div className="grid grid-cols-2 gap-6">
          {[
            { end: 100, suffix: '%', label: 'Customer Satisfaction' },
            { end: 500, suffix: '+', label: 'Rides Completed' },
            { end: 250, suffix: '+', label: 'Packages Delivered' },
            { end: 300, suffix: '+', label: 'Errands Run' },
          ].map((stat, i) => (
            <div key={i}>
              <h1 className="text-black text-xl font-bold">
                <CountUp end={stat.end} duration={2} />{stat.suffix}
              </h1>
              <p className="text-black text-xs font-medium">{stat.label}</p>
            </div>
          ))}
        </div> */}

         {/* <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 sm:w-1/2">
          {[
            { end: 100, suffix: '%', label: 'Customer Satisfaction' },
            { end: 500, suffix: '+', label: 'Rides Completed' },
            { end: 250, suffix: '+', label: 'Packages Delivered' },
            { end: 300, suffix: '+', label: 'Errands Run' },
          ].map((stat, i) => (
            <div key={i}>
              <h1 className="text-2xl sm:text-3xl font-bold">
                <CountUp end={stat.end} duration={2} />{stat.suffix}
              </h1>
              <p className="text-sm sm:text-base font-medium">{stat.label}</p>
            </div>
          ))}
        </div> */}
      {/* </div> */}
    </div> 





{/* <div className="relative bg-black/60 w-full h-auto">
      <img src={sta} alt="statistics" className="w-full h-auto object-cover" />

      <div className="absolute inset-0 bg-white text-black  p-4 sm:p-10 flex flex-col sm:flex-row items-start sm:items-center justify-between ">
        {/* Left Text Section */}
        {/* <div className="sm:w-1/2 mb-6 sm:mb-0">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-3 w-3 rounded-full bg-orange-500"></div>
            <h1 className="text-lg font-semibold text-[#1F2336E5]">Our Statistics</h1>
          </div>
          <h3 className="text-3xl sm:text-4xl text-black font-bold mb-2">Why choose RideCart</h3>
          <p className="max-w-md text-sm sm:text-base font-medium text-[#1F233699]">
            At RideCart, we combine rides, deliveries, shopping, and errands into one seamless experience.
            Whether you're on the move, sending a package, or need a quick errand handled, we've got you covered.
          </p>
        </div> */}

        {/* Right Stats Section */}
        {/* <div className="grid grid-cols-2 sm:grid-cols-2 gap-6 sm:w-1/2">
          {[
            { end: 100, suffix: '%', label: 'Customer Satisfaction' },
            { end: 500, suffix: '+', label: 'Rides Completed' },
            { end: 250, suffix: '+', label: 'Packages Delivered' },
            { end: 300, suffix: '+', label: 'Errands Run' },
          ].map((stat, i) => (
            <div key={i}>
              <h1 className="text-2xl sm:text-3xl font-bold">
                <CountUp end={stat.end} duration={2} />{stat.suffix}
              </h1>
              <p className="text-sm sm:text-base font-medium">{stat.label}</p>
            </div>
          ))}
        </div> */}
      {/* </div> */}
    {/* </div>  */}
     
</>
    
  );
}
