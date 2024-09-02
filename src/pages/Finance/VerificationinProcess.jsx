// import React from 'react'
// import tickImage from "../../assets/images/ticksign.png"
// import manInCarImage from "../../assets/images/manincar.png"
// import { Button } from '../../components/Button'
// function VerificationinProcess() {
//   return (
//     <>
//     <div className='w-full h-[100vh] flex items-center justify-center'>
//     <div className='verificationProcess rounded-xl border p-10 w-[60%] '>
//         <div className='flex items-center justify-center flex-col gap-5'>
//         <div>
//             <img src={tickImage} alt="" />
//         </div>
//         <div>
//             <h1 className='text-[36px] font-semibold font-inter text-gray-1'>Verification in progress.</h1>
//         </div>
//         <div className=' w-[90%]'>
//             <ul className=' list-decimal '>
//                 <li className='font-normal text-base font-plus-jakarta-sans text-gray-4'>
//                 Our team will review your submitted Finance license and business details.<br/>
//                 This process may take up to 48 hours.
//                 </li>
//                 <li className='font-normal text-base font-plus-jakarta-sans text-gray-4'>
//                 A WheelDealHub company representative will visit your business address to verify your Business.
//                 This step ensures the authenticity and reliability of our Finance network.
//                 </li>
//                 <li className='font-normal text-base font-plus-jakarta-sans text-gray-4'>
//                 Once verified, you will receive an approval notification via email, allowing you<br/>
//                 to access all Finance functionalities.
//                 </li>
//             </ul>
//         </div>
//         </div>
        
//         <div className='flex items-center gap-4 py-10'>
//             <div className='img'>
//                 <img src={manInCarImage} alt="" className='rounded-xl'/>
//             </div>
//             <div className='outer flex flex-col gap-3'>
//                 <div className='flex items-baseline'>
//                     <h1 className='text-2xl font-semibold font-inter text-gray-1'>John Santner</h1>
//                     <span className='text-sm font-medium font-Work-sans text-gray-4'>(Company executive)</span>
//                 </div>
//                 <div className='flex items-center gap-1'>
//                     <h1 className='text-lg font-medium font-Work-sans text-gray-4'>Contact:</h1>
//                     <span className='text-lg font-medium font-Work-sans text-custom-blue'>+1 667 554 7676</span>
//                 </div>
//             </div>
//         </div>
//         <div className='flex justify-between'>
//             <div className=''>
//                 <h1 className=' text-lg font-normal font-Work-sans text-gray-2'>
//                 Visiting time
//                 </h1>
//             </div>
//             <div>
//                 <h1 className='text-xl font-semibold font-plus-jakarta-sans text-gray-1'>
//                 10:00-11:00AM, 13 June 2024
//                 </h1>
//             </div>
//         </div>
//         <div className='py-5'>
//             <hr className=' text-gray-5  border-2 '/>
//         </div>
//         <div className='flex items-center justify-center py-3'>
//             <button className=' text-sm rounded-xl border text-gray-1 font-inter font-semibold w-[123px] h-[48px] px-[24px] py-[12px] border-gray-1 flex items-center justify-center'>Need help</button>
//         </div>
//     </div>
//     </div>
//     </>
//   )
// }

// export default VerificationinProcess


import React from 'react';
import tickImage from "../../assets/images/ticksign.png";
import manInCarImage from "../../assets/images/manincar.png";
import { Button } from '../../components/Button';
import { Navigate, useNavigate } from 'react-router-dom';
import { Layout } from '../../components/Layout/DashboardLayout';
function VerificationinProcess() {
 const navigate = useNavigate()
  return (
    <>
    <Layout active={'Dashboard'}>
      <div className='w-full flex items-center justify-center '>
        <div className='verificationProcess rounded-xl border p-6 sm:p-10 w-full max-w-4xl'>
          <div className='flex items-center justify-center flex-col gap-5'>
            <div>
              <img src={tickImage} alt="" className='max-w-full h-auto' />
            </div>
            <div>
              <h1 className='text-2xl sm:text-[36px] font-semibold font-inter text-gray-1 text-center'>
                Verification in progress.
              </h1>
            </div>
            <div className='w-full sm:w-[90%]'>
              <ul className='list-decimal pl-5 sm:pl-10'>
                <li className='font-normal text-sm sm:text-base font-plus-jakarta-sans text-gray-4'>
                  Our team will review your submitted Finance license and business details.<br />
                  This process may take up to 48 hours.
                </li>
                <li className='font-normal text-sm sm:text-base font-plus-jakarta-sans text-gray-4'>
                  A WheelDealHub company representative will visit your business address to verify your Business.
                  This step ensures the authenticity and reliability of our Finance network.
                </li>
                <li className='font-normal text-sm sm:text-base font-plus-jakarta-sans text-gray-4'>
                  Once verified, you will receive an approval notification via email, allowing you<br />
                  to access all Finance functionalities.
                </li>
              </ul>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row items-center gap-4 py-6 sm:py-10'>
            <div className='img'>
              <img src={manInCarImage} alt="" className='rounded-xl max-w-full h-auto' />
            </div>
            <div className='outer flex flex-col gap-3'>
              <div className='flex flex-col sm:flex-row items-center sm:items-baseline gap-1'>
                <h1 className='text-xl sm:text-2xl font-semibold font-inter text-gray-1'>John Santner</h1>
                <span className='text-sm font-medium font-Work-sans text-gray-4'>(Company executive)</span>
              </div>
              <div className='flex flex-col sm:flex-row items-center gap-1'>
                <h1 className='text-base sm:text-lg font-medium font-Work-sans text-gray-4'>Contact:</h1>
                <span className='text-base sm:text-lg font-medium font-Work-sans text-custom-blue'>+1 667 554 7676</span>
              </div>
            </div>
          </div>

          <div className='flex flex-col sm:flex-row justify-between items-center gap-2'>
            <div>
              <h1 className='text-base sm:text-lg font-normal font-Work-sans text-gray-2'>
                Visiting time
              </h1>
            </div>
            <div>
              <h1 className='text-lg sm:text-xl font-semibold font-plus-jakarta-sans text-gray-1 text-center sm:text-left'>
                10:00-11:00AM, 13 June 2024
              </h1>
            </div>
          </div>

          <div className='py-5'>
            <hr className='text-gray-5 border-2' />
          </div>

          <div className='flex items-center justify-center py-3'>
            <button onClick={()=>{navigate('/dashboard/finance')}} className='text-sm rounded-xl border text-gray-1 font-inter font-semibold w-[123px] h-[48px] px-[24px] py-[12px] border-gray-1 flex items-center justify-center'>
              Need help
            </button>
          </div>
        </div>
      </div>
      </Layout>
    </>
  );
}

export default VerificationinProcess;
