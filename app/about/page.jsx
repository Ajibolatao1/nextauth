"use client";

import Header from "@/components/Header";
import { useSelector } from "react-redux";

function AboutPage() {
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <Header />
      <div className="text-white text-4xl text-center">About</div>
      <div className="text-center text-3xl py-4">{count}</div>
    </div>
  );
}

export default AboutPage;
