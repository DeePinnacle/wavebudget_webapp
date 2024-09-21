"use client";
import Image from "next/image";
import React, { use, useEffect, useState } from "react";

import { kycsteps } from "../../../../config/data";
import { Button } from "../../../../components/ui/button";
import Modal from "../../_components/modal";
import {
  BlurChecked,
  CheckedColored,
  GreenLogoIcon,
  StrokeIcon,
  UploadImageIcon,
} from "../../../../components/icons/icons";
import Link from "next/link";

const VerifyKYC = () => {
  const [proceed, setProceed] = useState(false);
  const [count, setCount] = useState<number>(1);
  const [employmentChecked, setEmploymentChecked] = useState<string>();
  const [firmChecked, setFirmChecked] = useState<string>();
  const [overlayModal, setOverlayModal] = useState(false);

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
    e.preventDefault();
    setOverlayModal(true);
  };

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
              <div
                key={index}
                className="w-full min-h-5 my-3 flex flex-row gap-3"
              >
                {<steps.icon className={"w-10 h-10 font-bold"} />}
                <div>
                  <h2 className="mt-2 font-bold text-lg">{steps.title}</h2>
                  <p className="text-[#858585] my-1">{steps.content}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 gap-2 mt-5 mb-16">
            {/* <Button
              className="text-[#0B7E78] font-bold hover:bg-transparent hover:text-[#0B7E78]"
              variant={"ghost"}
              size={"lg"}
            >
              Skip for now &rarr;
            </Button> */}
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
                Business
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
          <Modal className="relative min-h-2 w-full bg-white rounded-tr-3xl rounded-tl-3xl">
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
                    </div>
                  </>
                ) : count === 2 ? (
                  <>
                    {/* employment section */}
                    <div className="relative w-full min-h-6 px-2 py-3 border border-solid border-[#DBE1E1] rounded-md flex flex-col">
                      <p className="absolute -top-3 font-bold">Business</p>
                      <br />
                      <div className="flex flex-col gap-y-2 my-3">
                        <label
                          htmlFor="shopname"
                          className="text-[#858585] font-bold"
                        >
                          Shop Name
                        </label>
                        <input
                          type="text"
                          name="businessname"
                          placeholder="Shop name"
                          className="w-full border border-solid border-[#DBE1E1] px-3 py-4 outline-none rounded-md"
                        />

                        <label
                          htmlFor="state "
                          className="text-[#858585] font-bold"
                        >
                           State
                        </label>
                        <input
                          type="text"
                          name="state"
                          placeholder="State"
                          className="w-full border border-solid border-[#DBE1E1] px-3 py-4 outline-none rounded-md"
                        />

                        <label
                          htmlFor="lga"
                          className="text-[#858585] font-bold"
                        >
                          LGA
                        </label>
                        <input
                          type="text"
                          name="maxiincome"
                          placeholder="LGA"
                          className="w-full border border-solid border-[#DBE1E1] px-3 py-4 outline-none rounded-md"
                        />

                        <label
                          htmlFor="address"
                          className="text-[#858585] font-bold"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          name="address"
                          placeholder="Address"
                          className="w-full border border-solid border-[#DBE1E1] px-3 py-4 outline-none rounded-md"
                        />
                      </div>
                      <div className="mt-4">
                        <p className="text-[#858585] text-xl font-bold">
                          Business category
                        </p>
                        <span className="flex flex-row items-center mt-4">
                          <input
                            type="radio"
                            value="employed"
                            className="mr-3 accent-black h-5 w-5"
                            name="business"
                          />
                          <label
                            htmlFor="agent"
                            className="text-[#858585] font-bold"
                          >
                            SME / Agent sale
                          </label>
                        </span>
                        <span className="flex flex-row items-center my-3">
                          <input
                            type="radio"
                            value="agent-sale"
                            className="mr-3 accent-black h-5 w-5"
                            name="business"
                          />
                          <label
                            htmlFor="Retail-store"
                            className="text-[#858585] font-bold"
                          >
                            Retail store
                          </label>
                        </span>
                        <span className="flex flex-row items-center">
                          <input
                            type="radio"
                            value="wholesale"
                            className="mr-3 accent-black h-5 w-5"
                            name="business"
                          />
                          <label
                            htmlFor="selfemployed"
                            className="text-[#858585] font-bold"
                          >
                            Whole sale store
                          </label>
                        </span>
                      </div>
                    </div>
                  </>
                ) : count === 3 ? (
                  <>
                    <div className="relative w-full min-h-6 px-6 py-8 my-10 rounded-md">
                      {/* <p className="absolute -top-3 font-bold">Utility bill</p> */}
                      <p className="my-4 font-semibold text-black">Upload CAC <span className="text-[#858585] font-light">(optional)</span></p>
                      <div className="border-4 border-dashed border-[#DBE1E1] p-8 flex flex-col items-center justify-center rounded-xl">
                        <UploadImageIcon className={"w-8 h-8"} />
                        <p className="text-[#858585] text-center my-4">
                        Tap to upload Valid CAC or TIN
                        </p>
                      </div>
                      <p className="my-4 font-semibold text-black">TIN <span className="text-[#858585] font-light">(optional)</span></p>
                      <div className="border-4 border-dashed border-[#DBE1E1] p-8 flex flex-col items-center justify-center rounded-xl">
                        <UploadImageIcon className={"w-8 h-8"} />
                        <p className="text-[#858585] text-center my-4">
                        Tap to upload Valid CAC or TIN
                        </p>
                      </div>
                    </div>
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
                  </>
                ) : null}
                {count === 3 ? (
                  <Button
                    className="w-full mb-4 bg-[#0B7E78] hover:bg-[#0B7E78] px-2 py-3 font-xl my-7"
                    size={"lg"}
                    onClick={(e) => {
                      handleDone(e);
                    }}
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
                )}
              </form>
              {/* overlay modal */}
              {overlayModal === true ? (
                <div className="absolute -top-52 inset-0 w-full min-h-screen bg-black/20 box-border">
                  <div className="absolute bottom-12 bg-white min-h-9 box-border px-2 py-8 rounded-3xl">
                    <GreenLogoIcon className={"mx-auto"} />
                    <h2 className="font-bold text-xl text-center mt-6">
                      Job Weldone
                    </h2>
                    <p className="text-center text-[#858585] my-3">
                      A notification about your veification would be sent to you
                      in about 3-5 working days.
                    </p>
                    <Button
                      className="w-full bg-[#0B7E78] hover:bg-[#0B7E78]"
                      size={"lg"}
                      asChild
                    >
                      <Link href={"/home/vendor"}>Back to home</Link>
                    </Button>
                  </div>
                </div>
              ) : null}
            </div>
          </Modal>
        </div>
      )}
    </>
  );
};

export default VerifyKYC;
