'use client'
import Navbar from "./Navbar/page";
import Hero from "./Hero/page";
import Gallery from "./Gallery/page";
import LoadingSpinner from "./Loader/page";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, []);
  return (
    < >
    <Navbar />
    <Toaster />
    {
loading ? 
<LoadingSpinner />: (<><Hero /><Gallery /></>)
}
    </>
  );
}
