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
      className=" flex relative flex-col text-center 
      md:text-left xl:flex-row  md:top-0
      max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute tracking-[20px] uppercase top-20 xl:top-20 text-gray-500 xl:text-md">
        Skills
      </h3>
      <h3 className="absolute top-32 uppercase tracking-[3px] text-gray-500 text-xs xl:text-xs">
        Hover over a skill for currency proficiency
      </h3>
      <div className="w-full xl:w-[80%] items-center justify-center">
        <div className="grid grid-cols-3 gap-6 mx-12 mt-3 my-6 xl:m-18 xl:mt-32 md:grid-cols-4 md:gap-3 xl:grid-cols-4 xl:gap-6">
          {skills?.slice(0, skills.length / 2).map((skill) => (
            <SkillCard key={skill._id} skill={skill} />
          ))}

          {skills?.slice(skills.length / 2, skills.length).map((skill) => (
            <SkillCard key={skill._id} skill={skill} directionLeft />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Skills;
