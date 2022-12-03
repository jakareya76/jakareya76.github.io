import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import "./App.css";

const App = () => {
  return (
    <>
      <Navbar />
      <section className="flex items-center justify-center">
        <div className="w-[95%] md:w-[90%]">
          <span className="tags text-xl ml-2 text-zinc-500">
            &lt;html&gt;
            <br />
          </span>
          <span className="tags text-xl ml-4 text-zinc-500">&lt;body&gt;</span>
        </div>
      </section>

      <main className="flex items-center justify-center flex-col">
        <div className="w-[90%] md:w-[80%] font-[Arimo]">
          <Hero />
          <About />
          <Work />
          <Contact />
        </div>
      </main>

      <section className="flex items-center justify-center">
        <div className="w-[95%] md:w-[90%]">
          <span className="tags text-xl ml-4 text-zinc-500">
            &lt;/body&gt; <br />
          </span>
          <span className="tags text-xl ml-2 text-zinc-500">&lt;/html&gt;</span>
        </div>
      </section>
    </>
  );
};

export default App;
