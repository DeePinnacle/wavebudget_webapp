'use client'
import { BackIcon } from "@/components/icons/icons";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
const BNPL = () => {
  const navigation = useRouter();
  const handleBack = () => {
    navigation.back();
  };

  const handleInvoice = () =>{
    navigation.push("/instore/cart/bnpl/invoice")
  }
  
  return (
    <div className="w-full min-h-screen bg-slate-200 pb-8">
      <div className="bg-white w-full h-32 rounded-br-3xl rounded-bl-3xl flex flex-row items-center">
        <div
          className="bg-white w-10 h-10 rounded-full flex items-center justify-center"
          onClick={handleBack}
        >
          <BackIcon className={"text-[#0B7E78] font-bold w-8 h-8"} />
        </div>
        <div className="w-11/12 mx-auto ml-20">
          <p className="text-black text-center text-xl font-semibold font-montserrat -ml-16">
            Buy Now Pay Later(BNPL)
          </p>
        </div>
      </div>
      <div className="bg-white w-[96%] min-h-4 mx-auto my-6 px-2 py-4 rounded-lg">
        <h1 className="font-bold text-xl mb-7">BNPL item summary</h1>
        <span className="flex flex-row items-center justify-between">
          <p className="font-semibold text-[#858585] my-2">Item list:</p>
          <p className="font-semibold text-[#0B7E78]">Rice, beans, garri..</p>
        </span>
        <span className="flex flex-row items-center justify-between">
          <p className="font-semibold text-[#858585] my-2">Vendor</p>
          <p className="font-semibold text-black">Adams complex</p>
        </span>
        <span className="flex flex-row items-center justify-between">
          <p className="font-semibold text-[#858585] my-2">Total selling price:</p>
          <p className="font-semibold text-black">50,000</p>
        </span>
        <span className="flex flex-row items-center justify-between">
          <p className="font-semibold text-[#858585] my-2">Installment price:</p>
          <p className="font-semibold text-black">25,000</p>
        </span>
      </div>
      <div className="bg-white w-[96%] min-h-4 mx-auto my-6 px-2 pt-4 pb-8 rounded-lg">
        <h1 className="font-bold text-xl mb-3">Down payment rate</h1>
        <p className="text-[#858585]">The least down payment is 50% of your total purchased item, it can be increased and decreased but not below 50%. Drag to adjust</p>
        <div className="range">
          <div className="slidervalue">
            <span>100</span>
          </div>
          <div className="rangefield">
            <input type="range" name="downpayment" min={50} max={100} />
          </div>
        </div>
      </div>
      <div className="bg-white w-[96%] min-h-4 mx-auto my-6 px-2 py-4 rounded-lg">
        <h1 className="font-bold text-xl mb-3">Payment duration</h1>
        <p className="text-[#858585]">Period at which payment would be due.</p>
        <select name="duration" className="w-full border border-solid border-[#DBE1E1] px-3 py-3 rounded-md text-[#DBE1E1] outline-none">
          <option value={"3 month"}>3 month</option>
          <option value={"5 month"}>5 month</option>
        </select>
      </div>
      <div className="flex flex-row items-center justify-center w-full my-9">
        <Button className="bg-[#0B7E78] hover:bg-[#0B7E78] w-[96%] py-6" size={"lg"} onClick={ handleInvoice }>Proceed</Button>
      </div>
    </div>
  );
};

export default BNPL;
