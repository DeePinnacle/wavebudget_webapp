"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BellIcon, NotificationIcon } from "../../components/icons/icons";
import MobileMenu from "../../components/ui/mobile-menu";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Autoplay } from 'swiper/modules';
import InstoreModal from "@/components/ui/instore-modal";

const HomePage = () => {
  const [overlay, setOverlay] = useState(false);
  const handleOverlay = () => {
    setOverlay(!overlay);
  };
  return (
    <>
    <div className="bg-slate-100 w-full min-h-screen pb-16">
      {/* notication header */}
      <div className="flex flex-row items-center justify-between py-7 px-3">
        <div className="flex flex-row gap-2">
          <div className="relative w-14 h-14 rounded-full overflow-hidden">
            <Image
              src={"/user.png"}
              alt="user-image"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[#858585]">Good afternoon</p>
            <p className="text-[#010E0D] font-bold">Wisdom Umanah</p>
          </div>
        </div>
        <div className="bg-white w-12 h-12 rounded-full flex flex-row items-center justify-center">
          <NotificationIcon />
        </div>
      </div>

      {/* shopping div */}
      <div className="p-2 my-2 grid grid-cols-2 items-center justify-around gap-3">
        <div className="bg-[#0B7E78] p-2 rounded-xl overflow-hidden">
          <h2 className="text-white font-bold ">
            In store <br /> shopping
          </h2>
          <div className="relative w-20 h-20 left-[5.8125rem] top-2 overflow-hidden">
            <Image
              src={"/bag.png"}
              alt="bag"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
        <div className="bg-[#0B7E78] p-2 rounded-xl overflow-hidden">
          <h2 className="text-white font-bold ">
            E-commerce <br /> shopping
          </h2>
          <div className="relative w-20 h-20 left-[5.8125rem] top-2 overflow-hidden">
            <Image
              src={"/slant-cart.png"}
              alt="bag"
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>
      {/* complete kyc */}
      <div className="bg-white my-3 p-2 w-11/12 mx-auto flex flex-row items-center justify-between rounded-md">
        <div className="w-3/5">
          <span className="flex flex-row items-center gap-2">
            <BellIcon className={"w-6 h-6"} />
            <span className="font-bold">Complete your KYC</span>
          </span>
          <p className="text-[#858585] pl-8">
            For a secure and seamless shopping experience.
          </p>
        </div>
        <div className="relative w-32 h-24">
          <Image
            src={"/verification.png"}
            alt="verification"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
      {/* advert section  */}
        <Swiper 
                slidesPerView={'auto'}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                loop = { true }
                autoplay = {{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="mySwiper -z-[500]"
        >
          <SwiperSlide>
          <div className="relative left-[1px] bg-[#0FEDED] w-4/5 mx-auto min-h-24 rounded-lg flex flex-row gap-2">
            <div className="relative w-20 h-32 overflow-hidden">
              <Image
                src={"/shopping.png"}
                alt="user-shopping"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="mt-10">
              <h1 className="text-center font-bold">Have the experience</h1>
              <p className="text-white text-center text-xs">
                by exploring our e-commerce products
              </p>
            </div>
            <div className="relative left-1 w-20 h-32 overflow-hidden">
              <Image
                src={"/shopping.png"}
                alt="user-shopping"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
          </SwiperSlide>          
          <SwiperSlide>
          <div className="relative left-[1px] bg-[#958ED5] w-4/5 mx-auto min-h-24 rounded-lg flex flex-row gap-2">
            <div className="relative w-20 h-32 overflow-hidden">
              <Image
                src={"/shopping.png"}
                alt="user-shopping"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="mt-10">
              <h1 className="text-center font-bold">Have the experience</h1>
              <p className="text-white text-center text-xs">
                by exploring our e-commerce products
              </p>
            </div>
            <div className="relative left-1 w-20 h-32 overflow-hidden">
              <Image
                src={"/shopping.png"}
                alt="user-shopping"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
          </SwiperSlide>          
          <SwiperSlide>
          <div className="relative left-[1px] bg-[#ED0F0F] w-4/5 mx-auto min-h-24 rounded-lg flex flex-row gap-2">
            <div className="relative w-20 h-32 overflow-hidden">
              <Image
                src={"/shopping.png"}
                alt="user-shopping"
                fill
                priority
                className="object-cover"
              />
            </div>
            <div className="mt-10">
              <h1 className="text-center font-bold">Have the experience</h1>
              <p className="text-white text-center text-xs">
                by exploring our e-commerce products
              </p>
            </div>
            <div className="relative left-1 w-20 h-32 overflow-hidden">
              <Image
                src={"/shopping.png"}
                alt="user-shopping"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
          </SwiperSlide>
        </Swiper>
      {/* transacion histroy  */}
      <div className="px-4 py-2">
        <div className="bg-white w-full min-h-80 rounded-tl-3xl rounded-tr-3xl pt-3 pb-28 px-4">
          <h2 className="font-bold text-xl">Recent transaction</h2>
          <div className="w-56 h-44 mx-auto my-5">
            <div className="relative w-36 h-36 overflow-hidden mx-auto">
              <Image
                src={"/resting-man.png"}
                alt="empty-transaction"
                fill
                priority
                className="object-cover"
              />
            </div>
            <p className="text-[#858585] text-center">
              No recent transaction. start{" "}
              <span className="text-[#0B7E78] font-bold">shopping now</span>
            </p>
          </div>
        </div>
      </div>
    </div>
      {/* instore overlay */}
      <InstoreModal overlay={ overlay } />
      <MobileMenu overlay={overlay} handleOverlay={ handleOverlay } />
    </>
  );
};

export default HomePage;
