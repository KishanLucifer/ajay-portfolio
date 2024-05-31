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
      // initial={{ opacity: 0 }}
      // whileInView={{ opacity: 1 }}
      // transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row
     max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute ml-6 top-24 lg:top-20 uppercase tracking-[20px] text-gray-500 xl:text-md">
        About
      </h3>
      {pageInfo?.heroImage && (
        <motion.img
          initial={{ x: -200, opacity: 0 }}
          transition={{ duration: 1.2 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="-mb-16 mt-10 md:mb-0 flex-shrink-0 w-48 h-48 rounded-full 
    md:rounded-lg md:w-72 md:h-72 xl:w-[415px] xl:h-[415px]"
          src={urlFor(pageInfo?.heroImage).url()}
          // width={0}
          // height={0}
          alt=""
        />
      )}
      <div className="space-y-2 md:space-y-10 xl:space-y-10 px-0 md:px-10">
        <h4 className="text-2xl md:text-4xl xl:text-3xl font-semibold">
          Here is a little background
        </h4>
        <p className="text-sm text-justify xl:text-lg">
          {pageInfo?.backgroundInformations}
          {/* <span className="uppercase text-gray-400 tracking-[3px] font-bold">
            Skills & Interests:
          </span>{" "}
          JavaScript, React, HTML5, CSS, Git, Github. */}
        </p>
      </div>
    </motion.div>
  );
}
// The requested resource isn't a valid image for /../components/images/ajay.jpg received text/html; charset=utf-8
