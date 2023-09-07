"use client";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Button from "../../components/Button";
export default function Login() {
  const router = useRouter();
  const url = "https://trevo-gules.vercel.app/api/users/login";
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const loginUser = async (e) => {
    e.preventDefault();
    const response = await axios.post(url, user);
    if (!response.data.success) return toast.error("Invalid Credentials");

    toast.success("User Login Successfully");
    router.push("/");
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
            onSubmit={loginUser}
          >
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
            <Link className="self-end font-bold" href={"/signup"}>
              Create Account ?
            </Link>
            <Button btnText="Login" />
          </form>
        </div>
      </div>
    </>
  );
}
