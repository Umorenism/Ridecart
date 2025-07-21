

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import sta from "../assets/zigzigcard.svg";

const cardData = [
  {
    title: "Dispatch Rides",
    description: "Send and receive \n packages effortlessly!",
    image: "https://images.pexels.com/photos/13432008/pexels-photo-13432008.jpeg",
    buttons: [{ text: "Get Started", position: "left" }],
  },
  {
    title: "Need to shop?",
    description: "Browse and buy from trusted \n vendors without leaving home.",
    image: "https://images.pexels.com/photos/6721907/pexels-photo-6721907.jpeg",
    buttons: [{ text: "Shop Now", position: "middle" }],
  },
  {
    title: "Errands? Consider it done?",
    description: "Short on time? Let us handle \n your daily tasks.",
    image: "https://images.pexels.com/photos/6969845/pexels-photo-6969845.jpeg",
    buttons: [{ text: "Book Now", position: "left" }],
  },
];

export default function Services() {
  const [imageIndexes, setImageIndexes] = useState([0, 1, 2]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Rotate indexes right by 1:
      setImageIndexes(([a, b, c]) => [c, a, b]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="bg-[#1F2336] min-h-screen relative flex justify-center items-center px-4">
        <div className="w-full max-w-[1281px] py-12">
          <div className="text-center text-white mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-base md:text-lg max-w-2xl mx-auto">
              At Ridecart, we make life easier by bringing together rides,
              deliveries, shopping, and errands—all in one seamless platform.
            </p>
          </div>

          {/* Cards container */}
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch">
            {cardData.map((card, index) => {
              // Show the image from cardData at imageIndexes[index]
              const bgImage = cardData[imageIndexes[index]].image;
              return (
                <motion.div
                  key={index}
                  className="relative h-[440px] w-full max-w-[413px] rounded-[12px] overflow-hidden shadow-lg bg-cover bg-center"
                  style={{ backgroundImage: `url(${bgImage})` }}
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
                      className="text-white mt-2 text-sm whitespace-pre-line"
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
                            btn.position === "middle"
                              ? "bg-[#1F2336] text-white"
                              : "bg-[#EB203E] text-white"
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
              );
            })}
          </div>
        </div>
      </div>

      {/* The statistics section stays unchanged */}
      <div className="relative min-h-[500px] sm:h-[300px] w-full bg-[#1F2336]  mx-auto h-72 rounded-lg overflow-hidden ">
        <img src={sta} alt="Statistics" className="w-full h-full object-cover" />
        <div className="absolute inset-0 w-full  sm:flex flex-col  justify-center items-start p-10 text-black">
          <div className="flex  flex-col sm:flex-row justify-between  items-center w-full max-w-[1270px]">
            <div className="sm:w-[60%] mb-6 sm:mb-0 mt-10 sm:mt-0">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                <h1 className="text-lg font-semibold text-[#1F2336E5]">Our Statistics</h1>
              </div>
              <h3 className="text-3xl sm:text-4xl text-black font-bold mb-2">Why choose RideCart</h3>
              <p className="max-w-md text-sm sm:text-[16px] font-medium text-[#1F233699]">
                At RideCart, we combine rides, deliveries, shopping, and errands
                into one seamless experience. Whether you're on the move,
                sending a package, or need a quick errand handled, we've got you
                covered.
              </p>
            </div>

            <div className="grid grid-cols-2 space-y-4 sm:space-y-0  sm:grid-cols-2 gap-6 sm:w-[40%]">
              {[
                { end: 100, suffix: "%", label: "Customer Satisfaction" },
                { end: 500, suffix: "+", label: "Regular Customers" },
                { value: "24/7", label: "Round-the-clock support" },
                { end: 1500, suffix: "+", label: "Errands Run" },
              ].map((stat, i) => (
                <div key={i}>
                  <h1 className="text-[30px] sm:text-[45px] font-[600]">
                    {"end" in stat ? (
                      <>
                        <CountUp end={stat.end} duration={2} />
                        {stat.suffix}
                      </>
                    ) : (
                      stat.value
                    )}
                  </h1>
                  <p className="text-[15px] text-[#1F2336CC] sm:text-[20px] font-[400]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
