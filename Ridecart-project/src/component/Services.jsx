import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
// import sta from '../assets/zigzigcard.svg';
import sta from "../assets/zigzigcard.svg";

const cardData = [
  {
    title: "Card One",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: "https://via.placeholder.com/600x400",
    buttons: [{ text: "Book Ride", position: "left" }],
  },
  {
    title: "Card Two",
    description: "Integer nec odio. Praesent libero. Sed cursus ante dapibus.",
    image: "https://via.placeholder.com/600x400",
    buttons: [{ text: "More Info", position: "middle" }],
  },
  {
    title: "Card Three",
    description: "Sed nisi. Nulla quis sem at nibh elementum imperdiet.",
    image: "https://via.placeholder.com/600x400",
    buttons: [{ text: "Request", position: "left" }],
  },
];

export default function Services() {
  return (
    <>
      <div className="bg-[#1F2336] min-h-screen relative flex justify-center items-center px-4">
        <div className="w-full max-w-[1281px] py-12">
          <div className="text-center text-white mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-base md:text-lg max-w-2xl mx-auto">
              At Ridecart, we make life easier by bringing together rides,
              deliveries, shopping, and errands—all in one seamless platform.
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
                          btn.position === "middle"
                            ? "bg-black text-white border border-white"
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
            ))}
          </div>
        </div>
      </div>

      <div className="relative min-h-[500px] sm:h-[300px] w-full bg-[#1F2336]  mx-auto h-72 rounded-lg overflow-hidden ">
        <img
          src={sta}
          alt="Statistics"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 w-full  sm:flex flex-col  justify-center items-start p-10 text-black">
          <div className="flex  flex-col sm:flex-row justify-between  items-center w-full max-w-[1270px]">
            <div className="sm:w-[60%] mb-6 sm:mb-0 mt-10 sm:mt-0">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-3 w-3 rounded-full bg-orange-500"></div>
                <h1 className="text-lg font-semibold text-[#1F2336E5]">
                  Our Statistics
                </h1>
              </div>
              <h3 className="text-3xl sm:text-4xl text-black font-bold mb-2">
                Why choose RideCart
              </h3>
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
                <div key={i} >
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
                  <p className="text-[15px] text-[#1F2336CC] sm:text-[20px] font-[400]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
