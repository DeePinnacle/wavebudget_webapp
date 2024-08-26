import {
  EditIcon,
  FilterIcon,
  RecycleIcon,
  SearchIcon,
} from "@/components/icons/icons";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { messages, ScheduleMesages } from "@/config/data";
import Overlay from "./overlay";
import { OverlayState } from "@/store/store";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const Notification = () => {
  const [mssgID, setMssgID] = useState<string | undefined>();
  const [btnID, setBtnID] = useState<string>();
  const [modal, setModal] = useState<string>();
  const [notification, setNotification] = useState<string>("prompt");

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { id } = e.currentTarget;
    setMssgID(id);
  };

  const { overlay, openOverlay, closeOverlay } = OverlayState((state) => ({
    overlay: state.overlay,
    openOverlay: state.openOverlay,
    closeOverlay: state.closeOverlay,
  }));

  const handleBtnID = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const { id } = e.currentTarget;
    setBtnID(id);
    openOverlay();
  };

  const handleClickModal = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    const { id } = e.currentTarget;
    setModal(id);
    openOverlay();
  };

  const handleToggleNotification = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    const { id } = e.currentTarget;
    setNotification(id);
  };

  return (
    <>
      <div className="w-full min-h-2 px-3 py-5 mt-7 flex flex-row justify-between gap-5">
        {/* notfication menu */}
        <ul className="w-[20%] box-border">
          <li
            className={`${
              notification === "send"
                ? "text-black font-semibold"
                : "text-sm text-[#858585]"
            } my-4 cursor-pointer`}
            id="send"
            onClick={(e) => {
              handleToggleNotification(e);
            }}
          >
            Send message
          </li>
          <li
            className={`${
              notification === "prompt"
                ? "text-black font-semibold"
                : "text-sm text-[#858585]"
            } my-4 cursor-pointer`}
            id="prompt"
            onClick={(e) => {
              handleToggleNotification(e);
            }}
          >
            Message prompt
          </li>
          <li
            className={`${
              notification === "schedule"
                ? "text-black font-semibold"
                : "text-sm text-[#858585]"
            } my-4 text-sm cursor-pointer`}
            id="schedule"
            onClick={(e) => {
              handleToggleNotification(e);
            }}
          >
            Schedule messages
            <span className="w-7 h-4 bg-[#E8EDE9] text-black px-1 py-2 ml-2 rounded-md">
              234
            </span>
          </li>
        </ul>
        {/* content */}
        {notification === "prompt" && (
          <>
            <div className="w-[80%] min-h-2 p-4 border border-solid border-[#E8EDE9] rounded-md">
              {/* search area */}
              <form>
                <div className="w-full relative flex flex-row items-center justify-between gap-6">
                  <SearchIcon className={"absolute top-3 left-2"} />
                  <input
                    type="text"
                    name="search"
                    placeholder="search"
                    className="w-4/5 border border-solid border-[#E8EDE9] outline-none py-2 px-9 rounded-md"
                  />
                  <Button
                    className="flex flex-row items-center bg-white text-[#0B7E78] border border-solid border-[#0B7E78] hover:bg-white"
                    id="add"
                    onClick={(e) => {
                      // openOverlay()
                      e.stopPropagation();
                      handleBtnID(e);
                    }}
                  >
                    <span className="text-[#0B7E78] text-xl mr-2">+</span>Add
                    message
                  </Button>
                </div>
              </form>
              {/* messages */}
              <p className="my-3 text-sm text-[#858585]">24 message prompt</p>
              <div className="w-full h-[37.5rem] outline-none p-2 overflow-y-auto message-slider flex flex-col gap-y-2">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={` ${
                      mssgID === String(index)
                        ? "bg-[#F9FBFB] border border-solid border-[#EDF2F2]"
                        : "border border-solid border-[#F9FBFB]"
                    } w-full rounded-md cursor-pointer px-2 py-3`}
                    id={String(index)}
                    onClick={(e) => handleClick(e)}
                  >
                    <div className="flex flex-row items-center justify-between">
                      <p className="text-sm font-semibold">{message.subject}</p>
                      <div className="flex flex-row gap-6">
                        <Button
                          className="bg-white border border-solid border-[#E8EDE9] text-[#858585] rounded-sm hover:bg-white"
                          onClick={(e) => {
                            // openOverlay()
                            e.stopPropagation();
                            handleBtnID(e);
                          }}
                          id="edit"
                        >
                          <EditIcon />
                          Edit
                        </Button>
                        <Button
                          className="bg-white border border-solid border-[#E8EDE9] text-[#858585] rounded-sm hover:bg-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleBtnID(e);
                          }}
                          id="delete"
                        >
                          <RecycleIcon />
                          Delete
                        </Button>
                      </div>
                    </div>
                    <div className="w-full my-4">
                      <p className="text-xs text-[#858585]">{message.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        {notification === "send" && (
          <div className="w-[80%] min-h-2 py-6 border border-solid border-[#E8EDE9] rounded-md flex flex-row items-center justify-center">
            <div className="w-3/5">
              <form action="" className="form-el">
                <div className="flex flex-col">
                  <p className="text-center font-semibold mb-5">Send message</p>
                  <label htmlFor="recipient">Recipient</label>
                  <input type="text" className="w-full" placeholder="General" />
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    className="w-full"
                    placeholder="DD/MM/YYY"
                  />
                  <label htmlFor="time">Time</label>
                  <input type="time" className="w-full" placeholder="00:00" />
                  <label htmlFor="recipient">Prompt title</label>
                  <input type="text" className="w-full" placeholder="Bonanza" />
                  <label htmlFor="recipient">Message body</label>
                  <textarea
                    name="message-body"
                    cols={20}
                    rows={10}
                    className="w-full outline-none border border-solid border-[#DBE1E1] bg-[#F9FBFB] text-[#858585] p-2 resize-none rounded-md"
                  ></textarea>
                  <Button className="w-full bg-[#0B7E78] hover:bg-[#0B7E78] my-4">
                    Schedule message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        )}
        {notification === "schedule" && (
          <>
            <div className="w-[80%] min-h-2 p-4 border border-solid border-[#E8EDE9] rounded-md">
              {/* search area */}
              <form>
                <div className="w-full relative flex flex-row items-center justify-between gap-6">
                  <SearchIcon className={"absolute top-3 left-2"} />
                  <input
                    type="text"
                    name="search"
                    placeholder="search"
                    className="w-4/5 border border-solid border-[#E8EDE9] outline-none py-2 px-9 rounded-md"
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
                </div>
              </form>
              {/* messages */}
              <p className="mt-5 text-sm text-[#858585]">24 message prompt</p>
              <div className="w-full h-[37.5rem] outline-none p-2 overflow-y-auto message-slider flex flex-col gap-y-2">
                {ScheduleMesages.map((message, index) => (
                  <div
                    key={index}
                    className={` ${
                      modal === String(index)
                        ? "bg-[#F9FBFB] border border-solid border-[#EDF2F2]"
                        : "border border-solid border-[#F9FBFB]"
                    } w-full rounded-md cursor-pointer px-2 py-3`}
                    id={String(index)}
                    onClick={(e) => handleClickModal(e)}
                  >
                    <div className="flex flex-row items-center justify-between">
                      <p className="text-sm font-semibold">{message.subject}</p>
                      <div className="flex flex-row gap-6">
                        <Button
                          className="bg-white border border-solid border-[#E8EDE9] text-[#858585] rounded-sm hover:bg-white"
                          onClick={(e) => {
                            // openOverlay()
                            e.stopPropagation();
                            handleBtnID(e);
                          }}
                          id="edit"
                        >
                          <EditIcon />
                          Edit
                        </Button>
                        <Button
                          className="bg-white border border-solid border-[#E8EDE9] text-[#858585] rounded-sm hover:bg-white"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleBtnID(e);
                          }}
                          id="delete"
                        >
                          <RecycleIcon />
                          Delete
                        </Button>
                      </div>
                    </div>
                    <div className="flex flex-row items-center gap-6">
                      <p className="text-xs text-[#858585]">
                        Send date: 23rd July, 2024 | 2:22pm
                      </p>
                      <div className="flex flex-row items-center gap-3">
                        <p className="text-xs p-1 bg-[#F6FEFE] text-[#0B7E78] border border-solid border-[#0B7E78] rounded-md">
                          Customers
                        </p>
                        <p className="text-xs p-1 bg-[#F6FEFE] text-[#0B7E78] border border-solid border-[#0B7E78] rounded-md">
                          Defaulters
                        </p>
                      </div>
                    </div>
                    <div className="w-full my-4">
                      <p className="text-xs text-[#858585]">{message.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      {overlay === false ? null : btnID === "add" && overlay !== false ? (
        <Overlay>
          <div
            className={`${
              overlay === false ? "hidden" : "block"
            } w-[40%] bg-white px-4 py-5 rounded-md`}
          >
            <span className="flex flex-row items-center justify-center my-7">
              <p className="text-center font-semibold ml-28">
                New message prompt
              </p>
              <Image
                src={"/close.png"}
                alt="close icon"
                width={20}
                height={20}
                priority
                className="cursor-pointer ml-32"
                onClick={() => {
                  closeOverlay();
                  setBtnID("");
                }}
              />
            </span>
            <form>
              <div className="flex flex-col gap-y-3">
                <label
                  htmlFor="title"
                  className="text-[#858585] text-sm font-semibold"
                >
                  Prompt title
                </label>
                <input
                  type="text"
                  placeholder="title"
                  name="title"
                  className="w-full p-2 outline-none border border-solid border-[#DBE1E1] rounded-md placeholder:text-xs"
                />
                <label
                  htmlFor="message"
                  className="text-[#858585] text-sm font-semibold"
                >
                  Message body
                </label>
                <textarea
                  name="message"
                  placeholder="message body"
                  cols={30}
                  rows={10}
                  className="border bordr-solid border-[#DBE1E1] outline-none p-2 resize-none rounded-md"
                ></textarea>
              </div>
              <Button
                type="button"
                className="my-3 w-full bg-[#0B7E78] hover:bg-[#0B7E78]"
              >
                Upload message prompt
              </Button>
            </form>
          </div>
        </Overlay>
      ) : btnID === "delete" && overlay !== false ? (
        <Overlay>
          <div
            className={`${
              overlay === false ? "hidden" : "block"
            } w-[30%] bg-white px-4 py-5 rounded-md`}
          >
            <p className="text-center font-semibold my-5">Delete this prompt</p>
            <p className="text-center text-sm text-[#858585] my-8">
              Are you sure you want to delete this prompt? By deleting this
              message prompt means it will be lost forever
            </p>
            <div className="flex flex-row items-center justify-center gap-2">
              <Button className="border border-solid border-[#0B7E78] bg-white text-[#0B7E78] hover:bg-white">
                Yes delete
              </Button>
              <Button
                className="bg-[#0B7E78] text-white hover:bg-[#0B7E78]"
                onClick={() => {
                  closeOverlay();
                  setBtnID("");
                }}
              >
                No, don&apos;t delete
              </Button>
            </div>
          </div>
        </Overlay>
      ) : btnID === "edit" && overlay !== false ? (
        <Overlay>
          <div
            className={`${
              overlay === false ? "hidden" : "block"
            } w-[40%] bg-white px-4 py-5 rounded-md`}
          >
            <span className="flex flex-row items-center justify-center my-7">
              <p className="text-center font-semibold ml-28">
                Edit Prompt message
              </p>
              <Image
                src={"/close.png"}
                alt="close icon"
                width={20}
                height={20}
                priority
                className="cursor-pointer ml-32"
                onClick={() => {
                  closeOverlay();
                  setBtnID("");
                }}
              />
            </span>
            <form>
              <div className="flex flex-col gap-y-3">
                <label
                  htmlFor="title"
                  className="text-[#858585] text-sm font-semibold"
                >
                  Prompt title
                </label>
                <input
                  type="text"
                  placeholder="title"
                  name="title"
                  value={"Still paying customers"}
                  className="w-full p-2 outline-none border border-solid border-[#DBE1E1] rounded-md text-sm text-[#858585] placeholder:text-xs"
                />
                <label
                  htmlFor="message"
                  className="text-[#858585] text-sm font-semibold"
                >
                  Message body
                </label>
                <textarea
                  name="message"
                  placeholder="message body"
                  cols={30}
                  rows={10}
                  value={
                    "Shop local, score big deals. Uncover the best businesses around you, find what need, and enjoy in-store shopping convenience. Shop local, score big deals. Uncover the best businesses around you, find what you need, and enjoy in-store shopping convenience."
                  }
                  className="border border-solid border-[#DBE1E1] text-sm text-[#858585] outline-none p-2 resize-none rounded-md"
                ></textarea>
              </div>
              <Button
                type="button"
                className="my-3 w-full bg-[#0B7E78] hover:bg-[#0B7E78]"
              >
                Update message
              </Button>
            </form>
          </div>
        </Overlay>
      ) : null}
      {modal && (
        <Overlay>
          <div
            className={`${
              overlay === false ? "hidden" : "block"
            } w-[40%] bg-white px-4 py-5 rounded-md`}
          >
            <span className="flex flex-row items-center justify-center my-7">
              <p className="text-center font-semibold ml-28">Bonanza Slash</p>
              <Image
                src={"/close.png"}
                alt="close icon"
                width={20}
                height={20}
                priority
                className="cursor-pointer ml-32"
                onClick={() => {
                  closeOverlay();
                  setModal("");
                }}
              />
            </span>
            <p className="text-black font-semibold text-center">
              Schedule date:{" "}
              <span className="text-xs text-[#858585]">
                Send date: 23rd July, 2024 | 2:22pm
              </span>
            </p>
            <div className="flex flex-row items-center justify-center gap-3 mt-3">
              <p className="font-semibold">Message recipients</p>
              <p className="text-xs p-1 bg-[#F6FEFE] text-[#0B7E78] border border-solid border-[#0B7E78] rounded-md">
                Customers
              </p>
              <p className="text-xs p-1 bg-[#F6FEFE] text-[#0B7E78] border border-solid border-[#0B7E78] rounded-md">
                Defaulters
              </p>
            </div>
            <div className="w-full bg-[#F9FBFB] p-5 my-8">
              <p className="text-[#858585] text-sm">
                Shop local, score big deals. Uncover the best businesses around
                you, find what need, and enjoy in-store shopping Shop local,
                score big deals. Uncover the best businesses around you, find
                what need, and enjoy in-store shopping convenience. Shop local,
                score big deals. Uncover the best businesses around you, find
                convenience. Shop local, score big deals. Uncover the best
                businesses around you, find wh
              </p>
            </div>
            <Button className="w-full bg-[#0B7E78] mb-8 hover:bg-[#0B7E78]">
              Withdraw message
            </Button>
          </div>
        </Overlay>
      )}
    </>
  );
};

export default Notification;
