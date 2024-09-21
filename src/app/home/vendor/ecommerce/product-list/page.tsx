"use client";
import React from "react";
import { useRouter } from "next/navigation";
import {
  BackIcon,
  DropDownIcon,
  WhiteBackIcon,
} from "@/components/icons/icons";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
const ProductList = () => {
  const navigate = useRouter();
  const handleBack = () => {
    navigate.back();
  };
  return (
    <div className="w-full min-h-screen bg-[#0B7E78]">
      <div className="flex flex-row gap-20 items-center w-full">
        <div
          className="bg-transparent inline-block w-11 h-11 relative my-8 mx-4 cursor-pointer"
          onClick={handleBack}
        >
          <WhiteBackIcon className={"w-11 h-11 cursor-pointer absolute"} />
        </div>
        <p className="text-white font-semibold text-center">Product list</p>
      </div>
      <div className="w-full min-h-[50rem] bg-white mt-12 rounded-tr-3xl rounded-tl-3xl p-4">
        <form>
          <div className="flex flex-row items-center justify-between gap-3">
            <input
              type="text"
              name="search"
              placeholder="search"
              className="w-full outline-none border border-solid border-[#EDF2F2] px-2 py-2 rounded-md"
            />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="w-2/5 text-[#858585]" variant="outline">
                  Filter <DropDownIcon className={"ml-3"} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-44">
                <DropdownMenuCheckboxItem className="text-[#858585]">
                  All
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="text-[#858585]">
                  Today
                </DropdownMenuCheckboxItem>
                <DropdownMenuCheckboxItem className="text-[#858585]">
                  Past weeks
                </DropdownMenuCheckboxItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </form>
        <p className="text-[#858585] font-semibold my-4">48 found items</p>
        <div className="flex flex-row items-center gap-4 my-2">
          <div className="flex flex-row items-center gap-2">
            <div className="relative w-16 h-16 overflow-hidden">
              <Image src={"/phone.png"} alt="phone image" fill priority />
            </div>
            <span>
              <h1 className="font-semibold font-sans text-lg">
                White solar power micro wave
              </h1>
              <span className="flex flex-row items-center justify-between">
                <p className="text-[#858585]">
                  Price:{" "}
                  <span className="font-semibold text-balance text-black">
                    20,000
                  </span>
                </p>
                <p className="text-[#858585]">
                  Quantity:{" "}
                  <span className="font-semibold text-balance text-black">
                    2
                  </span>
                </p>
              </span>
            </span>
          </div>
          <Button
            className="w-[30%] border border-solid border-[#0B7E78] text-[#0B7E78] bg-transparent hover:bg-transparent"
            asChild
          >
            <Link href="/home/vendor/ecommerce/product-list/edit-product">Edit</Link>
          </Button>
        </div>
        <div className="flex flex-row items-center gap-4 my-2">
          <div className="flex flex-row items-center gap-2">
            <div className="relative w-16 h-16 overflow-hidden">
              <Image src={"/phone.png"} alt="phone image" fill priority />
            </div>
            <span>
              <h1 className="font-semibold font-sans text-lg">
                White solar power micro wave
              </h1>
              <span className="flex flex-row items-center justify-between">
                <p className="text-[#858585]">
                  Price:{" "}
                  <span className="font-semibold text-balance text-black">
                    20,000
                  </span>
                </p>
                <p className="text-[#858585]">
                  Quantity:{" "}
                  <span className="font-semibold text-balance text-black">
                    2
                  </span>
                </p>
              </span>
            </span>
          </div>
          <Button
            className="w-[30%] border border-solid border-[#0B7E78] text-[#0B7E78] bg-transparent hover:bg-transparent"
            asChild
          >
            <Link href="/home/vendor/ecommerce/product-list/edit-product">Edit</Link>
          </Button>
        </div>
        <div className="flex flex-row items-center gap-4 my-2">
          <div className="flex flex-row items-center gap-2">
            <div className="relative w-16 h-16 overflow-hidden">
              <Image src={"/phone.png"} alt="phone image" fill priority />
            </div>
            <span>
              <h1 className="font-semibold font-sans text-lg">
                White solar power micro wave
              </h1>
              <span className="flex flex-row items-center justify-between">
                <p className="text-[#858585]">
                  Price:{" "}
                  <span className="font-semibold text-balance text-black">
                    20,000
                  </span>
                </p>
                <p className="text-[#858585]">
                  Quantity:{" "}
                  <span className="font-semibold text-balance text-black">
                    2
                  </span>
                </p>
              </span>
            </span>
          </div>
          <Button
            className="w-[30%] border border-solid border-[#0B7E78] text-[#0B7E78] bg-transparent hover:bg-transparent"
            asChild
          >
            <Link href="/home/vendor/ecommerce/product-list/edit-product">Edit</Link>
          </Button>
        </div>
        <div className="flex flex-row items-center gap-4 my-2">
          <div className="flex flex-row items-center gap-2">
            <div className="relative w-16 h-16 overflow-hidden">
              <Image src={"/phone.png"} alt="phone image" fill priority />
            </div>
            <span>
              <h1 className="font-semibold font-sans text-lg">
                White solar power micro wave
              </h1>
              <span className="flex flex-row items-center justify-between">
                <p className="text-[#858585]">
                  Price:{" "}
                  <span className="font-semibold text-balance text-black">
                    20,000
                  </span>
                </p>
                <p className="text-[#858585]">
                  Quantity:{" "}
                  <span className="font-semibold text-balance text-black">
                    2
                  </span>
                </p>
              </span>
            </span>
          </div>
          <Button
            className="w-[30%] border border-solid border-[#0B7E78] text-[#0B7E78] bg-transparent hover:bg-transparent"
            asChild
          >
            <Link href="/home/vendor/ecommerce/product-list/edit-product">Edit</Link>
          </Button>
        </div>
        <div className="flex flex-row items-center gap-4 my-2">
          <div className="flex flex-row items-center gap-2">
            <div className="relative w-16 h-16 overflow-hidden">
              <Image src={"/phone.png"} alt="phone image" fill priority />
            </div>
            <span>
              <h1 className="font-semibold font-sans text-lg">
                White solar power micro wave
              </h1>
              <span className="flex flex-row items-center justify-between">
                <p className="text-[#858585]">
                  Price:{" "}
                  <span className="font-semibold text-balance text-black">
                    20,000
                  </span>
                </p>
                <p className="text-[#858585]">
                  Quantity:{" "}
                  <span className="font-semibold text-balance text-black">
                    2
                  </span>
                </p>
              </span>
            </span>
          </div>
          <Button
            className="w-[30%] border border-solid border-[#4caf50] text-[#4caf50] bg-transparent hover:bg-transparent"
            asChild
          >
            <Link href="/home/vendor/ecommerce/product-list/edit-product">Edit</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
