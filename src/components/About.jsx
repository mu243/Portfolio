import aboutimg from "../assets/about.png"
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About<span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:0.75}}
        className="lg:w-1/2">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl scale-90 relative bottom-10 " src={aboutimg} alt="Aboutimg" />
          </div>
        </motion.div>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:100}}
        transition={{duration:0.75}}
        className="w-full lg:w-1/2">
        <div className=" my-8 flex justify-center lg:justify-start">
          <p>{ABOUT_TEXT}</p>
        </div>

        </motion.div>
      </div>
    </div>
  );
};

export default About;
