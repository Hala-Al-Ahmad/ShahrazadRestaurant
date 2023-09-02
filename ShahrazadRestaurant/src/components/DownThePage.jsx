import React from 'react'
import { BsInfoCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import {AiFillMessage } from "react-icons/ai";
import { RiFacebookCircleLine } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";
import { FiTwitter } from "react-icons/fi";
import { Prad } from './Styles';


export const DownThePage = () => {
  const scrollToTop = () =>{
    window.scrollTo({
    top: 0,
    behavior: 'smooth'
    });
  };
  return (
  <footer className=" select-none object-bottom font-['DecoType_Naskh_Variants'] relative	 bottom-0  z-50 w-screen p-3 px-4 md:p-5 md:px-16  bg-footer">
{/* desktop & tablet */}
<div className="hidden md:flex w-full h-full ">
<Prad className='select-none' >جميع  الحقوق  محفوظة  ©  مطعم  شهرزاد  2023 </Prad>
<ul
className=" relative flex items-center justify-center text-textColor text-2xl  cursor-pointer gap-8">

<RiFacebookCircleLine className='w-7 h-7  dark:hover:text-contico  transition-colors duration-300 transform hover:text-blue-500" href="#"'/>
<FiTwitter className=" dark:hover:text-contico  transition-colors duration-300 transform hover:text-blue-500" href="#"/>
<BsInstagram className=" dark:hover:text-contico  transition-colors duration-300 transform hover:text-blue-500" href="#"/>
<ImWhatsapp className=" dark:hover:text-contico  transition-colors duration-300 transform hover:text-blue-500" href="#"/>
<a className="-mx-1.5 dark:hover:text-contico  transition-colors duration-300 transform hover:text-blue-500" href="#">
                            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z" fill="currentColor" />
                                <path d="M7.2 9.6001H4V19.2001H7.2V9.6001Z" fill="currentColor" />
                                <path d="M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z" fill="currentColor" />
                            </svg>
                        </a>
</ul>


<ul className='relative flex items-center gap-10 ml-auto '>
<div 
      className=" relative flex items-center  text-textColor text-2xl  cursor-pointer gap-1">
        <Link to ={"/AboutUs"}
         onClick={scrollToTop}
        >
      <p>حول التطبيق</p>
      </Link>
      <BsInfoCircleFill/>
      </div> 

      <Link to ={"/Communicate"}>
      <div 
      className=" relative flex items-center justify-center text-textColor text-2xl  cursor-pointer gap-1"
      onClick={scrollToTop}
      >
        <p> تواصل معنا </p>
        <AiFillMessage/>
      </div>
      </Link>

  </ul>
</div>


 {/* mobile */}
 <div className=" md:hidden w-full h-full ">
 <p className='flex items-center justify-center text-m  cursor-pointer gap-2'>جميع  الحقوق  محفوظة  ©  مطعم  شهرزاد  2023 </p>
 </div>
  </footer>
  )
}
