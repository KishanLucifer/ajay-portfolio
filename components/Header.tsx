import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";
import { Social } from "@/typings";
import { useRouter } from "next/router";

type Props = { socials: Social[] };

export default function Header({ socials }: Props) {
  const router = useRouter();

  const handleClick = () => {
    router.push("#contact");
  };
  return (
    <header className="sticky top-0 p-3 flex items-start justify-between max-w-7xl mx-auto z-30 xl:items-center">
      <motion.div
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-row items-center gap-2"
      >
        {socials.map((social) => (
          <div key={social._id} className="hover:scale-110 transition-all duration-300 hover:drop-shadow-[0_0_12px_rgba(212,175,55,0.6)]">
            <SocialIcon
              url={social.url}
              fgColor="#D4AF37"
              bgColor="transparent"
              target="_blank"
              style={{ height: 45, width: 45 }}
              className="opacity-70 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        ))}
      </motion.div>
      <motion.div
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="group flex flex-row items-center cursor-pointer px-4 py-1.5 rounded-sm border border-transparent hover:border-[#8A0303]/50 hover:bg-[#8A0303]/20 transition-all duration-300 hover:shadow-[0_0_15px_rgba(138,3,3,0.4)]"
        onClick={handleClick}
      >
        <SocialIcon
          network="email"
          url="#contact"
          fgColor="#D4AF37"
          bgColor="transparent"
          style={{ height: 45, width: 45 }}
          className="group-hover:animate-pulse"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-[#D4AF37]/80 font-bold tracking-widest group-hover:text-white transition-colors">
          Get In Touch
        </p>
      </motion.div>
    </header>
  );
}
