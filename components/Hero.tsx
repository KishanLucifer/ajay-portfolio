import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity";
import { PageInfo } from "@/typings";
import { motion } from "framer-motion";

type Props = {
  pageInfo: PageInfo;
};

export default function Hero({ pageInfo }: Props) {
  const [text] = useTypewriter({
    words: [`${pageInfo?.name}`, "Baba Yaga", "The Continental"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-12 items-center justify-center text-center overflow-hidden bg-[#050505]">
      <BackgroundCircles />
      
      <div className="z-20 flex flex-col items-center">
        {pageInfo?.heroImage && (
          <motion.div 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
            className="relative mb-8"
          >
            {/* Dark amber halo */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#D4AF37] to-[#8A0303] rounded-full blur-sm opacity-60 animate-pulse" />
            
            <Image
              className="relative rounded-full h-32 w-32 object-cover border-[3px] border-[#0a0a0a] shadow-2xl grayscale"
              src={urlFor(pageInfo?.heroImage).url()}
              alt="Profile Picture"
              priority
              width={150}
              height={150}
            />
          </motion.div>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-6"
        >
          <h2 className="text-sm md:text-md uppercase text-[#D4AF37] pb-2 tracking-[20px] font-bold bg-clip-text">
            {pageInfo?.role}
          </h2>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold px-10">
            <span className="mr-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-gray-600">
              {text}
            </span>
            <Cursor cursorColor="#8A0303" />
          </h1>
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="pt-16 flex flex-wrap justify-center gap-4 px-4"
        >
          {["about", "skills", "projects"].map((section) => (
            <Link key={section} href={`#${section}`}>
              <button 
                className="group relative px-6 md:px-10 py-3 md:py-4 bg-[#0a0a0a]/80 backdrop-blur-md overflow-hidden rounded-sm font-bold text-xs md:text-sm tracking-[0.2em] uppercase text-gray-500 border border-gray-800 transition-all duration-300 hover:border-[#8A0303]/60 hover:shadow-[0_0_20px_rgba(138,3,3,0.4)]"
              >
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#8A0303]/80 to-[#D4AF37]/20 transition-all duration-500 ease-out group-hover:w-full" />
                <span className="relative group-hover:text-white transition-colors duration-300">
                  {section}
                </span>
              </button>
            </Link>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
