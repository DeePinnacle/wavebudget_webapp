"use client";
import React from "react";
import { BackIcon, ExclamationIcon } from "../../../../components/icons/icons";
import { Button } from "../../../../components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCartStore } from "../../../../store/store"

type FormField = "product" | "quantity" | "price";

const AddProduct = () => {

  // set errors 
  const [errors, setErrors] = useState<string>()

  // get add to cart
  const addToCart = useCartStore((state) => state.addToCart)

  const navigation = useRouter();
  const [productList, setProductList] = useState([
    { product: "", quantity: "", price: "" },
  ]);
  const [ overlay, setOverlay ] = useState(false)
  // handle add product list
  const handleAddProductList = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    let object = {
      product: "",
      quantity: "",
      price: "",
    };
    setProductList([...productList, object]);
  };
  // handle remove product list
  // React.MouseEvent<HTMLButtonElement, MouseEvent> 
  const handleRemoveProductList = (index: number ) => {
    // e.preventDefault()
    const list = [...productList];
    list.splice(index, 1);
    setProductList(list);
    
  };

  // handle form change
  const handleFormChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const name = event.target.name as FormField; // Assert name as FormField
    const value = event.target.value;
    let data = [...productList];
    data[index] = {
      ...data[index],
      [name]:value
    }
    // data[index][event.target.name] = event.target.value;
    setProductList(data);
  };

  // handle back navigation 
  const handleBack = () => {
    navigation.back();
  };
  // handle add to cart 
  const handleAddToCart = () => {
    productList.map((items, index)=> {
      addToCart({
        id: index,
        product: items.product,
        price: Number(items.price),
        quantity: Number(items.quantity)
      })      
    })
    navigation.push("/instore/cart")
  }
  // handle overlays
  const handleOverlay = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    productList.map((item, index)=>{
      if(!item.product){
        setOverlay(false)
        return setErrors("Enter product name")
      }else if(!item.price){
        setOverlay(false)
        return setErrors("Enter product price")
      }else if(!item.quantity){
        setOverlay(false)
        return setErrors("Enter product quantity")
      }else{
        event.preventDefault()
        setOverlay(true)
        console.log(productList)
      }
    })
  }

  // drop overlay
  const handleDropOverlay = () => {
    setOverlay(false)
  }

  return (
    <div className="w-full min-h-screen bg-[#0B7E78] pt-5">
      <div className="w-full mt-4 px-5 flex flex-row items-center justify-between">
        <div
          className="bg-white w-10 h-10 rounded-full flex items-center justify-center"
          onClick={handleBack}
        >
          <BackIcon className={"text-[#0B7E78] font-bold w-8 h-8"} />
        </div>
        <div className="w-11/12">
          <p className="text-white text-center text-2xl font-semibold font-montserrat">
            Credit limit
          </p>
        </div>
      </div>
      <p className="text-center text-white font-semibold text-2xl my-8">
        24,000/<span className="text-lg">50,000</span>
      </p>
      {/* indicator */}
      <div className="w-11/12 h-3 mx-auto bg-[#13DCD2] rounded-lg">
        <div className="w-1/2 h-3 bg-[#0FAEA5] rounded-lg"></div>
      </div>
      {/* add product */}
      <div className="w-full min-h-screen bg-white mt-7 rounded-tl-3xl rounded-tr-3xl px-4 py-8">
        <form>
          {
            errors && (
              <div className="w-full bg-[#FEECEC] px-2 py-8 min-h-7 my-3">
                <p className="text-[#ED0F0F] text-center font-bold">{ errors }</p>
              </div>
            )
          }
          {productList.map((form, index) => (
            <div key={index}>
              <label
                htmlFor="product-name"
                className="text-lg font-semibold text-[#858585]"
              >
                Product Name
              </label>
              <input
                type="text"
                name="product"
                placeholder="product name"
                value={form.product}
                className={` ${ errors === 'Enter product name' ? 'border border-solid border-red-500' : '' } w-full outline-none border border-solid border-[#DBE1E1] px-2 py-3 my-2 rounded-lg text-lg`}
                onChange={(event) => handleFormChange(event, index)}
              />
              <div className="grid grid-cols-2 gap-2 items-center">
                <span>
                  <label
                    htmlFor="quantity"
                    className="text-lg font-semibold text-[#858585]"
                  >
                    Qty
                  </label>
                  <input
                    type="text"
                    name="quantity"
                    value={form.quantity}
                    placeholder="Quantity"
                    className={`${ errors === 'Enter product quantity' ? 'border border-solid border-red-500' : '' } w-full outline-none border border-solid border-[#DBE1E1] px-2 py-3 my-2 rounded-lg text-lg`}
                    onChange={(event) => handleFormChange(event, index)}
                  />
                </span>
                <span>
                  <label
                    htmlFor="price"
                    className="text-lg font-semibold text-[#858585]"
                  >
                    Price
                  </label>
                  <input
                    type="text"
                    name="price"
                    value={form.price}
                    placeholder="product price"
                    className={`${ errors === 'Enter product price' ? 'border border-solid border-red-500' : '' } w-full outline-none border border-solid border-[#DBE1E1] px-2 py-3 my-2 rounded-lg text-lg`}
                    onChange={(event) => handleFormChange(event, index)}
                  />
                </span>
              </div>
              <Button
                className="w-full bg-[#FFEEEE] text-[#ED0F0F] text-lg font-semibold py-4 hover:bg-[#FFEEEE]"
                size="lg"
                onClick={ (e) => {
                  e.preventDefault()
                  handleRemoveProductList(index)
                } }
              >
                - Remove product
              </Button>
            </div>
          ))}
          <Button
            className="w-full bg-[#F6FEFE] text-[#0B7E78] text-lg font-semibold py-4 my-7 hover:bg-[#F6FEFE]"
            size="lg"
            onClick={(e) => {
              handleAddProductList(e);
            }}
          >
            + Add more product
          </Button>
          <label
            htmlFor="Installment-plan"
            className="text-lg font-semibold text-[#858585]"
          >
            Installment plan
          </label>
          <select
            name="plan"
            className="w-full outline-none border border-solid border-[#DBE1E1] px-2 py-3 my-2 rounded-lg text-lg"
          >
            <option value={"3 months"} className="text-[#858585] text-lg">
              3 months
            </option>
            <option value={"5 months"} className="text-[#858585] text-lg">
              5 months
            </option>
          </select>
          <p className="text-right text-[#858585] font-semibold">
            <i>
              Installment price:{" "}
              <span className="font-semibold text-[#0B7E78]">price</span>
            </i>
          </p>
          <Button
            className="w-full bg-[#0B7E78] my-3 py-5 hover:bg-[#0B7E78]"
            size={"lg"}
            onClick={ event => { handleOverlay(event) }}
          >
            Add to cart
          </Button>
        </form>
      </div>
      {/* overlay plus modal */}
      {
        overlay && (
        <div className="absolute w-full min-h-[1600px] inset-0 bg-black/20 p-3 box-border">
          <div className="fixed bottom-12 bg-white w-11/12 min-h-10 rounded-xl box-border px-4 py-8">
            <div className="w-12 h-12 bg-[#F6FEFE] rounded-full flex flex-row items-center justify-center mx-auto">
              <ExclamationIcon className={"text-[#0B7E78]"} />
            </div>
            <p className="font-semibold text-center my-2 max-w-prose">Are you sure the prices you entered are accurate?</p>
            <div className="grid grid-cols-2 gap-2 my-6">
              <Button className="bg-white border border-solid border-[#0B7E78] text-[#0B7E78] font-semibold w-full hover:bg-white" size={"lg"} onClick={ () => handleAddToCart() }>Yes</Button>
              <Button type="button" className="bg-[#0B7E78] w-full hover:bg-[#0B7E78]" size={"lg"} onClick={ handleDropOverlay } >No</Button>
            </div>
          </div>
        </div>
        )
      }
    </div>
  );
};

export default AddProduct;
