"use client";
import Link from "next/link";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const onLogout = async () => {
    try {
      const url = "/api/users/logout";
      const response = await axios.get(url);
      if (!response.data.success) {
        return toast.error(response.data.message);
      }
      toast.success(response.data.message);
      router.push("/login");
      setIsLogin(false);
    } catch (error) {
      toast.error("Something Went wrong");
      setIsLogin(false);
    }
  };

  return (
    <>
      <header className="py-3 shadow-xl bg-[#7bcfcd]">
        <nav className="flex items-center justify-between px-10">
          <div className="logo text-2xl font-bold text-[#FBFCF8]">
            <Link href={"/"}>Travo</Link>
          </div>
          <div className="right">
            <ul className="flex gap-5 font-bold text-1xl ">
              <li>
                <Link
                  className=" text-[#FBFCF8]  opacity-90 hover:opacity-100 hover:cursor-pointer "
                  href={"/"}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className=" text-[#FBFCF8]  opacity-90 hover:opacity-100 hover:cursor-pointer hover:transform hover:scale-90"
                  href={"/profile"}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  className=" text-[#FBFCF8]  opacity-90 hover:opacity-100 hover:cursor-pointer hover:transform hover:scale-90"
                  href={"/signup"}
                >
                  Register
                </Link>
              </li>
              {isLogin ? (
                <li>
                  <Link
                    className=" text-[#FBFCF8]  opacity-90 hover:opacity-100 hover:cursor-pointer hover:transform hover:scale-90"
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
