"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Button from "../../components/Button";

export default function Signup() {
  const router = useRouter();

  const url = "https://trevo-gules.vercel.app/api/users/signup";
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const signupUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(url, user);
      if (!response.data.success) return toast.error("User Already Exist's");
      toast.success("User Created Successfully");
      router.push("/login");
    } catch (error) {}
  };
  return (
    <>
      <div className="grid w-full h-screen cols-1 md:grid-cols-2 place-items-center">
        <div
          className="hidden w-full h-screen md:block"
          style={{
            background: "url(/img/hero.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="flex flex-col items-center justify-center ">
          <h1 className="mb-10 text-4xl font-bold">Login Page</h1>

          <form
            action=""
            className="flex flex-col w-full mx-auto space-y-14 spacing-9"
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
            <Button btnText="Signup" />
          </form>
        </div>
      </div>
      ;
    </>
  );
}
