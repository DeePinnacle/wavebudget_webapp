import React from "react";
import Image from "next/image";
import {
  CompletedPayIcon,
  DefaultersIcon,
  DropDownIcon,
  FeedbackColoredIcon,
  FilterIcon,
  PayOffIcon,
  PendingKycIcon,
  ShieldIcon,
  StillPayingIcon,
} from "@/components/icons/icons";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { UserState } from "@/store/store";
const Users = () => {
  const { user } = UserState((state) => ({
    user: state.user,
  }));
  return (
    <>
      {user === "vendor" && (
        <div className="my-9 flex flex-col">
          <div className="grid grid-cols-3 items-center justify-between gap-4">
            <div className="w-full min-h-10 border border-solid border-[#E8EDE9] rounded-md px-3 py-5">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-3">
                  <ShieldIcon />
                  <span className="">
                    <p className="font-semibold text-sm">498</p>
                    <p className="text-sm text-[#858585]">Total KYC</p>
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
                  <PendingKycIcon />
                  <span className="">
                    <p className="font-semibold text-sm">43,556</p>
                    <p className="text-sm text-[#858585]">Pending KYC</p>
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
                  <FeedbackColoredIcon />
                  <span className="">
                    <p className="font-semibold text-sm">121</p>
                    <p className="text-sm text-[#858585]">Complaint/feedback</p>
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
          <div className="my-6 flex flex-row items-center justify-between">
            <h2 className="font-semibold">List of vendors</h2>
            <form>
              <div className="min-h-4 w-full p-2 flex flex-row gap-2 items-center">
                <input
                  type="text"
                  name="search"
                  placeholder="Search"
                  className="w-full outline-none rounded-md p-2 border border-solid border-[#E8EDE9] mr-8"
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <span className="flex flex-row items-center">
                      <div className="-full p-2 min-h-1">
                        <p className="font-semibold mr-9 text-sm w-full">
                          Filter by:{" "}
                        </p>
                      </div>
                      <Button
                        className="w-full text-[#858585]"
                        variant="outline"
                      >
                        All <FilterIcon className={"ml-3"} />
                      </Button>
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-44">
                    <DropdownMenuCheckboxItem className="text-[#858585]">
                      All
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem className="text-[#858585]">
                      Deposit
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem className="text-[#858585]">
                      Withdrawal
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <span className="flex flex-row items-center">
                      <div className="w-full p-2 min-h-1">
                        <p className="font-semibold mr-9 text-sm w-full">
                          Sort by:{" "}
                        </p>
                      </div>
                      <Button
                        className="w-full text-[#858585]"
                        variant="outline"
                      >
                        All <DropDownIcon className={"ml-3"} />
                      </Button>
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-44">
                    <DropdownMenuCheckboxItem className="text-[#858585]">
                      All
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem className="text-[#858585]">
                      Deposit
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem className="text-[#858585]">
                      Withdrawal
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </form>
          </div>
          {/* table section */}
          <div className="overflow-x-auto horizontal-bar">
            <table className="w-[160%] border-collapse rounded-md box-border">
              <tr>
                <th className="table-header">S/N</th>
                <th className="table-header">Name</th>
                <th className="table-header">ID</th>
                <th className="table-header">Phone number</th>
                <th className="table-header">Email address</th>
                <th className="table-header">State</th>
                <th className="table-header">Address</th>
                <th className="table-header">No. of sales</th>
                <th className="table-header">Sales volume</th>
                <th className="table-header">Action</th>
              </tr>
              <tr>
                <td className="table-data font-bold text-black">1</td>
                <td className="table-data">Wisdom umanah</td>
                <td className="table-data">1237690356</td>
                <td className="table-data">081768987548</td>
                <td className="table-data">qubicx72@gmail.com</td>
                <td className="table-data">Abuja F.C.T</td>
                <td className="table-data">No. 72 Adedamola....</td>
                <td className="table-data">94</td>
                <td className="table-data">N234,955,470</td>
                <td className="table-data">
                  <Button className="w-full bg-[#FEF2F2] border border-solid border-[#ED0F0F] text-[#ED0F0F] hover:bg-[#FEF2F2]">
                    Deactivate
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="table-data font-bold text-black">2</td>
                <td className="table-data">Wisdom umanah</td>
                <td className="table-data">1237690356</td>
                <td className="table-data">081768987548</td>
                <td className="table-data">qubicx72@gmail.com</td>
                <td className="table-data">Abuja F.C.T</td>
                <td className="table-data">No. 72 Adedamola....</td>
                <td className="table-data">94</td>
                <td className="table-data">N234,955,470</td>
                <td className="table-data">
                  <Button className="w-full bg-[#F6FEFE] border border-solid border-[#0B7E78] text-[#0B7E78] hover:bg-[#F6FEFE]">
                    Activate
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="table-data font-bold text-black">3</td>
                <td className="table-data">Wisdom umanah</td>
                <td className="table-data">1237690356</td>
                <td className="table-data">081768987548</td>
                <td className="table-data">qubicx72@gmail.com</td>
                <td className="table-data">Abuja F.C.T</td>
                <td className="table-data">No. 72 Adedamola....</td>
                <td className="table-data">94</td>
                <td className="table-data">N234,955,470</td>
                <td className="table-data">
                  <Button className="w-full bg-[#F6FEFE] border border-solid border-[#0B7E78] text-[#0B7E78] hover:bg-[#F6FEFE]">
                    Activate
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="table-data font-bold text-black">4</td>
                <td className="table-data">Wisdom umanah</td>
                <td className="table-data">1237690356</td>
                <td className="table-data">081768987548</td>
                <td className="table-data">qubicx72@gmail.com</td>
                <td className="table-data">Abuja F.C.T</td>
                <td className="table-data">No. 72 Adedamola....</td>
                <td className="table-data">94</td>
                <td className="table-data">N234,955,470</td>
                <td className="table-data">
                  <Button className="w-full bg-[#F6FEFE] border border-solid border-[#0B7E78] text-[#0B7E78] hover:bg-[#F6FEFE]">
                    Activate
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="table-data font-bold text-black">5</td>
                <td className="table-data">Wisdom umanah</td>
                <td className="table-data">1237690356</td>
                <td className="table-data">081768987548</td>
                <td className="table-data">qubicx72@gmail.com</td>
                <td className="table-data">Abuja F.C.T</td>
                <td className="table-data">No. 72 Adedamola....</td>
                <td className="table-data">94</td>
                <td className="table-data">N234,955,470</td>
                <td className="table-data">
                  <Button className="w-full bg-[#F6FEFE] border border-solid border-[#0B7E78] text-[#0B7E78] hover:bg-[#F6FEFE]">
                    Activate
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="table-data font-bold text-black">6</td>
                <td className="table-data">Wisdom umanah</td>
                <td className="table-data">1237690356</td>
                <td className="table-data">081768987548</td>
                <td className="table-data">qubicx72@gmail.com</td>
                <td className="table-data">Abuja F.C.T</td>
                <td className="table-data">No. 72 Adedamola....</td>
                <td className="table-data">94</td>
                <td className="table-data">N234,955,470</td>
                <td className="table-data">
                  <Button className="w-full bg-[#FEF2F2] border border-solid border-[#ED0F0F] text-[#ED0F0F] hover:bg-[#FEF2F2]">
                    Deactivate
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="table-data font-bold text-black">7</td>
                <td className="table-data">Wisdom umanah</td>
                <td className="table-data">1237690356</td>
                <td className="table-data">081768987548</td>
                <td className="table-data">qubicx72@gmail.com</td>
                <td className="table-data">Abuja F.C.T</td>
                <td className="table-data">No. 72 Adedamola....</td>
                <td className="table-data">94</td>
                <td className="table-data">N234,955,470</td>
                <td className="table-data">
                  <Button className="w-full bg-[#FEF2F2] border border-solid border-[#ED0F0F] text-[#ED0F0F] hover:bg-[#FEF2F2]">
                    Deactivate
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="table-data font-bold text-black">8</td>
                <td className="table-data">Wisdom umanah</td>
                <td className="table-data">1237690356</td>
                <td className="table-data">081768987548</td>
                <td className="table-data">qubicx72@gmail.com</td>
                <td className="table-data">Abuja F.C.T</td>
                <td className="table-data">No. 72 Adedamola....</td>
                <td className="table-data">94</td>
                <td className="table-data">N234,955,470</td>
                <td className="table-data">
                  <Button className="w-full bg-[#FEF2F2] border border-solid border-[#ED0F0F] text-[#ED0F0F] hover:bg-[#FEF2F2]">
                    Deactivate
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="table-data font-bold text-black">9</td>
                <td className="table-data">Wisdom umanah</td>
                <td className="table-data">1237690356</td>
                <td className="table-data">081768987548</td>
                <td className="table-data">qubicx72@gmail.com</td>
                <td className="table-data">Abuja F.C.T</td>
                <td className="table-data">No. 72 Adedamola....</td>
                <td className="table-data">94</td>
                <td className="table-data">N234,955,470</td>
                <td className="table-data">
                  <Button className="w-full bg-[#F6FEFE] border border-solid border-[#0B7E78] text-[#0B7E78] hover:bg-[#F6FEFE]">
                    Activate
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="table-data font-bold text-black">10</td>
                <td className="table-data">Wisdom umanah</td>
                <td className="table-data">1237690356</td>
                <td className="table-data">081768987548</td>
                <td className="table-data">qubicx72@gmail.com</td>
                <td className="table-data">Abuja F.C.T</td>
                <td className="table-data">No. 72 Adedamola....</td>
                <td className="table-data">94</td>
                <td className="table-data">N234,955,470</td>
                <td className="table-data">
                  <Button className="w-full bg-[#FEF2F2] border border-solid border-[#ED0F0F] text-[#ED0F0F] hover:bg-[#FEF2F2]">
                    Deactivate
                  </Button>
                </td>
              </tr>
            </table>
          </div>
          <div className="pagination flex justify-end my-3">
            <ul className="flex flex-row gap-4 items-center">
              <li className="px-3 py-2 border border-solid border-[#E8EDE9] text-[#858585] rounded-md cursor-pointer">
                1
              </li>
              <li className="px-3 py-2 border border-solid border-[#E8EDE9] text-[#858585] rounded-md cursor-pointer">
                2
              </li>
              <li className="px-3 py-2 border border-solid border-[#E8EDE9] text-[#858585] rounded-md cursor-pointer">
                3
              </li>
              <li className="px-3 py-2 border border-solid border-[#E8EDE9] text-[#858585] rounded-md cursor-pointer">
                ...
              </li>
              <li className="px-3 py-2 border border-solid border-[#E8EDE9] text-[#858585] rounded-md cursor-pointer">
                48
              </li>
              <li className="px-3 py-2 border border-solid border-[#E8EDE9] text-[#858585] rounded-md cursor-pointer">
                49
              </li>
              <li className="px-3 py-2 border border-solid border-[#E8EDE9] text-[#858585] rounded-md cursor-pointer">
                50
              </li>
            </ul>
          </div>
        </div>
      )}
      {user === "buyer" && (
        <div className="my-9 flex flex-col">
          <div className="w-full min-h-2 px-5 py-4 bg-white grid grid-cols-4 items-center justify-between gap-4 border border-solid border-[#E8EDE9] rounded-sm mb-5">
            <div className="w-full min-h-2 border-r border-solid border-[#E8EDE9]">
              <span className="flex flex-row gap-3 items-center">
                <span className="flex flex-row items-baseline gap-2">
                  <DefaultersIcon />
                  <p className="font-semibold">498</p>
                </span>
                <p className="text-xs text-[#858585] font-semibold">
                  Total
                  <br />
                  defaulters
                </p>
              </span>
            </div>
            <div className="w-full min-h-2 border-r border-solid border-[#E8EDE9]">
              <span className="flex flex-row gap-3 items-center">
                <span className="flex flex-row items-baseline gap-2">
                  <StillPayingIcon />
                  <p className="font-semibold">498</p>
                </span>
                <p className="text-xs text-[#858585] font-semibold">
                  Still paying
                  <br />
                  customers
                </p>
              </span>
            </div>
            <div className="w-full min-h-2 border-r border-solid border-[#E8EDE9]">
              <span className="flex flex-row gap-3 items-center">
                <span className="flex flex-row items-baseline gap-2">
                  <CompletedPayIcon />
                  <p className="font-semibold">498</p>
                </span>
                <p className="text-xs text-[#858585] font-semibold">
                  Completed
                  <br />
                  payment customers
                </p>
              </span>
            </div>
            <div className="w-full min-h-2 border-r border-solid border-[#E8EDE9]">
              <span className="flex flex-row gap-3 items-center">
                <span className="flex flex-row items-baseline gap-2">
                  <PayOffIcon />
                  <p className="font-semibold">498</p>
                </span>
                <p className="text-xs text-[#858585] font-semibold">
                  Pay off
                  <br />
                  customers
                </p>
              </span>
            </div>
          </div>
          <div className="grid grid-cols-3 items-center justify-between gap-4">
            <div className="w-full min-h-10 border border-solid border-[#E8EDE9] rounded-md px-3 py-5">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-3">
                  <ShieldIcon />
                  <span className="">
                    <p className="font-semibold text-sm">498</p>
                    <p className="text-sm text-[#858585]">Total KYC</p>
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
                  <PendingKycIcon />
                  <span className="">
                    <p className="font-semibold text-sm">43,556</p>
                    <p className="text-sm text-[#858585]">Pending KYC</p>
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
                  <FeedbackColoredIcon />
                  <span className="">
                    <p className="font-semibold text-sm">121</p>
                    <p className="text-sm text-[#858585]">Complaint/feedback</p>
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
          <div className="my-6 flex flex-row items-center justify-between">
            <h2 className="font-semibold">List of buyers</h2>
            <form>
              <div className="min-h-4 w-full p-2 flex flex-row gap-2 items-center">
                <input
                  type="text"
                  name="search"
                  placeholder="Search"
                  className="w-full outline-none rounded-md p-2 border border-solid border-[#E8EDE9] mr-8"
                />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <span className="flex flex-row items-center">
                      <div className="-full p-2 min-h-1">
                        <p className="font-semibold mr-9 text-sm w-full">
                          Filter by:{" "}
                        </p>
                      </div>
                      <Button
                        className="w-full text-[#858585]"
                        variant="outline"
                      >
                        All <FilterIcon className={"ml-3"} />
                      </Button>
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-44">
                    <DropdownMenuCheckboxItem className="text-[#858585]">
                      All
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem className="text-[#858585]">
                      Deposit
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem className="text-[#858585]">
                      Withdrawal
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <span className="flex flex-row items-center">
                      <div className="w-full p-2 min-h-1">
                        <p className="font-semibold mr-9 text-sm w-full">
                          Sort by:{" "}
                        </p>
                      </div>
                      <Button
                        className="w-full text-[#858585]"
                        variant="outline"
                      >
                        All <DropDownIcon className={"ml-3"} />
                      </Button>
                    </span>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-44">
                    <DropdownMenuCheckboxItem className="text-[#858585]">
                      All
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem className="text-[#858585]">
                      Deposit
                    </DropdownMenuCheckboxItem>
                    <DropdownMenuCheckboxItem className="text-[#858585]">
                      Withdrawal
                    </DropdownMenuCheckboxItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </form>
          </div>
          <div className="overflow-x-auto horizontal-bar">
            {/* table section */}
            <table className="w-[170%] border-collapse rounded-md box-border">
              <tr>
                <th className="table-header">S/N</th>
                <th className="table-header">Name</th>
                <th className="table-header">STN ID</th>
                <th className="table-header">Phone number</th>
                <th className="table-header">Email address</th>
                <th className="table-header">STN Status</th>
                <th className="table-header">Total purchase</th>
                <th className="table-header">Purchase volume</th>
                <th className="table-header">Purchase medium</th>
                <th className="table-header">Purchase type</th>
                <th className="table-header">Action</th>
              </tr>
              <tr>
                <td className="table-data font-bold text-black">1</td>
                <td className="table-data">Wisdom umanah</td>
                <td className="table-data">1237690356</td>
                <td className="table-data">081768987548</td>
                <td className="table-data">qubicx72@gmail.com</td>
                <td className="table-data">Defaulting</td>
                <td className="table-data">N463,785</td>
                <td className="table-data">94</td>
                <td className="table-data">e-commerce</td>
                <td className="table-data">Installment</td>
                <td className="table-data">
                  <Button className="w-full bg-[#FEF2F2] border border-solid border-[#ED0F0F] text-[#ED0F0F] hover:bg-[#FEF2F2]">
                    Deactivate
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="table-data font-bold text-black">2</td>
                <td className="table-data">Wisdom umanah</td>
                <td className="table-data">1237690356</td>
                <td className="table-data">081768987548</td>
                <td className="table-data">qubicx72@gmail.com</td>
                <td className="table-data">Defaulting</td>
                <td className="table-data">N463,785</td>
                <td className="table-data">94</td>
                <td className="table-data">e-commerce</td>
                <td className="table-data">Installment</td>
                <td className="table-data">
                  <Button className="w-full bg-[#F6FEFE] border border-solid border-[#0B7E78] text-[#0B7E78] hover:bg-[#F6FEFE]">
                    Activate
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="table-data font-bold text-black">3</td>
                <td className="table-data">Wisdom umanah</td>
                <td className="table-data">1237690356</td>
                <td className="table-data">081768987548</td>
                <td className="table-data">qubicx72@gmail.com</td>
                <td className="table-data">Defaulting</td>
                <td className="table-data">N463,785</td>
                <td className="table-data">94</td>
                <td className="table-data">e-commerce</td>
                <td className="table-data">Installment</td>
                <td className="table-data">
                  <Button className="w-full bg-[#F6FEFE] border border-solid border-[#0B7E78] text-[#0B7E78] hover:bg-[#F6FEFE]">
                    Activate
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="table-data font-bold text-black">4</td>
                <td className="table-data">Wisdom umanah</td>
                <td className="table-data">1237690356</td>
                <td className="table-data">081768987548</td>
                <td className="table-data">qubicx72@gmail.com</td>
                <td className="table-data">Defaulting</td>
                <td className="table-data">N463,785</td>
                <td className="table-data">94</td>
                <td className="table-data">e-commerce</td>
                <td className="table-data">Installment</td>
                <td className="table-data">
                  <Button className="w-full bg-[#F6FEFE] border border-solid border-[#0B7E78] text-[#0B7E78] hover:bg-[#F6FEFE]">
                    Activate
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="table-data font-bold text-black">5</td>
                <td className="table-data">Wisdom umanah</td>
                <td className="table-data">1237690356</td>
                <td className="table-data">081768987548</td>
                <td className="table-data">qubicx72@gmail.com</td>
                <td className="table-data">Defaulting</td>
                <td className="table-data">N463,785</td>
                <td className="table-data">94</td>
                <td className="table-data">e-commerce</td>
                <td className="table-data">Installment</td>
                <td className="table-data">
                  <Button className="w-full bg-[#F6FEFE] border border-solid border-[#0B7E78] text-[#0B7E78] hover:bg-[#F6FEFE]">
                    Activate
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="table-data font-bold text-black">6</td>
                <td className="table-data">Wisdom umanah</td>
                <td className="table-data">1237690356</td>
                <td className="table-data">081768987548</td>
                <td className="table-data">qubicx72@gmail.com</td>
                <td className="table-data">Defaulting</td>
                <td className="table-data">N463,785</td>
                <td className="table-data">94</td>
                <td className="table-data">Instore shopping</td>
                <td className="table-data">Full payment</td>
                <td className="table-data">
                  <Button className="w-full bg-[#FEF2F2] border border-solid border-[#ED0F0F] text-[#ED0F0F] hover:bg-[#FEF2F2]">
                    Deactivate
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="table-data font-bold text-black">7</td>
                <td className="table-data">Wisdom umanah</td>
                <td className="table-data">1237690356</td>
                <td className="table-data">081768987548</td>
                <td className="table-data">qubicx72@gmail.com</td>
                <td className="table-data">Defaulting</td>
                <td className="table-data">N463,785</td>
                <td className="table-data">94</td>
                <td className="table-data">Instore shopping</td>
                <td className="table-data">Full payment</td>
                <td className="table-data">
                  <Button className="w-full bg-[#FEF2F2] border border-solid border-[#ED0F0F] text-[#ED0F0F] hover:bg-[#FEF2F2]">
                    Deactivate
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="table-data font-bold text-black">8</td>
                <td className="table-data">Wisdom umanah</td>
                <td className="table-data">1237690356</td>
                <td className="table-data">081768987548</td>
                <td className="table-data">qubicx72@gmail.com</td>
                <td className="table-data">Defaulting</td>
                <td className="table-data">N463,785</td>
                <td className="table-data">94</td>
                <td className="table-data">Instore shopping</td>
                <td className="table-data">Full payment</td>
                <td className="table-data">
                  <Button className="w-full bg-[#FEF2F2] border border-solid border-[#ED0F0F] text-[#ED0F0F] hover:bg-[#FEF2F2]">
                    Deactivate
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="table-data font-bold text-black">9</td>
                <td className="table-data">Wisdom umanah</td>
                <td className="table-data">1237690356</td>
                <td className="table-data">081768987548</td>
                <td className="table-data">qubicx72@gmail.com</td>
                <td className="table-data">Defaulting</td>
                <td className="table-data">N463,785</td>
                <td className="table-data">94</td>
                <td className="table-data">Instore shopping</td>
                <td className="table-data">Full payment</td>
                <td className="table-data">
                  <Button className="w-full bg-[#F6FEFE] border border-solid border-[#0B7E78] text-[#0B7E78] hover:bg-[#F6FEFE]">
                    Activate
                  </Button>
                </td>
              </tr>
              <tr>
                <td className="table-data font-bold text-black">10</td>
                <td className="table-data">Wisdom umanah</td>
                <td className="table-data">1237690356</td>
                <td className="table-data">081768987548</td>
                <td className="table-data">qubicx72@gmail.com</td>
                <td className="table-data">Defaulting</td>
                <td className="table-data">N463,785</td>
                <td className="table-data">94</td>
                <td className="table-data">Instore shopping</td>
                <td className="table-data">Full payment</td>
                <td className="table-data">
                  <Button className="w-full bg-[#FEF2F2] border border-solid border-[#ED0F0F] text-[#ED0F0F] hover:bg-[#FEF2F2]">
                    Deactivate
                  </Button>
                </td>
              </tr>
            </table>
          </div>
          <div className="pagination flex justify-end my-3">
            <ul className="flex flex-row gap-4 items-center">
              <li className="px-3 py-2 border border-solid border-[#E8EDE9] text-[#858585] rounded-md cursor-pointer">
                1
              </li>
              <li className="px-3 py-2 border border-solid border-[#E8EDE9] text-[#858585] rounded-md cursor-pointer">
                2
              </li>
              <li className="px-3 py-2 border border-solid border-[#E8EDE9] text-[#858585] rounded-md cursor-pointer">
                3
              </li>
              <li className="px-3 py-2 border border-solid border-[#E8EDE9] text-[#858585] rounded-md cursor-pointer">
                ...
              </li>
              <li className="px-3 py-2 border border-solid border-[#E8EDE9] text-[#858585] rounded-md cursor-pointer">
                48
              </li>
              <li className="px-3 py-2 border border-solid border-[#E8EDE9] text-[#858585] rounded-md cursor-pointer">
                49
              </li>
              <li className="px-3 py-2 border border-solid border-[#E8EDE9] text-[#858585] rounded-md cursor-pointer">
                50
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Users;
