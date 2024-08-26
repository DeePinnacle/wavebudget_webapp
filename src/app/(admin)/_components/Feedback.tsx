import {
  ComplainIcon,
  DropDownIcon,
  FilterIcon,
  ImageScanIcon,
  ResolvedIcon,
  UnresolvedIcon,
} from "@/components/icons/icons";
import React from "react";
import Image from "next/image";
import { DropdownMenu } from "@radix-ui/react-dropdown-menu";
import {
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { OverlayState } from "@/store/store";
import Overlay from "./overlay";

const Feedback = () => {
  const { overlay, openOverlay, closeOverlay } = OverlayState((state) => ({
    overlay: state.overlay,
    openOverlay: state.openOverlay,
    closeOverlay: state.closeOverlay,
  }));
  return (
    <>
      <div className="my-9 flex flex-col">
        <div className="grid grid-cols-4 items-center justify-between gap-4">
          <div className="w-full min-h-10 border border-solid border-[#E8EDE9] rounded-md px-3 py-5">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-3">
                <ComplainIcon />
                <span className="">
                  <p className="font-semibold text-sm">498</p>
                  <p className="text-xs text-[#858585]">
                    Total customer <br />
                    complains{" "}
                  </p>
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
                <ComplainIcon />
                <span className="">
                  <p className="font-semibold text-sm">498</p>
                  <p className="text-xs text-[#858585]">
                    Total vendor <br />
                    complains
                  </p>
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
                <UnresolvedIcon />
                <span className="">
                  <p className="font-semibold text-sm">498</p>
                  <p className="text-xs text-[#858585]">
                    Unresolved <br /> complains
                  </p>
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
                <ResolvedIcon />
                <span className="">
                  <p className="font-semibold text-sm">498</p>
                  <p className="text-xs text-[#858585]">
                    Resolved <br /> complains
                  </p>
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
          <h2 className="font-semibold">Complains</h2>
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
          <table className="w-[160%] border-collapse rounded-md box-border">
            <tr>
              <th className="table-header">S/N</th>
              <th className="table-header">Name</th>
              <th className="table-header">Date</th>
              <th className="table-header">Complain ID</th>
              <th className="table-header">Description</th>
              <th className="table-header">Status</th>
            </tr>
            <tr>
              <td className="table-data font-bold text-black">1</td>
              <td className="table-data">Wisdom umanah</td>
              <td className="table-data">14/04/2024</td>
              <td className="table-data">69835689900</td>
              <td
                className="table-data text-justify cursor-pointer"
                onClick={openOverlay}
              >
                Shop local, score big deals. Uncover the best businesses around
                you, find what need, and enjoy in-store shopping convenience.
                Shop local, score big deals. Uncover the best businesses around
                you, find wh.......
              </td>
              <td className="table-data">
                <p className="text-center text-[#D6A100] cursor-pointer">
                  Unresolved
                </p>
              </td>
            </tr>
            <tr>
              <td className="table-data font-bold text-black">2</td>
              <td className="table-data">Wisdom umanah</td>
              <td className="table-data">14/04/2024</td>
              <td className="table-data">69835689900</td>
              <td className="table-data text-justify cursor-pointer" onClick={ openOverlay }>
                Shop local, score big deals. Uncover the best businesses around
                you, find what need, and enjoy in-store shopping convenience.
                Shop local, score big deals. Uncover the best businesses around
                you, find wh.......
              </td>
              <td className="table-data">
                <p className="text-center text-[#D6A100] cursor-pointer">
                  Unresolved
                </p>
              </td>
            </tr>
            <tr>
              <td className="table-data font-bold text-black">3</td>
              <td className="table-data">Wisdom umanah</td>
              <td className="table-data">14/04/2024</td>
              <td className="table-data">69835689900</td>
              <td className="table-data text-justify cursor-pointer" onClick={ openOverlay }>
                Shop local, score big deals. Uncover the best businesses around
                you, find what need, and enjoy in-store shopping convenience.
                Shop local, score big deals. Uncover the best businesses around
                you, find wh.......
              </td>
              <td className="table-data">
                <p className="text-center text-[#D6A100] cursor-pointer">
                  Unresolved
                </p>
              </td>
            </tr>
            <tr>
              <td className="table-data font-bold text-black">4</td>
              <td className="table-data">Wisdom umanah</td>
              <td className="table-data">14/04/2024</td>
              <td className="table-data">69835689900</td>
              <td className="table-data text-justify cursor-pointer" onClick={ openOverlay }>
                Shop local, score big deals. Uncover the best businesses around
                you, find what need, and enjoy in-store shopping convenience.
                Shop local, score big deals. Uncover the best businesses around
                you, find wh.......
              </td>
              <td className="table-data">
                <p className="text-center text-[#0B7E78] cursor-pointer bg-[#F6FEFE] px-3 py-2 rounded-sm">
                  Unresolved
                </p>
              </td>
            </tr>
            <tr>
              <td className="table-data font-bold text-black">5</td>
              <td className="table-data">Wisdom umanah</td>
              <td className="table-data">14/04/2024</td>
              <td className="table-data">69835689900</td>
              <td className="table-data text-justify cursor-pointer" onClick={ openOverlay }>
                Shop local, score big deals. Uncover the best businesses around
                you, find what need, and enjoy in-store shopping convenience.
                Shop local, score big deals. Uncover the best businesses around
                you, find wh.......
              </td>
              <td className="table-data">
                <p className="text-center text-[#D6A100] cursor-pointer">
                  Unresolved
                </p>
              </td>
            </tr>
            <tr>
              <td className="table-data font-bold text-black">6</td>
              <td className="table-data">Wisdom umanah</td>
              <td className="table-data">14/04/2024</td>
              <td className="table-data">69835689900</td>
              <td className="table-data text-justify cursor-pointer" onClick={ openOverlay }>
                Shop local, score big deals. Uncover the best businesses around
                you, find what need, and enjoy in-store shopping convenience.
                Shop local, score big deals. Uncover the best businesses around
                you, find wh.......
              </td>
              <td className="table-data">
                <p className="text-center text-[#D6A100] cursor-pointer">
                  Unresolved
                </p>
              </td>
            </tr>
            <tr>
              <td className="table-data font-bold text-black">7</td>
              <td className="table-data">Wisdom umanah</td>
              <td className="table-data">14/04/2024</td>
              <td className="table-data">69835689900</td>
              <td className="table-data text-justify cursor-pointer" onClick={ openOverlay }>
                Shop local, score big deals. Uncover the best businesses around
                you, find what need, and enjoy in-store shopping convenience.
                Shop local, score big deals. Uncover the best businesses around
                you, find wh.......
              </td>
              <td className="table-data">
                <p className="text-center text-[#D6A100] cursor-pointer">
                  Unresolved
                </p>
              </td>
            </tr>
            <tr>
              <td className="table-data font-bold text-black">8</td>
              <td className="table-data">Wisdom umanah</td>
              <td className="table-data">14/04/2024</td>
              <td className="table-data">69835689900</td>
              <td className="table-data text-justify cursor-pointer" onClick={ openOverlay }>
                Shop local, score big deals. Uncover the best businesses around
                you, find what need, and enjoy in-store shopping convenience.
                Shop local, score big deals. Uncover the best businesses around
                you, find wh.......
              </td>
              <td className="table-data">
                <p className="text-center text-[#0B7E78] cursor-pointer bg-[#F6FEFE] px-3 py-2 rounded-sm">
                  Unresolved
                </p>
              </td>
            </tr>
            <tr>
              <td className="table-data font-bold text-black">9</td>
              <td className="table-data">Wisdom umanah</td>
              <td className="table-data">14/04/2024</td>
              <td className="table-data">69835689900</td>
              <td className="table-data text-justify cursor-pointer" onClick={ openOverlay }>
                Shop local, score big deals. Uncover the best businesses around
                you, find what need, and enjoy in-store shopping convenience.
                Shop local, score big deals. Uncover the best businesses around
                you, find wh.......
              </td>
              <td className="table-data">
                <p className="text-center text-[#0B7E78] cursor-pointer bg-[#F6FEFE] px-3 py-2 rounded-sm">
                  Unresolved
                </p>
              </td>
            </tr>
            <tr>
              <td className="table-data font-bold text-black">10</td>
              <td className="table-data">Wisdom umanah</td>
              <td className="table-data">14/04/2024</td>
              <td className="table-data">69835689900</td>
              <td className="table-data text-justify cursor-pointer" onClick={ openOverlay }>
                Shop local, score big deals. Uncover the best businesses around
                you, find what need, and enjoy in-store shopping convenience.
                Shop local, score big deals. Uncover the best businesses around
                you, find wh.......
              </td>
              <td className="table-data">
                <p className="text-center text-[#0B7E78] cursor-pointer bg-[#F6FEFE] px-3 py-2 rounded-sm">
                  Unresolved
                </p>
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
      {overlay && (
        <Overlay>
          <div
            className={`${
              overlay === false ? "hidden" : "block"
            } w-[40%] bg-white px-4 py-5 rounded-md`}
          >
            <div className="flex justify-end w-full my-4">
              <Image
                src={"/close.png"}
                alt="close icon"
                width={20}
                height={20}
                priority
                className="cursor-pointer ml-32"
                onClick={() => {
                  closeOverlay();
                }}
              />
            </div>
            <p className="text-center font-semibold">Wisdom umanah</p>
            <p className="text-center text-[#858585] text-sm mt-2 mb-1">
              07056785432
            </p>
            <p className="text-center text-[#858585] text-sm mb-4">
              wisdomumanah@gmail.com | 98746576887
            </p>
            <span className="flex flex-row items-center justify-between mt-5">
              <p className="text-xs">
                Complaint ID<span className="text-[#858585]"> 35657894567875</span>
              </p>
              <p className="text-xs">
                Date<span className="text-[#858585]"> 23rd November 2024 | 12:42pm</span>
              </p>
            </span>
            <div className="w-full p-4 my-2 bg-[#F9FBFB]">
              <p className="font-semibold text-xs mb-2">Refund request</p>
              <p className="text-xs text-[#858585]">
                Shop local, score big deals. Uncover the best businesses around
                you, find what need, and enjoy in-store shopping Shop local,
                score big deals. Uncover the best businesses around you, find
                what need, and enjoy in-store shopping convenience. Shop local,
                score big deals. Uncover the best businesses around you, find
                convenience. Shop local, score big deals. Uncover the best
                businesses around you, find wh
              </p>
            </div>
            <p className="font-semibold text-xs mb-2 px-4">Media</p>
            <div className="flex flex-row items-center gap-2 px-4">
                <div className="relative w-20 h-20 rounded-md overflow-hidden">
                    <Image src={"/document.png"} alt="document" fill priority className="object-cover" />
                    <ImageScanIcon className={"absolute w-8 h-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"} />
                </div>
                <div className="relative w-20 h-20 rounded-md overflow-hidden">
                    <Image src={"/document.png"} alt="document" fill priority className="object-cover" />
                    <ImageScanIcon className={"absolute w-8 h-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"} />
                </div>
                <div className="relative w-20 h-20 rounded-md overflow-hidden">
                    <Image src={"/document.png"} alt="document" fill priority className="object-cover" />
                    <ImageScanIcon className={"absolute w-8 h-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"} />
                </div>
                <div className="relative w-20 h-20 rounded-md overflow-hidden">
                    <Image src={"/document.png"} alt="document" fill priority className="object-cover" />
                    <ImageScanIcon className={"absolute w-8 h-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"} />
                </div>
            </div>
            <Button type="button" className="bg-[#0B7E78] w-full my-3 hover:bg-[#0B7E78]">Resolve</Button>
          </div>
        </Overlay>
      )}
    </>
  );
};

export default Feedback;
