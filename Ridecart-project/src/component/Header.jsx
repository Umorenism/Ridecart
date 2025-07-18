

// const AppHeader = () => {
  

//   return (
  

//     <div class="header fixed top-0 left-0 w-full z-50 flex justify-between items-center p-5 bg-white   mx-0">
//   <div class="w-full border flex justify-between items-center p-3  bg-white rounded-[100px] mx-5 shadow-md">
//         <div class="logo text-2xl font-bold text-red-600">PldeGort</div>
//         <nav class="space-x-6">
//             <a href="#" class="font-bold text-[#1F2336]">Home</a>
//             <a href="#" class="font-bold text-[#1F2336]">Services</a>
//             <a href="#" class="font-bold text-[#1F2336]">About us</a>
//             <a href="#" class="font-bold text-[#1F2336]">Reviews</a>
//         </nav>
//         <a href="#" class="bg-[#EB203E] text-white px-6 py-2 rounded-full font-bold">Contact Us</a>
//     </div>
//     </div>
   
//   );
// };

// export default AppHeader;




import { useState } from 'react';
import { MenuOutlined,DownOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import logo from '../assets/ridecartlogo.svg'
const AppHeader = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDrawer = () => setDrawerVisible(!drawerVisible);
  const toggleDropdown = () => setShowDropdown((prev) => !prev);

  return (
    <header className="fixed top-0 p-5 left-0 w-full z-50 bg-[#F4F4F4]  px-4">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center p-3 rounded-full bg-white border shadow">
        {/* Logo */}
        <div className="">
          <img src={logo} alt="" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a href="#" className="font-semibold text-[18px] text-[#1F2336]">Home</a>
         {/* Services with dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center font-bold text-[#1F2336] focus:outline-none"
            >
              Services <DownOutlined className="ml-1 text-sm" />
            </button>

            {showDropdown && (
              <div className="absolute top-full mt-2 right-0  bg-gray-500
              
              border shadow-lg rounded-[8px] py-2 w-48 z-50">
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Web Development</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">Mobile Apps</a>
                <a href="#" className="block px-4 py-2 text-sm hover:bg-gray-100">SEO Services</a>
              </div>
            )}
          </div>
          <a href="#" className="font-semibold text-[18px] text-[#1F2336]">About Us</a>
          <a href="#" className="font-semibold text-[18px] text-[#1F2336]">Reviews</a>
        </nav>

        {/* Desktop Button */}
        <a href="#" className="hidden md:inline-block bg-[#EB203E] text-white px-6 py-2 rounded-full font-bold">
          Contact Us
        </a>

        {/* Mobile Menu Button */}
        <button onClick={toggleDrawer} className="md:hidden text-xl">
          <MenuOutlined  className='text-black'/>
        </button>
      </div>

      {/* Drawer for Mobile Nav */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={toggleDrawer}
        open={drawerVisible}
        className="md:hidden"
      >
        <ul className="space-y-4">
          <li><a href="#" className="font-bold text-[#1F2336]" onClick={toggleDrawer}>Home</a></li>
          <li><a href="#" className="font-bold text-[#1F2336]" onClick={toggleDrawer}>Services</a></li>
          <li><a href="#" className="font-bold text-[#1F2336]" onClick={toggleDrawer}>About Us</a></li>
          <li><a href="#" className="font-bold text-[#1F2336]" onClick={toggleDrawer}>Reviews</a></li>
          <li>
            <a href="#" className="bg-[#EB203E] text-white px-6 py-2 rounded-full font-bold inline-block" onClick={toggleDrawer}>
              Contact Us
            </a>
          </li>
        </ul>
      </Drawer>
    </header>
  );
};

export default AppHeader;

