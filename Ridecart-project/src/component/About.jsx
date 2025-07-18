
// import {motion} from 'framer-motion'
// import pic from '../assets/iphone.svg'
// import bgdot from '../assets/dot.svg'
// import feature1 from '../assets/route-02.svg'
// import feature2 from '../assets/calendar-03.svg'
// import feature3 from '../assets/trolley-02.svg'

// const features = [
//   {
//     img: feature2,
//     text: 'On demand handyman services',
//   },
//   {
//     img: feature1,
//     text: 'Delivery and tracking history',
//   },
//   {
//     img: feature3,
//     text: 'Shop at any registered store at your convenience',
//   },
// ];
// const AboutUs = () => (
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//       className='min-h-[626px] bg-[#EFF0F6] flex justify-center items-center p-3'
//       >
//         <div   className="container flex flex-col justify-center items-center border mx-auto py-16 mt-[80px]">
//           <img src={bgdot} alt="" />
//          <div className='bg-[#1F2336] flex justify-around gap-20 items-center p-10 rounded-[60px] min-h-[360px]  w-full max-w-[1260px] relative'>
        

//          <div className='max-w-sm text-white'>
//           <h1 className='text-2xl font-bold mb-3'>About Us</h1>
//           <p className='text-sm mb-4'>
//             At RideCart, we believe in making life simpler. Whether you need a ride, a delivery, shopping assistance, or an errand runner, 
//             we bring speed, efficiency, and reliability into one seamless platform.
//           </p>
//           <button className='bg-[#EB203E] text-white rounded-[11.18px] h-9 px-4 text-sm hover:bg-red-600 transition'>Contact us</button>
//         </div>
       
//          <div >
//           <img src={pic} alt="" className='absolute left-[550px] bottom-24 ' />
//         </div>
//       {/* Features List */}
//         <div className='max-w-[400px] text-white space-y-3'>
          
       
// {features.map((feature, idx) => (
//   <div
//     key={idx}
//     className={`flex items-start gap-3 text-sm md:text-base ${
//       idx === 2 ? 'max-w-[280px]' : 'max-w-[200px]'
//     }`}
//   >
//     <img src={feature.img} alt={`feature-${idx}`} className="w-6 h-6 object-contain flex-shrink-0" />
//     <p>{feature.text}</p>
//   </div>
// ))}
//         </div>
//          </div>
//         </div>
        
//       </motion.div>
//     );
//     export default AboutUs






// import { motion } from 'framer-motion';
// import { WrenchScrewdriverIcon, TruckIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
// import pic from '../assets/iphone.svg';
// import bgdot from '../assets/dot.svg';

// const features = [
//   {
//     icon: <WrenchScrewdriverIcon className="h-6 w-6 text-[#EB203E]" />,
//     text: 'On demand handyman services',
//   },
//   {
//     icon: <TruckIcon className="h-6 w-6 text-[#EB203E]" />,
//     text: 'Delivery and tracking history',
//   },
//   {
//     icon: <ShoppingBagIcon className="h-6 w-6 text-[#EB203E]" />,
//     text: 'Shop at any registered store at your convenience',
//   },
// ];

// const AboutUs = () => (
//   <motion.div
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     transition={{ duration: 0.8 }}
//     className='min-h-[626px] bg-[#EFF0F6] flex justify-center items-center p-4'
//   >
//     <div className="container flex flex-col items-center mx-auto py-16 mt-[80px] w-full">
//       <img src={bgdot} alt="Background Dots" className="mb-6" />

//       <div className='bg-[#1F2336] flex flex-col lg:flex-row justify-around items-center gap-10 p-10 rounded-[60px] min-h-[378px] w-full max-w-[1281px] relative'>
        
//         {/* Left Content */}
//         <div className='max-w-[380px] text-white'>
//           <h1 className='text-3xl font-bold mb-4'>About Us</h1>
//           <p className='text-sm mb-6'>
//             At RideCart, we believe in making life simpler. Whether you need a ride, a delivery, shopping assistance, or an errand runner, 
//             we bring speed, efficiency, and reliability into one seamless platform.
//           </p>
//           <button className='bg-[#EB203E] text-white rounded-[11px] h-[35px] w-[105px] hover:bg-red-600 transition'>Contact us</button>
//         </div>

//         {/* Image Section with DaisyUI animation */}
//         <motion.div   animate={{ scale: [1, 1.1, 1] }}
//           transition={{ duration: 4, repeat: Infinity }} className="">
//           <img src={pic} alt="Phone" className='absolute left-[500px] bottom-20' />
//         </motion.div>

//         {/* Features List */}
//         <div className='max-w-[380px] text-white space-y-4'>
//           {features.map((feature, idx) => (
//             <div key={idx} className="flex items-start gap-3">
//               {feature.icon}
//               <h2 className="text-base font-medium">{feature.text}</h2>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </motion.div>
// );

// export default AboutUs;





// import { motion } from 'framer-motion';
// import { WrenchScrewdriverIcon, TruckIcon, ShoppingBagIcon } from '@heroicons/react/24/solid';
// import pic from '../assets/iphone.svg';
// import bgdot from '../assets/dot.svg';

// const features = [
//   {
//     icon: <WrenchScrewdriverIcon className="h-6 w-6 text-[#EB203E]" />,
//     text: 'On demand handyman services',
//   },
//   {
//     icon: <TruckIcon className="h-6 w-6 text-[#EB203E]" />,
//     text: 'Delivery and tracking history',
//   },
//   {
//     icon: <ShoppingBagIcon className="h-6 w-6 text-[#EB203E]" />,
//     text: 'Shop at any registered store at your convenience',
//   },
// ];

// const AboutUs = () => (
//   <motion.div
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     transition={{ duration: 0.8 }}
//     className='bg-[#EFF0F6] flex justify-center items-center px-4 py-12'
//   >
//     <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
//       <img src={bgdot} alt="Background Dots" className="mb-4 w-16" />

//       <div className='bg-[#1F2336] flex flex-col lg:flex-row justify-between items-center gap-6 px-6 py-8 rounded-[30px] w-full'>

//         {/* Left Content */}
//         <div className='max-w-sm text-white'>
//           <h1 className='text-2xl font-bold mb-3'>About Us</h1>
//           <p className='text-sm mb-4'>
//             At RideCart, we believe in making life simpler. Whether you need a ride, a delivery, shopping assistance, or an errand runner, 
//             we bring speed, efficiency, and reliability into one seamless platform.
//           </p>
//           <button className='bg-[#EB203E] text-white rounded-md h-9 px-4 text-sm hover:bg-red-600 transition'>Contact us</button>
//         </div>

//         {/* Animated Phone Image */}
//         <motion.div
//           animate={{ scale: [1, 1.1, 1] }}
//           transition={{ duration: 4, repeat: Infinity }}
//           className="w-[140px] lg:w-[180px] flex justify-center"
//         >
//           <img src={pic} alt="iPhone" className="w-full h-auto" />
//         </motion.div>

//         {/* Features List */}
//         <div className='max-w-sm text-white space-y-3'>
//           {features.map((feature, idx) => (
//             <div key={idx} className="flex items-start gap-2 text-sm">
//               {feature.icon}
//               <p>{feature.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </motion.div>
// );

// export default AboutUs;





// import { motion } from 'framer-motion';
// import pic from '../assets/iphone.svg';
// import bgdot from '../assets/dot.svg';
// import feature1 from '../assets/route-02.svg'; // Replace these with actual image paths
// import feature2 from '../assets/route-02.svg';
// import feature3 from '../assets/route-02.svg';

// const features = [
//   {
//     img: feature1,
//     text: 'On demand handyman services',
//   },
//   {
//     img: feature2,
//     text: 'Delivery and tracking history',
//   },
//   {
//     img: feature3,
//     text: 'Shop at any registered store at your convenience',
//   },
// ];

// const AboutUs = () => (
//   <motion.div
//     initial={{ opacity: 0 }}
//     animate={{ opacity: 1 }}
//     transition={{ duration: 0.8 }}
//     className="min-h-[626px] bg-[#EFF0F6] flex justify-center items-center p-4"
//   >
//     <div className="relative w-full max-w-7xl mx-auto py-16">
//       {/* Background dots image */}
//       <img src={bgdot} alt="background dots" className="absolute top-0 left-0 w-20 md:w-28 opacity-50" />

//       <div className="relative bg-[#1F2336] rounded-[60px] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-10">
//         {/* Text Section */}
//         <div className="text-white max-w-md z-10">
//           <h1 className="text-2xl md:text-3xl font-bold mb-3">About Us</h1>
//           <p className="text-sm md:text-base mb-4">
//             At RideCart, we believe in making life simpler. Whether you need a ride, a delivery, shopping assistance, or an errand runner, 
//             we bring speed, efficiency, and reliability into one seamless platform.
//           </p>
//           <button className="bg-[#EB203E] text-white rounded-[11.18px] h-9 px-4 text-sm hover:bg-red-600 transition">
//             Contact us
//           </button>
//         </div>

//         {/* iPhone Image */}
//         <div className="relative z-0">
//           <img src={pic} alt="iPhone" className="w-40 md:w-64 lg:w-72 relative md:absolute md:-left-24 md:bottom-4" />
//         </div>

//         {/* Features List */}
//         <div className="text-white space-y-4 max-w-xs z-10">
//           {features.map((feature, idx) => (
//             <div key={idx} className="flex items-start gap-3 text-sm md:text-base">
//               <img src={feature.img} alt={`feature-${idx}`} className="w-6 h-6 object-contain" />
//               <p>{feature.text}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </motion.div>
// );

// export default AboutUs;








import { motion } from 'framer-motion';
import pic from '../assets/iphone.svg';
import bgdot from '../assets/dot.svg';
import feature1 from '../assets/route-02.svg';
import feature2 from '../assets/calendar-03.svg';
import feature3 from '../assets/trolley-02.svg';

const features = [
  {
    img: feature2,
    text: 'On demand handyman services',
  },
  {
    img: feature1,
    text: 'Delivery and tracking history',
  },
  {
    img: feature3,
    text: 'Shop at any registered store at your convenience',
  },
];

const AboutUs = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.8 }}
    className="min-h-[626px] bg-[#EFF0F6] flex justify-center items-center p-3"
  >
    <div className="container flex flex-col  justify-center items-center mx-auto py-16 sm:mt-[100px]">
      <img src={bgdot} alt="" />
      <div className="bg-[#1F2336] flex flex-col md:flex-row md:justify-around md:gap-20 items-center p-5 md:p-10 rounded-[30px] md:rounded-[60px] min-h-[300px] w-full max-w-[1260px] relative">
        {/* About Us Text */}
        <div className="max-w-sm text-white text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-xl md:text-2xl font-bold mb-3">About Us</h1>
          <p className="text-xs md:text-sm mb-4">
            At RideCart, we believe in making life simpler. Whether you need a ride, a delivery, shopping assistance, or an errand runner, 
            we bring speed, efficiency, and reliability into one seamless platform.
          </p>
          <button className="bg-[#EB203E] text-white rounded-[11.18px] h-9 px-4 text-xs md:text-sm hover:bg-red-600 transition">
            Contact us
          </button>
        </div>

        {/* Phone Image */}
        <div className="order-1 md:order-none">
          <img
            src={pic}
            alt="Phone"
            className="relative w-[200px] mt-5 sm:mt-0 md:w-auto md:absolute md:left-[550px] md:bottom-24 mx-auto"
          />
        </div>

        {/* Features List */}
        <div className="max-w-[400px] hidden sm:block text-white space-y-8 sm:space-y-4 text-center md:text-left">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 text-xs md:text-base ${
                idx === 2 ? 'max-w-[280px]' : 'max-w-[200px]'
              } mx-auto md:mx-0`}
            >
              <img src={feature.img} alt={`feature-${idx}`} className="w-6 h-6 object-contain flex-shrink-0" />
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

export default AboutUs;