
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import qrc from '../assets/wpf_qr-code.svg';

export default function Download() {
  const [activeTab, setActiveTab] = useState('rider');

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-[626px] bg-[#EFF0F6] flex justify-center items-center p-4"
    >
      <div className="container max-w-[1270px] mx-auto flex-col md:flex-row md:gap-8 items-center justify-center py-8 md:py-16">
        
        {/* Heading */}
        <div className="text-black text-center w-full justify-center flex items-center flex-col mb-10">
          <h1 className="text-[30px] sm:text-[40px] font-[600] text-[#1F2336]">Download our App</h1>
          <p className="text-[#1F233699] max-w-sm px-4 sm:px-0">
            Scan the QR code with your phone camera to be able to download the RideCart App
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-black w-full px-4">
          {/* QR Code */}
          <div className="w-full flex justify-center">
            <div className="h-[300px] sm:h-[432px] w-[300px] sm:w-[432px] border">
              <img src={qrc} alt="qr" className="h-full w-full sm:object-cover object-contain" />
            </div>
          </div>

          {/* Text + Tabs */}
          <div className="w-full flex items-center">
            <div className="w-full">
              {/* Tabs */}
              <div className="flex items-center gap-5">
                {/* Rider Tab */}
                <div
                  className="flex flex-col cursor-pointer"
                  onClick={() => setActiveTab('rider')}
                >
                  <h1
                    className={`text-[18px] sm:text-[20px] font-[600] ${
                      activeTab === 'rider' ? 'text-[#1F2336]' : 'text-[#888]'
                    }`}
                  >
                    Delivery Rider
                  </h1>
                  <div
                    className={`h-[2px] w-full transition-all duration-300 ${
                      activeTab === 'rider' ? 'bg-orange-600' : 'bg-gray-200'
                    }`}
                  ></div>
                </div>

                {/* E-Commerce Tab */}
                <div
                  className="flex flex-col cursor-pointer"
                  onClick={() => setActiveTab('ecom')}
                >
                  <h1
                    className={`text-[18px] sm:text-[20px] font-[600] ${
                      activeTab === 'ecom' ? 'text-[#1F2336]' : 'text-[#888]'
                    }`}
                  >
                    E-Commerce
                  </h1>
                  <div
                    className={`h-[2px] w-full transition-all duration-300 ${
                      activeTab === 'ecom' ? 'bg-orange-600' : 'bg-gray-200'
                    }`}
                  ></div>
                </div>
              </div>

              {/* Content */}
              <h1 className="mt-5 font-[600] text-[#1F2336] text-[24px] sm:text-[30px] leading-tight">
                {activeTab === 'rider'
                  ? 'Anything, Anywhere, At your Service.'
                  : 'Your Online Store’s Best Delivery Partner.'}
              </h1>
              <p className="text-[#1F233699] font-[500] text-[16px] sm:text-[18px] mt-2">
                Available for iOS and Android devices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}




