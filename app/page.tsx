"use client";

import React, { useState } from "react";
import Scene from "./components/canvas/Scene";
import { motion } from 'motion/react'

export default function Home() {

  const [openMenu, setOpenMenu ] = useState(false)
  const [option, setOption ] = useState("wine")

  const menuVariants = {
    visible : {
      opacity: 1,
    },
    hidden : {
      opacity: 0,
    }
  }

  return (
    <div className="relative w-screen h-screen">
      {/* Fullscreen Canvas */}
      <div className="fixed inset-0 w-screen h-screen overflow-hidden z-10">
        <Scene selected={option} />
      </div>

      {/* UI Overlay */}
      <div id="content" className="absolute z-20 bottom-[5rem] gap-[2rem] flex flex-col rounded-sm items-center text-center p-8 bg-[#B75B5B]/50 border-2 border-[#c8a641] text-white right-[8rem] "> 
        <h1 style={{fontFamily: "var(--font-quintessential)"}} className="text-6xl text-white font-bold">CREAT3DLAB</h1> 
        <span className=" w-[20em]">Prototype for building, developing, and showcasing different "fake" brands that we create. </span>
        <button onClick={() => setOpenMenu(prev => !prev)} className="bg-[#924a4a]  max-w-24  p-2 mt-7 rounded-md">Menu</button>

      </div>
      {/* Controls */}
      <motion.div id="menu" variants={menuVariants} animate={openMenu ? "visible" : "hidden"} className={`absolute w-[25rem] ${openMenu ? 'z-20' : 'z-[-1] opacity-0'} h-[80dvh] rounded-sm  flex flex-col items-start  left-2 pt-8`}>
        <nav className="text-white  relative flex flex-col w-full h-full">
          <ul className="h-full">
            <li onClick={() => setOption("wine")} className="border-2 border-[#c8a641] h-[8rem] text-7xl text-center flex justify-center items-center">Wine</li>
            <li onClick={() => setOption("soda")}  className="border-2 border-[#c8a641] h-[8rem] text-7xl text-center flex justify-center items-center">Soda</li>
            <li onClick={() => setOption("shake")} className="border-2 border-[#c8a641] h-[8rem] text-7xl text-center flex justify-center items-center">Shakes</li>
          </ul>
          <button onClick={() => setOpenMenu(prev => !prev)} className="bg-[#924a4a] absolute bottom-0 min-w-24 left-[50%] transform translate-x-[-50%] p-1 mt-7 rounded-md">Close</button>
        </nav>
      </motion.div>
    </div>
  );
}
