import React from "react";
import audi2 from "../../assets/images/audi2.png";
import grayDot from "../../assets/images/graydot.png";
import yellowTick from "../../assets/images/yellowTick.png";
import { useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout/DashboardLayout";
import Svgs from '../../assets/svgs/index.js'


function NewRequests() {
  const navigate = useNavigate()
  return (
    <>
    <Layout active={'New Requests'}>
      <div className="">
        <div className="newRequests py-4 ">
          <h1 className="text-xl md:text-2xl font-semibold font-inter text-gray-1">
            New requests
          </h1>
        </div>
        <div className="cardpart grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 2xl:flex items-center 2xl:gap-[33px] 2xl:flex-wrap mb-3">
          {Array(4)
            .fill()
            .map((_, index) => {
              return (
                <div key={index} className="card border rounded-2xl flex flex-col gap-4 shadow-css 2xl:w-[290px]">
                  <div>
                    <img src={audi2} alt="Car" className="w-full h-auto rounded-t-2xl" />
                  </div>
                  <div className="px-3">
                    <h1 className="text-base md:text-lg font-semibold font-inter text-gray-1">
                      Mercedes-Benz E 220 d
                    </h1>
                  </div>
                  <div className="flex items-center px-[7px] justify-between">
                    <h1 className="text-xs md:text-sm lg:text-xs 2xl:text-sm  font-normal font-Work-sans text-gray-2">45000 KM</h1>
                    <Svgs.GrayDot/>
                    <h1 className="text-xs md:text-sm lg:text-xs 2xl:text-sm  font-normal font-Work-sans text-gray-2">2018 Model</h1>
                    <Svgs.GrayDot/>
                    <h1 className="text-xs md:text-sm lg:text-xs 2xl:text-sm  font-normal font-Work-sans text-gray-2">Automatic</h1>
                  </div>
                  <div className="px-3">
                    <h1 className="text-lg md:text-2xl lg:text-lg 2xl:text-2xl font-bold font-inter text-gray-1">$22,500</h1>
                  </div>
                  <div className="flex items-center gap-2 px-3">
                    <span><Svgs.YellowTickVerified/></span> 
                    <p className="text-xs font-normal font-Work-sans text-[#FFB543]">Verification pending</p>
                  </div>
                  <div className="flex items-center justify-center pb-4 md:pb-5">
                    <button onClick={()=>{navigate('/insurance/insurance-chat')}} className="w-full max-w-[132px] h-[44px] md:h-[48px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-blue-300 shadow-2xl">
                      Chat now
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
      </Layout>
    </>
  );
}

export default NewRequests;
