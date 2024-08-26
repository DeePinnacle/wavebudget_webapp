import {
  ArrowDownIcon,
  ChevronDownIcon,
  CompletedPayIcon,
  CurrencyIcon,
  DefaultersIcon,
  DropDownIcon,
  EcommerceIcon,
  FeedbackColoredIcon,
  FilterIcon,
  LoanIcon,
  MoneyIcon,
  PayOffIcon,
  PendingKycIcon,
  ShieldIcon,
  StillPayingIcon,
  TotalInstoreIcon,
} from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import React from "react";

import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Transactions = () => {
  return (
    <div className="my-9 flex flex-col">
      <div className="w-full min-h-2 py-4 bg-white grid grid-cols-2 items-center justify-between gap-3">
        <div className="w-full min-h-3 px-2 py-3 border border-solid border-[#DBE1E1] rounded-sm">
          <div className="flex flex-row items-center justify-between">
            <p className="font-semibold">Total sales volume</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="text-[#858585]" variant="outline">
                  Weeks <ChevronDownIcon className={"ml-3"} />
                </Button>
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
          <div className="my-3 w-full min-h-3 flex flex-row items-center gap-3">
            <div className="w-full flex flex-row items-center gap-1 box-border">
              <div className="p-2 flex flex-row items-center gap-3 border-r border-solid border-[#E8EDE9] box-border">
                <>
                  <TotalInstoreIcon />
                  <span className="">
                    <p className="font-semibold text-xs">N82,456,500</p>
                    <p className="text-xs text-[#858585]">Instore shopping</p>
                  </span>
                </>
                <div className="flex flex-row items-center gap-3 mt-4">
                  <div className="w-9 h-7 rounded-md bg-[#F6FEFE] flex flex-row items-center justify-center">
                    <p className="text-[#0B7E78] text-xs">20+</p>
                  </div>
                  <p className="text-[#858585] text-xs">in the past weeks</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row items-center gap-1 box-border">
              <div className="flex flex-row items-center gap-3">
                <>
                  <EcommerceIcon />
                  <span className="">
                    <p className="font-semibold text-xs">N54,450,050</p>
                    <p className="text-xs text-[#858585]">E-commerce website</p>
                  </span>
                </>
                <div className="flex flex-row items-center gap-3 mt-4">
                  <div className="w-9 h-7 rounded-md bg-[#F6FEFE] flex flex-row items-center justify-center">
                    <p className="text-[#0B7E78] text-xs">20+</p>
                  </div>
                  <p className="text-[#858585] text-xs">in the past weeks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full min-h-3 px-2 py-3 border border-solid border-[#DBE1E1] rounded-sm">
          <div className="flex flex-row items-center justify-between">
            <p className="font-semibold">Receivables</p>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="text-[#858585]" variant="outline">
                  Weeks <ChevronDownIcon className={"ml-3"} />
                </Button>
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
          <div className="my-3 w-full min-h-3 flex flex-row items-center gap-3">
            <div className="w-full flex flex-row items-center gap-1 box-border">
              <div className="p-2 flex flex-row items-center gap-3 border-r border-solid border-[#E8EDE9] box-border">
                <>
                  <TotalInstoreIcon />
                  <span className="">
                    <p className="font-semibold text-xs">N456,500</p>
                    <p className="text-xs text-[#858585]">Instore shopping</p>
                  </span>
                </>
                <div className="flex flex-row items-center gap-3 mt-4">
                  <div className="w-9 h-7 rounded-md bg-[#F6FEFE] flex flex-row items-center justify-center">
                    <p className="text-[#0B7E78] text-xs">20+</p>
                  </div>
                  <p className="text-[#858585] text-xs">in the past weeks</p>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-row items-center gap-1 box-border">
              <div className="flex flex-row items-center gap-3">
                <>
                  <EcommerceIcon />
                  <span className="">
                    <p className="font-semibold text-xs">N543,805</p>
                    <p className="text-xs text-[#858585]">E-commerce website</p>
                  </span>
                </>
                <div className="flex flex-row items-center gap-3 mt-4">
                  <div className="w-9 h-7 rounded-md bg-[#F6FEFE] flex flex-row items-center justify-center">
                    <p className="text-[#0B7E78] text-xs">20+</p>
                  </div>
                  <p className="text-[#858585] text-xs">in the past weeks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 items-center justify-between gap-4">
        <div className="w-full min-h-10 border border-solid border-[#E8EDE9] rounded-md px-3 py-5">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row items-center gap-3">
              <MoneyIcon />
              <span className="">
                <p className="font-semibold text-sm">N2,654,485</p>
                <p className="text-sm text-[#858585]">Received amount</p>
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
              <LoanIcon />
              <span className="">
                <p className="font-semibold text-sm">N8,945,985</p>
                <p className="text-sm text-[#858585]">Loan disbursed</p>
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
              <CurrencyIcon />
              <span className="">
                <p className="font-semibold text-sm">N950,435</p>
                <p className="text-sm text-[#858585]">Gross profit</p>
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
        <h2 className="font-semibold">Transaction list</h2>
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
                  <Button className="w-full text-[#858585]" variant="outline">
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
                  <Button className="w-full text-[#858585]" variant="outline">
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
        <table className="w-[200%] border-collapse rounded-md box-border">
            <tr>
            <th className="table-header">S/N</th>
            <th className="table-header">Name</th>
            <th className="table-header">Cost of goods</th>
            <th className="table-header">Purchase medium</th>
            <th className="table-header">Purchase type</th>
            <th className="table-header">Price</th>
            <th className="table-header">Installment price</th>
            <th className="table-header">Down payment</th>
            <th className="table-header">Receivables</th>
            <th className="table-header">Loan disbursed</th>
            <th className="table-header">Gross profit</th>
            <th className="table-header">Payment status</th>
            </tr>
            <tr>
            <td className="table-data font-bold text-black">1</td>
            <td className="table-data">Wisdom umanah</td>
            <td className="table-data">N42,000</td>
            <td className="table-data">E-commerce</td>
            <td className="table-data">Full payment</td>
            <td className="table-data">N842,945</td>
            <td className="table-data">N25,000</td>
            <td className="table-data">N50,000</td>
            <td className="table-data">40,000</td>
            <td className="table-data">80,000</td>
            <td className="table-data">150,000</td>
            <td className="table-data">
                <div className="w-full bg-[#F6F6FE] min-h-2 px-2 py-3 flex flex-row items-center justify-center rounded-md">
                    <p className='text-[#1165E2] text-base font-semibold'>Cleared</p>
                </div>
            </td>
            </tr>
            <tr>
            <td className="table-data font-bold text-black">2</td>
            <td className="table-data">Wisdom umanah</td>
            <td className="table-data">N42,000</td>
            <td className="table-data">E-commerce</td>
            <td className="table-data">Full payment</td>
            <td className="table-data">N842,945</td>
            <td className="table-data">N25,000</td>
            <td className="table-data">N50,000</td>
            <td className="table-data">40,000</td>
            <td className="table-data">80,000</td>
            <td className="table-data">150,000</td>
            <td className="table-data">
                <div className="w-full bg-[#F6F6FE] min-h-2 px-2 py-3 flex flex-row items-center justify-center rounded-md">
                    <p className='text-[#1165E2] text-base font-semibold'>Cleared</p>
                </div>
            </td>
            </tr>
            <tr>
            <td className="table-data font-bold text-black">3</td>
            <td className="table-data">Wisdom umanah</td>
            <td className="table-data">N42,000</td>
            <td className="table-data">E-commerce</td>
            <td className="table-data">Full payment</td>
            <td className="table-data">N842,945</td>
            <td className="table-data">N25,000</td>
            <td className="table-data">N50,000</td>
            <td className="table-data">40,000</td>
            <td className="table-data">80,000</td>
            <td className="table-data">150,000</td>
            <td className="table-data">
                <div className="w-full bg-[#F6F6FE] min-h-2 px-2 py-3 flex flex-row items-center justify-center rounded-md">
                    <p className='text-[#1165E2] text-base font-semibold'>Cleared</p>
                </div>
            </td>
            </tr>
            <tr>
            <td className="table-data font-bold text-black">4</td>
            <td className="table-data">Wisdom umanah</td>
            <td className="table-data">N42,000</td>
            <td className="table-data">E-commerce</td>
            <td className="table-data">Full payment</td>
            <td className="table-data">N842,945</td>
            <td className="table-data">N25,000</td>
            <td className="table-data">N50,000</td>
            <td className="table-data">40,000</td>
            <td className="table-data">80,000</td>
            <td className="table-data">150,000</td>
            <td className="table-data">
                <div className="w-full bg-[#F6F6FE] min-h-2 px-2 py-3 flex flex-row items-center justify-center rounded-md">
                    <p className='text-[#1165E2] text-base font-semibold'>Cleared</p>
                </div>
            </td>
            </tr>
            <tr>
            <td className="table-data font-bold text-black">5</td>
            <td className="table-data">Wisdom umanah</td>
            <td className="table-data">N42,000</td>
            <td className="table-data">E-commerce</td>
            <td className="table-data">Installment</td>
            <td className="table-data">N842,945</td>
            <td className="table-data">N25,000</td>
            <td className="table-data">N50,000</td>
            <td className="table-data">40,000</td>
            <td className="table-data">80,000</td>
            <td className="table-data">150,000</td>
            <td className="table-data">
                <div className="w-full bg-[#F6F6FE] min-h-2 px-2 py-3 flex flex-row items-center justify-center rounded-md">
                    <p className='text-[#1165E2] text-base font-semibold'>Cleared</p>
                </div>
            </td>
            </tr>
            <tr>
            <td className="table-data font-bold text-black">6</td>
            <td className="table-data">Wisdom umanah</td>
            <td className="table-data">N42,000</td>
            <td className="table-data">E-commerce</td>
            <td className="table-data">Installment</td>
            <td className="table-data">N842,945</td>
            <td className="table-data">N25,000</td>
            <td className="table-data">N50,000</td>
            <td className="table-data">40,000</td>
            <td className="table-data">80,000</td>
            <td className="table-data">150,000</td>
            <td className="table-data">
                <div className="w-full bg-[#F6F6FE] min-h-2 px-2 py-3 flex flex-row items-center justify-center rounded-md">
                    <p className='text-[#1165E2] text-base font-semibold'>Cleared</p>
                </div>
            </td>
            </tr>
            <tr>
            <td className="table-data font-bold text-black">7</td>
            <td className="table-data">Wisdom umanah</td>
            <td className="table-data">N42,000</td>
            <td className="table-data">E-commerce</td>
            <td className="table-data">Installment</td>
            <td className="table-data">N842,945</td>
            <td className="table-data">N25,000</td>
            <td className="table-data">N50,000</td>
            <td className="table-data">40,000</td>
            <td className="table-data">80,000</td>
            <td className="table-data">150,000</td>
            <td className="table-data">
                <div className="w-full bg-[#F6F6FE] min-h-2 px-2 py-3 flex flex-row items-center justify-center rounded-md">
                    <p className='text-[#1165E2] text-base font-semibold'>Cleared</p>
                </div>
            </td>
            </tr>
            <tr>
            <td className="table-data font-bold text-black">8</td>
            <td className="table-data">Wisdom umanah</td>
            <td className="table-data">N42,000</td>
            <td className="table-data">E-commerce</td>
            <td className="table-data">Installment</td>
            <td className="table-data">N842,945</td>
            <td className="table-data">N25,000</td>
            <td className="table-data">N50,000</td>
            <td className="table-data">40,000</td>
            <td className="table-data">80,000</td>
            <td className="table-data">150,000</td>
            <td className="table-data">
                <div className="w-full bg-[#F6F6FE] min-h-2 px-2 py-3 flex flex-row items-center justify-center rounded-md">
                    <p className='text-[#1165E2] text-base font-semibold'>Cleared</p>
                </div>
            </td>
            </tr>
            <tr>
            <td className="table-data font-bold text-black">9</td>
            <td className="table-data">Wisdom umanah</td>
            <td className="table-data">N42,000</td>
            <td className="table-data">E-commerce</td>
            <td className="table-data">Installment</td>
            <td className="table-data">N842,945</td>
            <td className="table-data">N25,000</td>
            <td className="table-data">N50,000</td>
            <td className="table-data">40,000</td>
            <td className="table-data">80,000</td>
            <td className="table-data">150,000</td>
            <td className="table-data">
                <div className="w-full bg-[#F6F6FE] min-h-2 px-2 py-3 flex flex-row items-center justify-center rounded-md">
                    <p className='text-[#1165E2] text-base font-semibold'>Cleared</p>
                </div>
            </td>
            </tr>
            <tr>
            <td className="table-data font-bold text-black">10</td>
            <td className="table-data">Wisdom umanah</td>
            <td className="table-data">N42,000</td>
            <td className="table-data">E-commerce</td>
            <td className="table-data">Installment</td>
            <td className="table-data">N842,945</td>
            <td className="table-data">N25,000</td>
            <td className="table-data">N50,000</td>
            <td className="table-data">40,000</td>
            <td className="table-data">80,000</td>
            <td className="table-data">150,000</td>
            <td className="table-data">
                <div className="w-full bg-[#F6F6FE] min-h-2 px-2 py-3 flex flex-row items-center justify-center rounded-md">
                    <p className='text-[#1165E2] text-base font-semibold'>Cleared</p>
                </div>
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
  );
};

export default Transactions;
