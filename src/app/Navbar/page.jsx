"use client";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
// import { NextResponse } from "next/server";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(true);
  const onLogout = async () => {
    try {
      const url = "http://localhost:3000/api/users/logout";
      const response = await axios.get(url);
      console.log(response);
      if (!response.data.success) {
        return toast.error(response.data.message);
      }
      toast.success(response.data.message);
      setIsLogin(false);
    } catch (error) {
      toast.error("Something Went wrong");
    }
  };

  // PENDING
  // useEffect(() => {
  //   const response = NextResponse.json({ success: true });
  //   console.log("auth-token " + response.cookies.get("auth-token"));
  // }, []);

  return (
    <>
      <Toaster />
      <header className="py-3 shadow-xl bg-[#7bcfcd]">
        <nav className="flex items-center justify-between px-10">
          <div className="logo">
            <Link href={"/"}>
              <Image
                src="/img/logo.png"
                alt="Picture of the logo"
                width={50}
                height={50}
                quality={100}
              />
            </Link>
          </div>
          <div className="right">
            <ul className="flex gap-5 font-bold text-1xl ">
              <li>
                <Link
                  className=" text-[#1e1f1e]  opacity-90 hover:opacity-100 hover:cursor-pointer "
                  href={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className=" text-[#1e1f1e]  opacity-90 hover:opacity-100 hover:cursor-pointer hover:transform hover:scale-90"
                  href={"/profile"}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  className=" text-[#1e1f1e]  opacity-90 hover:opacity-100 hover:cursor-pointer hover:transform hover:scale-90"
                  href={"/signup"}
                >
                  Register
                </Link>
              </li>
              {isLogin ? (
                <li>
                  <Link
                    className=" text-[#1e1f1e]  opacity-90 hover:opacity-100 hover:cursor-pointer hover:transform hover:scale-90"
                    onClick={onLogout}
                    href="/"
                  >
                    Logout
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}
