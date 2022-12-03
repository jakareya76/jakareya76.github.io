import Button from "./Button";

const Contact = () => {
  return (
    <div
      id="contact"
      className="py-20 flex items-center justify-center flex-col"
    >
      <h1 className="text-center text-4xl font-aurore text-white py-10">
        <span className="text-yellow-300">Contact</span> me!
      </h1>
      <div className="grid place-items-center">
        <form className="grid gap-4">
          <div className="flex items-center justify-center flex-col gap-4 md:flex-row">
            <input
              type="text"
              placeholder="name"
              className="bg-zinc-800 p-3 w-full outline-none text-gray-400"
            />
            <input
              type="text"
              placeholder="email"
              className="bg-zinc-800 p-3 w-full outline-none text-gray-400"
            />
          </div>
          <div className="w-full">
            <textarea
              rows="8"
              cols="25"
              placeholder="message"
              className="bg-zinc-800 p-3 outline-none text-gray-400 w-auto md:w-full"
            ></textarea>
          </div>
          <div>
            <Button width="w-full md:w-auto">Send Message</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
