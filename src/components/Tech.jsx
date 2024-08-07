import { RiReactjsLine } from "react-icons/ri";
import { DiDjango } from "react-icons/di";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { SiFlask } from "react-icons/si";
import { SiFastapi } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate : {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType : "reverse",

    }
  }
})

const Tech = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h2>
      <motion.div 
      whileInView={{opacity:1,x:0}}
      initial={{opacity:0,x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-3">

        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-3 ">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800 p-3 ">
          <DiDjango className="text-7xl text-green-900" />
        </motion.div>
        <motion.div
         variants={iconVariants(4)}
         initial="initial"
         animate="animate" 
        className="rounded-2xl border-4 border-neutral-800 p-3 ">
          <SiFlask className="text-7xl" />
        </motion.div>

        <motion.div 
         variants={iconVariants(1.5)}
        initial="initial"
        animate="animate"

        className="rounded-2xl border-4 border-neutral-800 p-3 ">
          <SiFastapi className="text-7xl text-teal-600 " />
        </motion.div>

        <motion.div 
         variants={iconVariants(6)}
        initial="initial"
        animate="animate"

        className="rounded-2xl border-4 border-neutral-800 p-3 ">
          <TbBrandNextjs className="text-7xl" />
        </motion.div>

        <motion.div 
         variants={iconVariants(3)}
        initial="initial"
        animate="animate"

        className="rounded-2xl border-4 border-neutral-800 p-3 ">
          <SiMongodb className="text-7xl text-green-900" />
        </motion.div>

        <motion.div 
         variants={iconVariants(4)}
        initial="initial"
        animate="animate"

        className="rounded-2xl border-4 border-neutral-800 p-3 ">
          <BiLogoPostgresql className="text-7xl text-sky-700" />
        </motion.div>

        <motion.div 
         variants={iconVariants(3)}
        initial="initial"
        animate="animate"

        className="rounded-2xl border-4 border-neutral-800 p-3 ">
          <GrMysql className="text-7xl text-cyan-900" />
        </motion.div>

        <motion.div 
         variants={iconVariants(1.5)}
        initial="initial"
        animate="animate"

        className="rounded-2xl border-4 border-neutral-800 p-3 ">
          <FaBootstrap className="text-7xl text-purple-800" />
        </motion.div>

        <motion.div 
         variants={iconVariants(6)}
        initial="initial"
        animate="animate"

        className="rounded-2xl border-4 border-neutral-800 p-3 ">
          <RiTailwindCssFill className="text-7xl text-sky-400" />
        </motion.div>
        
      </motion.div>
    </div>
  );
};

export default Tech;
