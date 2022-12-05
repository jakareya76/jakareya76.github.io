import { WorkList } from "../Constants/data";
import Card from "./Card";

const Work = () => {
  return (
    <div className="flex items-center justify-center flex-col py-20" id="work">
      <h1 className="text-center text-4xl font-aurore text-white md:text-5xl">
        <span className="text-yellow-300">My</span> Recent Work
      </h1>
      <div className="grid grid-cols-1 place-items-center gap-5 py-10 px-5 md:grid-cols-2 lg:grid-cols-3">
        {WorkList.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Work;
