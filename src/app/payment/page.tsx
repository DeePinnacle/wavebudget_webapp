"use client";
import { MouseEvent } from "react";
import {
  BackIcon,
  BlurChecked,
  CheckedColored,
  DrawerPullIcon,
  UserColoredGroup,
  UserGroupIcon,
  UserIconRounded,
} from "../../components/icons/icons";
import { useRouter } from "next/navigation";
import { useState  } from "react";
import Image from "next/image";
import MobileMenu  from '../../components/ui/mobile-menu'
import InstoreModal  from '../../components/ui/instore-modal'
import { Button } from "@/components/ui/button";

const Payment = () => {
    const [ bills, setBills ] = useState([{},{},{},{},{},{},{}])
    const [overlay, setOverlay] = useState(false);
    const [ billModal, setBillModal ] = useState(false)

    const handleBillModal = () =>{
        setBillModal(!billModal)
    }

    const handleOverlay = () => {
      setOverlay(!overlay);
    };  
  const navigation = useRouter();
  const handleBack = () => {
    navigation.back();
  };
  
  const handleBillModalClose = (e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    if(e.currentTarget.classList[1] ==='close'){
        setBillModal(!billModal)
    }
  }

  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <div className="bg-white w-full h-32 rounded-br-3xl rounded-bl-3xl flex flex-row items-center">
        <div
          className="bg-white w-10 h-10 rounded-full flex items-center justify-center"
          onClick={handleBack}
        >
          <BackIcon className={"text-[#0B7E78] font-bold w-8 h-8"} />
        </div>
        <div className="w-11/12 mx-auto ml-20">
          <p className="text-black text-center text-2xl font-semibold font-montserrat w-1/2">
            Payment
          </p>
        </div>
      </div>
      <div className="bg-white w-[98%] min-h-4 mx-auto my-8 py-4 px-2 rounded-2xl">
        <h2 className="font-semibold text-lg">Outstanding payment</h2>
        <div className="pt-6 pb-32">
            {
                bills.map((bill, index) => (
                    <div key={ index } className="flex flex-row gap-2 items-center" onClick={ handleBillModal }>
                        <div className="relative w-14 h-14 overflow-hidden rounded-md my-2">
                            <Image src={"/Phone.png"} alt="phone image" fill priority className="object-cover"  />
                        </div>
                        <div className="w-11/12 p-2">
                            <p>Adams Store</p>
                            <p>items: <span>Rice, beans, garri, indomie...</span></p>
                            <div className="flex flex-row items-center justify-between gap-2 mt-2">
                                <div className="w-1/2 h-2 bg-[#13DCD2] rounded-full">
                                    <div className="w-1/3 h-2 bg-[#0FAEA5] rounded-full"></div>
                                </div>
                                <p className='text-[#858585] text-xs'>N24,000 outstanding</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className={`${ billModal === true ? 'block' : 'hidden'} close absolute w-full h-[1200px] bg-black/20 inset-0`} onClick={ (e) => { handleBillModalClose(e) } }>
            <div className="w-[98%] mx-auto min-h-10 bg-white rounded-xl px-3 py-10 mt-36">
                <DrawerPullIcon className={"mx-auto"} />
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                    <Image src={"/Phone.png"} alt="Phone image" fill priority className="object-cover" />
                </div>
                <p className="font-bold text-lg gap-y-3 mt-2 mb-8">Adams Store</p>
                <div className="grid grid-cols-2">
                    <span className="text-[#858585] font-semibold">
                        Item cost
                        <p className="text-black">5,000</p>
                    </span>
                    <span className="text-[#858585] font-semibold">
                        Item cost
                        <p className="text-black">5,000</p>
                    </span>
                    <span className="mt-5 text-[#858585] font-semibold">
                        Item cost
                        <p className="text-black">5,000</p>
                    </span>
                    <span className="mt-5 text-[#858585] font-semibold">
                        Item cost
                        <p className="text-black">5,000</p>
                    </span>
                </div>
                <p className="text-[#858585] mt-8">Deposit Level</p>
                <div className="w-full h-3 bg-[#13DCD2] rounded-full">
                    <div className="w-3/4 h-3 bg-[#0FAEA5] rounded-full"></div>
                </div>
                <div className="bg-[#F9FBFB] w-11/12 min-h-3 mx-auto my-8 rounded-lg px-2 py-6 border border-solid border-[#EDF2F2]">
                    <div className="flex flex-row items-center justify-between my-2">
                        <span className="text-[#858585]">
                            First month payment
                            <p>(24/26/24)</p>
                        </span>
                        <p className="flex flex-row gap-2 items-center font-semibold">
                            N10,000
                            <CheckedColored />
                        </p>
                    </div>
                    <div className="flex flex-row items-center justify-between my-2">
                        <span className="text-[#858585]">
                            Second month payment
                            <p>(24/26/24)</p>
                        </span>
                        <p className="flex flex-row gap-2 items-center font-semibold">
                            N10,000
                            <CheckedColored />
                        </p>
                    </div>
                    <div className="flex flex-row items-center justify-between my-2">
                        <span className="text-[#858585]">
                            Third month payment
                            <p>(24/26/24)</p>
                        </span>
                        <p className="flex flex-row gap-2 items-center font-semibold">
                            N10,000
                            <CheckedColored />
                        </p>
                    </div>
                    <div className="flex flex-row items-center justify-between my-2">
                        <span className="text-[#858585]">
                            Fourth month payment
                            <p>(24/26/24)</p>
                        </span>
                        <p className="flex flex-row gap-2 items-center font-semibold">
                            N10,000
                            <CheckedColored />
                        </p>
                    </div>
                    <div className="flex flex-row items-center justify-between my-2">
                        <span className="text-[#858585]">
                            Fifth month payment
                            <p>(24/26/24)</p>
                        </span>
                        <p className="flex flex-row gap-2 items-center font-semibold">
                            N10,000
                            <BlurChecked />
                        </p>
                    </div>
                    <p className="text-right font-semibold text-[#858585]">Unresolved debt <span className="font-bold text-black"> N10,000</span></p>
                </div>
                <Button className="w-full bg-[#0B7E78] py-5 hover:bg-[#0B7E78]" size={"lg"} onClick={ (e)=> { e.preventDefault(); e.stopPropagation()} }>Resolve debt now</Button>
            </div>
        </div>
      </div>
      <InstoreModal overlay={ overlay } />
      <MobileMenu overlay={ overlay } handleOverlay={ handleOverlay }/>
    </div>
  );
};

export default Payment;
