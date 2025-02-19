import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import audiimg from "../../assets/images/audi14.png"
import man1img from "../../assets/images/insuranceMan1.png"
import man2img from "../../assets/images/insuranceMan2.png"
import man3img from "../../assets/images/insuranceMan3.png"
import maninsuit from "../../assets/images/mansuit.png"
import greentick from "../../assets/images/greentick3.png"
import VerifiedSuccessful from './VerifiedSuccessful'
import { useState } from 'react'
import { Layout } from '../../components/Layout/DashboardLayout'
import { useEffect } from "react";
import carimage1 from '../../assets/images/carimage1.png'
import carimage2 from '../../assets/images/carimage2.png'
import carimage3 from '../../assets/images/carimage3.png'
import carimage4 from '../../assets/images/carimage4.png'
import carimage5 from '../../assets/images/carimage5.png'
import Svgs from '../../assets/svgs/index.js'


function DealerDetailsPage() {
    const navigate = useNavigate()

    const [showPopup, setShowPopup] = useState(false);

    const handleShowPopup = () => {
      setShowPopup(true);
    };
  
    const handleClosePopup = () => {
      setShowPopup(false);
    };


    const images = [
      audiimg, // Replace with actual image URLs
      carimage1,
      carimage2,
      carimage3,
      carimage4,
      carimage5,
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [startIndex, setStartIndex] = useState(0);
    const [visibleImagesCount, setVisibleImagesCount] = useState(4);
  
    useEffect(() => {
      const updateVisibleImagesCount = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth < 640) {
          setVisibleImagesCount(1); // 1 image for small screens
        } else if (screenWidth < 1024) {
          setVisibleImagesCount(2); // 2 images for medium screens
        } else {
          setVisibleImagesCount(4); // 4 images for large screens
        }
      };
  
      updateVisibleImagesCount(); // Run on initial load
      window.addEventListener("resize", updateVisibleImagesCount); // Run on window resize
  
      return () => window.removeEventListener("resize", updateVisibleImagesCount);
    }, []);
  
    // Handle clicking on a thumbnail image
    const handleThumbnailClick = (index) => {
      setCurrentImageIndex(index);
    };
  
    // Handle left arrow click to shift visible images
    const handleLeftArrowClick = () => {
      if (startIndex > 0) {
        setStartIndex(startIndex - 1);
      }
    };
  
    // Handle right arrow click to shift visible images
    const handleRightArrowClick = () => {
      if (startIndex + visibleImagesCount < images.length) {
        setStartIndex(startIndex + 1);
      }
    };
  return (
    <>
    <Layout active={'Dashboard'}>
     <div className="">
        <h1 className="text-xl md:text-2xl font-semibold font-inter text-gray-1">Dashboard</h1>
      </div>
      <div className='flex items-center flex-row gap-2 my-5'>
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M6.9654 14C6.9049 13.9958 6.8895 13.9964 6.82959 13.986C6.69489 13.9628 6.56533 13.9117 6.45103 13.8367C6.39322 13.7988 6.34277 13.7547 6.29237 13.7077L0.292113 7.70743C0.250711 7.66308 0.23916 7.65298 0.202409 7.60453C0.161157 7.55012 0.125505 7.49147 0.0961541 7.42977C-0.0320514 7.16021 -0.0320514 6.84034 0.0961541 6.57078C0.125505 6.50908 0.161157 6.45043 0.202409 6.39602C0.23916 6.34762 0.250711 6.33747 0.292113 6.29317L6.29237 0.292913C6.33672 0.251511 6.34687 0.23991 6.39527 0.203209C6.52238 0.106755 6.67239 0.0416518 6.82959 0.0145006C6.94185 -0.00480021 7.0572 -0.00480021 7.16946 0.0145006C7.25921 0.0300013 7.34677 0.0578025 7.42902 0.0969042C7.74143 0.245461 7.95894 0.553624 7.99434 0.897738C8.00829 1.03374 7.99404 1.17225 7.95269 1.30256C7.91824 1.41111 7.86519 1.51356 7.79638 1.60427C7.75963 1.65272 7.74808 1.66282 7.70668 1.70717L2.41355 7.0003L7.70668 12.2934L7.75328 12.3433C7.79153 12.3903 7.80243 12.4013 7.83574 12.4521C7.89819 12.5473 7.94419 12.6531 7.97114 12.7637C7.99269 12.8523 8.00209 12.9437 7.99899 13.0347C7.98719 13.3804 7.79118 13.7027 7.48967 13.8722C7.39042 13.928 7.28166 13.9667 7.16946 13.986C7.10955 13.9964 7.09415 13.9958 7.03365 14C7.0109 14 6.98815 14 6.9654 14Z" fill="black" />
        </svg>
        <div className='flex flex-row font-poppins font-normal text-base'>
          <p onClick={() => navigate(-1)} className='hover:cursor-pointer hover:text-black text-xs md:text-lg font-medium font-poppins text-gray-1'>Car handover/</p>
          <p className=' font-semibold text-custom-blue text-xs md:text-lg  font-poppins'>Mercedes-Benz E 220 D</p>
        </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-12  gap-6 my-10'>
        <div className='leftpart col-span-6'>
        <div className="img">
              <img
                src={images[currentImageIndex]}
                className="w-fit 2xl:h-[372px] rounded-2xl"
                alt=""
              />
            </div>
            <div className="images flex items-center justify-center gap-x-1 2xl:gap-x-7 py-5">
              <span
                onClick={handleLeftArrowClick}
                className=" cursor-pointer border border-gray-1 h-[34px] w-[28px] flex items-center justify-center rounded-lg"
              >
                <Svgs.ArrowLeft />
              </span>
              {images
                .slice(startIndex, startIndex + visibleImagesCount)
                .map((image, index) => (
                  <img
                    key={index + startIndex} // Unique key per image
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    onClick={() => handleThumbnailClick(index + startIndex)}
                    className={`w-[110px] h-[110px] rounded-lg cursor-pointer transition-opacity ${
                      index + startIndex === currentImageIndex
                        ? "opacity-100 border-2 border-blue-500"
                        : "opacity-50 hover:opacity-100"
                    }`}
                  />
                ))}
              <span
                onClick={handleRightArrowClick}
                className=" cursor-pointer border border-gray-1 h-[34px] w-[28px] flex items-center justify-center rounded-lg"
              >
                <Svgs.ArrowRight />
              </span>
            </div>
            <div className='carReview border rounded-xl p-5 h-fit'>
              <div>
                <h1 className='text-xl md:text-2xl font-semibold font-inter text-gray-1'>Car overview</h1>
              </div>
              <div className='flex flex-col md:flex-row justify-between pt-5 gap-5 md:gap-5'>
                <div className='flex flex-col gap-5  md:w-[50%]'>
                  <div className='flex items-center justify-between gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Registration year</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>Jun</h1>
                  </div>
                  <div className='flex items-center justify-between gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Fuel type</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>Diesel</h1>
                  </div>
                  <div className='flex items-center justify-between gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Kms Driven</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>82000 Kms</h1>
                  </div>
                  <div className='flex items-center justify-between gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Ownership</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>First Owner</h1>
                  </div>
                  <div className='flex items-center justify-between gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Transmission</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>Manual</h1>
                  </div>
                </div>
                <div className='flex flex-col gap-5  md:w-[50%]'>
                  <div className='flex items-center justify-between gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Insurance</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>Comprehensive</h1>
                  </div>
                  <div className='flex items-center justify-between gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Seats</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>5 Seats</h1>
                  </div>
                  <div className='flex items-center justify-between gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>RTO</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>Surrey</h1>
                  </div>
                  <div className='flex items-center justify-between gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Engine displacement</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>1248 CC</h1>
                  </div>
                  <div className='flex items-center justify-between gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Year of manufacture</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>2018</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className='specification border rounded-xl p-5 h-fit my-8'>
              <div>
                <h1 className='text-xl md:text-2xl font-semibold font-inter text-gray-1'>Specification</h1>
              </div>
              <div className='flex flex-col md:flex-row  justify-between pt-5 gap-5 md:gap-5'>
                <div className='flex flex-col gap-5 w-full lg:w-[50%]'>
                  <div className='flex items-center justify-between gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Engine</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>1248 CC</h1>
                  </div>
                  <div className='flex items-center justify-between gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Fuel type</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>Diesel</h1>
                  </div>
                  <div className='flex items-center justify-between gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Transmission</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>Manual</h1>
                  </div>
                  
                </div>
                <div className='flex flex-col gap-5 w-full lg:w-[50%]'>
                  <div className='flex items-center justify-between gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Mileage</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>28 Kmpl</h1>
                  </div>
                  <div className='flex items-center justify-between gap-5'>
                    <h1 className='text-base md:text-lg font-normal font-Work-sans text-gray-4'>Power</h1>
                    <h1 className='text-base md:text-lg font-medium font-Work-sans text-gray-1'>88.5 BHP</h1>
                  </div>
                 
                </div>
              </div>
            </div>
            <div className='completehandover border rounded-xl p-5 bg-[#f0f4fe]'>
              <div className='w-full md:w-[50%] flex items-center flex-col justify-center mx-auto gap-5'>
                <div>
                  <h1 className='text-xl md:text-2xl font-semibold font-inter text-gray-1'>Complete handover</h1>
                </div>
                <div className='text-center'>
                  <h1 className='text-base font-medium font-inter text-gray-2'>
                    Are you sure all the documents are information is correct?
                  </h1>
                </div>
                <div>
                  <button onClick={handleShowPopup} className='w-[136px] h-[48px] px-4 py-2 rounded-xl bg-custom-blue text-white text-sm font-semibold font-inter'>Complete now</button>
                  {showPopup && <VerifiedSuccessful show={showPopup} onClose={handleClosePopup} />}
                </div>
              </div>
            </div>
        </div>
        <div className='rightpart border rounded-xl p-5 py-10 col-span-6 lg:col-span-6'>
            <div>
              <h1 className='text-2xl md:text-[32px] font-bold font-inter text-gray-1'>Handover details</h1>
            </div>
            <div className='rounded-xl bg-[#eeeeee] p-5 my-5'>
              <div className='flex flex-col gap-4'>
                <div>
                  <h1 className='text-lg font-medium font-Work-sans text-gray-4'>Appointment time</h1>
                </div>
                <div>
                  <h1 className='text-xl md:text-2xl font-semibold font-inter text-gray-1'>14-07-2024, 11:00 AM</h1>
                </div>
                <div className='flex'>
                  <h1 className='text-lg font-medium font-Work-sans text-gray-4'>Address:</h1>
                  <span className='text-lg font-medium font-Work-sans text-custom-blue'>7711 128 St, Surrey, BC V3W 4E6, Canada</span>
                </div>
              </div>
            </div>
            <div>
              <div className='py-3 border-b border-dashed flex items-center gap-5'>
                <div>
                  <img src={man3img} alt="" />
                </div>
                <div className='flex flex-col gap-3'>
                  <h1 className='text-xl md:text-2xl font-semibold font-inter text-gray-1'>LB Insurance point</h1>
                  <p className='text-lg font-medium font-Work-sans text-gray-4'>Insurance agent</p>
                </div>
              </div>
            </div>
            <div className='pt-4'>
              <div className='py-3 border-b border-dashed flex items-center gap-5'>
                <div>
                  <img src={man2img} alt="" />
                </div>
                <div className='flex flex-col gap-3'>
                  <h1 className='text-xl md:text-2xl font-semibold font-inter text-gray-1'>LB Insurance point</h1>
                  <p className='text-lg font-medium font-Work-sans text-gray-4'>Insurance agent</p>
                  <p className='text-lg font-medium font-Work-sans text-custom-blue'>+1 699 656 5554</p>
                </div>
              </div>
            </div>
            <div className='pt-4'>
              <div className='py-3 border-b border-dashed flex items-center gap-5'>
                <div>
                  <img src={maninsuit} alt="" />
                </div>
                <div className='flex flex-col gap-3'>
                  <h1 className='text-xl md:text-2xl font-semibold font-inter text-gray-1'>LB Insurance point</h1>
                  <p className='text-lg font-medium font-Work-sans text-gray-4'>Insurance agent</p>
                </div>
              </div>
            </div>
            <div className='pt-4'>
              <div className='py-3 flex items-center gap-5'>
                <div>
                  <img src={man1img} alt="" />
                </div>
                <div className='flex flex-col gap-3'>
                  <h1 className='text-xl md:text-2xl font-semibold font-inter text-gray-1'>LB Insurance point</h1>
                  <p className='text-lg font-medium font-Work-sans text-gray-4'>Insurance agent</p>
                </div>
              </div>
            </div>

            <div className='verification py-10'>
                <div>
                    <h1 className='text-2xl md:text-[32px] font-bold font-inter text-gray-1'>
                        Verification
                    </h1>
                </div>
                <div className='pt-4'>
              <div className='py-3 border-b border-dashed flex items-center gap-5'>
                <div>
                  <img src={man2img} alt="" />
                </div>
                <div className='flex flex-col gap-3'>
                  <h1 className='text-xl md:text-2xl font-semibold font-inter text-gray-1'>LB Insurance point</h1>
                  <p className='text-lg font-medium font-Work-sans text-gray-4'>Insurance agent</p>
                  <p className='text-lg font-medium font-Work-sans text-custom-blue'>+1 699 656 5554</p>
                </div>
              </div>
            </div>
                <div className='pt-4'>
              <div className='py-3 border-b border-dashed flex items-center gap-5'>
                <div>
                  <img src={man2img} alt="" />
                </div>
                <div className='flex flex-col gap-3'>
                  <h1 className='text-xl md:text-2xl font-semibold font-inter text-gray-1'>LB Insurance point</h1>
                  <p className='text-lg font-medium font-Work-sans text-gray-4'>Insurance agent</p>
                  <p className='text-lg font-medium font-Work-sans text-custom-blue'>+1 699 656 5554</p>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-3 py-4'>
                <div className='flex items-center gap-2'>
                    <Svgs.GreenTickVerified/>
                    <h1 className=' text-[10px] lg:text-lg font-medium font-Work-sans text-[#38A242]'>Verified by Mechanic</h1>
                </div>
                <div className='flex items-center gap-2'>
                <Svgs.GreenTickVerified/>
                    <h1 className=' text-[10px] lg:text-lg font-medium font-Work-sans text-[#38A242]'>Verified by Dealer</h1>
                </div>
            </div>
            <div className=' flex items-center justify-center pt-5'>
                <button className=' py-[15.5px] bg-white border border-custom-blue rounded-xl text-lg font-medium font-Work-sans text-custom-blue h-[52px] w-[189px] flex items-center justify-center'>View Certificate</button>
            </div>
            </div>
          </div>
      </div>
      </Layout>
    </>
  )
}

export default DealerDetailsPage