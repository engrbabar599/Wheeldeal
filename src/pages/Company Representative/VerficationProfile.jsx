import React from "react";
import IMAGES from "../../assets/IMAGES";
import { OutlineButton } from "../../components/OutlineButton";
import { Input } from "../../components/Input";
import { Layout } from "../../components/Layout/DashboardLayout";
import { useNavigate } from "react-router-dom";

function VerficationProfile() {

  const navigate = useNavigate()
  return (
    <>
    <Layout active={'Dashboard'}>
    <div className=" flex items-center justify-center">
    <div className=" w-full sm:w-[80%] border p-5 rounded-xl">
      <div className=" ">
        <div className=" flex items-center justify-center flex-col gap-6">
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
      <div className="pt-3">
        <form className="space-y-8">
          <div className="space-y-5">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-3">
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
                <Input label={"Designation"} placeholder={"Type business name"} />
              </div>
              <div className="w-full">
                <Input
                  label={"Designation"}
                  placeholder={"Type business address"}
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <div className="w-full">
                <Input label={"Highest education"} placeholder={"Type business name"} />
              </div>
              <div className="w-full">
                <Input
                  label={"Year of passing"}
                  placeholder={"Type business address"}
                />
              </div>
            </div>
          </div>

          <div className="w-full text-center flex items-center justify-center">
            <button
            onClick={()=>{navigate('/representative/upload-documents')}}
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

export default VerficationProfile;
