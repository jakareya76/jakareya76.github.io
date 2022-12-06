import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          form.current.reset();
          toast.success("send successfully");
        },
        () => {
          toast.error("Fail to send");
        }
      );
  };

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
      id="contact"
      className="flex items-center justify-center flex-col my-20"
      animate={animation}
    >
      <h1 className="text-center text-4xl font-aurore text-white py-10">
        <span className="text-yellow-300">Contact</span> me!
      </h1>
      <div className="grid place-items-center">
        <form ref={form} onSubmit={sendEmail} className="grid gap-4">
          <div className="flex items-center justify-center flex-col gap-4 md:flex-row">
            <input
              type="text"
              name="user_name"
              placeholder="name"
              className="bg-zinc-800 p-3 w-full outline-none text-gray-400"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="email"
              className="bg-zinc-800 p-3 w-full outline-none text-gray-400"
              required
            />
          </div>
          <div className="w-full">
            <textarea
              rows="8"
              cols="25"
              name="message"
              placeholder="message"
              className="bg-zinc-800 p-3 outline-none text-gray-400 w-auto md:w-full"
              required
            ></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full border border-[#08fdd8] px-6 py-2 my-5 text-[#08fdd8] font-mono tracking-widest rounded-[2px] duration-500 hover:bg-[#08fdd8] hover:text-zinc-900 md:w-auto"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;
