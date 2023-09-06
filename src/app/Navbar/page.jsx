"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();
  const onLogout = async () => {
    try {
      const url = "/api/users/logout";
      const response = await axios.get(url);

      if (!response.data.success) {
        router.push("/login");
        return toast.error(response.data.message);
      }

      toast.success(response.data.message);
      setIsLogin(false);
      router.push("/login");
    } catch (error) {
      toast.error("Something Went wrong");
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
              {isLogin && (
                <li>
                  <Link
                    className=" text-[#FBFCF8]  opacity-90 hover:opacity-100 hover:cursor-pointer hover:transform hover:scale-90"
                    href={"/profile"}
                  >
                    Profile
                  </Link>
                </li>
              )}
              <li>
                <Link
                  className=" text-[#FBFCF8]  opacity-90 hover:opacity-100 hover:cursor-pointer hover:transform hover:scale-90"
                  href={"/signup"}
                >
                  Login
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
