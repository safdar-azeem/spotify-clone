import { Link } from "react-router-dom";

type CardsTypes = {
  title: string;
  linkUrl: string;
  imgUrl: string;
  className?: string;
};

function Card({ linkUrl, imgUrl, title }: CardsTypes) {
  return (
    <div
      className={`transition duration-100 min-w-[160px] bg-gray-350 hover:brightness-125 rounded-xl h-full p-3`}
    >
      <Link to={linkUrl}>
        <img alt={title} src={imgUrl} className="w-full rounded" />
        <p className="text-gray-800 mt-3">{title}</p>
      </Link>
    </div>
  );
}

export default Card;
