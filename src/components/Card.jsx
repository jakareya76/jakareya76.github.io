const Card = ({ image, link, title }) => {
  return (
    <div className="w-[250px] h-[170px] cursor-pointer relative">
      <img src={image} alt="" className="w-full h-full object-cover" />
      <div className="card_hover_effect duration-200 flex items-center justify-center">
        <a
          href={link}
          rel="noreferrer"
          target="_blank"
          className="text-white bg-zinc-800 px-3 py-1"
        >
          Live Preview
        </a>
      </div>
    </div>
  );
};

export default Card;
