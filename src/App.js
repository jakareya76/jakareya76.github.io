import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        <div className="container mx-auto px-2">
          <span className="tags text-xl text-zinc-500">
            &lt;html&gt;
            <br />
          </span>
          <span className="tags text-xl text-zinc-500">&lt;body&gt;</span>
        </div>
      </section>

      <main className="flex items-center justify-center flex-col px-2">
        <div className="container mx-auto font-[Arimo] px-2">
          <Hero />
          <About />
          <Work />
          <Contact />
        </div>
      </main>

      <section className="flex items-center justify-center">
        <div className="container mx-auto px-2">
          <span className="tags text-xl text-zinc-500">
            &lt;/body&gt; <br />
          </span>
          <span className="tags text-xl text-zinc-500">&lt;/html&gt;</span>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default App;
