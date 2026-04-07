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
    words: [`${pageInfo?.name}`, "A Guy Who Is Vegan", "<LoveToCodeMore />"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-12 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />

      <div className="z-20 flex flex-col items-center">
        {pageInfo?.heroImage && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, type: "spring", bounce: 0.4 }}
            className="relative mb-8"
          >
            {/* Glowing avatar ring */}
            <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#1DA1F2] to-transparent rounded-full blur-sm opacity-50 animate-pulse" />

            <Image
              className="relative rounded-full h-32 w-32 object-cover border-4 border-[#0e1e2b] shadow-2xl"
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
          <h2 className="text-sm md:text-md uppercase text-[#1DA1F2] pb-2 tracking-[15px] font-semibold bg-clip-text">
            {pageInfo?.role}
          </h2>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold px-10">
            <span className="mr-3 bg-clip-text text-transparent bg-gradient-to-r from-gray-100 to-gray-400">
              {text}
            </span>
            <Cursor cursorColor="#1DA1F2" />
          </h1>
        </motion.div>

        {/* Premium Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="pt-16 flex flex-wrap justify-center gap-4 px-4"
        >
          {["about", "skills", "projects"].map((section) => (
            <Link key={section} href={`#${section}`}>
              <button className="group relative px-6 md:px-10 py-3 md:py-4 bg-[#0e1e2b]/50 backdrop-blur-md overflow-hidden rounded-full font-semibold text-xs md:text-sm tracking-[0.2em] uppercase text-gray-400 border border-gray-800 transition-all duration-300 hover:border-[#1DA1F2]/50 hover:shadow-[0_0_20px_rgba(29,161,242,0.2)] hover:-translate-y-1">
                <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#1DA1F2]/20 to-transparent transition-all duration-500 ease-out group-hover:w-full" />
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
