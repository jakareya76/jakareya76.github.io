import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TagCanvas from "tag-canvas";
import { Skills } from "../Constants/data";

const About = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: { duration: 0.5, delay: 0.4 },
      });
    } else {
      animation.start({
        opacity: 0,
      });
    }
    // eslint-disable-next-line
  }, [inView]);

  useEffect(() => {
    TagCanvas.Start("myCanva", "tagList", {
      initial: [0.4, -0.3],
      noSelect: true,
      textColour: "#fff",
    });
  }, []);
  return (
    <motion.div
      ref={ref}
      id="about"
      className="my-20 md:px-5"
      animate={animation}
    >
      <div className="flex items-center justify-between flex-col gap-5 lg:flex-row">
        <div className="flex flex-col items-center justify-center px-1 md:items-start">
          <h1 className="text-5xl font-aurore text-white font-semibold">
            <span className="text-yellow-300">About</span> me!
          </h1>
          <p className="text-[#aeaeb1] text-justify my-5 max-w-2xl md:text-left">
            As a professional web developer, I am skilled in creating beautiful,
            interactive, and user-friendly websites using the latest
            technologies and best practices. With a strong background in HTML,
            CSS, JavaScript, I am able to develop websites that are responsive,
            optimized for search engines, and easy to maintain. I am proficient
            in frameworks such as React and have experience working with APIs
            and other back-end technologies. I am a reliable and efficient
            developer who is always willing to go the extra mile to ensure that
            my clients are satisfied with the work I deliver.
            <br />
            <br />I am familiar with common web development frameworks and
            libraries, and have experience building and deploying full-stack web
            applications using the MERN stack Throughout my career, I have
            worked on a variety of projects ranging from small websites to
            large-scale web applications, and have a proven track record of
            delivering high-quality work on time and within budget. I am a team
            player and thrive in collaborative environments, and am always
            looking for opportunities to learn and grow as a developer.
          </p>

          <a
            href="https://www.fiverr.com/jakareya608"
            rel="noreferrer"
            target="_blank"
            className=" border border-[#08fdd8] px-10 py-4  my-5 text-[#08fdd8] font-mono tracking-widest rounded-[2px] duration-500 hover:bg-[#08fdd8] hover:text-zinc-900"
          >
            Hire me!
          </a>
        </div>
        <div className="flex">
          <div className="xl:w-[500px] xl:h-[500px] flex items-center justify-center">
            <div id="canvaContainer">
              <canvas
                id="myCanva"
                width="500px"
                height="500px"
                className="w-[280px] h-[280px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[550px] xl:h-[550px]"
              >
                <ul id="tagList">
                  {Skills.map((curElem, idx) => {
                    return (
                      <li key={idx}>
                        <a href="https://google.com" className="text-sm">
                          {curElem}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </canvas>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
