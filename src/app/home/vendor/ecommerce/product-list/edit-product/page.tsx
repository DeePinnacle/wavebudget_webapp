'use client'
import React from "react";
import { useRouter } from "next/navigation";
import Image from 'next/image'
import {
    BackIcon,
  } from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
const EditProduct = () => {
    const navigate = useRouter();
    const handleBack = () => {
      navigate.back();
    };
  return (
    <div className="w-full min-h-screen px-3 pt-4 pb-16">
      <div className="flex flex-row gap-20 items-center w-full">
        <div
          className="bg-transparent inline-block w-11 h-11 relative my-8 mx-4 cursor-pointer"
          onClick={handleBack}
        >
          <BackIcon className={"w-11 h-11 cursor-pointer absolute"} />
        </div>
        <p className="text-black font-semibold text-center text-xl">Edit Product</p>
      </div>
      <div className="w-full flex flex-row items-center justify-around gap-2 my-8">
        <div className="relative w-28 h-28">
          <Image src={"/frame1.png"} alt="frame" fill priority />
        </div>
        <div className="relative w-28 h-28">
          <Image src={"/frame1.png"} alt="frame" fill priority />
        </div>
        <div className="relative w-28 h-28">
          <Image src={"/frame1.png"} alt="frame" fill priority />
        </div>
      </div>
      <form>
      <div>
            <label htmlFor="product-name" className="text-[#858585]">
              Product name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="product-name-01"
              placeholder="Enter product name"
              value={"iPhone 15 pro max"}
              className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md mb-4 outline-none text-[#858585]"
            />
            <label htmlFor="description-01" className="text-[#858585]">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              cols={10}
              rows={5}
              value={"2.4G Air Mouse with Touchpad Keyboard i8 Arabic French Spanish Russian Backlit Mini Wireless Keyboard for PC Android TV Box"}
              className="w-full resize-none border border-solid border-[#DBE1E1] outline-none p-2 rounded-md mb-4 text-[#858585]"
            ></textarea>
            <div className="flex flex-row items-center justify-between gap-3">
              <div>
                <label htmlFor="price" className="text-[#858585]">
                  Original Price <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="price-01"
                  placeholder="Enter product price"
                  value={"N1,500,000"}
                  className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md mb-7 outline-none text-[#858585]"
                />
              </div>
              <div>
                <label htmlFor="price" className="text-[#858585]">
                  Slash price
                </label>
                <input
                  type="text"
                  name="price-01"
                  placeholder="Enter slash price"
                  value={"1,400,000"}
                  className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md mb-7 outline-none text-[#858585]"
                />
              </div>
            </div>
            <label htmlFor="category" className="text-[#858585]">
              Category<span className="text-red-500">*</span>
            </label>
            <select
              name="category-01"
              className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md outlin-none mb-4 text-[#858585]"
            >
              <option className="text-[#858585]">Select category</option>
            </select>
            <div className="flex flex-row items-center justify-between gap-3">
              <div>
                <label htmlFor="quantity" className="text-[#858585]">
                  Available Qty <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="quantity-01"
                  placeholder="Enter product quantity"
                  className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md mb-7 outline-none text-[#858585]"
                />
              </div>
              <div className="-mt-7">
                <label htmlFor="price" className="text-[#858585]">
                  Item color
                </label>
                <span className="flex flex-row items-center my-3">
                  <input
                    type="radio"
                    value="bank"
                    className="mr-3 accent-[#953EF9] h-7 w-7"
                    name="bank"
                  />
                  <input
                    type="radio"
                    value="bank"
                    className="mr-3 accent-[#F93EC5] h-7 w-7"
                    name="bank"
                  />
                  <input
                    type="radio"
                    value="bank"
                    className="mr-3 accent-[#3EF973] h-7 w-7"
                    name="bank"
                  />
                  <input
                    type="radio"
                    value="bank"
                    className="mr-3 accent-[#F98D3E] h-7 w-7"
                    name="bank"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center gap-3">
            <Button
              type="button"
              className="w-full text-[#0B7E78] h-14 text-lg font-semibold hover:bg-transparent hover:text-[#0B7E78]"
              variant={"ghost"}
            >
              Delete product
            </Button>
                <Button
                type="button"
                className="w-full bg-[#0B7E78] h-14 hover:bg-[#0B7E78]"
              >
                Update changes
              </Button>
          </div>
      </form>
    </div>
  );
};

export default EditProduct;
