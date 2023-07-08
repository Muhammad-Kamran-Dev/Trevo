"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../Navbar/page";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Signup() {
  const router = useRouter();

  const url = "http://localhost:3000/api/users/signup";
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: ""
  });
  const signupUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, user);
      if (!response.data.success) return toast.error("User Already Exist's");
      toast.success("User Created Successfully");
      router.push("/login");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };
  return (
    <>
      <Navbar />
      <Toaster />

      <div className="grid w-full grid-cols-2">
        <div
          className="h-screen"
          style={{
            background: "url(/img/hero.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        ></div>
        <div className="flex flex-col items-center justify-center">
          <h1 className="mb-10 text-4xl font-bold">Create Account</h1>

          <form
            action=""
            className="flex flex-col w-1/2 mx-auto space-y-14 spacing-9"
            onSubmit={signupUser}
          >
            <div className="space-y-1 label">
              <label htmlFor="name" className="text-2xl font-bold ">
                Name
              </label>
              <input
                className="w-full px-5 py-3 border-2 border-gray-500 rounded-2xl"
                type="text"
                name=""
                value={user.name}
                id="name"
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <div className="space-y-1 label">
              <label htmlFor="email" className="text-2xl font-bold ">
                Enter Email
              </label>
              <input
                className="w-full px-5 py-3 border-2 border-gray-500 rounded-2xl"
                type="text"
                name=""
                id="email"
                placeholder="Khan@gmail.com"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>

            <div className="space-y-1 label">
              <label htmlFor="password" className="text-2xl font-bold ">
                Enter Password
              </label>
              <input
                className="w-full px-5 py-3 border-2 border-gray-500 rounded-2xl"
                type="password"
                name=""
                value={user.password}
                id="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <Link className="self-end font-bold" href={"/login"}>
              Already have an account ?
            </Link>
            <button className="w-1/3 p-3 mx-auto text-2xl text-white transition-all duration-300 ease-in bg-orange-700 outline-none opacity-90 rounded-2xl active:transform active:scale-75 hover:opacity-100 ">
              Signup
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
