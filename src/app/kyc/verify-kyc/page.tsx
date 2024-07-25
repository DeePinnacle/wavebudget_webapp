"use client";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";

import { kycsteps } from "../../../config/data";
import { Button } from "../../../components/ui/button";
import Modal from "../_components/modal";
import {
  BlurChecked,
  CheckedColored,
  GreenLogoIcon,
  StrokeIcon,
  UploadImageIcon,
} from "../../../components/icons/icons";
import Link from "next/link";

const VerifyKYC = () => {
  const [proceed, setProceed] = useState(false);
  const [count, setCount] = useState<number>(1);
  const [employmentChecked, setEmploymentChecked] = useState<string>();
  const [firmChecked, setFirmChecked] = useState<string>();
  const [ overlayModal, setOverlayModal ] = useState(false)

  const handleStart = () => {
    setProceed(true);
  };

  const handleProceed = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    setCount(count + 1);
  };

  const handleDone = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setOverlayModal(true)
  }

  const handleFirm = (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => {
    const { value } = e.currentTarget;
    setFirmChecked(value);
  };
  const handleEmploymentStatus = (
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const { value } = e.currentTarget;
    setEmploymentChecked(value);
  };

  return (
    <>
      {proceed === false ? (
        <div className="w-full min-h-screen bg-white p-2">
          <div className="my-4">
            <div className="relative h-52 w-52 mx-auto mt-12">
              <Image
                src={"/finger-print.png"}
                alt="finger-print-verification"
                fill
                priority
                className="object-cover"
              />
            </div>
            <h1 className="text-center text-3xl font-bold font-montserrat">
              Let’s verify your KYC
            </h1>
            <p className="text-center text-[#858585] my-3">
              Shop with confidence! Complete your KYC verification for a secure
              and seamless shopping experience.
            </p>
          </div>
          <div className="mt-14">
            {kycsteps.map((steps, index) => (
              <div key={ index } className="w-full min-h-5 my-3 flex flex-row gap-3">
                {<steps.icon className={"w-10 h-10 font-bold"} />}
                <div>
                  <h2 className="mt-2 font-bold text-lg">{steps.title}</h2>
                  <p className="text-[#858585] my-1">{steps.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2 mt-5 mb-16">
            <Button
              className="text-[#0B7E78] font-bold hover:bg-transparent hover:text-[#0B7E78]"
              variant={"ghost"}
              size={"lg"}
            >
              Skip for now &rarr;
            </Button>
            <Button
              className="bg-[#0B7E78] hover:bg-[#0B7E78]"
              size={"lg"}
              onClick={handleStart}
            >
              Proceed to KYC
            </Button>
          </div>
        </div>
      ) : (
        <div className="bg-slate-200 min-h-screen">
          <h1 className="text-center text-xl font-bold py-5">
            KYC Verification
          </h1>
          <div className="my-3 flex flex-row justify-around">
            <span className="flex flex-col items-center">
              {count >= 1 && <CheckedColored />}
              <p
                className={`${
                  count >= 1 ? "text-[#0B7E78]" : "text-[#858585]"
                } mt-2`}
              >
                Profile
              </p>
            </span>
            <span className="flex flex-col items-center">
              {count >= 2 ? <CheckedColored /> : <BlurChecked />}
              <p
                className={`${
                  count >= 2 ? "text-[#0B7E78]" : "text-[#858585]"
                } mt-2`}
              >
                Employment
              </p>
            </span>
            <span className="flex flex-col items-center">
              {count === 3 ? <CheckedColored /> : <BlurChecked />}
              <p
                className={`${
                  count === 3 ? "text-[#0B7E78]" : "text-[#858585]"
                } mt-2`}
              >
                Upload
              </p>
            </span>
          </div>
          <Modal>
            <div className="px-3 py-5">
              <form>
                {count === 1 ? (
                  <>
                    {/* about me */}
                    <div className="relative w-full min-h-6 px-2 py-3 border border-solid border-[#DBE1E1] rounded-md">
                      <p className="absolute -top-3 font-bold">About me</p>
                      <br />
                      <label
                        htmlFor="firstname"
                        className="text-[#858585] text-lg font-bold pt-4"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        className="w-full text-lg my-2 outline-none border border-solid border-[#DBE1E1] px-2 py-4 rounded-md"
                        placeholder="First Name"
                      />

                      <label
                        htmlFor="middlename"
                        className="text-[#858585] text-lg font-bold pt-4"
                      >
                        Middle Name
                      </label>
                      <input
                        type="text"
                        name="middlename"
                        className="w-full text-lg my-2 outline-none border border-solid border-[#DBE1E1] px-2 py-4 rounded-md"
                        placeholder="Middle Name"
                      />

                      <label
                        htmlFor="lastname"
                        className="text-[#858585] text-lg font-bold pt-4"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        className="w-full text-lg my-2 outline-none border border-solid border-[#DBE1E1] px-2 py-4 rounded-md"
                        placeholder="Last Name"
                      />

                      <label
                        htmlFor="phonenumber"
                        className="text-[#858585] text-lg font-bold pt-4"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phone Number"
                        className="w-full text-lg my-2 outline-none border border-solid border-[#DBE1E1] px-2 py-4 rounded-md"
                        placeholder="Phone number"
                      />

                      <label
                        htmlFor="dateofbirth"
                        className="text-[#858585] text-lg font-bold pt-4"
                      >
                        Date of Birth
                      </label>
                      <input
                        type="text"
                        name="dateofbirth"
                        className="w-full text-lg my-2 outline-none border border-solid border-[#DBE1E1] px-2 py-4 rounded-md"
                        placeholder="DD/MM/YY"
                      />
                    </div>

                    {/* address */}
                    <div className="relative w-full min-h-6 px-2 py-3 my-10 border border-solid border-[#DBE1E1] rounded-md">
                      <p className="absolute -top-3 font-bold">Address</p>
                      <br />
                      <label
                        htmlFor="country"
                        className="text-[#858585] text-lg font-bold pt-4"
                      >
                        Country
                      </label>
                      <input
                        type="text"
                        name="country"
                        className="w-full text-lg my-2 outline-none border border-solid border-[#DBE1E1] px-2 py-4 rounded-md"
                        placeholder="Country"
                      />

                      <label
                        htmlFor="state"
                        className="text-[#858585] text-lg font-bold pt-4"
                      >
                        State
                      </label>
                      <input
                        type="text"
                        name="state"
                        className="w-full text-lg my-2 outline-none border border-solid border-[#DBE1E1] px-2 py-4 rounded-md"
                        placeholder="State"
                      />

                      <label
                        htmlFor="city"
                        className="text-[#858585] text-lg font-bold pt-4"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        className="w-full text-lg my-2 outline-none border border-solid border-[#DBE1E1] px-2 py-4 rounded-md"
                        placeholder="City"
                      />

                      <label
                        htmlFor="phonenumber"
                        className="text-[#858585] text-lg font-bold pt-4"
                      >
                        Google Location
                      </label>
                      <input
                        type="text"
                        name="google-location"
                        className="w-full text-lg my-2 outline-none border border-solid border-[#DBE1E1] px-2 py-4 rounded-md"
                        placeholder="No. 64 Aporoko close, Abuja"
                        disabled
                      />
                    </div>

                    {/*next of kin  */}
                    <div className="relative w-full min-h-6 px-2 py-3 my-10 border border-solid border-[#DBE1E1] rounded-md">
                      <p className="absolute -top-3 font-bold">Next of Kin</p>
                      <br />
                      <label
                        htmlFor="kinName"
                        className="text-[#858585] text-lg font-bold pt-4"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        name="kin-name"
                        className="w-full text-lg my-2 outline-none border border-solid border-[#DBE1E1] px-2 py-4 rounded-md"
                        placeholder="First and Last Name"
                      />

                      <label
                        htmlFor="relationship"
                        className="text-[#858585] text-lg font-bold pt-4"
                      >
                        Relationship
                      </label>
                      <input
                        type="text"
                        name="relationship"
                        className="w-full text-lg my-2 outline-none border border-solid border-[#DBE1E1] px-2 py-4 rounded-md"
                        placeholder="Relationship"
                      />

                      <label
                        htmlFor="kin-number"
                        className="text-[#858585] text-lg font-bold pt-4"
                      >
                        Number
                      </label>
                      <input
                        type="text"
                        name="kin-num"
                        className="w-full text-lg my-2 outline-none border border-solid border-[#DBE1E1] px-2 py-4 rounded-md"
                        placeholder="Number"
                      />
                    </div>
                  </>
                ) : count === 2 ? (
                  <>
                    {/* employment section */}
                    <div className="relative w-full min-h-6 px-2 py-3 border border-solid border-[#DBE1E1] rounded-md flex flex-col">
                      <p className="absolute -top-3 font-bold">Work</p>
                      <br />
                      <div className="mt-4">
                        <p className="text-[#858585] text-xl font-bold">
                          Employment Status
                        </p>
                        <span className="flex flex-row items-center mt-4">
                          <input
                            type="radio"
                            value="employed"
                            className="mr-3 accent-black h-5 w-5"
                            name="employment"
                            onClick={(e) => {
                              handleEmploymentStatus(e);
                            }}
                          />
                          <label
                            htmlFor="employed"
                            className="text-[#858585] font-bold"
                          >
                            Employed
                          </label>
                        </span>
                        <span className="flex flex-row items-center my-3">
                          <input
                            type="radio"
                            value="unemployed"
                            className="mr-3 accent-black h-5 w-5"
                            name="employment"
                            onClick={(e) => {
                              handleEmploymentStatus(e);
                            }}
                          />
                          <label
                            htmlFor="unemployed"
                            className="text-[#858585] font-bold"
                          >
                            Unemployed
                          </label>
                        </span>
                        <span className="flex flex-row items-center">
                          <input
                            type="radio"
                            value="self-employed"
                            className="mr-3 accent-black h-5 w-5"
                            name="employment"
                            onClick={(e) => {
                              handleEmploymentStatus(e);
                            }}
                          />
                          <label
                            htmlFor="selfemployed"
                            className="text-[#858585] font-bold"
                          >
                            Self Employed
                          </label>
                        </span>
                      </div>
                      {employmentChecked === "unemployed" ||
                      employmentChecked === "self-employed" ? null : (
                        <div className="mt-4">
                          <p className="text-[#858585] text-xl font-bold">
                            Firm Type
                          </p>
                          <span className="flex flex-row items-center mt-4">
                            <input
                              type="radio"
                              value="private-firm"
                              className="mr-3 accent-black h-5 w-5"
                              name="firm"
                              onClick={(e) => {
                                handleFirm(e);
                              }}
                            />
                            <label
                              htmlFor="private"
                              className="text-[#858585] font-bold"
                            >
                              Private Firm
                            </label>
                          </span>
                          <span className="flex flex-row items-center my-3">
                            <input
                              type="radio"
                              value="civil-servant"
                              className="mr-3 accent-black h-5 w-5"
                              name="firm"
                              onClick={(e) => {
                                handleFirm(e);
                              }}
                            />
                            <label
                              htmlFor="civil"
                              className="text-[#858585] font-bold"
                            >
                              Civil Servant
                            </label>
                          </span>
                        </div>
                      )}
                      {employmentChecked === "employed" &&
                      firmChecked === "private-firm" ? (
                        <div className="flex flex-col gap-y-2 my-3">
                          <label
                            htmlFor="work-place"
                            className="text-[#858585] font-bold"
                          >
                            Work Place
                          </label>
                          <input
                            type="text"
                            name="workplace"
                            placeholder="Work place"
                            className="w-full border border-solid border-[#DBE1E1] px-3 py-4 outline-none rounded-md"
                          />

                          <label
                            htmlFor="work-address"
                            className="text-[#858585] font-bold"
                          >
                            Work Address
                          </label>
                          <input
                            type="text"
                            name="workaddress"
                            placeholder="Work Address"
                            className="w-full border border-solid border-[#DBE1E1] px-3 py-4 outline-none rounded-md"
                          />

                          <label
                            htmlFor="job-role"
                            className="text-[#858585] font-bold"
                          >
                            Job Role
                          </label>
                          <input
                            type="text"
                            name="jobrole"
                            placeholder="Job Role"
                            className="w-full border border-solid border-[#DBE1E1] px-3 py-4 outline-none rounded-md"
                          />

                          <label
                            htmlFor="salary"
                            className="text-[#858585] font-bold"
                          >
                            Salary
                          </label>
                          <input
                            type="text"
                            name="salary"
                            placeholder="Salary"
                            className="w-full border border-solid border-[#DBE1E1] px-3 py-4 outline-none rounded-md"
                          />
                        </div>
                      ) : employmentChecked === "employed" &&
                        firmChecked === "civil-servant" ? (
                        <div className="flex flex-col gap-y-2 my-3">
                          <label
                            htmlFor="job-level"
                            className="text-[#858585] font-bold"
                          >
                            Job Level
                          </label>
                          <select
                            name="job-level"
                            id=""
                            className="w-full border border-solid border-[#DBE1E1] px-3 py-4 outline-none rounded-md"
                          >
                            <option value={""}>Select job level</option>
                          </select>

                          <label
                            htmlFor="work-place"
                            className="text-[#858585] font-bold"
                          >
                            Work Place
                          </label>
                          <input
                            type="text"
                            name="workplace"
                            placeholder="Work place"
                            className="w-full border border-solid border-[#DBE1E1] px-3 py-4 outline-none rounded-md"
                          />

                          <label
                            htmlFor="work-address"
                            className="text-[#858585] font-bold"
                          >
                            Work Address
                          </label>
                          <input
                            type="text"
                            name="workaddress"
                            placeholder="Work Address"
                            className="w-full border border-solid border-[#DBE1E1] px-3 py-4 outline-none rounded-md"
                          />

                          <label
                            htmlFor="job-role"
                            className="text-[#858585] font-bold"
                          >
                            Job Role
                          </label>
                          <input
                            type="text"
                            name="jobrole"
                            placeholder="Job Role"
                            className="w-full border border-solid border-[#DBE1E1] px-3 py-4 outline-none rounded-md"
                          />

                          <label
                            htmlFor="salary"
                            className="text-[#858585] font-bold"
                          >
                            Salary
                          </label>
                          <input
                            type="text"
                            name="salary"
                            placeholder="Salary"
                            className="w-full border border-solid border-[#DBE1E1] px-3 py-4 outline-none rounded-md"
                          />
                        </div>
                      ) : employmentChecked === "self-employed" ? (
                        <div className="flex flex-col gap-y-2 my-3">
                          <label
                            htmlFor="businessname"
                            className="text-[#858585] font-bold"
                          >
                            Business Name
                          </label>
                          <input
                            type="text"
                            name="businessname"
                            placeholder="Business Name"
                            className="w-full border border-solid border-[#DBE1E1] px-3 py-4 outline-none rounded-md"
                          />

                          <label
                            htmlFor="businesslocation "
                            className="text-[#858585] font-bold"
                          >
                            Business Location
                          </label>
                          <input
                            type="text"
                            name="businesslocation"
                            placeholder="Business Location"
                            className="w-full border border-solid border-[#DBE1E1] px-3 py-4 outline-none rounded-md"
                          />

                          <label
                            htmlFor="max-income"
                            className="text-[#858585] font-bold"
                          >
                            Maximum Income Per Month
                          </label>
                          <input
                            type="text"
                            name="maxiincome"
                            placeholder="Maximum Income"
                            className="w-full border border-solid border-[#DBE1E1] px-3 py-4 outline-none rounded-md"
                          />

                          <label
                            htmlFor="salary"
                            className="text-[#858585] font-bold"
                          >
                            Minimum Income Per Month
                          </label>
                          <input
                            type="text"
                            name="minincome"
                            placeholder="Minimum Income"
                            className="w-full border border-solid border-[#DBE1E1] px-3 py-4 outline-none rounded-md"
                          />
                        </div>
                      ) : null}
                    </div>
                  </>
                ) : count === 3 ? (
                  <>
                    <div className="relative w-full min-h-6 px-6 py-8 my-10 border border-solid border-[#DBE1E1] rounded-md">
                      <p className="absolute -top-3 font-bold">Utility bill</p>
                      <div className="bg-[#DBE1E1] border-4 border-dashed border-slate-200 p-8 flex flex-col items-center justify-center rounded-xl">
                        <UploadImageIcon className={"w-8 h-8"} />
                        <p className="text-[#858585] text-center my-4">
                          Tap to upload Valid utility bill, it should not exceed
                          3 month old (water bill or light bill)
                        </p>
                      </div>
                    </div>
                    <div className="relative w-full min-h-6 px-6 py-8 my-10 border border-solid border-[#DBE1E1] rounded-md">
                      <p className="absolute -top-3 font-bold">
                        Valid ID number
                      </p>
                      <div className="flex flex-col gap-y-2 my-3">
                        <label
                          htmlFor="businessname"
                          className="text-[#858585] font-bold"
                        >
                          NIN
                        </label>
                        <input
                          type="text"
                          name="nin"
                          placeholder="Input NIN"
                          className="w-full border border-solid border-[#DBE1E1] px-3 py-4 outline-none rounded-md"
                        />

                        <label
                          htmlFor="bvn"
                          className="text-[#858585] font-bold"
                        >
                          BVN
                        </label>
                        <input
                          type="text"
                          name="bvn"
                          placeholder="Input BVN"
                          className="w-full border border-solid border-[#DBE1E1] px-3 py-4 outline-none rounded-md placeholder:text-base"
                        />
                      </div>
                    </div>
                  </>
                ) : null}
                {
                  count === 3 ? (

                <Button
                  className="w-full mb-4 bg-[#0B7E78] hover:bg-[#0B7E78] px-2 py-3 font-xl my-7"
                  size={"lg"}
                  onClick={ (e)=>{
                    handleDone(e)
                  } }
                >
                  Done
                </Button>
                  ) : (
                    <Button
                    className="w-full mb-4 bg-[#0B7E78] hover:bg-[#0B7E78] px-2 py-3 font-xl my-7"
                    size={"lg"}
                    onClick={(e) => {
                      handleProceed(e);
                    }}
                  >
                    Proceed
                  </Button>
                  )
                }
              </form>
            {/* overlay modal */}
            {
              overlayModal === true ? (
              <div className="absolute -top-52 inset-0 w-full min-h-screen bg-black/20 box-border">
                  <div className="absolute bottom-12 bg-white min-h-9 box-border px-2 py-8 rounded-3xl">
                    <GreenLogoIcon className={"mx-auto"} />
                    <h2 className="font-bold text-xl text-center mt-6">Job Weldon</h2>
                    <p className="text-center text-[#858585] my-3">Usually it takes 2 -5 working days to confirm your KYC, we will keep in touch once if KYC was valid or not</p>
                    <Button className="w-full bg-[#0B7E78] hover:bg-[#0B7E78]" size={"lg"} asChild>
                      <Link href={"/home"}>Back to home</Link>
                    </Button>
                  </div>
              </div>
              ) : null
            }
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};

export default VerifyKYC;
