"use client";
import {
  BackIcon,
  CheckedPassIcon,
  DrawerPullIcon,
  GreenLogoIcon,
} from "@/components/icons/icons";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { baseDesign } from "@/config/data";
import Image from "next/image";
import Link from "next/link";

const Invoice = () => {
  const [overlay, setOverlay] = useState(false);
  const [stnRequest, setSTNRequest] = useState(false);
  const [sendRequest, setSendRequest] = useState(false);
  const [countDown, setCountDown] = useState(5);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const handleSubmit = () => {
    setOverlay(true);
  };

  const handleStnRequest = () => {
    setSTNRequest(true);
  };

  const handleSendRequest = () => {
    setSTNRequest(false);
    setSendRequest(true);
  };

  const navigation = useRouter();
  const handleBack = () => {
    navigation.back();
    // alert("clicked")
  };

  const handleDone = () => {
    setOverlay(false)
  }

  // handle change view after count down
  useEffect(() => {
    if (sendRequest === true) {
      // restore count down
      setCountDown(5);
      // start count down
      const id = setInterval(() => {
        setCountDown((prevCount) => {
          if (prevCount <= 1) {
            clearInterval(id);
            return 0;
          }
          return prevCount - 1;
        });
      }, 1000);
      setIntervalId(id);
      // Cleanup interval on component unmount
      return () => {
        if (intervalId) {
          clearInterval(intervalId);
        }
      };
    }
  }, [sendRequest]);

  let walletBalance = 10;
  return (
    <div className="bg-[#0B7E78] w-full min-h-screen py-5 px-3">
      <div className="w-full mt-4 px-5 flex flex-row items-center justify-between">
        <div
          className="bg-white w-10 h-10 rounded-full flex items-center justify-center"
          onClick={handleBack}
        >
          <BackIcon className={"text-[#0B7E78] font-bold w-8 h-8"} />
        </div>
        <div className="w-11/12">
          <p className="text-white text-center text-2xl font-semibold font-montserrat -ml-11">
            Invoice
          </p>
        </div>
      </div>
      <div className="bg-white rounded-tr-lg rounded-tl-lg pt-3 my-6">
        <GreenLogoIcon className={"mx-auto"} />
        <h2 className="font-semibold text-black text-center text-lg my-3">
          Payment invoice
        </h2>
        <div className="flex flex-row">
          <div className="w-3 h-7 bg-[#0B7E78] rounded-tr-full rounded-br-full"></div>
          <div className="border-t-4 border-dashed border-[#0B7E78] w-full mt-3"></div>
          <div className="w-3 h-7 bg-[#0B7E78] rounded-tl-full rounded-bl-full"></div>
        </div>
        <div className="py-1 px-3">
          <span className="flex flex-row items-center justify-between my-3">
            <p className="text-[#858585] text-lg font-semibold">
              Upront payment
            </p>
            <p className="text-black text-lg font-semibold">N50, 000</p>
          </span>
          <span className="flex flex-row items-center justify-between my-3">
            <p className="text-[#858585] text-lg font-semibold">
              First month payment
            </p>
            <p className="text-black text-lg font-semibold">N10, 000</p>
          </span>
          <span className="flex flex-row items-center justify-between my-3">
            <p className="text-[#858585] text-lg font-semibold">
              Second month payment
            </p>
            <p className="text-black text-lg font-semibold">N10, 000</p>
          </span>
          <span className="flex flex-row items-center justify-between my-3">
            <p className="text-[#858585] text-lg font-semibold">
              Third month payment
            </p>
            <p className="text-black text-lg font-semibold">N10, 000</p>
          </span>
          <span className="flex flex-row items-center justify-between my-3">
            <p className="text-[#858585] text-lg font-semibold">
              Fourth month payment
            </p>
            <p className="text-black text-lg font-semibold">N10, 000</p>
          </span>
          <span className="flex flex-row items-center justify-between my-3">
            <p className="text-[#858585] text-lg font-semibold">
              Fifth month payment
            </p>
            <p className="text-black text-lg font-semibold">N10, 000</p>
          </span>
          <p className="text-right text-[#858585] my-4 text-lg font-semibold">
            Total{" "}
            <span className="text-lg text-black font-semibold">N50,000</span>
          </p>
        </div>
        <div className="flex flex-row">
          <div className="w-3 h-7 bg-[#0B7E78] rounded-tr-full rounded-br-full"></div>
          <div className="border-t-4 border-dashed border-[#0B7E78] w-full mt-3"></div>
          <div className="w-3 h-7 bg-[#0B7E78] rounded-tl-full rounded-bl-full"></div>
        </div>
        <div className="py-4 px-3">
          <span className="flex flex-row items-center justify-between my-3">
            <p className="text-[#858585] text-lg font-semibold">
              Guarantor 1 (5%)
            </p>
            <p className="text-black text-lg font-semibold">N10, 000</p>
          </span>
          <span className="flex flex-row items-center justify-between my-3">
            <p className="text-[#858585] text-lg font-semibold">
              Guarantor 2 (5%)
            </p>
            <p className="text-black text-lg font-semibold">N10, 000</p>
          </span>
          <div className="bg-[#EDF2F2] w-full px-2 py-3 rounded-md">
            <p className="text-[#858585] text-lg font-semibold">
              Payment discount
            </p>
            <p className="text-[#858585] my-2">
              The least down payment is 50% of your total purchased item, it can
              only be increase and not reduced. Drag to adjust
            </p>
          </div>
          <Button
            className="bg-[#0B7E78] w-full my-3 py-4 font-bold hover:bg-[#0B7E78]"
            size={"lg"}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
        <div className="flex flex-row items-center justify-between">
          {baseDesign.map((design, index) => (
            <div
              key={index}
              className="bg-[#0B7E78] w-6 h-4 rounded-tr-full rounded-tl-full"
            ></div>
          ))}
        </div>
      </div>
      <div
        className={`${
          overlay === true ? "block" : "hidden"
        } absolute w-full min-h-[992px] inset-0 bg-black/20 px-2`}
      >
        {walletBalance === 0 ? (
          <div className="w-[98%] min-h-6 bg-white rounded-md mt-[43rem] mx-auto px-3 py-6">
            <div className="w-12 h-12 rounded-full bg-[#FEF0EF] mx-auto flex flex-row items-center justify-center">
              <Image
                src="/FundImage.png"
                alt="fund-image"
                width={30}
                height={40}
                priority
              />
            </div>
            <h2 className="text-center text-lg text-balance text-black font-semibold">
              Insufficient balance
            </h2>
            <p className="text-center text-[#858585] font-sans font-semibold my-3">
              To carry on with this transaction you need N21,000 and your wallet
              balance is just{" "}
              <span className="text-black font-bold text-lg">N15,000</span>
            </p>
            <Button
              asChild
              className="w-full bg-[#0B7E78] hover:bg-[#0B7E78]"
              size={"lg"}
            >
              <Link href={"/wallet"}>Fund wallet</Link>
            </Button>
          </div>
        ) : (
          <div
            className={`${stnRequest === true ? "hidden" : "block"} ${
              sendRequest === true ? "hidden" : "block"
            } w-[98%] min-h-6 bg-white rounded-md mt-[41rem] mx-auto px-3 py-10`}
          >
            <div className="w-12 h-12 rounded-full bg-[#F6FEFE] mx-auto flex flex-row items-center justify-center">
              <CheckedPassIcon />
            </div>
            <h2 className="text-center text-lg text-balance text-black font-semibold">
              Get STN approval
            </h2>
            <p className="text-center text-[#858585] font-sans font-semibold my-3">
              Request an approval from your STN to proceed with purchase.
            </p>
            <Button
              className="w-full bg-[#0B7E78] hover:bg-[#0B7E78]"
              size={"lg"}
              onClick={handleStnRequest}
            >
              Request STN
            </Button>
          </div>
        )}
        <div
          className={`${
            stnRequest === true ? "block" : "hidden"
          } w-[98%] min-h-6 bg-white rounded-md mt-[30rem] mx-auto px-3 py-2`}
        >
          <DrawerPullIcon className={"mx-auto"} />
          <h2 className="text-lg text-black font-semibold my-5">My STN</h2>
          <div className="flex flex-row items-center justify-between gap-3 my-5">
            <div className="flex flex-row items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#ED0F0F]"></div>
              <div className="relative overflow-hidden w-12 h-12 rounded-full border-2 border-solid border-[#ED0F0F]">
                <Image
                  src={"/user.png"}
                  alt="user image"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <span>
                <p className="text-black text-lg font-semibold">
                  Adams Complex
                </p>
                <p className="text-[#858585] font-semibold">
                  STN ID:{" "}
                  <span className="text-balance text-black">283h37</span>
                </p>
              </span>
            </div>
            <Button
              className="bg-white text-[#0B7E78] hover:bg-white font-semibold border border-solid border-[#0B7E78]"
              onClick={handleSendRequest}
            >
              Send request
            </Button>
          </div>
          <div className="flex flex-row items-center justify-between gap-3 my-5">
            <div className="flex flex-row items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#F8C97A]"></div>
              <div className="relative overflow-hidden w-12 h-12 rounded-full border-2 border-solid border-[#F8C97A]">
                <Image
                  src={"/user.png"}
                  alt="user image"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <span>
                <p className="text-black text-lg font-semibold">
                  Adams Complex
                </p>
                <p className="text-[#858585] font-semibold">
                  STN ID:{" "}
                  <span className="text-balance text-black">283h37</span>
                </p>
              </span>
            </div>
            <Button className="bg-white text-[#0B7E78] hover:bg-white font-semibold border border-solid border-[#0B7E78]">
              Cancel request
            </Button>
          </div>
          <div className="flex flex-row items-center justify-between gap-3 my-5">
            <div className="flex flex-row items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#2CA519]"></div>
              <div className="relative overflow-hidden w-12 h-12 rounded-full border-2 border-solid border-[#2CA519]">
                <Image
                  src={"/user.png"}
                  alt="user image"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <span>
                <p className="text-black text-lg font-semibold">
                  Adams Complex
                </p>
                <p className="text-[#858585] font-semibold">
                  STN ID:{" "}
                  <span className="text-balance text-black">283h37</span>
                </p>
              </span>
            </div>
            <Button className="bg-white text-[#0B7E78] hover:bg-white font-semibold border border-solid border-[#0B7E78]">
              Request pending
            </Button>
          </div>
          <div className="flex flex-row items-center justify-between gap-3 my-5">
            <div className="flex flex-row items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#ED0F0F]"></div>
              <div className="relative overflow-hidden w-12 h-12 rounded-full border-2 border-solid border-[#ED0F0F]">
                <Image
                  src={"/user.png"}
                  alt="user image"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
              <span>
                <p className="text-black text-lg font-semibold">
                  Adams Complex
                </p>
                <p className="text-[#858585] font-semibold">
                  STN ID:{" "}
                  <span className="text-balance text-black">283h37</span>
                </p>
              </span>
            </div>
            <Button className="bg-white text-[#0B7E78] hover:bg-white font-semibold border border-solid border-[#0B7E78]">
              Send request
            </Button>
          </div>
          <Button className="w-full bg-[#0B7E78] py-7 hover:bg-[#0B7E78] my-7">
            Done
          </Button>
        </div>
        <div
          className={`${
            sendRequest === true ? "block" : "hidden"
          } w-[98%] min-h-6 bg-white rounded-md mt-[43rem] mx-auto px-3 py-10`}
        >
          {countDown === 0 ? (
            <>
              <div className="w-12 h-12 rounded-full bg-[#F6FEFE] mx-auto flex flex-row items-center justify-center gap-1">
                <CheckedPassIcon />
              </div>
              <h2 className="text-center text-lg text-balance text-black font-semibold">
                Confirmed
              </h2>
              <p className="text-center text-[#858585] font-sans font-semibold my-3">
                Approval confirmed, click the button below to proceed.
              </p>
            </>
          ) : (
            <>
              <div className="w-12 h-12 rounded-full bg-[#F6FEFE] mx-auto flex flex-row items-center justify-center gap-1">
                <div className="w-2 h-2 bg-[#0B7E78] rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-[#0B7E78] rounded-full animate-bounce -mt-4"></div>
                <div className="w-2 h-2 bg-[#0B7E78] rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-[#0B7E78] rounded-full animate-bounce"></div>
              </div>
              <h2 className="text-center text-lg text-balance text-black font-semibold">
                Your STN request
              </h2>
              <p className="text-center text-[#858585] font-sans font-semibold my-3">
                Your STN is yet to approve your request, please reachout to the
                person as soon as you can to proceed with your transaction
              </p>
            </>
          )}
          {
            countDown === 0 ? (
              <Button
                className="w-full bg-[#0B7E78] hover:bg-[#0B7E78]"
                size={"lg"}
                onClick={ handleDone }
              >
                Done
              </Button>
            ): (
              <Button
              className="w-full bg-[#0B7E78] hover:bg-[#0B7E78]"
              size={"lg"}
            >
              Retry
            </Button>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default Invoice;
