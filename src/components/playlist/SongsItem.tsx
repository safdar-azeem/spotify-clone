import { BsFillPauseFill } from "react-icons/bs";
import { CgLoadbarSound } from "react-icons/cg";
import { Item } from "../../types";

interface SongsItemProps {
  item: Item;
  songId: number | null;
  stopSong: () => void;
  onHoverSong: (id: number) => void;
  index: number;
  hoveredSong: number;
}

function SongsItem({
  item,
  songId,
  stopSong,
  hoveredSong,
  onHoverSong,
  index,
}: SongsItemProps) {
  const isPlaying = songId === item.id;
  const isHovered = songId === item.id && hoveredSong === item.id;

  return (
    <li
      className="flex items-center py-5 justify-between pb-1 text-white"
      onMouseOver={() => onHoverSong(item.id)}
    >
      <div
        className={`flex items-center gap-x-3 ${
          isPlaying ? "text-[#1ECF5D]" : "text-white"
        }`}
      >
        {isPlaying && (
          <button onClick={() => stopSong()} className="focus:outline-none">
            {isPlaying && isHovered ? (
              <BsFillPauseFill size={25} />
            ) : (
              <CgLoadbarSound size={25} />
            )}
          </button>
        )}
        {!isPlaying && <span className="w-[25px] pl-2">{index + 1}</span>}
        <div className="">
          <p className="font-bold">{item.title}</p>
          <p className="text-gray-700">Charles Debussy</p>
        </div>
      </div>
      <p>3:30</p>
    </li>
  );
}

export default SongsItem;
