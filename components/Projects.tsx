import { motion, useInView } from "framer-motion";
import React, { useRef, useEffect } from "react";
import { Project } from "../typings";
import { urlFor } from "@/sanity";

type Props = {
  projects: Project[];
};

// Extracted ProjectItem to manage video playback on scroll and animations
const ProjectItem = ({ project, index, total }: { project: Project; index: number; total: number }) => {
  const isEven = index % 2 === 0;
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(containerRef, { amount: 0.5, once: false });

  // Play video automatically when scrolled into view
  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [isInView]);

  return (
    <div
      ref={containerRef}
      className={`flex flex-col ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } items-center gap-10 md:gap-16 w-full group`}
    >
      {/* Media Section */}
      <div className="w-full lg:w-3/5 flex justify-center items-center relative">
        <a
          href={project?.linkToBuild ? project?.linkToBuild : "#"}
          target="_blank"
          className="w-full relative rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.15)] hover:shadow-[0_0_60px_rgba(138,3,3,0.4)] hover:-translate-y-2 transition-all duration-500 ease-out z-20 border border-gray-800"
        >
          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
          
          {project.videoUrl ? (
             <video
               ref={videoRef}
               loop
               muted
               playsInline
               className="w-full h-auto object-cover rounded-2xl aspect-video"
               src={project.videoUrl}
             />
          ) : (
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full h-auto object-cover rounded-2xl aspect-video"
              src={urlFor(project?.image).url()}
              alt={project.title}
            />
          )}

          {/* Red Glow overlay on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-gradient-to-tr from-[#8A0303] to-transparent mix-blend-overlay transition-opacity duration-500 z-20" />
        </a>
      </div>

      {/* Info Section */}
      <div className="w-full lg:w-2/5 flex flex-col space-y-6 z-20 px-0 md:px-6">
        <div className="space-y-3 text-center md:text-left">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold tracking-[0.3em] text-[#8A0303] uppercase"
          >
            Contract {index + 1} of {total}
          </motion.p>
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-300 via-[#D4AF37] to-[#D4AF37]"
          >
            {project?.title}
          </motion.h4>
        </div>

        {/* Live Animated Technologies */}
        <div className={`flex flex-wrap gap-5 justify-center py-2 ${isEven ? 'md:justify-start' : 'md:justify-start'}`}>
          {project.technologies?.map((technology, i) => (
            <motion.div 
              key={technology._id} 
              className="relative group/tech"
              animate={{
                y: [0, -8, 0],
                rotate: [0, 4, -4, 0],
              }}
              transition={{
                duration: 4 + (i % 3), // random-ish staggering
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="relative">
                {/* Tech glowing background */}
                <div className="absolute inset-0 bg-[#8A0303] blur-md opacity-20 rounded-full group-hover/tech:opacity-80 transition-opacity" />
                <img
                  className="relative h-12 w-12 md:h-14 md:w-14 p-2.5 bg-[#0a0a0a] rounded-full backdrop-blur-xl border border-gray-800 shadow-lg group-hover/tech:scale-110 group-hover/tech:border-[#8A0303] filter grayscale group-hover/tech:grayscale-0 transition-all duration-300"
                  src={urlFor(technology?.image).url()}
                  alt={technology.title}
                />
              </div>
              
              {/* Tooltip */}
              <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 opacity-0 group-hover/tech:opacity-100 transition-opacity bg-[#8A0303] border border-red-500/30 text-gray-200 text-xs px-3 py-1.5 rounded-sm whitespace-nowrap z-50 pointer-events-none text-center shadow-[0_0_15px_rgba(138,3,3,0.5)] font-bold tracking-widest uppercase">
                {technology.title}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-[#9ca3af] text-sm md:text-base leading-relaxed text-center md:text-left whitespace-pre-line"
        >
          {project.summary}
        </motion.p>

        {/* Link buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`flex justify-center md:justify-start pt-6 gap-4`}
        >
          <a 
            href={project?.linkToBuild ? project?.linkToBuild : "#"}
            target="_blank"
            className="group relative px-6 md:px-8 py-3.5 bg-transparent overflow-hidden rounded-sm font-bold text-xs md:text-sm tracking-[0.2em] uppercase text-[#D4AF37] border border-[#D4AF37] transition-all hover:scale-105 hover:border-[#8A0303] hover:shadow-[0_0_20px_rgba(138,3,3,0.4)]"
          >
            <div className="absolute inset-0 w-0 bg-gradient-to-r from-[#8A0303] to-[#8A0303]/80 transition-all duration-300 ease-out group-hover:w-full" />
            <span className="relative group-hover:text-white transition-colors duration-300 whitespace-nowrap">
              View Contract
            </span>
          </a>

          {project?.githubLink && (
            <a 
              href={project.githubLink}
              target="_blank"
              className="group flex items-center gap-2 relative px-4 md:px-6 py-3.5 bg-transparent overflow-hidden rounded-full font-semibold text-xs md:text-sm tracking-wide text-gray-300 border border-gray-600 transition-all hover:scale-105 hover:border-white hover:text-white"
            >
              <div className="absolute inset-0 w-0 bg-white/10 transition-all duration-300 ease-out group-hover:w-full" />
              <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span className="relative z-10 whitespace-nowrap">
                Source Code
              </span>
            </a>
          )}
        </motion.div>
      </div>
    </div>
  );
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col text-left max-w-[90rem] px-6 mx-auto items-center justify-center pt-32 pb-32 z-0 min-h-screen"
    >
      <h3 className="uppercase tracking-[15px] md:tracking-[20px] text-[#D4AF37]/80 text-xl md:text-2xl mb-20 md:mb-32 font-bold text-center drop-shadow-[0_0_10px_rgba(212,175,55,0.4)]">
        Projects
      </h3>

      <div className="w-full flex flex-col gap-40 z-20">
        {projects?.map((project, i) => (
          <ProjectItem key={project._id} project={project} index={i} total={projects.length} />
        ))}
      </div>

      {/* Decorative background elements */}
      <div className="w-full absolute top-[30%] bg-[#8A0303]/5 left-0 h-[600px] -skew-y-12 blur-[150px] -z-10" />
      <div className="w-full absolute top-[60%] right-0 bg-[#D4AF37]/5 w-[500px] h-[500px] rounded-full blur-[120px] -z-10" />
    </motion.div>
  );
}

export default Projects;
