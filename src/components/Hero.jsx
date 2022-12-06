import { motion } from "framer-motion";
const Hero = () => {
  return (
    <motion.div
      className="my-20 px-5"
      id="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div>
        <span className="tags text-xl ml-[-10px] text-zinc-500">
          &lt;h1&gt;
          <br />
        </span>
        <motion.h1
          className="text-4xl text-white font-semibold md:text-6xl lg:text-7xl xl:text-8xl"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1, originX: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hi, <br /> I'm <span className="text-yellow-300">J</span>akareya
          <br /> web developer.
        </motion.h1>
        <span className="tags text-xl ml-[-10px] text-zinc-500">
          &lt;/h1&gt;
          <br />
        </span>

        <span className="tags ml-[-10px] text-zinc-500">
          &lt;p&gt;
          <br />
        </span>
        <p className="text-[#8d8d8d] tracking-widest font-mono text-[14px]">
          Full Stack Developer / JavaScript Expert / Freelancer
        </p>
        <span className="tags ml-[-10px] text-zinc-500">
          &lt;/p&gt;
          <br />
        </span>
        <button className="my-8">
          <a
            href="#contact"
            className="px-8 py-4 border border-[#08fdd8]  text-[#08fdd8] font-mono tracking-widest rounded-[2px] duration-500 hover:bg-[#08fdd8] hover:text-zinc-900"
          >
            Contact me!
          </a>
        </button>
      </div>
    </motion.div>
  );
};

export default Hero;
