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
        scale: [0.8, 1.1, 1],
        opacity: [0, 0.4, 1],
      }}
      transition={{
        duration: 3,
        ease: "easeInOut",
      }}
      className="relative flex justify-center items-center -z-10"
    >
      {/* 1st Ring - Subtle orbit */}
      <div className="absolute border border-[#D4AF37]/20 rounded-full h-[200px] w-[200px] mt-52 animate-spin-slow" />
      
      {/* 2nd Ring - Glowing Aura */}
      <div className="absolute border border-[#8A0303]/40 shadow-[0_0_80px_rgba(138,3,3,0.3)] rounded-full h-[300px] w-[300px] mt-52 " />
      
      {/* 3rd Ring - Solid pulse ring */}
      <div className="absolute border border-[#D4AF37]/30 rounded-full h-[450px] w-[450px] mt-52 animate-pulse" />
      
      {/* 4th Ring - Massive faint border */}
      <div className="absolute border border-[#8A0303] border-opacity-20 rounded-full h-[650px] w-[650px] mt-52" />
      
      {/* Large cinematic light leak (Gold + Crimson mix) */}
      <div className="absolute bg-[#D4AF37]/10 blur-[150px] rounded-full h-[600px] w-[600px] mt-52 mix-blend-screen pointer-events-none" />
      <div className="absolute bg-[#8A0303]/10 blur-[150px] rounded-full h-[400px] w-[500px] mt-32 mix-blend-screen pointer-events-none" />
    </motion.div>
  );
}

export default BackgroundCircles;
