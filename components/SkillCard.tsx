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
      <div className="absolute inset-0 bg-[#8A0303] rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300 transform scale-110" />
      
      {/* Icon Container */}
      <div className="relative w-20 h-20 md:w-24 md:h-24 xl:w-28 xl:h-28 rounded-full border-[2px] border-gray-800 bg-[#0a0a0a] backdrop-blur-sm p-4 flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-[#8A0303] group-hover:scale-110 shadow-lg group-hover:shadow-[0_0_30px_rgba(138,3,3,0.6)]">
        <motion.img
          whileHover={{ rotate: 0, scale: 1.15 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
          src={urlFor(skill?.image).url()}
          alt={skill?.title}
          className="object-contain w-full h-full filter brightness-75 grayscale sepia-[.3] group-hover:grayscale-0 group-hover:sepia-0 group-hover:brightness-110 transition-all duration-300"
        />
        
        {/* Crosshair target overlay on hover */}
        <div className="absolute inset-0 border border-red-500/0 rounded-full scale-[1.5] opacity-0 group-hover:opacity-100 group-hover:scale-100 group-hover:border-red-500/50 transition-all duration-500 pointer-events-none">
          <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-red-500/20 -translate-x-1/2" />
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-red-500/20 -translate-y-1/2" />
        </div>
      </div>

      {/* Tooltip / Label */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 z-50 pointer-events-none">
        <span className="bg-[#8A0303] border border-red-500/50 text-white text-xs font-bold px-4 py-1.5 rounded-sm shadow-[0_0_15px_rgba(138,3,3,0.8)] whitespace-nowrap tracking-[0.2em] uppercase">
          {skill.title}
        </span>
        {/* Gold Percentage Indicator */}
        <span className="text-[#D4AF37] text-[11px] font-mono mt-1.5 tracking-widest font-bold bg-[#0a0a0a] px-3 py-0.5 rounded-sm border border-[#D4AF37]/40 shadow-lg">
          {skill.progress} %
        </span>
      </div>
    </motion.div>
  );
}

export default SkillCard;
