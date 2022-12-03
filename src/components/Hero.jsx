import Button from "./Button";

const Hero = () => {
  return (
    <div className="py-20 px-5 sm:py-10" id="hero">
      <div>
        <span className="tags text-xl ml-[-10px] text-zinc-500">
          &lt;h1&gt;
          <br />
        </span>
        <h1 className="text-4xl text-white font-semibold md:text-6xl lg:text-7xl xl:text-8xl">
          Hi, <br /> I'm <span className="text-yellow-300">J</span>akareya
          <br /> web developer.
        </h1>
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
        <Button>Contact me!</Button>
      </div>
    </div>
  );
};

export default Hero;
