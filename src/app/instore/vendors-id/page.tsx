'use client'
import React from "react";
import AddProduct from "../scan/add-product/page";
import { CartIcon } from "../../../components/icons/icons";
import { Button } from "../../../components/ui/button";
import { useRouter } from "next/navigation";
const VendorsID = () => {
    const navigation = useRouter()
    const handleScan = () =>{
        navigation.push('/instore/scan')
    }
  return (
    <div className="relative">
      <AddProduct />
      {/* overlay */}
      <div className="absolute w-full min-h-screen inset-0 bg-black/20 p-3 box-border">
        <div className="fixed bottom-12 bg-white w-11/12 min-h-10 rounded-xl box-border px-4 py-8">
          <div className="w-12 h-12 bg-[#F6FEFE] rounded-full flex flex-row items-center justify-center mx-auto">
            <CartIcon className={"text-[#0B7E78]"} />
          </div>
          <h3 className="font-semibold text-center my-2">Input vendors ID</h3>
          <p className="text-center text-[#858585] text-sm font-semibold">
            Before adding a product please input vendors ID
          </p>
          <input
            type="text"
            name="vendors-id"
            placeholder="vendorsID"
            className="w-full border boreder-solid border-[#DBE1E1] my-6 outline-none rounded-md py-3 px-2 placeholder:text-sm"
          />
          <Button className="bg-[#0B7E78] w-full hover:bg-[#0B7E78]" size={"lg"} onClick={ handleScan }>Proceed</Button>
        </div>
      </div>
    </div>
  );
};

export default VendorsID;
