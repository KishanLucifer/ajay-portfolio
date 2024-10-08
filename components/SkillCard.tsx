import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function SkillCard({ skill, directionLeft }: Props) {
  return (
    <div key={skill._id} className="group relative flex cursor-pointer">
      <motion.img
        initial={{ x: directionLeft ? -60 : 60, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ x: 0, opacity: 1 }}
        src={urlFor(skill?.image).url()}
        alt=""
        className="rounded-full border border-gray-500 object-cover w-16 h-16 md:w-28 md:h-28 xl:w-18 xl:h-18 filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300 
       ease-in-out group-hover:bg-white w-16 h-16 md:w-28 md:h-28 xl:w-18 xl:h-18 
       rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-xl xl:text-3xl font-bold text-black opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}

export default SkillCard;
