import React, { useEffect } from "react";
import IMAGES from "../../assets/IMAGES";
import { OutlineButton } from "../../components/OutlineButton";
import { Input } from "../../components/Input";
import { Navigate, useNavigate } from "react-router-dom";
import { Layout } from "../../components/Layout/DashboardLayout";
import { useNavigateContext } from "../../Context/NavigateContext";
function Setting() {
  const navigate = useNavigate()
  
  const handleSubmit=(e)=>{
    e.preventDefault()
  }
  const { setIsRedirect} = useNavigateContext()
  
  const handleClick=()=>{
    navigate('/finance/verification-process')
    setIsRedirect(true)
  }
   
  return (
    <>
    <Layout active={'Dashboard'}>
    <div className="w-full flex items-center justify-center">
    <div className="w-full max-w-[874px] min-h-[698px] border p-9 rounded-xl">
      <div className=" ">
        <div className=" flex items-center justify-center flex-col gap-8">
          <h1 className="text-2xl font-semibold font-inter text-gray-1">
          Verify your profile
          </h1>
          <img
            src={IMAGES.profilePic}
            alt="Profile"
            className="w-24 h-24 rounded-full"
          />
          
          <div>
            <OutlineButton
              className={"px-4 text-sm font-normal font-poppins w-[200px] h-[48px]"}
              title={"Upoad image"}
            />
          </div>
        </div>
      </div>
      <div className="mt-6">
        <form onSubmit={handleSubmit} className="">
          <div className="space-y-5">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 ">
              <div className="w-full">
                <Input label={"Full name"} placeholder={"Full name"} />
              </div>
              <div className="w-full">
                <Input label={"Last name"} placeholder={"Last name"} />
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full">
                <Input
                  type={"number"}
                  label={"Phone Number"}
                  placeholder={"+1"}
                />
              </div>
              <div className="w-full">
                <Input label={"Email ID"} placeholder={"Email id"} />
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full">
                <Input label={"Business name"} placeholder={"Type business name"} />
              </div>
              <div className="w-full">
                <Input
                  label={"Business address"}
                  placeholder={"Type business address"}
                />
              </div>
            </div>
          </div>

          <div className="w-full text-center flex items-center justify-center mt-8">
            <button
            onClick={handleClick}
              className={
                "w-[190px] text-sm rounded-xl px-2 py-3 font-inter font-semibold self-center items-center bg-custom-blue text-white"
              }
              title={""}
            >
              Send verification request
            </button>
          </div>
        </form>
      </div>
      </div>
      </div>
      </Layout>
    </>
  );
}

export default Setting;
