import { useEffect } from "react";
import TagCanvas from "tag-canvas";
import { Skills } from "../Constants/data";

const About = () => {
  useEffect(() => {
    TagCanvas.Start("myCanva", "tagList", {
      initial: [0.4, -0.3],
      noSelect: true,
      textColour: "#fff",
    });
  }, []);
  return (
    <div id="about" className="py-10">
      <div className="flex items-center justify-between flex-col gap-5 lg:flex-row">
        <div className="flex flex-col items-center justify-center px-1 md:items-start pb-10">
          <h1 className="text-5xl font-aurore text-white font-semibold">
            <span className="text-yellow-300">About</span> me!
          </h1>
          <p className="text-[#aeaeb1] text-justify my-5 max-w-2xl md:text-left">
            Hi, I'm Jakareya, Full Stack Web Developer. With Over 3 YEARS Of
            Experience. Since beginning my journey as a freelance Developer
            nearly 3 years ago, I've done remote work for agencies, consulted
            for startups, and collaborated with talented people to create
            digital products for both business and consumer use. I'm quietly
            confident, naturally curious, and perpetually working on improving
            my skills.
            <br />
            <br />I like to code things from scratch, and enjoy bringing ideas
            to life in the browser. I have been working on the technology like
            React Js, Node Js, Express Js, MongoDB, And NextJs.
          </p>

          <a
            href="https://www.fiverr.com/riiote?up_rollout=true"
            rel="noreferrer"
            target="_blank"
            className=" border border-[#08fdd8] px-10 py-4  my-5 text-[#08fdd8] font-mono tracking-widest rounded-[2px] duration-500 hover:bg-[#08fdd8] hover:text-zinc-900"
          >
            Hire me!
          </a>
        </div>
        <div className="flex">
          <div className="xl:w-[450px] xl:h-[450px] flex items-center justify-center">
            <div id="canvaContainer">
              <canvas
                id="myCanva"
                width="500px"
                height="500px"
                className="w-[280px] h-[280px] xl:w-[450px] xl:h-[450px] lg:w-[350px] lg:h-[350px] md:w-[300px] md:h-[300px]"
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
    </div>
  );
};

export default About;
