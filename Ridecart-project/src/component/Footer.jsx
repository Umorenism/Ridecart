import React from 'react'
import logo from '../assets/ridecartlogo.svg'
import ins from '../assets/skill-icons_instagram.svg'
import x from '../assets/line-md_twitter-x.svg'
import f from '../assets/devicon_facebook.svg'
export default function Footer() {
  return (
    <div className='min-h-[500px] text-black bg-[#FFFFFF] flex justify-center items-center p-5'>
     <div className=' container max-w-[1248px] '>
      <div className='flex justify-between items-center'>
        <img src={logo} alt="logo" className='object-contain' />
        <div  className='flex items-center gap-3'>
          <img src={ins} alt="instagram" />
          <img src={x} alt="instagram" />
          <img src={f} alt="instagram" />
        </div>
      </div>
      <hr className='mt-3' />
     </div>
    </div>
  )
}
