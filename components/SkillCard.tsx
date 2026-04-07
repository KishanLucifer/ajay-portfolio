import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
  index: number;
};

function SkillCard({ skill, index }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.05, 
        duration: 0.5,
        type: "spring",
        stiffness: 100 
      }}
      viewport={{ once: true }}
      className="relative group flex flex-col items-center cursor-pointer"
    >
      {/* Glow Backdrop */}
      <div className="absolute inset-0 bg-[#1DA1F2] rounded-full blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-300 transform scale-110" />
      
      {/* Icon Container */}
      <div className="relative w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full border border-gray-700/50 bg-[#0e1e2b]/80 backdrop-blur-sm p-4 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-[#1DA1F2] group-hover:scale-110 shadow-lg group-hover:shadow-[0_0_20px_rgba(29,161,242,0.3)]">
        <motion.img
          whileHover={{ rotate: 10, scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          src={urlFor(skill?.image).url()}
          alt={skill?.title}
          className="object-contain w-full h-full filter brightness-90 group-hover:brightness-110 transition-all duration-300"
        />
      </div>

      {/* Tooltip / Label */}
      <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 pointer-events-none">
        <span className="bg-[#1DA1F2] text-white text-xs font-bold px-3 py-1.5 rounded-md shadow-lg whitespace-nowrap tracking-wide">
          {skill.title}
        </span>
        {/* Optional Percentage Indicator under the title */}
        <span className="text-[#1DA1F2] text-[10px] font-mono mt-1 tracking-widest font-semibold bg-[#112230] px-2 py-0.5 rounded border border-[#1DA1F2]/20">
          {skill.progress}%
        </span>
      </div>
    </motion.div>
  );
}

export default SkillCard;
