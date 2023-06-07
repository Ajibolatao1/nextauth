"use client";

import { useDispatch, useSelector } from "react-redux";

import Header from "@/components/Header";
import Link from "next/link";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/components/Slices/counterSlice";
import { useRef } from "react";

function HomePage() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const inputRef = useRef();

  const handleIncreaseBy = () => {
    dispatch(incrementByAmount(Number(inputRef.current.value) || 0));
    inputRef.current.value = "";
  };

  return (
    <div className="">
      <Header />
      <section className="py-4">
        <div className="text-center text-6xl">{count}</div>
        <form
          action=""
          className="m-auto w-40 py-5 "
          onSubmit={(e) => {
            e.preventDefault();
          }}>
          <input type="number" ref={inputRef} className="w-full" />
        </form>
        <div className="btns flex gap-3 justify-center py-5">
          <button className="btn" onClick={() => dispatch(increment())}>
            Increase
          </button>
          <button className="btn" onClick={() => dispatch(decrement())}>
            Decrease
          </button>
          <button className="btn" onClick={handleIncreaseBy}>
            Increase By
          </button>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
