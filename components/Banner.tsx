import { motion } from "framer-motion";
import logo from "@/public/logo.png";
const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-col gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="text-xl font-titleFont tracking-wide text-textDark"
      >
        Hi, Welcome to
      </motion.h3>
      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-4xl lgl:text-6xl text-[#f1b3e0] font-titleFont font-semibold flex flex-col"
      >
        Lady Bonk!,
        <span className="text-textDark mt-2 lgl:mt-4">
          part of the <span className="text-red-500">BONK!</span> backbone!
        </span>
      </motion.h1>
      <motion.p
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-base md:max-w-[650px] text-textDark font-medium"
      >
        LadyBonk is the girlfriend of BONK <br />
       SHE is a constant pillar of support, she stands by him through the highs and lows, <br />
       weathering storms and basking in sunshine together. With a heart that beats in sync with his dreams, <br />
       she becomes his cheerleader, celebrating victories and soothing defeats.
        <a href="https://gitbook.com/" target="_blank">
          {" "}
          <span className="text-[#f1b3e0] inline-flex relative cursor-pointer h-7 overflow-x-hidden group">
            Learn more
            <span className="absolute w-full h-[1px] bg-[#f1b3e0] left-0 bottom-1 -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500"></span>
          </span>
        </a>
      </motion.p>
    </section>
  );
};

export default Banner;
