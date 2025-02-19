import React from "react";
import { useState, useEffect, useRef } from "react";
import greentickrounded from "../../assets/images/roundedGreentick.png"
import { useNavigate } from "react-router-dom";
import Svgs from '../../assets/svgs/index.js'

function VerifiedSuccessful({ show, onClose, hidden }) {
    const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const popupRef = useRef();

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (show) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [show]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="">
        <div ref={popupRef}>
          {/* <div>
            <img
              onClick={onClose}
              src={crossicon}
              className="bg-gray-300 rounded-full absolute right-2 cursor-pointer w-10"
              alt=""
            />
          </div> */}
          <div className="flex justify-between md:mb-6"></div>
          <form onSubmit={handleSubmit}>
            <div className=" mx-auto p-10 bg-white shadow-lg rounded-xl border w-[286px]">
            
              <div className="flex flex-col gap-3">
                <div className="img flex items-center justify-center">
                  <Svgs.GreenTickSuccessful/>
                </div>
                <div className=" flex items-center justify-center text-center">
                  <h1 className=" w-[60%] text-base font-medium font-poppins text-gray-1">
                  Car verified
                  successfully
                  </h1>
                </div>
                <div  className=" flex items-center justify-center">
                  <button onClick={()=>{navigate('/mechanic/mechanic-dashboard')}} className=" hover:bg-white hover:text-custom-blue hover:border hover:border-custom-blue hover:shadow-none shadow-2xl shadow-custom-blue text-sm font-semibold font-inter bg-custom-blue px-[16px] py-[12px] w-full rounded-xl text-white">Close</button>
                </div>
              </div>
            </div>
            {/* <div className="py-6 text-center">
              <Button
                onClick={onClose}
                title="Submit claim"
                className="text-base font-medium"
              />
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default VerifiedSuccessful;
