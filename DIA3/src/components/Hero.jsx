"use client";

import React, { useEffect } from "react";

export default function Hero() {
  return (
    <>
      <section className="w-full h-[80vh] bg-blue-900 relative flex overflow-hidden">
        <div className="w-1/3 h-full bg-yellow-500 flex items-center pl-24 z-10 relative heroPattern">
          <h1 className="text-[12rem] font-bold p-1 pr-24 bg-yellow-500 h-fit text-blue-900 heroPattern">
            Colombia
          </h1>
          <p></p>
        </div>
        <div className="w-2/3 h-full absolute -bottom-10 right-0 pointer-events-none">
          <img
            src="/image/hero.png"
            className="object-cover size-full"
            alt=""
          />
        </div>
      </section>
      <section className="w-full h-[20vh] heroPattern"></section>
    </>
  );
}
