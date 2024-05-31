import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-sky-600 rounded-full h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border border-rose-500 rounded-full opacity-20 h-[250px] w-[250px] mt-52 " />
      <div className="absolute border border-sky-500 rounded-full opacity-20 h-[350px] w-[350px] mt-52" />
      <div className="absolute border border-rose-500 rounded-full opacity-20 h-[450px] w-[450px] mt-52 animate-pulse" />
      <div className="absolute border border-sky-500 rounded-full opacity-20 h-[545px] w-[545px] mt-52" />
    </motion.div>
  );
}

export default BackgroundCircles;
