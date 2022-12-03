const Button = ({ children, width }) => {
  return (
    <button
      className={`border border-[#08fdd8] ${width} px-6 py-2 my-5 text-[#08fdd8] font-mono tracking-widest rounded-[2px] duration-500 hover:bg-[#08fdd8] hover:text-zinc-900`}
    >
      {children}
    </button>
  );
};

export default Button;
