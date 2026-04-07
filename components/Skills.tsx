import { motion } from "framer-motion";
import React from "react";
import SkillCard from "./SkillCard";
import { Skill } from "../typings";

type Props = {
  skills: Skill[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative min-h-screen text-center md:text-left max-w-7xl px-6 mx-auto items-center justify-center pt-32 pb-40"
    >
      <h3 className="uppercase tracking-[15px] md:tracking-[20px] text-[#D4AF37]/80 text-xl md:text-2xl mb-8 md:mb-12 font-bold text-center drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">
        Skills
      </h3>
      
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="uppercase tracking-[5px] text-gray-500 font-semibold text-xs text-center mb-24"
      >
        Target a skill to view proficiency
      </motion.p>

      {/* Decorative backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[400px] bg-[#8A0303]/10 blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="w-full relative z-20 flex justify-center">
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-6 md:gap-8 lg:gap-10 items-center justify-items-center">
          {skills?.map((skill, index) => (
            <SkillCard key={skill._id} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
