// import React from 'react'
// import logo from '../assets/ridecartlogo.svg'
// import ins from '../assets/skill-icons_instagram.svg'
// import x from '../assets/line-md_twitter-x.svg'
// import f from '../assets/devicon_facebook.svg'
// import { FaAt } from "react-icons/fa";
// export default function Footer() {
//   return (
//     <div className='min-h-[500px] text-black bg-[#FFFFFF] flex justify-center items-center p-5'>
//      <div className=' container max-w-[1248px] '>
//       <div className='flex justify-between items-center'>
//         <img src={logo} alt="logo" className='object-contain' />
//         <div  className='flex items-center gap-3'>
//           <img src={ins} alt="instagram" />
//           <img src={x} alt="instagram" />
//           <img src={f} alt="instagram" />
//         </div>
//       </div>
//       <hr className='mt-3' />

//       <div className='flex justify-between items-center max-w-[1200px] p-5 w-full'>
//         <div>
//           <h1 className='font-[600] text-[20px]'>About</h1>
//           <ul>
//            <li>About Us</li>
//            <li>Careers</li>
//            <li>Contact US</li>
//           </ul>
//         </div>
//         <div>
//           <h1 className='font-[600] text-[20px]'>Services</h1>
//           <ul>
//            <li>Logistics</li>
//            <li>E-Commerce</li>
//            <li>Laundry Services</li>
//            <li>House Cleaning</li>
//            <li>Shop Groceries</li>
//            <li>Vendors</li>
//           </ul>
//         </div>
//         <div>
//           <h1 className='font-[600] text-[20px]'>Legal</h1>
//           <ul>
//            <li>Privacy</li>
//            <li>Terms</li>
//            <li>Cooking Policy</li>
//           </ul>
//         </div>
      
//       </div>
//         <hr className='mt-3' />
//         <h1 className='flex items-center gap-2  justify-center mt-4'> <FaAt/>2025 RideCart.com All Rights Reserved</h1>
//      </div>
//     </div>
//   )
// }




import React from 'react';
import logo from '../assets/ridecartlogo.svg';
import ins from '../assets/skill-icons_instagram.svg';
import x from '../assets/line-md_twitter-x.svg';
import f from '../assets/devicon_facebook.svg';
import { FaAt } from 'react-icons/fa';

export default function Footer() {
  return (
    <div className="min-h-[500px] text-black bg-[#FFFFFF] flex justify-center items-center p-5">
      <div className="container max-w-[1248px] w-full">
        {/* Logo & Social Icons */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <img src={logo} alt="logo" className="object-contain h-[40px]" />
          <div className="flex items-center gap-3">
            <img src={ins} alt="instagram" className="h-6 w-6" />
            <img src={x} alt="twitter" className="h-6 w-6" />
            <img src={f} alt="facebook" className="h-6 w-6" />
          </div>
        </div>

        <hr className="mt-4 border-gray-300" />

        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row justify-between gap-8 sm:gap-0 p-5 w-full">
          {/* About */}
          <div>
            <h1 className="font-[600] text-[18px] sm:text-[20px] mb-2">About</h1>
            <ul className="space-y-1 text-sm sm:text-base">
              <li>About Us</li>
              <li>Careers</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h1 className="font-[600] text-[18px] sm:text-[20px] mb-2">Services</h1>
            <ul className="space-y-1 text-sm sm:text-base">
              <li>Logistics</li>
              <li>E-Commerce</li>
              <li>Laundry Services</li>
              <li>House Cleaning</li>
              <li>Shop Groceries</li>
              <li>Vendors</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h1 className="font-[600] text-[18px] sm:text-[20px] mb-2">Legal</h1>
            <ul className="space-y-1 text-sm sm:text-base">
              <li>Privacy</li>
              <li>Terms</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-300" />

        {/* Copyright */}
        <h1 className="flex items-center gap-2 justify-center mt-4 text-sm sm:text-base text-center">
          <FaAt />
          2025 RideCart.com All Rights Reserved
        </h1>
      </div>
    </div>
  );
}
