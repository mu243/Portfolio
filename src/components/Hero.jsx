import { HERO_CONTENT, Resume_link } from "../constants";
import { motion } from "framer-motion";
import profilePic from "../assets/pfp.png";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Siddharth Chandani
            </motion.h1>
            <motion.span
              variants={container(0.35)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 
              to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(0.75)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-lighter"
            >
              {HERO_CONTENT}
            </motion.p>
            <a href={Resume_link}>
              <motion.button
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className=" bg-transparent border border-e-white hover:bg-gray-900 hover:rounded-full text-white font-bold py-2 px-4 rounded-xl "
              >
                Visit My Resume
              </motion.button>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{x:100,opacity:0}}
              animate={{x:0,opacity:0.75}}
              transition={{duration:1,delay:1.25}}
              className="mt-4"
              src={profilePic}
              alt="Siddharth"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
