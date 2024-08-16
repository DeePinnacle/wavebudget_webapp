"use client";
import React, { useRef, useState } from "react";
import { useCartStore } from "../../../store/cart-store";
import { BackIcon, BlurChecked, CheckedColored, DeleteIcon } from "@/components/icons/icons";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from 'next/image'
import { Button } from "@/components/ui/button";
const Cart = () => {
  const { carts, removeCartItem } = useCartStore((state) => ({
    carts: state.carts,
    removeCartItem: state.removeCartItem
  }));

  const [ count, setCount ] = useState(0)

  const navigation = useRouter();
  const handleBack = () => {
    navigation.back();
  };

  // handle button change 
  const handleButtonChange = () =>{
    let id = setTimeout(()=>{
      setCount(count + 1)
    }, 1000)
    if(count === 5){
      clearTimeout(id)
    }
  }

  const handleClick = () =>{
    alert('cliked')
  }

  // handle proceed
  const handleBNPL = () => {
    navigation.push('/instore/cart/bnpl')
  }

  handleButtonChange()

  // handleRemove 
  const clickRef = useRef<HTMLButtonElement | null>(null)
  const handleButtonClick = () => {
    if (clickRef.current) {
        // You can call any method on the button element here
        clickRef.current.click(); // Trigger a click event on the button
    }
};

  return (
    <div className="bg-slate-200 w-full min-h-screen pb-5">
      <div className="bg-white w-full h-32 rounded-br-3xl rounded-bl-3xl flex flex-row items-center">
        <div
          className="bg-white w-10 h-10 rounded-full flex items-center justify-center"
          onClick={handleBack}
        >
          <BackIcon className={"text-[#0B7E78] font-bold w-8 h-8"} />
        </div>
        <div className="w-11/12 mx-auto ml-20">
          <p className="text-black text-center text-2xl font-semibold font-montserrat w-1/2">
            Cart
          </p>
        </div>
      </div>
      {
        carts.length === 0 ? 
          (
            <div className="bg-white w-full h-screen mt-8 p-3 flex flex-col items-center justify-center">
              <div className="relative w-60 h-60 overflow-hidden -mt-44">
                <Image src={"/resting-man.png"} alt="resting man" fill priority className="object-cover" />
              </div>
              <p className="text-center text-[#0B7E78]">It looks like you haven't added any items to your cart yet. Browse our instore shopping to add item your cart. Click the link below to add item to cart.!</p>
              <Button className="bg-transparent border border-solid border-[#0B7E78] text-[#0B7E78] my-3 hover:bg-transparent">
                <Link href={"/instore"}>Shop now</Link>
              </Button>
            </div>
          )
          :
        (
          <>
                  <div className="bg-white w-[96%] min-h-4 my-5 mx-auto px-2 py-4 rounded-lg">
        <span className="flex flex-row items-center justify-between mb-8">
          <p className="font-semibold text-lg">Adams Complex</p>
          <Link href="#" className="text-[#0B7E78] font-semibold">Edit item</Link>
        </span>
        {carts.map((item, index) => (
          <div key={index}>
            <div className="flex flex-row gap-3 justify-between mb-3">
              <BlurChecked />
              <div className="relative w-16 h-16 overflow-hidden rounded-md">
                <Image src='/Phone.png' alt="phone image" fill priority className="object-contain" />
              </div>
              <div>
                <p className="font-semibold text-base">{ item.product }</p>
                <p className="text-sm text-[#858585] font-semibold">Installment price: <span className="text-black font-semibold">{ item.price }</span></p>
                <p className="text-sm text-[#858585] font-semibold">Quantity: <span className="text-black font-semibold">{ item.quantity }</span></p>
              </div>
              <div className="p-4 ">
                <div className="w-[85%] h-[85%] rounded-full p-2 bg-[#FEECEC] flex flex-row items-center justify-center">
                  <Image src={"/delete.png"} alt="delete icon" width={30} height={30} onClick={ handleButtonClick } />
                </div>
                <Button ref={clickRef} onClick={()=>{ removeCartItem(item.id) }} className="hidden">button 1</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white w-[96%] min-h-4 mx-auto px-2 py-4 rounded-lg">
        <span className="flex flex-row items-center justify-between">
          <p className="font-semibold text-[#858585] my-2">Total numbers of selected items</p>
          <p className="font-semibold text-black">{ carts.length }</p>
        </span>
        <span className="flex flex-row items-center justify-between">
          <p className="font-semibold text-[#858585] my-2">Selected vendor</p>
          <p className="font-semibold text-black">Adams complex</p>
        </span>
        <span className="flex flex-row items-center justify-between">
          <p className="font-semibold text-[#858585] my-2">Total installment price:</p>
          <p className="font-semibold text-black">50,000</p>
        </span>
        <span className="flex flex-row items-center justify-between">
          <p className="font-semibold text-[#858585] my-2">Total amount:</p>
          <p className="font-semibold text-black">100,000</p>
        </span>
        {/* <span className="flex flex-row items-center justify-between">
          <p className="font-semibold text-[#858585] my-2">Count:</p>
          <p className="font-semibold text-black">{ count }</p>
        </span> */}
      </div>
      {
        count !== 5 ? (
          <div className="w-[96%] mx-auto flex flex-row items-center justify-center">
            <Button className="w-[96%] bg-[#D1D1D1] hover:bg-[#D1D1D1] my-4 py-6 text-black font-semibold cursor-pointer">Waiting for vendors approval</Button>
          </div>
        ) : (
          <div className="w-[96%] mx-auto flex flex-row items-center justify-center">
            <Button className="w-[96%] bg-[#0B7E78] hover:bg-[#0B7E78] my-4 py-6 text-white font-semibold cursor-pointer" onClick={ handleBNPL }>Check out</Button>
          </div>
        )
      }
          </>
        )
      }
    </div>
  );
};

export default cart;
