"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { formatKey } from "../../utils/format";
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
        const keyValueArray = Object.entries(userData);
        const resultArray = keyValueArray.map(([key, value]) => ({
          key,
          value,
        }));
        setUser(resultArray);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="container grid items-center gap-10 p-10 m-auto my-5 rounded-sm shadow-2xl w-fit">
        <h1 className="text-2xl font-bold text-center">Profile Information</h1>
        {user && user.length > 0 && (
          <div className="flex flex-col gap-10 my-10 user-data">
            {user.map((item) => (
              <div
                key={item.key}
                className="flex justify-between gap-10 p-5 border shadow-sm rounded-xl"
              >
                <h2 className="text-xl font-semibold text-violet-700">
                  {formatKey(item.key)} :
                </h2>
                <span className="text-xl font-bold text-orange-500">
                  {item.value}
                </span>
              </div>
            ))}

            <div className="flex justify-center p-5 border shadow-sm data rounded-xl bg-violet-600 ">
              <Link
                className="text-xl font-bold text-white opacity-90 hover:opacity-100 hover:cursor-pointer hover:transform hover:scale-90"
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
