import React from "react";
import { motion } from "framer-motion";

function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        scale: [0.8, 1.2, 1],
        opacity: [0, 0.5, 1],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
      }}
      className="relative flex justify-center items-center -z-10"
    >
      {/* 1st Ring - Subtle orbit */}
      <div className="absolute border border-[#1DA1F2]/10 rounded-full h-[200px] w-[200px] mt-52 animate-spin-slow" />
      
      {/* 2nd Ring - Glowing Aura */}
      <div className="absolute border border-[#1DA1F2]/20 shadow-[0_0_80px_rgba(29,161,242,0.2)] rounded-full h-[300px] w-[300px] mt-52 " />
      
      {/* 3rd Ring - Solid pulse ring */}
      <div className="absolute border border-[#1DA1F2]/30 rounded-full h-[450px] w-[450px] mt-52 animate-pulse" />
      
      {/* 4th Ring - Massive faint border */}
      <div className="absolute border border-[#0e1e2b] border-opacity-50 rounded-full h-[650px] w-[650px] mt-52" />
      
      {/* Huge background blur spot for atmospheric lighting */}
      <div className="absolute bg-[#1DA1F2]/10 blur-[150px] rounded-full h-[600px] w-[600px] mt-52 mix-blend-screen pointer-events-none" />
    </motion.div>
  );
}

export default BackgroundCircles;
