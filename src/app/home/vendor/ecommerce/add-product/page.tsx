"use client";
import { BackIcon } from "@/components/icons/icons";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const AddProduct = () => {
  const navigate = useRouter();
  const [count, setCount] = useState<number>(1);

  const handleNextForm = () => {
    setCount(count + 1);
  };

  const handlePreviousForm = () => {
    setCount(count - 1);
  };

  const handleBack = () => {
    navigate.back();
  };
  return (
    <div className="w-full min-h-screen pt-3 pb-20 px-2">
      <div className="flex flex-row items-center gap-20">
        <div
          className="bg-transparent inline-block w-11 h-11 relative my-8 mx-4 cursor-pointer"
          onClick={handleBack}
        >
          <BackIcon className={"w-11 h-11 cursor-pointer absolute"} />
        </div>
        <p className="text-xl font-semibold">Add Product</p>
      </div>
      {/* pagination */}
      <div className="w-full">
        <ul className="flex flex-row items-center justify-center gap-5">
          <li
            className={`${
              count > 1
                ? "w-8 h-8 bg-[#0B7E78] text-[#F6FEFE]"
                : "w-11 h-11 text-[#0B7E78] bg-[#F6FEFE]"
            } rounded-full flex flex-row items-center justify-center border border-solid border-[#0B7E78]`}
          >
            1
          </li>
          <li
            className={`${
              count === 2
                ? "w-11 h-11 text-[#0B7E78] bg-[#F6FEFE] border border-solid border-[#0B7E78]"
                : count > 2
                ? "w-8 h-8 bg-[#0B7E78] text-[#F6FEFE]"
                : "w-9 h-9 bg-white text-[#D1D1D1] border border-solid border-[#D1D1D1]"
            } rounded-full flex flex-row items-center justify-center`}
          >
            2
          </li>
          <li
            className={`${
              count === 3
                ? "w-11 h-11 text-[#0B7E78] bg-[#F6FEFE] border border-solid border-[#0B7E78]"
                : count > 3
                ? "w-8 h-8 bg-[#0B7E78] text-[#F6FEFE]"
                : "w-9 h-9 bg-white text-[#D1D1D1] border border-solid border-[#D1D1D1]"
            } rounded-full flex flex-row items-center justify-center`}
          >
            3
          </li>
          <li
            className={`${
              count === 4
                ? "w-11 h-11 text-[#0B7E78] bg-[#F6FEFE] border border-solid border-[#0B7E78]"
                : count > 4
                ? "w-8 h-8 bg-[#0B7E78] text-[#F6FEFE]"
                : "w-9 h-9 bg-white text-[#D1D1D1] border border-solid border-[#D1D1D1]"
            } rounded-full flex flex-row items-center justify-center`}
          >
            4
          </li>
          <li
            className={`${
              count === 5
                ? "w-11 h-11 text-[#0B7E78] bg-[#F6FEFE] border border-solid border-[#0B7E78]"
                : count > 5
                ? "w-8 h-8 bg-[#0B7E78] text-[#F6FEFE]"
                : "w-9 h-9 bg-white text-[#D1D1D1] border border-solid border-[#D1D1D1]"
            } rounded-full flex flex-row items-center justify-center`}
          >
            5
          </li>
        </ul>
      </div>
      {/* image upload */}
      <div className="w-full flex flex-row items-center justify-around gap-2 my-8">
        <div className="relative w-28 h-28">
          <Image src={"/frame1.png"} alt="frame" fill priority />
        </div>
        <div className="relative w-28 h-28">
          <Image src={"/frame1.png"} alt="frame" fill priority />
        </div>
        <div className="relative w-28 h-28">
          <Image src={"/frame1.png"} alt="frame" fill priority />
        </div>
      </div>
      {/* form */}
      <form>
        {/* input fields */}
        {count === 1 ? (
          <div>
            <label htmlFor="product-name" className="text-[#858585]">
              Product name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="product-name-01"
              placeholder="Enter product name"
              className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md mb-4 outline-none"
            />
            <label htmlFor="description-01" className="text-[#858585]">
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              cols={10}
              rows={5}
              className="w-full resize-none border border-solid border-[#DBE1E1] outline-none p-2 rounded-md mb-4"
            ></textarea>
            <div className="flex flex-row items-center justify-between gap-3">
              <div>
                <label htmlFor="price" className="text-[#858585]">
                  Original Price <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="price-01"
                  placeholder="Enter product price"
                  className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md mb-7 outline-none"
                />
              </div>
              <div>
                <label htmlFor="price" className="text-[#858585]">
                  Slash price
                </label>
                <input
                  type="text"
                  name="price-01"
                  placeholder="Enter slash price"
                  className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md mb-7 outline-none"
                />
              </div>
            </div>
            <label htmlFor="category" className="text-[#858585]">
              Category<span className="text-red-500">*</span>
            </label>
            <select
              name="category-01"
              className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md outlin-none mb-4"
            >
              <option className="text-[#858585]">Select category</option>
            </select>
            <div className="flex flex-row items-center justify-between gap-3">
              <div>
                <label htmlFor="quantity" className="text-[#858585]">
                  Available Qty <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  name="quantity-01"
                  placeholder="Enter product quantity"
                  className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md mb-7 outline-none"
                />
              </div>
              <div className="-mt-7">
                <label htmlFor="price" className="text-[#858585]">
                  Item color
                </label>
                <span className="flex flex-row items-center my-3">
                  <input
                    type="radio"
                    value="bank"
                    className="mr-3 accent-[#953EF9] h-7 w-7"
                    name="bank"
                  />
                  <input
                    type="radio"
                    value="bank"
                    className="mr-3 accent-[#F93EC5] h-7 w-7"
                    name="bank"
                  />
                  <input
                    type="radio"
                    value="bank"
                    className="mr-3 accent-[#3EF973] h-7 w-7"
                    name="bank"
                  />
                  <input
                    type="radio"
                    value="bank"
                    className="mr-3 accent-[#F98D3E] h-7 w-7"
                    name="bank"
                  />
                </span>
              </div>
            </div>
          </div>
        ) : count === 2 ? (
          <div>
            <label htmlFor="product-02-name" className="text-[#858585]">
              Product name
            </label>
            <input
              type="text"
              name="product-name-02"
              placeholder="Enter product name"
              className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md mb-4 outline-none"
            />
            <label htmlFor="description-02" className="text-[#858585]">
              Description
            </label>
            <textarea
              cols={10}
              rows={5}
              className="w-full resize-none border border-solid border-[#DBE1E1] outline-none p-2 rounded-md mb-4"
            ></textarea>
            <div className="flex flex-row items-center justify-between gap-3">
              <div>
                <label htmlFor="price" className="text-[#858585]">
                  Original Price
                </label>
                <input
                  type="text"
                  name="price-02"
                  placeholder="Enter product price"
                  className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md mb-7 outline-none"
                />
              </div>
              <div>
                <label htmlFor="price" className="text-[#858585]">
                  Slash price
                </label>
                <input
                  type="text"
                  name="slash-price-02"
                  placeholder="Enter slash price"
                  className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md mb-7 outline-none"
                />
              </div>
            </div>
            <label htmlFor="category" className="text-[#858585]">
              Category
            </label>
            <select
              name="category-02"
              className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md outlin-none mb-4"
            >
              <option className="text-[#858585]">Select category</option>
            </select>
            <div className="flex flex-row items-center justify-between gap-3">
              <div>
                <label htmlFor="quantity" className="text-[#858585]">
                  Available Qty
                </label>
                <input
                  type="number"
                  name="quantity-02"
                  placeholder="Enter product quantity"
                  className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md mb-7 outline-none"
                />
              </div>
              <div className="-mt-7">
                <label htmlFor="price" className="text-[#858585]">
                  Item color
                </label>
                <span className="flex flex-row items-center my-3">
                  <input
                    type="radio"
                    value="bank"
                    className="mr-3 accent-[#953EF9] h-7 w-7"
                    name="color-02"
                  />
                  <input
                    type="radio"
                    value="bank"
                    className="mr-3 accent-[#F93EC5] h-7 w-7"
                    name="color-02"
                  />
                  <input
                    type="radio"
                    value="bank"
                    className="mr-3 accent-[#3EF973] h-7 w-7"
                    name="color-02"
                  />
                  <input
                    type="radio"
                    value="bank"
                    className="mr-3 accent-[#F98D3E] h-7 w-7"
                    name="color-02"
                  />
                </span>
              </div>
            </div>
          </div>
        ) : count === 3 ? (
          <div>
          <label htmlFor="product-02-name" className="text-[#858585]">
            Product name
          </label>
          <input
            type="text"
            name="product-name-03"
            placeholder="Enter product name"
            className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md mb-4 outline-none"
          />
          <label htmlFor="description-03" className="text-[#858585]">
            Description
          </label>
          <textarea
            cols={10}
            rows={5}
            className="w-full resize-none border border-solid border-[#DBE1E1] outline-none p-2 rounded-md mb-4"
          ></textarea>
          <div className="flex flex-row items-center justify-between gap-3">
            <div>
              <label htmlFor="price" className="text-[#858585]">
                Original Price
              </label>
              <input
                type="text"
                name="price-03"
                placeholder="Enter product price"
                className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md mb-7 outline-none"
              />
            </div>
            <div>
              <label htmlFor="price" className="text-[#858585]">
                Slash price
              </label>
              <input
                type="text"
                name="slash-price-03"
                placeholder="Enter slash price"
                className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md mb-7 outline-none"
              />
            </div>
          </div>
          <label htmlFor="category" className="text-[#858585]">
            Category
          </label>
          <select
            name="category-03"
            className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md outlin-none mb-4"
          >
            <option className="text-[#858585]">Select category</option>
          </select>
          <div className="flex flex-row items-center justify-between gap-3">
            <div>
              <label htmlFor="quantity" className="text-[#858585]">
                Available Qty
              </label>
              <input
                type="number"
                name="quantity-03"
                placeholder="Enter product quantity"
                className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md mb-7 outline-none"
              />
            </div>
            <div className="-mt-7">
              <label htmlFor="price" className="text-[#858585]">
                Item color
              </label>
              <span className="flex flex-row items-center my-3">
                <input
                  type="radio"
                  value="bank"
                  className="mr-3 accent-[#953EF9] h-7 w-7"
                  name="color-02"
                />
                <input
                  type="radio"
                  value="bank"
                  className="mr-3 accent-[#F93EC5] h-7 w-7"
                  name="color-02"
                />
                <input
                  type="radio"
                  value="bank"
                  className="mr-3 accent-[#3EF973] h-7 w-7"
                  name="color-02"
                />
                <input
                  type="radio"
                  value="bank"
                  className="mr-3 accent-[#F98D3E] h-7 w-7"
                  name="color-02"
                />
              </span>
            </div>
          </div>
        </div>
        ): count === 4 ? (
          <div>
          <label htmlFor="product-02-name" className="text-[#858585]">
            Product name
          </label>
          <input
            type="text"
            name="product-name-04"
            placeholder="Enter product name"
            className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md mb-4 outline-none"
          />
          <label htmlFor="description-04" className="text-[#858585]">
            Description
          </label>
          <textarea
            cols={10}
            rows={5}
            className="w-full resize-none border border-solid border-[#DBE1E1] outline-none p-2 rounded-md mb-4"
          ></textarea>
          <div className="flex flex-row items-center justify-between gap-3">
            <div>
              <label htmlFor="price" className="text-[#858585]">
                Original Price
              </label>
              <input
                type="text"
                name="price-04"
                placeholder="Enter product price"
                className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md mb-7 outline-none"
              />
            </div>
            <div>
              <label htmlFor="price" className="text-[#858585]">
                Slash price
              </label>
              <input
                type="text"
                name="slash-price-04"
                placeholder="Enter slash price"
                className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md mb-7 outline-none"
              />
            </div>
          </div>
          <label htmlFor="category" className="text-[#858585]">
            Category
          </label>
          <select
            name="category-04"
            className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md outlin-none mb-4"
          >
            <option className="text-[#858585]">Select category</option>
          </select>
          <div className="flex flex-row items-center justify-between gap-3">
            <div>
              <label htmlFor="quantity" className="text-[#858585]">
                Available Qty
              </label>
              <input
                type="number"
                name="quantity-04"
                placeholder="Enter product quantity"
                className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md mb-7 outline-none"
              />
            </div>
            <div className="-mt-7">
              <label htmlFor="price" className="text-[#858585]">
                Item color
              </label>
              <span className="flex flex-row items-center my-3">
                <input
                  type="radio"
                  value="bank"
                  className="mr-3 accent-[#953EF9] h-7 w-7"
                  name="color-02"
                />
                <input
                  type="radio"
                  value="bank"
                  className="mr-3 accent-[#F93EC5] h-7 w-7"
                  name="color-02"
                />
                <input
                  type="radio"
                  value="bank"
                  className="mr-3 accent-[#3EF973] h-7 w-7"
                  name="color-02"
                />
                <input
                  type="radio"
                  value="bank"
                  className="mr-3 accent-[#F98D3E] h-7 w-7"
                  name="color-02"
                />
              </span>
            </div>
          </div>
        </div>
        ) : count === 5 ? (
          <div>
          <label htmlFor="product-02-name" className="text-[#858585]">
            Product name
          </label>
          <input
            type="text"
            name="product-name-05"
            placeholder="Enter product name"
            className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md mb-4 outline-none"
          />
          <label htmlFor="description-05" className="text-[#858585]">
            Description
          </label>
          <textarea
            cols={10}
            rows={5}
            className="w-full resize-none border border-solid border-[#DBE1E1] outline-none p-2 rounded-md mb-4"
          ></textarea>
          <div className="flex flex-row items-center justify-between gap-3">
            <div>
              <label htmlFor="price" className="text-[#858585]">
                Original Price
              </label>
              <input
                type="text"
                name="price-05"
                placeholder="Enter product price"
                className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md mb-7 outline-none"
              />
            </div>
            <div>
              <label htmlFor="price" className="text-[#858585]">
                Slash price
              </label>
              <input
                type="text"
                name="slash-price-05"
                placeholder="Enter slash price"
                className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md mb-7 outline-none"
              />
            </div>
          </div>
          <label htmlFor="category" className="text-[#858585]">
            Category
          </label>
          <select
            name="category-05"
            className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md outlin-none mb-4"
          >
            <option className="text-[#858585]">Select category</option>
          </select>
          <div className="flex flex-row items-center justify-between gap-3">
            <div>
              <label htmlFor="quantity" className="text-[#858585]">
                Available Qty
              </label>
              <input
                type="number"
                name="quantity-05"
                placeholder="Enter product quantity"
                className="w-full border border-solid border-[#DBE1E1] px-2 py-4 rounded-md mb-7 outline-none"
              />
            </div>
            <div className="-mt-7">
              <label htmlFor="price" className="text-[#858585]">
                Item color
              </label>
              <span className="flex flex-row items-center my-3">
                <input
                  type="radio"
                  value="bank"
                  className="mr-3 accent-[#953EF9] h-7 w-7"
                  name="color-02"
                />
                <input
                  type="radio"
                  value="bank"
                  className="mr-3 accent-[#F93EC5] h-7 w-7"
                  name="color-02"
                />
                <input
                  type="radio"
                  value="bank"
                  className="mr-3 accent-[#3EF973] h-7 w-7"
                  name="color-02"
                />
                <input
                  type="radio"
                  value="bank"
                  className="mr-3 accent-[#F98D3E] h-7 w-7"
                  name="color-02"
                />
              </span>
            </div>
          </div>
        </div>
        ) : null }
        {/* buttons */}
        {count === 1 ? (
          <Button
            type="button"
            className="w-full bg-[#0B7E78] h-14 hover:bg-[#0B7E78]"
            onClick={handleNextForm}
          >
            Next product
          </Button>
        ) : (
          <div className="flex flex-row items-center gap-3">
            <Button
              type="button"
              className="w-full text-[#0B7E78] h-14 text-lg font-semibold hover:bg-transparent hover:text-[#0B7E78]"
              variant={"ghost"}
              onClick={handlePreviousForm}
            >
              Previous product
            </Button>
            {
              count === 5 ? (
                <Button
                type="button"
                className="w-full bg-[#0B7E78] h-14 cursor-not-allowed hover:bg-[#0B7E78]"
                onClick={handleNextForm}
                disabled
              >
                Next product
              </Button>
              ): (
              <Button
                type="button"
                className="w-full bg-[#0B7E78] h-14 hover:bg-[#0B7E78]"
                onClick={handleNextForm}
              >
                Next product
              </Button>
              )
            }
          </div>
        )}
        <Button type="button" className="w-full bg-[#0B7E78] h-14 my-5 hover:bg-[#0B7E78]">
          Upload Product
        </Button>
      </form>
      {/* form ends here */}
    </div>
  );
};

export default AddProduct;
