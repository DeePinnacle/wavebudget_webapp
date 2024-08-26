"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, ChangeEvent } from "react";

const Login = () => {
  // navigate
  const navigate = useRouter()
  // state
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState<string>();
  // handle change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  // handlesubmit
  const handlesubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.email) {
      return setError("Enter your email address");
    } else if (!formData.password) {
      return setError("Enter your password");
    } else {
      console.log(formData);
      setError("");
      navigate.push('/admin/dashboard')
    }
  };
  return (
    <div className="w-full min-h-screen bg-slate-100 relative">
      {/* login images */}
      <Image
        src={"/top-login-img.png"}
        alt="top base login image"
        width={400}
        height={100}
      />
      <Image
        src={"/base-login-img.png"}
        alt="top base login image"
        width={450}
        height={120}
        className="absolute right-0 bottom-0"
      />

      {/* login container */}
      <div className="w-1/3 min-h-52 py-10 px-5 bg-white border border-solid border-[#E8EDE9] rounded-md absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h2 className="text-center text-[#010E0D] font-semibold">
          Log in your account
        </h2>
        {error && (
          <div className="bg-[#FEF2F2] w-4/5 h-16 p-3 mt-7 border border-solid border-[#ED0F0F] rounded-md mx-auto text-[#ED0F0F] flex flex-col items-center justify-center">
            <p className="text-center">{error}</p>
          </div>
        )}
        <div className="mt-12 mx-auto">
          <form
            onSubmit={(e) => {
              handlesubmit(e);
            }}
          >
            <div className="flex flex-col w-3/4 mx-auto">
              <label htmlFor="" className="text-sm text-[#858585]">
                Email
              </label>
              <input
                type="text"
                name="email"
                value={formData.email}
                placeholder="Enter admin email"
                className={`${
                  error === "Enter your email address" ? "border-[#ED0F0F]" : ""
                } outline-none border border-solid border-[#DBE1E1] px-3 py-2 my-3 rounded-sm placeholder:text-xs`}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <label htmlFor="password" className="text-sm text-[#858585]">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                placeholder="Enter admin password"
                className={`${
                  error === "Enter your password" ? "border-[#ED0F0F]" : ""
                } outline-none border border-solid border-[#DBE1E1] px-3 py-2 my-3 rounded-sm placeholder:text-xs`}
                onChange={(e) => {
                  handleChange(e);
                }}
              />
              <Button className="bg-[#0B7E78] my-4 hover:bg-[#0B7E78]">
                Login
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
