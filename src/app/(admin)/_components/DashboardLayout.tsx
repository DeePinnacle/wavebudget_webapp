import {
  ActiveHome,
  UserIcon,
  ArrowUpIcon,
  VendorIcon,
  BuyerIcon,
  TransactionIcon,
  NotificationIcon,
  ActionIcon,
  FeedbackIcon,
  LogOutIcon,
  BlurDashboardHomeIcon,
  ColoredUserDashIcon,
  ColoredTransIcon,
  ColoredNotificationIcon,
  ColoredPanelIcon,
  ColoredFeedbackIcon,
  ColoredVendorIcon,
  ColoredBuyerIcon,
  GrayNotificationIcon,
} from "@/components/icons/icons";
import { UserState } from "@/store/store";
import Image from "next/image";
import { useState, MouseEvent } from "react";

interface DashboardConfig {
  className?: string,
  children: React.ReactNode,
  handleClick: (e: React.MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => void,
  // handleUser: (e: React.MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => void,
  mode?: string
  // user?: string
}

const DashboardLayout = ({
  className,
  children,
  handleClick,
  // handleUser,
  mode,
  // user
}: DashboardConfig) => {
  const { user, handleState } = UserState((state)=>({
    user: state.user,
    handleState: state.handleState
  }))

  const [ toggle, setToggle ] = useState(false)

  const handleUserClick = (e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => {
    setToggle(!toggle)
    handleClick(e)
  }
  return (
    <div className="w-full bg-white">
      {/* dashboard header */}
      <div className="w-full min-h-7 py-6 px-4 flex flex-row items-center justify-between border-b border-solid border-[#E8EDE9]">
        <div className="flex flex-row items-center justify-between gap-12">
          {/* image logo */}
          <Image
            src={"/wave-logo-green.png"}
            alt="wave logo"
            width={80}
            height={90}
            priority
          />
          {/* header text */}
          <span>
            <p className="text-[#858585] text-sm">Welcome Admin</p>
            <p className="font-semibold">Wavebudget Admin</p>
          </span>
        </div>
        <div className="flex flex-row items-center justify-between gap-2">
          <div className="w-5 h-5 bg-[#0B7E78] rounded-full"></div>
          <p className="text-[#858585]">Adam CEO</p>
        </div>
      </div>
      {/* dashboard header ends here */}

      {/* dashboard sidebar and content */}
      <div className="w-full min-h-6 flex flex-row">
        {/* side bar */}
        <div className="w-[18%] px-4 py-12 border-r border-solid border-[#E8EDE9] min-h-screen flex flex-row">
          {/* side bar content */}
          <ul className="w-full">
            <li className={`${ mode ==='home' ? 'bg-[#F6FEFE] p-2 border border-solid border-[#0B7E78] rounded-md' : '' } flex flex-row items-center gap-3 w-full my-8 cursor-pointer`} id={'home'} onClick={ (e)=>{ handleClick(e) } }>
              {
                mode === 'home' ? (
                  <ActiveHome />
                ): (
                  <BlurDashboardHomeIcon />
                ) 
              }
              <span className={`${ mode ==='home' ? 'text-[#0B7E78]': 'text-[#858585]' } text-sm`}>Home</span>
            </li>
            <li className={`${ mode ==='users' ? 'bg-[#F6FEFE] p-2 border border-solid border-[#0B7E78] rounded-md' : '' } flex flex-row items-center gap-3 w-full my-8 cursor-pointer`} id={"users"} onClick={ (e)=>{ 
              if(mode !== 'users' && toggle !== false){
                setToggle(false)
                handleUserClick(e)
              }else{
                handleUserClick(e)
              }
            } }>
              {
                mode ==='users' ? (
                  <ColoredUserDashIcon />
                ): (
                  <UserIcon />
                )
              }
              <span className={`${ mode ==='users' ? 'text-[#0B7E78]': 'text-[#858585]' } text-sm`}>Users</span>
              <ArrowUpIcon className={"ml-16 !text-red-400"} />
            </li>
            <ul className={`w-3/4 ml-10 my-5 ${ toggle === false ? 'hidden': 'block' } ${ mode !== 'users' ? 'hidden' : 'block' }`}>
              <li className={`flex flex-row items-center my-6 cursor-pointer`} id={"vendor"} onClick={ (e)=>{ handleState(e.currentTarget.id) } }>
                {
                  user === 'vendor' ? (
                    <ColoredVendorIcon />
                  ): (
                    <VendorIcon />
                  )
                }
                <span className={`${ user === "vendor" ? 'text-[#0B7E78]': 'text-[#858585]' } ml-4`}>Vendor</span>
              </li>
              <li className="flex flex-row items-center cursor-pointer" id={"buyer"} onClick={ (e)=>{ handleState(e.currentTarget.id) } }>
                {
                  user ==='buyer' ? (
                    <ColoredBuyerIcon />
                  ): (
                    <BuyerIcon />
                  )
                }
                <span className={`${ user === "buyer" ? 'text-[#0B7E78]': 'text-[#858585]' } ml-4`}>Buyer</span>
              </li>
            </ul>
            <li className={`${ mode ==='transaction' ? 'bg-[#F6FEFE] p-2 border border-solid border-[#0B7E78] rounded-md' : '' } flex flex-row items-center gap-3 w-full my-8 cursor-pointer`} id={"transaction"} onClick={(e)=>{handleClick(e)}}>
              {
                mode === 'transaction' ? (
                  <ColoredTransIcon />
                ): ( 
                  <TransactionIcon />
                )
              }
              <span className={`${ mode ==='transaction' ? 'text-[#0B7E78]': 'text-[#858585]' } text-sm`}>
                Transaction Volume
              </span>
            </li>
            <li className={` ${ mode ==='notification' ? 'bg-[#F6FEFE] p-2 border border-solid border-[#0B7E78] rounded-md' : '' } flex flex-row items-center gap-3 w-full p-2 my-6 cursor-pointer`} id={"notification"} onClick={(e)=>{handleClick(e)}}>
              {
                mode === 'notification' ? (
                  <ColoredNotificationIcon />
                ): (
                  <GrayNotificationIcon />
                )
              }
              <span className={`${ mode ==='notification' ? 'text-[#0B7E78]': 'text-[#858585]' } text-sm`}>
                Push notification
              </span>
            </li>
            <li className={`${ mode ==='action' ? 'bg-[#F6FEFE] p-2 border border-solid border-[#0B7E78] rounded-md' : ''} flex flex-row items-center gap-3 w-full p-2 my-6 cursor-pointer`} id={"action"} onClick={(e)=>{handleClick(e)}}>
              {
                mode === 'action' ? (
                  <ColoredPanelIcon />
                ): (
                  <ActionIcon />
                )
              }
              <span className={`${ mode ==='action' ? 'text-[#0B7E78]': 'text-[#858585]' } text-sm`}>
                Action panel
              </span>
            </li>
            <li className={`${ mode ==='feedback' ? 'bg-[#F6FEFE] p-2 border border-solid border-[#0B7E78] rounded-md': '' } flex flex-row items-center gap-3 w-full p-2 my-6 cursor-pointer`} id={"feedback"} onClick={(e)=>{handleClick(e)}}>
              {
                mode ==='feedback' ? (
                  <ColoredFeedbackIcon />
                ): (
                  <FeedbackIcon />
                )
              }
              <span className={`${ mode ==='feedback' ? 'text-[#0B7E78]': 'text-[#858585]' } text-sm`}>
                Feedback and complaints
              </span>
            </li>
            <li className="flex flex-row items-center gap-3 w-full p-2 mt-36">
              <LogOutIcon />
              <span className="text-[#858585] text-sm font-[500]">Log out</span>
            </li>
          </ul>
        </div>
        {/* content */}
        <div className="w-[80%] p-3">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
