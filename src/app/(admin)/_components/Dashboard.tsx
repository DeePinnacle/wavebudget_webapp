import {
  TotalBuyerIcon,
  TotalInstoreIcon,
  TotalVendorIcon,
} from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <div className="my-9 flex flex-col">
      <div className="grid grid-cols-3 items-center justify-between gap-4">
        <div className="w-full min-h-10 border border-solid border-[#E8EDE9] rounded-md px-3 py-5">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-3">
              <TotalVendorIcon />
              <span className="">
                <p className="font-semibold text-sm">34</p>
                <p className="text-sm text-[#858585]">Total vendors</p>
              </span>
            </div>
            <select
              name=""
              className="px-2 py-2 border border-solid border-[#EDF2F2] rounded-md text-[#858585] text-sm outline-none"
            >
              <option value={"daily"}>Daily</option>
              <option value={"week"}>Weeks</option>
              <option value={"month"}>Month</option>
            </select>
          </div>
          <div className="flex flex-row items-center justify-between mt-8">
            <div className="flex flex-row items-center gap-3">
              <div className="w-9 h-7 rounded-md bg-[#F6FEFE] flex flex-row items-center justify-center">
                <p className="text-[#0B7E78] text-xs">20+</p>
              </div>
              <p className="text-[#858585] text-xs">in the past weeks</p>
            </div>
            <Image
              src={"/Vector.png"}
              alt="vector"
              width={70}
              height={20}
              priority
            />
          </div>
        </div>
        <div className="w-full min-h-10 border border-solid border-[#E8EDE9] rounded-md px-3 py-5">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-3">
              <TotalBuyerIcon />
              <span className="">
                <p className="font-semibold text-sm">34</p>
                <p className="text-sm text-[#858585]">Total buyer</p>
              </span>
            </div>
            <select
              name=""
              className="px-2 py-2 border border-solid border-[#EDF2F2] rounded-md text-[#858585] text-sm outline-none"
            >
              <option value={"daily"}>Daily</option>
              <option value={"week"}>Weeks</option>
              <option value={"month"}>Month</option>
            </select>
          </div>
          <div className="flex flex-row items-center justify-between mt-8">
            <div className="flex flex-row items-center gap-3">
              <div className="w-9 h-7 rounded-md bg-[#F6FEFE] flex flex-row items-center justify-center">
                <p className="text-[#0B7E78] text-xs">20+</p>
              </div>
              <p className="text-[#858585] text-xs">in the past weeks</p>
            </div>
            <Image
              src={"/Vector.png"}
              alt="vector"
              width={70}
              height={20}
              priority
            />
          </div>
        </div>
        <div className="w-full min-h-10 border border-solid border-[#E8EDE9] rounded-md px-3 py-5">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-3">
              <TotalInstoreIcon />
              <span className="">
                <p className="font-semibold text-sm">34</p>
                <p className="text-sm text-[#858585]">Total Instore items</p>
              </span>
            </div>
            <select
              name=""
              className="px-2 py-2 border border-solid border-[#EDF2F2] rounded-md text-[#858585] text-sm outline-none"
            >
              <option value={"daily"}>Daily</option>
              <option value={"week"}>Weeks</option>
              <option value={"month"}>Month</option>
            </select>
          </div>
          <div className="flex flex-row items-center justify-between mt-8">
            <div className="flex flex-row items-center gap-3">
              <div className="w-9 h-7 rounded-md bg-[#F6FEFE] flex flex-row items-center justify-center">
                <p className="text-[#0B7E78] text-xs">20+</p>
              </div>
              <p className="text-[#858585] text-xs">in the past weeks</p>
            </div>
            <Image
              src={"/Vector.png"}
              alt="vector"
              width={70}
              height={20}
              priority
            />
          </div>
        </div>
      </div>
      <div className="w-full min-h-4 my-5 flex flex-row gap-4">
        {/* rechart */}
        <div className="w-[66%] min-h-4 border border-solid border-[#E8EDE9] rounded-sm py-4 px-5">
          <div className="flex flex-row items-center justify-between">
            <p>Transactions</p>
            <select
              name=""
              className="px-2 py-2 border border-solid border-[#EDF2F2] rounded-md text-[#858585] text-sm outline-none"
            >
              <option value={"daily"}>Daily</option>
              <option value={"week"}>Weeks</option>
              <option value={"month"}>Month</option>
            </select>
          </div>
          <div className="btn-wrapper flex flex-row items-center gap-3 my-6">
            <Button
              type="button"
              className="text-xs bg-transparent text-[#858585] border border-solid border-[#EDF2F2] hover:bg-transparent"
            >
              Total defaulters
            </Button>
            <Button
              type="button"
              className="text-xs bg-transparent text-[#858585] border border-solid border-[#EDF2F2] hover:bg-transparent"
            >
              Still paying customers
            </Button>
            <Button
              type="button"
              className="text-xs bg-transparent text-[#858585] border border-solid border-[#EDF2F2] hover:bg-transparent"
            >
              Completed payment
            </Button>
            <Button
              type="button"
              className="text-xs bg-transparent text-[#858585] border border-solid border-[#EDF2F2] hover:bg-transparent"
            >
              Pay off
            </Button>
          </div>
          {/* chart goes here */}
          <div className="w-full h-48 relative">
            <Image src={"/Chart.png"} alt="chart" fill priority />
          </div>
        </div>
        <div className="w-[33%] min-h-1 border border-solid border-[#E8EDE9] rounded-sm py-4 px-5">
          <div className="flex flex-row items-center justify-between">
            <p>E-commerce</p>
            <select
              name=""
              className="px-2 py-2 border border-solid border-[#EDF2F2] rounded-md text-[#858585] text-sm outline-none"
            >
              <option value={"daily"}>Daily</option>
              <option value={"week"}>Weeks</option>
              <option value={"month"}>Month</option>
            </select>
          </div>
          <div className="btn-wrapper flex flex-row items-center gap-3 my-6">
            <Button
              type="button"
              className="text-xs bg-transparent text-[#858585] border border-solid border-[#EDF2F2] hover:bg-transparent"
            >
              Full payment
            </Button>
            <Button
              type="button"
              className="text-xs bg-transparent text-[#858585] border border-solid border-[#EDF2F2] hover:bg-transparent"
            >
              Installment
            </Button>
          </div>
          <div className="my-3 p-2 flex flex-row gap-4">
            <div className="relative w-3/5 h-48">
                <Image src={"/Pie.png"} alt="pie chart" fill />
            </div>
            <div>
                <div className="flex flex-row items-center gap-3 mt-32">
                    <div className="w-3 h-3 rounded-full bg-[#0B7E78]"></div>
                    <p className="text-xs text-[#858585]">Past weeks</p>
                </div>
                <div className="flex flex-row items-center gap-3 mt-5">
                    <div className="w-3 h-3 rounded-full border-2 border-solid border-[#13DCD2]"></div>
                    <p className="text-xs text-[#858585]">Today</p>
                </div>
            </div>
          </div>
        </div>

        {/* rechart ends */}
      </div>
    </div>
  );
};

export default Dashboard;
