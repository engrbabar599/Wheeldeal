import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import audiimg from "../../assets/images/audi14.png";
import next from "../../assets/images/nextIcon.png";
import prev from "../../assets/images/prevIcon.png";
import car11 from "../../assets/images/car11.png";
import car12 from "../../assets/images/car12.png";
import car13 from "../../assets/images/man13.png";
import car14 from "../../assets/images/man14.png";
import { useState } from "react";
import processIcon from "../../assets/images/uit_process.png";
import mechanicMan from "../../assets/images/mechanicMan.png";
import yellowTick from "../../assets/images/yellowTick.png";
import man1img from "../../assets/images/insuranceMan1.png";
import man2img from "../../assets/images/insuranceMan2.png";
import man3img from "../../assets/images/insuranceMan3.png";
import maninsuit from "../../assets/images/mansuit.png";
import greentick from "../../assets/images/greentick3.png";
import goldstars from "../../assets/images/goldstars.png";
import banner from "../../assets/images/White and Black Modern Need Car Rent Banner (1) 1.png";
import facebook from "../../assets/images/facebook.png";
import tiktok from "../../assets/images/tiktok.png";
import youtube from "../../assets/images/youtube.png";
import twitter from "../../assets/images/twitter.png";
import quickBidLogo from "../../assets/images/quickbider logo png 2.png";
import hearticon from "../../assets/images/hearticon.png";
import grayDot from "../../assets/images/graydot.png";
import blueicon from "../../assets/images/bluetick (2).png"
import Navbar2 from "../../components/Navbar2";
import ClaimNow from "./ClaimNow";
import Banner from "../../components/Banner";

function BuyACarDetails() {
  const [progress, setProgress] = useState(32); // Initial progress value

  const handleChange = (e) => {
    setProgress(e.target.value);
  };


  const [value, setValue] = useState(0);

  const handleChangeProgress = (event) => {
    setValue(event.target.value);
  };

  const review = [
    {
      name: "Engine",
    },
    {
      name: "Exterior",
    },
    {
      name: "Tires",
    },
    {
      name: "Interior",
    },
  ];

  const [tabActive, setTabActive] = useState("home");
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleClick = (item) => {
    setTabActive(item);
  };

  const bidsClick = () => {
    handleClick("bids");
  };

  const investmentClick = () => {
    handleClick("investments");
  };

  const [tabClick, setTabClick] = useState("1")

  const OntabClick = (items) => {
    setTabClick(items)
  }

  const [showPopup, setShowPopup] = useState(false);

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  
  const navigate = useNavigate();
  return (
    <>
      <Navbar2 />
      <div className="grid grid-cols-1 lg:grid-cols-12 px-3 lg:px-10 gap-6 mt-10">
        <div className="leftpart col-span-12 lg:col-span-7">
          <div className="img">
            <img src={audiimg} className="w-full" alt="" />
          </div>
          <div className="flex items-center flex-wrap gap-5 pt-10 pb-5">
            <button className="rounded-lg bg-custom-blue text-white px-4 py-2 text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center shadow-2xl shadow-custom-blue">
              Overview
            </button>
            <button className="rounded-lg bg-white border border-gray-300 text-gray-800 px-4 py-2 text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center">
              Specifications
            </button>
            <button className="rounded-lg bg-white border border-gray-300 text-gray-800 px-4 py-2 text-sm md:text-lg font-medium font-Work-sans flex items-center justify-center">
              Gallery
            </button>
          </div>
          <div className="carReview border rounded-xl p-5 h-fit my-5">
            <div>
              <h1 className="text-xl md:text-2xl font-semibold font-inter text-gray-1">
                Car overview
              </h1>
            </div>
            <div className="flex flex-col md:flex-row justify-between pt-5 gap-5 md:gap-0">
              <div className="flex flex-col gap-5 ">
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Registration year
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    Jun 2018
                  </h1>
                </div>
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Fuel type
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    Diesel
                  </h1>
                </div>
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Kms Driven
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    82000 Kms
                  </h1>
                </div>
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Ownership
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    First Owner
                  </h1>
                </div>
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Transmission
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    Manual
                  </h1>
                </div>
              </div>
              <div className="flex flex-col gap-5 ">
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Insurance
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    Comprehensive
                  </h1>
                </div>
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Seats
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    5 Seats
                  </h1>
                </div>
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    RTO
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    Surrey
                  </h1>
                </div>
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Engine displacement
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    1248 CC
                  </h1>
                </div>
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Year of manufacture
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    2018
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="specification border rounded-xl p-5 h-fit my-8">
            <div>
              <h1 className="text-xl md:text-2xl font-semibold font-inter text-gray-1">
                Specification
              </h1>
            </div>
            <div className="flex flex-col md:flex-row  justify-between pt-5 gap-5 md:gap-0">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Engine
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    1248 CC
                  </h1>
                </div>
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Fuel type
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    Diesel
                  </h1>
                </div>
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Transmission
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    Manual
                  </h1>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Mileage
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    28 Kmpl
                  </h1>
                </div>
                <div className="flex items-center gap-5 justify-between">
                  <h1 className="text-base md:text-lg font-normal font-Work-sans text-gray-4">
                    Power
                  </h1>
                  <h1 className="text-base md:text-lg font-medium font-Work-sans text-gray-1">
                    88.5 BHP
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="rightpart col-span-12 lg:col-span-5">
          <div className="border rounded-xl p-5 ">
            <div className="flex items-center justify-between">
              <h1 className="text-lg lg:text-[32px] font-bold font-inter text-gray-1">
                Mercedes-Benz E 220 d
              </h1>
              <img src={hearticon} alt="" />
            </div>
            <div className=" my-5">
            <div className="flex items-center gap-4">
                      <h1 className="text-xs md:text-lg font-normal font-Work-sans text-gray-2">
                        45000 KM
                      </h1>
                      <img src={grayDot} alt="" />
                      <h1 className="text-xs md:text-lg font-normal font-Work-sans text-gray-2">
                        2018 Model
                      </h1>
                      <img src={grayDot} alt="" />
                      <h1 className="text-xs md:text-lg font-normal font-Work-sans text-gray-2">
                        Automatic
                      </h1>
                    </div>
                    <div className=" my-5">
                      <h1 className="text-lg md:text-2xl font-bold font-inter text-gray-1">
                        $22,500
                      </h1>
                    </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <img src={blueicon} alt="" />
                <p className="text-xs lg:text-lg font-medium font-Work-sans ">
                  Verified by Mechanic
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src={blueicon} alt="" />
                <p className="text-xs lg:text-lg font-medium font-Work-sans ">
                  Verified by Dealer
                </p>
              </div>
            </div>
            <div className="flex items-center my-5">
              <button className=" h-[44px] md:h-[52px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans border border-gray-1 text-gray-1 flex items-center justify-center ">
              Verification certificate
              </button>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className=" lg:text-lg font-medium font-Work-sans text-gray-1">
                EMI starts from - $270/Month.
                </h1>
                <button className=" lg:text-lg font-medium font-Work-sans text-custom-blue underline">Check details</button>
              </div>
              <div className=" ">
              <div className="flex items-center my-5 mt-10 gap-8 justify-center">
              <button className=" h-[44px] w-[124px] md:h-[52px] px-[24px] py-[12px] md:py-[15.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center  shadow-2xl shadow-custom-blue">
              Buy now
              </button>
              <button className=" h-[44px] md:h-[52px] px-[24px] py-[12px] md:py-[15.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-white border border-custom-blue text-custom-blue flex items-center justify-center ">
              Seller details
              </button>
            </div>
              </div>
            </div>
          </div>
          <div className="border rounded-xl p-5 my-5">
            <div>
            <h1 className="text-lg lg:text-[32px] font-bold font-inter text-gray-1">
            EMI Calculator
              </h1>
            </div>
            <div className="my-10">
            <h1 className="text-lg font-normal font-Work-sans text-gray-2">
            Avail upto 100% of the car value in finance at attractive interest rates
            </h1>
            </div>
            <div className="flex items-center justify-between">
            <h1 className="text-xl lg:text-2xl font-semibold text-gray-800">
            Loan Amount
                  </h1>
            <button className=" py-[6px] px-[16px] text-gray-1 border border-gray-1 rounded-xl w-[116px] text-xl font-semibold font-inter">$28,000</button>
            </div>
             <div className="flex flex-col items-center pb-3 my-5">
                    <div className="w-full flex justify-between text-blue-500">
                      <span>${value}</span>
                      <span>$32000</span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="32000"
                      value={value}
                      onChange={handleChangeProgress}
                      className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                      style={{
                        background: `linear-gradient(to right, #60a5fa ${
                          (value / 32000) * 100
                        }%, #e5e7eb ${(value / 32000) * 100}%)`,
                      }}
                    />
            </div>
            <div className="flex items-center gap-2">
                <h1 className=" text-2xl font-semibold font-inter text-gray-1">Duration</h1>
                <span className="text-lg font-normal text-gray-1 font-Work-sans">in years</span>
            </div>
            <div className="flex items-center gap-5 my-5">
                <button onClick={()=>{OntabClick("1")}} className={` flex items-center justify-center rounded-full px-[18px] py-[5px] h-[48px] w-[48px] text-2xl font-semibold font-inter text-gray-1 ${(tabClick === "1") ? "bg-custom-blue text-white" : "bg-white text-gray-1 border"}`}>1</button>
                <button onClick={()=>{OntabClick("2")}} className={` flex items-center justify-center rounded-full px-[18px] py-[5px] h-[48px] w-[48px] text-2xl font-semibold font-inter text-gray-1 ${(tabClick === "2") ? "bg-custom-blue text-white" : "bg-white text-gray-1 border"}`}>2</button>
                <button onClick={()=>{OntabClick("3")}} className={` flex items-center justify-center rounded-full px-[18px] py-[5px] h-[48px] w-[48px] text-2xl font-semibold font-inter text-gray-1 ${(tabClick === "3") ? "bg-custom-blue text-white" : "bg-white text-gray-1 border"}`}>3</button>
                <button onClick={()=>{OntabClick("4")}} className={` flex items-center justify-center rounded-full px-[18px] py-[5px] h-[48px] w-[48px] text-2xl font-semibold font-inter text-gray-1 ${(tabClick === "4") ? "bg-custom-blue text-white" : "bg-white text-gray-1 border"}`}>4</button>
                <button onClick={()=>{OntabClick("5")}} className={` flex items-center justify-center rounded-full px-[18px] py-[5px] h-[48px] w-[48px] text-2xl font-semibold font-inter text-gray-1 ${(tabClick === "5") ? "bg-custom-blue text-white" : "bg-white text-gray-1 border"}`}>5</button>
            </div>
            <div>
                <h1 className=" text-lg font-normal font-Work-sans text-gray-1">Your monthly EMI</h1>
            </div>
            <div className="flex items-center justify-center ml-20">
                <h1 className=" text-2xl font-semibold font-inter text-custom-blue">View breakup</h1>
            </div>
            <div>
                <h1 className=" text-[32px] font-inter text-gray-1 font-bold">$32,000</h1>
            </div>
            <div className="flex items-center gap-3 my-5">
                <h1 className=" lg:text-lg font-medium font-Work-sans text-gray-1">
                EMI starts from - $270/Month.
                </h1>
                <button className=" lg:text-lg font-medium font-Work-sans text-custom-blue underline">Check details</button>
              </div>
              <div className="flex items-center justify-center my-10">
              <button className=" h-[44px] md:h-[52px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans border border-custom-blue text-custom-blue flex items-center justify-center ">
              Interested in loan
              </button>
            </div>
          </div>
        </div> */}

        <div className="rightpart col-span-12 lg:col-span-5">
          <div className="border rounded-xl p-5">
            <div className="flex items-center justify-between">
              <h1 className="text-lg lg:text-[32px] font-bold font-inter text-gray-1">
                Mercedes-Benz E 220 d
              </h1>
              <img src={hearticon} alt="" />
            </div>
            <div className="my-5">
              <div className="flex items-center gap-4">
                <h1 className="text-xs md:text-lg font-normal font-Work-sans text-gray-2">
                  45000 KM
                </h1>
                <img src={grayDot} alt="" />
                <h1 className="text-xs md:text-lg font-normal font-Work-sans text-gray-2">
                  2018 Model
                </h1>
                <img src={grayDot} alt="" />
                <h1 className="text-xs md:text-lg font-normal font-Work-sans text-gray-2">
                  Automatic
                </h1>
              </div>
              <div className="my-5">
                <h1 className="text-lg md:text-2xl font-bold font-inter text-gray-1">
                  $22,500
                </h1>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2">
                <img src={blueicon} alt="" />
                <p className="text-xs lg:text-lg font-medium font-Work-sans ">
                  Verified by Mechanic
                </p>
              </div>
              <div className="flex items-center gap-2">
                <img src={blueicon} alt="" />
                <p className="text-xs lg:text-lg font-medium font-Work-sans ">
                  Verified by Dealer
                </p>
              </div>
            </div>
            <div className="flex items-center my-5">
              <button className="h-[44px] md:h-[52px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans border border-gray-1 text-gray-1 flex items-center justify-center">
                Verification certificate
              </button>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="lg:text-lg font-medium font-Work-sans text-gray-1">
                  EMI starts from - $270/Month.
                </h1>
                <button className="lg:text-lg font-medium font-Work-sans text-custom-blue underline">Check details</button>
              </div>
              <div className="flex items-center my-5 mt-10 gap-8 justify-center">
                <button  className="h-[44px] w-[124px] md:h-[52px] px-[24px] py-[12px] md:py-[15.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-custom-blue text-white flex items-center justify-center shadow-2xl shadow-custom-blue">
                  Buy now
                </button>
                <button onClick={handleShowPopup} className="h-[44px] md:h-[52px] px-[24px] py-[12px] md:py-[15.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans bg-white border border-custom-blue text-custom-blue flex items-center justify-center">
                  Seller details
                </button>
                {showPopup && <ClaimNow show={showPopup} onClose={handleClosePopup} />}
              </div>
            </div>
          </div>
          <div className="border rounded-xl p-5 my-5">
            <div>
              <h1 className="text-lg lg:text-[32px] font-bold font-inter text-gray-1">
                EMI Calculator
              </h1>
            </div>
            <div className="my-10">
              <h1 className="text-lg font-normal font-Work-sans text-gray-2">
                Avail upto 100% of the car value in finance at attractive interest rates
              </h1>
            </div>
            <div className="flex items-center justify-between">
              <h1 className="text-xl lg:text-2xl font-semibold text-gray-800">
                Loan Amount
              </h1>
              <button className="py-[6px] px-[16px] text-gray-1 border border-gray-1 rounded-xl w-[116px] text-xl font-semibold font-inter">
                $28,000
              </button>
            </div>
            {/* Progress bar */}
            <div className="flex flex-col items-center pb-3 my-5">
              <div className="w-full flex justify-between text-blue-500">
                <span>${value}</span>
                <span>$32000</span>
              </div>
              <input
                type="range"
                min="0"
                max="32000"
                value={value}
                onChange={handleChangeProgress}
                className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #60a5fa ${(value / 32000) * 100
                    }%, #e5e7eb ${(value / 32000) * 100}%)`,
                }}
              />
            </div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-semibold font-inter text-gray-1">Duration</h1>
              <span className="text-lg font-normal text-gray-1 font-Work-sans">in years</span>
            </div>
            <div className="flex items-center flex-wrap gap-5 my-5">
              {["1", "2", "3", "4", "5"].map((year) => (
                <button
                  key={year}
                  onClick={() => OntabClick(year)}
                  className={`flex items-center justify-center rounded-full px-[18px] py-[5px] h-[48px] w-[48px] text-2xl font-semibold font-inter text-gray-1 ${tabClick === year ? "bg-custom-blue text-white" : "bg-white text-gray-1 border"
                    }`}
                >
                  {year}
                </button>
              ))}
            </div>
            <div>
              <h1 className="text-lg font-normal font-Work-sans text-gray-1">Your monthly EMI</h1>
            </div>
            <div className="flex items-center justify-center ml-20">
              <h1 className="lg:text-2xl font-semibold font-inter text-custom-blue">View breakup</h1>
            </div>
            <div>
              <h1 className="text-[32px] font-inter text-gray-1 font-bold">$32,000</h1>
            </div>
            <div className="flex items-center gap-3 my-5">
              <h1 className="lg:text-lg font-medium font-Work-sans text-gray-1">
                EMI starts from - $270/Month.
              </h1>
              <button className="lg:text-lg font-medium font-Work-sans text-custom-blue underline">
                Check details
              </button>
            </div>
            <div className="flex items-center justify-center my-10">
              <button className="h-[44px] md:h-[52px] px-[24px] py-[12px] md:py-[13.5px] rounded-lg text-sm md:text-lg font-medium font-Work-sans border border-custom-blue text-custom-blue flex items-center justify-center">
                Interested in loan
              </button>
            </div>
          </div>
        </div>

      </div>
      {/* <div className="banner">
        <img src={banner} className="w-full" alt="Banner" />
      </div>

      <div className="footer py-10 bg-[#e0e0e0]">
        <div className="w-[90vw] lg:w-[80vw] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
            <div className="first w-full lg:w-[35%]">
              <div>
                <img src={quickBidLogo} alt="Quick Bid Logo" />
              </div>
              <div>
                <p className="text-base lg:text-lg font-normal font-Work-sans text-gray-800 py-5 lg:py-10">
                  But who has any right to find fault with a man who chooses to
                  enjoy a pleasure that has no annoying consequences.
                </p>
              </div>
              <div className="flex gap-4">
                <div>
                  <img src={facebook} alt="Facebook" />
                </div>
                <div>
                  <img src={twitter} alt="Twitter" />
                </div>
                <div>
                  <img src={tiktok} alt="TikTok" />
                </div>
                <div>
                  <img src={youtube} alt="YouTube" />
                </div>
              </div>
            </div>
            <div className="second w-full lg:w-[15%]">
              <div>
                <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-800">
                  Our Services
                </h1>
              </div>
              <div className="flex flex-col gap-3 lg:gap-5 pt-3 lg:pt-5">
                <h3
                  onClick={() => handleClick("home")}
                  className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer"
                >
                  Home
                </h3>
                <h3
                  onClick={() => bidsClick()}
                  className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer"
                >
                  Bids
                </h3>
                <h3
                  onClick={() => investmentClick()}
                  className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer"
                >
                  Investments
                </h3>
                <h3
                  onClick={() => handleClick("about")}
                  className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer"
                >
                  About us
                </h3>
                <h3
                  onClick={() => handleClick("home")}
                  className="text-base lg:text-lg font-normal font-Work-sans cursor-pointer"
                >
                  Contact us
                </h3>
              </div>
            </div>
            <div className="third w-full lg:w-[35%]">
              <div>
                <h1 className="text-xl lg:text-2xl font-semibold font-inter text-gray-800">
                  Contact
                </h1>
              </div>
              <div className="flex flex-col gap-3 lg:gap-5 pt-3 lg:pt-5">
                <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                  +012-334-5864
                </h3>
                <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                  info.alva@example.com
                </h3>
                <h3 className="text-base lg:text-lg font-normal font-Work-sans">
                  2048 Wexford Way Wings SC 287290
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="companyName h-[100px] bg-[#4f4f4f] flex items-center justify-center">
        <h1 className="text-white font-medium text-sm font-Work-sans">
          © 2022 wheeldealhub. All Rights Reserved
        </h1>
      </div> */}
      <Banner/>
    </>
  );
}

export default BuyACarDetails;
