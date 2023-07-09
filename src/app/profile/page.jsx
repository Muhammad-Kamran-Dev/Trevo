"use client";
import Navbar from "../Navbar/page";
import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Profile() {
  const router = useRouter();

  const onLogout = async () => {
    try {
      const url = "/api/users/logout";
      const response = await axios.get(url);
      if (!response.data.success) {
        router.push("/");
        return toast.error(response.data.message);
      }
      toast.success(response.data.message);
      router.push("/login");
    } catch (error) {
      toast.error("Something Went wrong");
      router.push("/login");
    }
  };
  const [user, setUser] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/users/me");
        const { userData } = response.data;
        toast.success("User data available ");
        console.log(userData);
        setUser(userData);
      } catch (error) {
        toast.error(error.message);
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Toaster />
      <Navbar />
      <div className="container w-1/3 m-auto border rounded-sm my-10 p-10 shadow-2xl grid ">
        <h1 className="text-2xl font-bold">Profile Information</h1>
        {user && (
          <div className="user-data my-10 flex flex-col gap-10">
            <div className="data flex justify-between border p-5 shadow-sm rounded-xl">
              <h2 className="text-xl font-semibold text-violet-700">Name : </h2>
              <span className="text-xl font-bold text-orange-500">
                {user.name}
              </span>
            </div>
            <div className="data flex justify-between border p-5 shadow-sm rounded-xl">
              <h2 className="text-xl font-semibold text-violet-700">
                Email :{" "}
              </h2>
              <span className="text-xl font-bold text-orange-500">
                {user.email}
              </span>
            </div>
            <div className="data flex justify-between border p-5 shadow-sm rounded-xl">
              <h2 className="text-xl font-semibold text-violet-700">
                Is Admin :
              </h2>
              <span className="text-xl font-bold text-orange-500">
                {user.isAdmin ? "Yes " : "No"}
              </span>
            </div>
            <div className="data flex justify-between border p-5 shadow-sm rounded-xl">
              <h2 className="text-xl font-semibold text-violet-700">
                Is Verified :
              </h2>
              <span className="text-xl font-bold text-orange-500">
                {user.isVerified ? "Yes " : "No"}
              </span>
            </div>
            <div className="data flex justify-center border p-5 shadow-sm rounded-xl bg-violet-600 ">
              <Link
                className="text-xl  font-bold text-white opacity-90 hover:opacity-100 hover:cursor-pointer hover:transform hover:scale-90"
                onClick={onLogout}
                href="/"
              >
                Logout
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
