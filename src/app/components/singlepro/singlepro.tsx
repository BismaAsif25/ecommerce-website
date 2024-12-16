import React from "react";
import Image from "next/image"; 
import { CiShoppingCart } from "react-icons/ci";

const Singlepro = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-screen-xl  h-auto bg-white flex flex-col md:flex-row sm:flex-row justify-between items-center px-6 sm:px-10 lg:px-16 py-6">
        <div className="flex flex-col justify-center items-center sm:items-start w-full sm:w-1/2 space-y-4 sm:space-y-6">
           <Image
            src="/11.jpg" 
            alt="Product Image"
            width={675}
            height={335}
          />
        </div>

        <div className="w-full md:w-1/2 sm:w-1/2 mt-6 sm:mt-0 sm:ml-[130px]  justify-center">
       
          
          <p className="w-full sm:w-[557px] text-[40px] sm:text-[60px] font-bold text-center sm:text-left mb-6">
          Library Stool 
                 <p>Chair</p>
          </p>
          <button className="mb-[30px] rounded-[100px] bg-[#029FAE] w-[171px] text-white py-3 px-6  flex items-center gap-[20px] hover:bg-blue-700 mx-auto sm:mx-0">
            <span>$20.00 USD</span>
          </button>
          <p className="opacity-[60%] w-full sm:w-[557px] text-[22px] font-regular text-center sm:text-left ">
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing
                 </p>
          
          <button className=" mt-[30px] bg-[#029FAE] w-[212px] h-[63px]  text-white py-3 px-6 rounded-[8px] flex items-center gap-[20px] hover:bg-blue-700 mx-auto sm:mx-0">
            <CiShoppingCart className="h-[29px] font-semibold w-[29px]" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>



  );
};

export default Singlepro;