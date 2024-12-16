import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { FaExclamationCircle  } from "react-icons/fa";
import Link from "next/link";

export const Topbar =() =>{
  return (
    <div className="w-full flex flex-col sm:flex-row bg-[#272343] pt-[14px] items-center justify-between pb-[14px] sm:h-[50px] h-[45px] text-white">
        <div className="pl-[10px] xl:pl-[332px] pl-[332px]   max-width-screen-xl mx-auto container flex justify-between items-center w-full px-4">
         <div>
           <p className=" text-white flex">
          <FaCheck className="w-[16px] gap-[2px] h-[16px]" />
            <span>Free Shipping On All Orders $50+</span>
          </p>
         </div>
          <ul className="  text-white flex items-center space-x-2 font-normal text-center sm:text-left xs:text-left  text-[10px] sm:text-[12px]">
            <li className=" flex item-center space-x-1 cursor-pointer">
              <span>Eng</span>
              <FaChevronDown />
            </li>
            {/* <link  href="#"><li className="cursor-pointer">FAQS</li></link>  */}
           <li className="cursor-pointer">FAQS</li>
            <li className="flex item-center space-x-2 cursor-pointer">
              <FaExclamationCircle className="text-white" />
              <span>Need Help</span>
            </li>
          </ul>
       
         </div>
      
    </div>
  );
}

export default Topbar;

