import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { PageInfo } from "../typings";

type Props = {
  pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative min-h-screen text-center md:text-left max-w-7xl px-6 mx-auto items-center justify-center pt-32 pb-32"
    >
      <h3 className="uppercase tracking-[15px] md:tracking-[20px] text-[#D4AF37]/80 text-xl md:text-2xl mb-16 md:mb-24 font-bold text-center drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">
        About
      </h3>

      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 w-full px-0 md:px-10">
        {pageInfo?.heroImage && (
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex-shrink-0 relative group"
          >
            <div className="absolute inset-0 bg-[#8A0303] rounded-sm blur-xl opacity-30 group-hover:opacity-70 transition-opacity duration-700" />
            <img
              className="relative w-48 h-48 md:w-64 md:h-64 xl:w-[400px] xl:h-[400px] rounded-sm object-cover border-[2px] border-[#D4AF37]/40 shadow-2xl z-10 grayscale group-hover:grayscale-0 transition-all duration-500"
              src={urlFor(pageInfo?.heroImage).url()}
              alt="About me"
            />
          </motion.div>
        )}

        <div className="space-y-6 md:space-y-8 flex-1">
          <motion.h4 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl xl:text-5xl font-bold text-[#D4AF37]"
          >
            Here is a little background
          </motion.h4>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm md:text-base xl:text-lg leading-relaxed md:leading-loose text-justify shadow-sm"
          >
            {pageInfo?.backgroundInformations}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
