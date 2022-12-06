import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { WorkList } from "../Constants/data";
import Card from "./Card";

const Work = () => {
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

  return (
    <motion.div
      ref={ref}
      className="flex items-center justify-center flex-col my-20"
      id="work"
      animate={animation}
    >
      <h1 className="text-center text-4xl font-aurore text-white md:text-5xl">
        <span className="text-yellow-300">My</span> Recent Work
      </h1>
      <motion.div className="grid grid-cols-1 place-items-center gap-5 py-10 px-5 md:grid-cols-2 lg:grid-cols-3">
        {WorkList.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </motion.div>
    </motion.div>
  );
};

export default Work;
