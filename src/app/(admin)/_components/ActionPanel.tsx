import React, { useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import {
  AddPlusIcon,
  CheckedBlackIcon,
  CheckedBlurIcon,
  ColoredShieldIcon,
  ComplainIcon,
  CrossedShieldIcon,
  DropDownIcon,
  EcommerceIcon,
  FilterIcon,
  ImageScanIcon,
  MobileIcon,
} from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import Overlay from "./overlay";
import { OverlayState } from "@/store/store";

import { RiceData } from "@/config/data";
import { LaptopData } from "@/config/data";
import { Accessories } from "@/config/data";

import MobileImage from "../../../../public/banner-img.png";

type FormField = "image" | "name" | "category";

const ActionPanel = () => {
  const { overlay, openOverlay, closeOverlay } = OverlayState((state) => ({
    overlay: state.overlay,
    openOverlay: state.openOverlay,
    closeOverlay: state.closeOverlay,
  }));
  const [mode, setMode] = useState<string>();
  const [menu, setMenu] = useState<string>("profile");
  const [decline, setDecline] = useState<string>();
  const [reasons, setReasons] = useState([{ message: "" }]);
  const [modal, setModal] = useState<string>();
  const [addOverlay, setAddOverlay] = useState<Boolean>(false);
  const [editOverlay, setEditOverlay] = useState<boolean>(false);
  const [banner, setBanner] = useState<string>();
  const [bannerOverlay, setBannerOverlay] = useState<boolean>(false);

  let mobileBanner = [
    { image: MobileImage },
    { image: MobileImage },
    { image: MobileImage },
    { image: MobileImage },
    { image: MobileImage },
    { image: MobileImage },
  ];

  const fileRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState<string>("");
  const [percentage, setPercentage] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const [formData, setFormData] = useState();

  const handleBtnClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    setMode(id);
    openOverlay();
  };

  const handleSideMenu = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const { id } = e.currentTarget;
    setMenu(id);
  };

  const handleDecline = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    setDecline(id);
  };

  const handleReason = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    const { innerHTML } = e.currentTarget;
    setReasons([...reasons, { message: `Incorrect ${id}` }]);
  };

  const handleModal = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { id } = e.currentTarget;
    setModal(id);
    setMenu("");
    setDecline("");
    openOverlay();
  };

  const handleRefClick = () => {
    if (fileRef.current) {
      fileRef.current.click();
    }
  };

  // handle form change

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setName(value);
  };
  const handlePercentageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    setPercentage(value);
  };
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      let file = event.target.files[0];
      const imageBlob = new Blob([file], { type: file.type });

      const blobURL = URL.createObjectURL(imageBlob);
      setImage(file);
    }
  };

  const handleFormSubmit = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("percentage", String(percentage)); // Convert number to string

    if (image) {
      formData.append("image", image, image.name); // Append file with filename
    }
  };

  // const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   // handle image
  //   if (event.target.files && event.target.files.length > 0) {
  //     let file = event.target.files[0];

  //     const imageBlob = new Blob([file], { type: file.type });

  //     const blobURL = URL.createObjectURL(imageBlob);

  //     console.log(blobURL);
  //   }

  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]: value,

  //   }));
  //   console.log(formData);
  // };

  const handleAddCategory = () => {
    setAddOverlay(true);
  };

  const handleEdit = () => {
    setEditOverlay(true);
  };

  const handleBannerAction = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const { id } = e.currentTarget;
    setBanner(id);
    setBannerOverlay(true);
  };

  return (
    <>
      <div className="my-9 flex flex-col">
        <div className="grid grid-cols-4 items-center justify-between gap-4">
          <div className="w-full min-h-10 border border-solid border-[#E8EDE9] rounded-md px-3 py-5">
            <div className="flex flex-row items-center justify-between">
              <div className="flex flex-row items-center gap-3">
                <ColoredShieldIcon />
                <span className="">
                  <p className="font-semibold text-sm">498</p>
                  <p className="text-xs text-[#858585]">Approved KYC </p>
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
                <CrossedShieldIcon />
                <span className="">
                  <p className="font-semibold text-sm">498</p>
                  <p className="text-xs text-[#858585]">Declined KYC</p>
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
                <EcommerceIcon />
                <span className="">
                  <p className="font-semibold text-sm">498</p>
                  <p className="text-xs text-[#858585]">Ecommerce banner</p>
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
                <MobileIcon />
                <span className="">
                  <p className="font-semibold text-sm">498</p>
                  <p className="text-xs text-[#858585]">Mobile banner</p>
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
        {/* action panel section  */}
        <div className="w-full min-h-4 p-2 my-5 grid grid-cols-3 items-center gap-3">
          <div
            className="w-full border border-solid border-[#0B7E78] bg-[#F6FEFE] min-h-3 rounded-sm flex flex-col items-baseline cursor-pointer"
            id="categories"
            onClick={(e) => {
              handleModal(e);
            }}
          >
            <div className="p-2 w-full flex flex-row items-center justify-between">
              <div className="relative top-4 left-4">
                <p className="font-semibold">
                  Add
                  <br />
                  categories
                </p>
              </div>
              <Image
                src={"/Plus.png"}
                alt="plus-icon"
                width={100}
                height={40}
                priority
                className="relative left-2 top-2"
              />
            </div>
          </div>
          <div
            className="w-full border border-solid border-[#0B7E78] bg-[#F6FEFE] min-h-3 rounded-sm flex flex-col items-baseline cursor-pointer"
            id="edit-installment"
            onClick={(e) => {
              handleModal(e);
            }}
          >
            <div className="p-2 w-full flex flex-row items-center justify-between">
              <div className="relative top-4 left-4">
                <p className="font-semibold">
                  Edit installment <br />
                  payment duration
                </p>
              </div>
              <Image
                src={"/Edit.png"}
                alt="plus-icon"
                width={100}
                height={40}
                priority
                className="relative left-2 top-2"
              />
            </div>
          </div>
          <div
            className="w-full border border-solid border-[#0B7E78] bg-[#F6FEFE] min-h-3 rounded-sm flex flex-col items-baseline cursor-pointer"
            id="edit-banner"
            onClick={(e) => {
              handleModal(e);
            }}
          >
            <div className="p-2 w-full flex flex-row items-center justify-between">
              <div className="relative top-4 left-4">
                <p className="font-semibold">
                  Edit
                  <br />
                  Banner
                </p>
              </div>
              <Image
                src={"/Banner.png"}
                alt="plus-icon"
                width={100}
                height={40}
                priority
                className="relative left-2 top-2"
              />
            </div>
          </div>
        </div>
        <h1></h1>

        {/* table section */}
        <div className="overflow-x-auto horizontal-bar px-4 py-5 border border-solid border-[#E8EDE9] rounded-md">
          <p className="text-sm font-semibold my-6">Approved KYC{modal}</p>
          <div className="w-full flex flex-row items-center justify-between">
            <div className="my-5 flex flex-row gap-3">
              <Button className="bg-[#F6FEFE] border border-solid border-[#0B7E78] text-[#0B7E78] text-sm hover:bg-[#F6FEFE]">
                Customer kyc
              </Button>
              <Button className="bg-white border border-solid border-[#EDF2F2] text-[#858585] text-sm hover:bg-white">
                Vendors kyc
              </Button>
            </div>
            <p className="text-sm text-[#858585]">43 pending approval</p>
          </div>
          <table className="w-full border-collapse rounded-md box-border">
            <tr>
              <th className="table-header">S/N</th>
              <th className="table-header">Name</th>
              <th className="table-header">Country</th>
              <th className="table-header">State</th>
              <th className="table-header">Address</th>
              <th className="table-header">BVN</th>
              <th className="table-header">BVN</th>
              <th className="table-header">BVN</th>
            </tr>
            <tr>
              <td className="table-data font-bold text-black">1</td>
              <td className="table-data">Wisdom umanah</td>
              <td className="table-data">Nigeria</td>
              <td className="table-data">Abuja</td>
              <td className="table-data">Domain area1...</td>
              <td className="table-data">12423542445</td>
              <td className="table-data">12423542445</td>
              <td className="table-data">12423542445</td>
              <td className="table-data">
                <Button
                  className="bg-[#F6FEFE] border border-solid border-[#0B7E78] text-[#0B7E78] hover:bg-[#F6FEFE]"
                  id="1"
                  onClick={(e) => {
                    handleBtnClick(e);
                  }}
                >
                  View more
                </Button>
              </td>
            </tr>
            <tr>
              <td className="table-data font-bold text-black">2</td>
              <td className="table-data">Wisdom umanah</td>
              <td className="table-data">Nigeria</td>
              <td className="table-data">Abuja</td>
              <td className="table-data">Domain area1...</td>
              <td className="table-data">12423542445</td>
              <td className="table-data">12423542445</td>
              <td className="table-data">12423542445</td>
              <td className="table-data">
                <Button
                  className="bg-[#F6FEFE] border border-solid border-[#0B7E78] text-[#0B7E78] hover:bg-[#F6FEFE]"
                  id="2"
                  onClick={(e) => {
                    handleBtnClick(e);
                  }}
                >
                  View more
                </Button>
              </td>
            </tr>
            <tr>
              <td className="table-data font-bold text-black">3</td>
              <td className="table-data">Wisdom umanah</td>
              <td className="table-data">Nigeria</td>
              <td className="table-data">Abuja</td>
              <td className="table-data">Domain area1...</td>
              <td className="table-data">12423542445</td>
              <td className="table-data">12423542445</td>
              <td className="table-data">12423542445</td>
              <td className="table-data">
                <Button
                  className="bg-[#F6FEFE] border border-solid border-[#0B7E78] text-[#0B7E78] hover:bg-[#F6FEFE]"
                  id="3"
                  onClick={(e) => {
                    handleBtnClick(e);
                  }}
                >
                  View more
                </Button>
              </td>
            </tr>
            <tr>
              <td className="table-data font-bold text-black">4</td>
              <td className="table-data">Wisdom umanah</td>
              <td className="table-data">Nigeria</td>
              <td className="table-data">Abuja</td>
              <td className="table-data">Domain area1...</td>
              <td className="table-data">12423542445</td>
              <td className="table-data">12423542445</td>
              <td className="table-data">12423542445</td>
              <td className="table-data">
                <Button
                  className="bg-[#F6FEFE] border border-solid border-[#0B7E78] text-[#0B7E78] hover:bg-[#F6FEFE]"
                  id="4"
                  onClick={(e) => {
                    handleBtnClick(e);
                  }}
                >
                  View more
                </Button>
              </td>
            </tr>
            <tr>
              <td className="table-data font-bold text-black">5</td>
              <td className="table-data">Wisdom umanah</td>
              <td className="table-data">Nigeria</td>
              <td className="table-data">Abuja</td>
              <td className="table-data">Domain area1...</td>
              <td className="table-data">12423542445</td>
              <td className="table-data">12423542445</td>
              <td className="table-data">12423542445</td>
              <td className="table-data">
                <Button
                  className="bg-[#F6FEFE] border border-solid border-[#0B7E78] text-[#0B7E78] hover:bg-[#F6FEFE]"
                  id="5"
                  onClick={(e) => {
                    handleBtnClick(e);
                  }}
                >
                  View more
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
      {overlay && mode && (
        <Overlay className="absolute flex flex-col items-center justify-center w-full h-[1200px] bg-black/20 inset-0">
          <div
            className={`${
              decline ? "hidden" : "block"
            } w-[70%] bg-white px-4 py-2 rounded-md`}
          >
            <span className="flex flex-row items-center justify-between my-7">
              <p className="text-center font-semibold ml-28">KYC Details</p>
              <Image
                src={"/close.png"}
                alt="close icon"
                width={20}
                height={20}
                priority
                className="cursor-pointer ml-32"
                onClick={() => {
                  closeOverlay();
                  setMode("");
                }}
              />
            </span>
            <div className="w-full min-h-2 px-3 py-5 mt-7 flex flex-row justify-between gap-5">
              {/* notfication menu */}
              <ul className="w-[20%] box-border">
                <li
                  className={`${
                    menu === "profile"
                      ? "text-black font-semibold"
                      : "text-sm text-[#858585]"
                  } my-4 cursor-pointer`}
                  id="profile"
                  onClick={(e) => {
                    handleSideMenu(e);
                  }}
                >
                  Profile
                </li>
                <li
                  className={`${
                    menu === "employment"
                      ? "text-black font-semibold"
                      : "text-sm text-[#858585]"
                  } my-4 cursor-pointer`}
                  id="employment"
                  onClick={(e) => {
                    handleSideMenu(e);
                  }}
                >
                  Employment
                </li>
                <li
                  className={`${
                    menu === "upload"
                      ? "text-black font-semibold"
                      : "text-sm text-[#858585]"
                  } my-4 text-sm cursor-pointer`}
                  id="upload"
                  onClick={(e) => {
                    handleSideMenu(e);
                  }}
                >
                  Upload
                </li>
              </ul>
              {/* content */}
              {menu === "profile" && (
                <>
                  <div className="w-[80%] min-h-2 p-4 border border-solid border-[#E8EDE9] rounded-md">
                    <form>
                      <div className="grid grid-cols-2 gap-3 my-4 border-b border-solid border-[#E8EDE9]">
                        <div className="w-full flex flex-col">
                          <label
                            htmlFor="firstname"
                            className="text-xs text-[#858585]"
                          >
                            First name
                          </label>
                          <input
                            type="text"
                            value={"John"}
                            className="border border-solid border-[#EDF2F2] mb-7 p-1 rounded-md text-[#858585] text-sm outline-none"
                          />
                          <label
                            htmlFor="lastname"
                            className="text-xs text-[#858585]"
                          >
                            Last name
                          </label>
                          <input
                            type="text"
                            value={"Doe"}
                            className="border border-solid border-[#EDF2F2] mb-7 p-1 rounded-md text-[#858585] text-sm outline-none"
                          />
                          <label
                            htmlFor="dob"
                            className="text-xs text-[#858585]"
                          >
                            Date of birth
                          </label>
                          <input
                            type="text"
                            value={"27, July 2024"}
                            className="border border-solid border-[#EDF2F2] mb-7 p-1 rounded-md text-[#858585] text-sm outline-none"
                          />
                        </div>
                        <div className="w-full flex flex-col">
                          <label
                            htmlFor="middlename"
                            className="text-xs text-[#858585]"
                          >
                            Middle name
                          </label>
                          <input
                            type="text"
                            value={"Ex"}
                            className="border border-solid border-[#EDF2F2] mb-7 p-1 rounded-md text-[#858585] text-sm outline-none"
                          />
                          <label
                            htmlFor="phonenumber"
                            className="text-xs text-[#858585]"
                          >
                            Phone number
                          </label>
                          <input
                            type="text"
                            value={"081234567890"}
                            className="border border-solid border-[#EDF2F2] mb-7 p-1 rounded-md text-[#858585] text-sm outline-none"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 my-4 border-b border-solid border-[#E8EDE9]">
                        <div className="w-full flex flex-col">
                          <label
                            htmlFor="country"
                            className="text-xs text-[#858585]"
                          >
                            Country
                          </label>
                          <input
                            type="text"
                            value={"Nigeria"}
                            className="border border-solid border-[#EDF2F2] mb-7 p-1 rounded-md text-[#858585] text-sm outline-none"
                          />
                          <label
                            htmlFor="state"
                            className="text-xs text-[#858585]"
                          >
                            State
                          </label>
                          <input
                            type="text"
                            value={"Abuja"}
                            className="border border-solid border-[#EDF2F2] mb-7 p-1 rounded-md text-[#858585] text-sm outline-none"
                          />
                        </div>
                        <div className="w-full flex flex-col">
                          <label
                            htmlFor="address"
                            className="text-xs text-[#858585]"
                          >
                            Address
                          </label>
                          <input
                            type="text"
                            value={"Nigeria"}
                            className="border border-solid border-[#EDF2F2] mb-7 p-1 rounded-md text-[#858585] text-sm outline-none"
                          />
                          <label
                            htmlFor="city"
                            className="text-xs text-[#858585]"
                          >
                            City
                          </label>
                          <input
                            type="text"
                            value={"Abuja"}
                            className="border border-solid border-[#EDF2F2] mb-7 p-1 rounded-md text-[#858585] text-sm outline-none"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3 my-4">
                        <div className="w-full flex flex-col">
                          <label
                            htmlFor="nokname"
                            className="text-xs text-[#858585]"
                          >
                            Next of kin name
                          </label>
                          <input
                            type="text"
                            value={"John"}
                            className="border border-solid border-[#EDF2F2] mb-7 p-1 rounded-md text-[#858585] text-sm outline-none"
                          />
                          <label
                            htmlFor="nokaddress"
                            className="text-xs text-[#858585]"
                          >
                            Next of kin address
                          </label>
                          <input
                            type="text"
                            value={"Abuja"}
                            className="border border-solid border-[#EDF2F2] mb-7 p-1 rounded-md text-[#858585] text-sm outline-none"
                          />
                        </div>
                        <div className="w-full flex flex-col">
                          <label
                            htmlFor="nokaddress"
                            className="text-xs text-[#858585]"
                          >
                            Next of kin address
                          </label>
                          <input
                            type="text"
                            value={"Abuja"}
                            className="border border-solid border-[#EDF2F2] mb-7 p-1 rounded-md text-[#858585] text-sm outline-none"
                          />
                        </div>
                      </div>
                    </form>
                  </div>
                </>
              )}
              {menu === "employment" && (
                <div className="w-[80%] min-h-2 p-4 border border-solid border-[#E8EDE9] rounded-md">
                  <form>
                    <div className="grid grid-cols-2 gap-3 my-4 border-b border-solid border-[#E8EDE9] h-[37.5rem]">
                      <div className="w-full flex flex-col">
                        <label
                          htmlFor="employment"
                          className="text-xs text-[#858585]"
                        >
                          Employment status
                        </label>
                        <input
                          type="text"
                          value={"Employed"}
                          className="border border-solid border-[#EDF2F2] mb-7 p-1 rounded-md text-[#858585] text-sm outline-none"
                        />
                        <label htmlFor="job" className="text-xs text-[#858585]">
                          Job level
                        </label>
                        <input
                          type="text"
                          value={"Level 2"}
                          className="border border-solid border-[#EDF2F2] mb-7 p-1 rounded-md text-[#858585] text-sm outline-none"
                        />
                        <label
                          htmlFor="work"
                          className="text-xs text-[#858585]"
                        >
                          Work place address
                        </label>
                        <input
                          type="text"
                          value={"No. 72 benjamine street"}
                          className="border border-solid border-[#EDF2F2] mb-7 p-1 rounded-md text-[#858585] text-sm outline-none"
                        />
                        <label
                          htmlFor="salary"
                          className="text-xs text-[#858585]"
                        >
                          Salary
                        </label>
                        <input
                          type="text"
                          value={"150,000"}
                          className="border border-solid border-[#EDF2F2] mb-7 p-1 rounded-md text-[#858585] text-sm outline-none"
                        />
                      </div>
                      <div className="w-full flex flex-col">
                        <label
                          htmlFor="firm"
                          className="text-xs text-[#858585]"
                        >
                          Firm type
                        </label>
                        <input
                          type="text"
                          value={"Civil servant"}
                          className="border border-solid border-[#EDF2F2] mb-7 p-1 rounded-md text-[#858585] text-sm outline-none"
                        />
                        <label
                          htmlFor="workplace"
                          className="text-xs text-[#858585]"
                        >
                          Work place name
                        </label>
                        <input
                          type="text"
                          value={"wavebudget"}
                          className="border border-solid border-[#EDF2F2] mb-7 p-1 rounded-md text-[#858585] text-sm outline-none"
                        />
                        <label
                          htmlFor="jobrole"
                          className="text-xs text-[#858585]"
                        >
                          Job role
                        </label>
                        <input
                          type="text"
                          value={"CEO"}
                          className="border border-solid border-[#EDF2F2] mb-7 p-1 rounded-md text-[#858585] text-sm outline-none"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              )}
              {menu === "upload" && (
                <>
                  <div className="w-[80%] min-h-2 p-4 border border-solid border-[#E8EDE9] rounded-md">
                    <form>
                      <div className="grid grid-cols-2 gap-3 my-4">
                        <div className="w-full flex flex-col">
                          <label
                            htmlFor="nin"
                            className="text-xs text-[#858585]"
                          >
                            NIN
                          </label>
                          <input
                            type="text"
                            value={"98765432345634"}
                            className="border border-solid border-[#EDF2F2] mb-7 p-1 rounded-md text-[#858585] text-sm outline-none"
                          />
                        </div>
                        <div className="w-full flex flex-col">
                          <label
                            htmlFor="bvn"
                            className="text-xs text-[#858585]"
                          >
                            BVN
                          </label>
                          <input
                            type="text"
                            value={"567876543456"}
                            className="border border-solid border-[#EDF2F2] mb-7 p-1 rounded-md text-[#858585] text-sm outline-none"
                          />
                        </div>
                      </div>
                      <div className="relative w-full h-[31.25rem] overflow-hidden rounded-lg">
                        <Image
                          src={"/document.png"}
                          alt="document"
                          fill
                          priority
                          className="object-cover"
                        />
                        <ImageScanIcon
                          className={
                            "absolute w-8 h-8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                          }
                        />
                      </div>
                      <div className="flex flex-row items-baseline justify-end w-full my-4 gap-3">
                        <Button
                          className="text-[#0B7E78] hover:text-[#0B7E78]"
                          variant={"ghost"}
                          id="decline"
                          onClick={(e) => {
                            handleDecline(e);
                          }}
                        >
                          Decline
                        </Button>
                        <Button
                          className="bg-[#0B7E78] hover:bg-[#0B7E78]"
                          onClick={closeOverlay}
                        >
                          Approve KYC
                        </Button>
                      </div>
                    </form>
                  </div>
                </>
              )}
            </div>
          </div>
          <div
            className={`${
              decline ? "block" : "hidden"
            } w-[40%] bg-white px-4 py-6 rounded-md`}
          >
            <p className="text-center font-semibold mt-4">
              Give reason why decline
            </p>
            {/* {
              reasons.map((reason)=>(
                <p>{reason.message}</p>
              ))
            } */}
            <div className="w-[80%] p-3 mx-auto mt-7">
              <div
                className={` ${
                  reasons && "bg-[#EDF2F2]"
                } w-full flex flex-row gap-5 justify-between items-center px-3 py-2 rounded-sm border border-solid border-[#EDF2F2] mb-4 cursor-pointer`}
                id="name"
                onClick={(e) => {
                  handleReason(e);
                }}
              >
                {reasons ? (
                  <CheckedBlackIcon className={"w-7 h-7"} />
                ) : (
                  <CheckedBlurIcon className={"w-7 h-7"} />
                )}
                <span className="text-sm">
                  <p className="font-semibold mb-1">Incorrect Name</p>
                  <p className="text-xs text-[#858585]">
                    Approving this item mean you agree the amount and quantity
                    are accurate
                  </p>
                </span>
              </div>
              <div
                className="w-full flex flex-row gap-5 justify-between items-center px-3 py-2 rounded-sm border border-solid border-[#EDF2F2] my- cursor-pointer"
                id="dob"
                onClick={(e) => {
                  handleReason(e);
                }}
              >
                <CheckedBlurIcon className={"w-7 h-7"} />
                <span className="text-sm">
                  <p className="font-semibold mb-1">Incorrect date of birth</p>
                  <p className="text-xs text-[#858585]">
                    Approving this item mean you agree the amount and quantity
                    are accurate
                  </p>
                </span>
              </div>
              <div
                className="w-full flex flex-row gap-5 justify-between items-center px-3 py-2 rounded-sm border border-solid border-[#EDF2F2] my-4 cursor-pointer"
                id="amount"
                onClick={(e) => {
                  handleReason(e);
                }}
              >
                <CheckedBlurIcon className={"w-7 h-7"} />
                <span className="text-sm">
                  <p className="font-semibold mb-1">Incorrect amount</p>
                  <p className="text-xs text-[#858585]">
                    Approving this item mean you agree the amount and quantity
                    are accurate
                  </p>
                </span>
              </div>
              <div
                className="w-full flex flex-row gap-5 justify-between items-center px-3 py-2 rounded-sm border border-solid border-[#EDF2F2] my-4 cursor-pointer"
                id="rare"
                onClick={(e) => {
                  handleReason(e);
                }}
              >
                <CheckedBlurIcon className={"w-7 h-7"} />
                <span className="text-sm">
                  <p className="font-semibold mb-1">Incorrect amount</p>
                  <p className="text-xs text-[#858585]">
                    Approving this item mean you agree the amount and quantity
                    are accurate
                  </p>
                </span>
              </div>
              <div className="flex flex-row items-center justify-between gap-2 w-full">
                <Button
                  className="w-3/4 text-[#0B7E78] hover:text-[#0B7E78]"
                  variant={"ghost"}
                  onClick={closeOverlay}
                >
                  Confirm decline
                </Button>
                <Button
                  className="w-full bg-[#0B7E78] hover:bg-[#0B7E78]"
                  onClick={closeOverlay}
                >
                  Reconsider
                </Button>
              </div>
            </div>
          </div>
        </Overlay>
      )}
      {modal === "categories" ? (
        <Overlay className="absolute flex flex-col items-center justify-center w-full h-[1200px] bg-black/20 inset-0">
          <div className="w-[90%] bg-white rounded-sm p-4">
            <div className="flex flex-row items-center justify-between">
              <p className="font-semibold">Categories</p>
              <Image
                src={"/close.png"}
                alt="close icon"
                width={20}
                height={20}
                priority
                className="cursor-pointer ml-32"
                onClick={() => {
                  setModal("");
                }}
              />
            </div>
            <div className="w-full border-t border-solid border-[#E8EDE9] px-2 py-3 my-5">
              <div className="w-full flex justify-end my-2">
                <Button
                  className="bg-[#0B7E78] hover:bg-[#0B7E78]"
                  onClick={handleAddCategory}
                >
                  Add category
                </Button>
              </div>
              <p className="mb-5">Current categories</p>
              <div className="flex flex-col gap-3 h-[37.5rem] overflow-y-auto message-slider">
                <div className="grid grid-cols-8 gap-3 my-2">
                  {
                    RiceData.map((data, index)=>(
                    <div key={ index } className="w-full flex flex-col items-center justify-center p-3 h-full">
                      <div className="w-20 h-20 bg-[#DBE1E1] rounded-full relative overflow-hidden">
                        <Image
                          src={data.image}
                          alt="rice-image"
                          fill
                          priority
                          className="object-cover"
                        />
                      </div>
                      <p className="my-2 font-semibold">{ data.category }</p>
                      <p className="text-xs text-[#858585] mb-2">
                        Commission{" "}
                        <span className="font-semibold text-black">{ data.commission }</span>
                      </p>
                      <Button
                        className="w-full border border-solid border-[#0B7E78] text-[#0B7E78] hover:bg-transparent hover:text-[#0B7E78]"
                        variant={"ghost"}
                        onClick={handleEdit}
                      >
                        Edit
                      </Button>
                    </div>
                    ))
                  }
                </div>
                <div className="grid grid-cols-8 gap-3 my-2">
                  {
                    LaptopData.map((data, index)=>(
                    <div key={ index } className="w-full flex flex-col items-center justify-center p-3 h-full">
                      <div className="w-20 h-20 bg-[#DBE1E1] rounded-full relative overflow-hidden">
                        <Image
                          src={data.image}
                          alt="laptop-image"
                          fill
                          priority
                          className="object-cover"
                        />
                      </div>
                      <p className="my-2 font-semibold text-center text-sm">
                        { data.category }
                      </p>
                      <p className="text-xs text-[#858585] text-center mb-2">
                        Commission{" "}
                        <span className="font-semibold text-black">{ data.commission }</span>
                      </p>
                      <Button
                          className="w-full border border-solid border-[#0B7E78] text-[#0B7E78] hover:bg-transparent hover:text-[#0B7E78]"
                          variant={"ghost"}
                          onClick={handleEdit}
                        >
                          Edit
                        </Button>
                    </div>
                    ))
                  }
                </div>
                <div className="grid grid-cols-8 gap-3 my-2">
                  {
                    Accessories.map((data, index)=>(
                    <div key={ index } className="w-full flex flex-col items-center justify-center p-3 h-full">
                      <div className="w-20 h-20 bg-[#DBE1E1] rounded-full relative overflow-hidden">
                        <Image
                          src={data.image}
                          alt="shoe-image"
                          fill
                          priority
                          className="object-cover"
                        />
                      </div>
                      <p className="my-2 font-semibold text-center text-sm">
                        { data.category }
                      </p>
                      <p className="text-xs text-[#858585] text-center mb-2">
                        Commission{" "}
                        <span className="font-semibold text-black">{ data.commission }</span>
                      </p>
                      <Button
                            className="w-full border border-solid border-[#0B7E78] text-[#0B7E78] hover:bg-transparent hover:text-[#0B7E78]"
                            variant={"ghost"}
                            onClick={handleEdit}
                          >
                            Edit
                          </Button>
                    </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </Overlay>
      ) : modal === "edit-installment" ? (
        <Overlay>
          <div className="w-2/5 bg-white rounded-sm py-5 px-3">
            <span className="flex flex-row justify-end">
              <Image
                src={"/close.png"}
                alt="close icon"
                width={20}
                height={20}
                priority
                className="cursor-pointer ml-32"
                onClick={() => {
                  setModal("");
                }}
              />
            </span>
            <h2 className="text-center font-semibold">Add payment duration</h2>
            <p className="text-center text-black mt-8 mb-2">
              Current payment duration
            </p>
            <div className="w-full flex flex-row items-center justify-center gap-2 mt-4 mb-14">
              <p className="w-[30%] bg-[#EDF2F2] px-5 py-3 text-center border border-solid border-[#F9FBFB] rounded-sm ">
                3 month
              </p>
              <p className="w-[30%] bg-[#EDF2F2] px-5 py-3 text-center border border-solid border-[#F9FBFB] rounded-sm ">
                5 month
              </p>
            </div>
            <form>
              <div className="w-3/4 mx-auto">
                <input
                  type="file"
                  ref={fileRef}
                  className="hidden"
                  name="image"
                  onChange={(e) => {
                    handleImageChange(e);
                  }}
                />
                <label htmlFor="duration" className="text-[#858585] text-xs">
                  Duration
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  className="w-full outline-none border border-solid border-[#EDF2F2] p-2 mb-5 rounded-md"
                  onChange={(e) => {
                    handleNameChange(e);
                  }}
                />
                <label
                  htmlFor="markduration"
                  className="text-[#858585] text-xs"
                >
                  Markup for duration
                </label>
                <input
                  type="text"
                  name="percentage"
                  value={percentage}
                  className="w-full outline-none border border-solid border-[#EDF2F2] p-2 mb-5 rounded-md"
                  onChange={(e) => {
                    handlePercentageChange(e);
                  }}
                />
                <Button
                  className="w-full bg-[#0B7E78] hover:bg-[#0B7E78]"
                  onClick={(e) => {
                    handleFormSubmit(e);
                  }}
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </Overlay>
      ) : modal === "edit-banner" ? (
        <Overlay className="absolute flex flex-col items-center justify-center w-full h-[1200px] bg-black/20 inset-0">
          <div className="w-[90%] bg-white rounded-sm p-4">
            <div className="flex flex-row items-center justify-between">
              <p className="font-semibold">Edit banner</p>
              <Image
                src={"/close.png"}
                alt="close icon"
                width={20}
                height={20}
                priority
                className="cursor-pointer ml-32"
                onClick={() => {
                  setModal("");
                }}
              />
            </div>
            <div className="w-full border-t border-solid border-[#E8EDE9] px-2 py-3 my-5">
              <p className="mt-5 font-semibold">Mobile home page banner</p>
              <div className="flex flex-col gap-3 h-[37.5rem] overflow-y-auto message-slider">
                <div className="grid grid-cols-4 gap-3 my-2">
                  {mobileBanner.map((mobile, index) => (
                    <div
                      key={index}
                      className="w-full h-32 relative rounded-md overflow-hidden cursor-pointer banner"
                    >
                      <Image
                        src={mobile.image}
                        alt="banner image"
                        fill
                        priority
                        className="object-cover"
                      />
                      <div className="banner-overlay">
                        <Button
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent border border-solid border-white rounded-sm hover:bg-transparent"
                          id={"edit-banner"}
                          onClick={(e) => {
                            handleBannerAction(e);
                          }}
                        >
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                  <div
                    className="bg-[#EDF2F2] w-full rounded-md flex flex-col items-center justify-center cursor-pointer"
                    id="add-banner"
                    onClick={(e) => {
                      handleBannerAction(e);
                    }}
                  >
                    <AddPlusIcon className={"w-10 h-10"} />
                    <p className="font-semibold my-2 text-sm">Add banner</p>
                  </div>
                </div>
                <p className="mt-5 font-semibold">
                  Ecommerce home page top banner
                </p>
                <div className="grid grid-cols-4 gap-3 my-2">
                  {mobileBanner.map((mobile, index) => (
                    <div
                      key={index}
                      className="w-full h-32 relative rounded-md overflow-hidden cursor-pointer banner"
                    >
                      <Image
                        src={mobile.image}
                        alt="banner image"
                        fill
                        priority
                        className="object-cover"
                      />
                      <div className="banner-overlay">
                        <Button
                          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent border border-solid border-white rounded-sm hover:bg-transparent"
                          id={"edit-banner"}
                          onClick={(e) => {
                            handleBannerAction(e);
                          }}
                        >
                          Edit
                        </Button>
                      </div>
                    </div>
                  ))}
                  <div
                    className="bg-[#EDF2F2] w-full rounded-md flex flex-col items-center justify-center cursor-pointer"
                    id="add-banner"
                    onClick={(e) => {
                      handleBannerAction(e);
                    }}
                  >
                    <AddPlusIcon className={"w-10 h-10"} />
                    <p className="font-semibold my-2 text-sm">Add banner</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Overlay>
      ) : null}
      {addOverlay && (
        <div className="absolute w-full h-[1200px] inset-0 bg-black/20 flex flex-row items-center justify-center">
          <div className="w-2/5 bg-white rounded-sm py-5 px-3">
            <span className="flex flex-row justify-end">
              <Image
                src={"/close.png"}
                alt="close icon"
                width={20}
                height={20}
                priority
                className="cursor-pointer ml-32"
                onClick={() => {
                  setAddOverlay(false);
                }}
              />
            </span>
            <h2 className="text-center font-semibold">Add category</h2>
            <div className="w-40 mx-auto mt-16 flex flex-col items-center justify-center">
              <p className="text-center text-[#858585] my-1">Upload picture</p>
              <div
                className="w-36 h-36 px-3 border-2 border-dashed border-[#DBE1E1] rounded-full bg-[#F9FBFB] flex flex-col items-center justify-center cursor-pointer"
                onClick={handleRefClick}
              >
                <p className="text-xs text-[#858585]">Maximum size: 2MB</p>
                <p className="text-xs text-[#858585] mt-2">24 x 24</p>
              </div>
            </div>
            <form>
              <div className="w-3/4 mx-auto">
                <input
                  type="file"
                  ref={fileRef}
                  className="hidden"
                  name="image"
                  onChange={(e) => {
                    handleImageChange(e);
                  }}
                />
                <label htmlFor="name" className="text-[#858585] text-xs">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  className="w-full outline-none border border-solid border-[#EDF2F2] p-2 mb-5 rounded-md"
                  onChange={(e) => {
                    handleNameChange(e);
                  }}
                />
                <label htmlFor="commission" className="text-[#858585] text-xs">
                  Commission percentage
                </label>
                <input
                  type="text"
                  name="percentage"
                  value={percentage}
                  className="w-full outline-none border border-solid border-[#EDF2F2] p-2 mb-5 rounded-md"
                  onChange={(e) => {
                    handlePercentageChange(e);
                  }}
                />
                <Button
                  className="w-full bg-[#0B7E78] hover:bg-[#0B7E78]"
                  onClick={(e) => {
                    handleFormSubmit(e);
                  }}
                >
                  Confirm
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
      {editOverlay && (
        <div className="absolute w-full h-[1200px] inset-0 bg-black/20 flex flex-row items-center justify-center">
          <div className="w-2/5 bg-white rounded-sm py-5 px-3">
            <span className="flex flex-row justify-end">
              <Image
                src={"/close.png"}
                alt="close icon"
                width={20}
                height={20}
                priority
                className="cursor-pointer ml-32"
                onClick={() => {
                  setEditOverlay(false);
                }}
              />
            </span>
            <h2 className="text-center font-semibold">Edit category</h2>
            <div className="w-40 mx-auto mt-16 flex flex-col items-center justify-center">
              <p className="text-center text-[#858585] my-1">Upload picture</p>
              <div
                className="w-36 h-36 px-3 border-2 border-dashed border-[#DBE1E1] rounded-full bg-[#F9FBFB] flex flex-col items-center justify-center cursor-pointer"
                onClick={handleRefClick}
              >
                <p className="text-xs text-[#858585]">Maximum size: 2MB</p>
                <p className="text-xs text-[#858585] mt-2">24 x 24</p>
              </div>
            </div>
            <form>
              <div className="w-3/4 mx-auto">
                <input
                  type="file"
                  ref={fileRef}
                  className="hidden"
                  name="image"
                  onChange={(e) => {
                    handleImageChange(e);
                  }}
                />
                <label htmlFor="name" className="text-[#858585] text-xs">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={"Food"}
                  className="w-full outline-none border border-solid border-[#EDF2F2] p-2 mb-5 rounded-md"
                  onChange={(e) => {
                    handleNameChange(e);
                  }}
                />
                <label htmlFor="commission" className="text-[#858585] text-xs">
                  Commission percentage
                </label>
                <input
                  type="text"
                  name="percentage"
                  value={"10%"}
                  className="w-full outline-none border border-solid border-[#EDF2F2] p-2 mb-5 rounded-md"
                  onChange={(e) => {
                    handlePercentageChange(e);
                  }}
                />
                <Button
                  className="w-full bg-[#0B7E78] hover:bg-[#0B7E78]"
                  onClick={(e) => {
                    handleFormSubmit(e);
                  }}
                >
                  Confirm
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
      {banner === "edit-banner" ? (
        <Overlay>
          <div className="w-1/2 bg-white rounded-sm py-5 px-3">
            <span className="flex flex-row justify-end">
              <Image
                src={"/close.png"}
                alt="close icon"
                width={20}
                height={20}
                priority
                className="cursor-pointer ml-32"
                onClick={() => {
                  setBanner("");
                }}
              />
            </span>
            <h2 className="text-center font-semibold">Edit banner</h2>
            <div className="w-full">
              <p className="text-black mt-8 mb-2 font-semibold ml-20">
                Banner picture
              </p>
              <div className="w-3/4 h-32 relative rounded-md overflow-hidden cursor-pointer mb-7 mx-auto">
                <Image
                  src={MobileImage}
                  alt="banner image"
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 w-full h-full bg-black/20">
                  <Button
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent border border-solid border-white rounded-sm hover:bg-transparent"
                    onClick={handleRefClick}
                  >
                    Change photo
                  </Button>
                </div>
              </div>
            </div>
            <form>
              <div className="w-3/4 mx-auto">
                <input
                  type="file"
                  ref={fileRef}
                  className="hidden"
                  name="image"
                  onChange={(e) => {
                    handleImageChange(e);
                  }}
                />
                <label
                  htmlFor="banner-link"
                  className="text-black text-base font-semibold"
                >
                  Banner link
                </label>
                <input
                  type="text"
                  name="name"
                  value={"http://imagejhjgfhkdtyd65ukhkb7sdyui6789768977"}
                  className="w-full outline-none border border-solid border-[#EDF2F2] p-2 mb-5 rounded-md text-sm text-[#858585]"
                  onChange={(e) => {
                    handleNameChange(e);
                  }}
                />
                <div className="flex flex-row gap-3">
                  <Button
                    className="w-full text-[#ED0F0F] font-semibold hover:text-[#ED0F0F]"
                    variant={"ghost"}
                    onClick={(e) => {
                      handleFormSubmit(e);
                    }}
                  >
                    Delete banner
                  </Button>
                  <Button
                    className="w-full bg-[#0B7E78] hover:bg-[#0B7E78]"
                    onClick={(e) => {
                      handleFormSubmit(e);
                    }}
                  >
                    Update
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Overlay>
      ) : banner === "add-banner" ? (
        <Overlay>
          <div className="w-1/2 bg-white rounded-sm py-5 px-3">
            <span className="flex flex-row justify-end">
              <Image
                src={"/close.png"}
                alt="close icon"
                width={20}
                height={20}
                priority
                className="cursor-pointer ml-32"
                onClick={() => {
                  setBanner("");
                }}
              />
            </span>
            <h2 className="text-center font-semibold">Add new banner</h2>
            <div className="w-full">
              <p className="text-black mt-8 mb-2 font-semibold ml-20">
                Banner picture
              </p>
              <div className="w-3/4 min-h-32 relative rounded-md overflow-hidden cursor-pointer mb-7 mx-auto">
                <div className="w-full bg-[#F9FBFB] border-2 border-dashed border-[#DBE1E1] flex flex-col items-center justify-center rounded-md py-10" onClick={ handleRefClick }>
                  <p className="text-xs text-[#858585]">Maximum size: 2MB</p>
                  <p className="text-xs text-[#858585]">24 x 24</p>
                </div>
              </div>
            </div>
            <form>
              <div className="w-3/4 mx-auto">
                <input
                  type="file"
                  ref={fileRef}
                  className="hidden"
                  name="image"
                  onChange={(e) => {
                    handleImageChange(e);
                  }}
                />
                <label
                  htmlFor="banner-link"
                  className="text-black text-base font-semibold"
                >
                  Banner link
                </label>
                <input
                  type="text"
                  name="name"
                  value={"http://imagejhjgfhkdtyd65ukhkb7sdyui6789768977"}
                  className="w-full outline-none border border-solid border-[#EDF2F2] p-2 mb-5 rounded-md text-sm text-[#858585]"
                  onChange={(e) => {
                    handleNameChange(e);
                  }}
                />
                <div className="flex flex-row gap-3">
                  <Button
                    className="w-full text-[#ED0F0F] font-semibold hover:text-[#ED0F0F]"
                    variant={"ghost"}
                    onClick={(e) => {
                      handleFormSubmit(e);
                    }}
                  >
                    Delete banner
                  </Button>
                  <Button
                    className="w-full bg-[#0B7E78] hover:bg-[#0B7E78]"
                    onClick={(e) => {
                      handleFormSubmit(e);
                    }}
                  >
                    Update
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </Overlay>
      ) : null}
    </>
  );
};

export default ActionPanel;
