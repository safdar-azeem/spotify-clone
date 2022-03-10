import { AiOutlineHeart } from "react-icons/ai";
import { BsFillPauseFill, BsFillPlayFill } from "react-icons/bs";
import { Item } from "../../types";
import Dropdown from "../common/Dropdown";
import PlaylistMenu from "./PlaylistMenu";

interface PlaylistDetailsSectionProps {
  songId: number;
  currentMusic: Item | undefined;
  handleSelectSong: () => void;
}

function PlaylistDetailsSection({
  currentMusic,
  songId,
  handleSelectSong,
}: PlaylistDetailsSectionProps) {
  return (
    <>
      <div className="flex px-6 pt-[130px] gap-x-6 min-h-[30vh]">
        <img
          src={currentMusic?.img}
          alt={currentMusic?.title}
          height={50}
          width={150}
        />
        <div className="self-end font-bold">
          <p className="text-base">{currentMusic?.type}</p>
          <h3 className="text-4xl mt-1 mb-3">{currentMusic?.title}</h3>
          <div className="text-sm">
            <span>Artist Name &middot; 2001</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-x-5 text-4xl px-6 my-6">
        <button
          className="bg-[#1ECF5D] p-3 rounded-full text-black hover:scale-105"
          onClick={handleSelectSong}
        >
          {songId === currentMusic?.id ? (
            <BsFillPauseFill size={30} />
          ) : (
            <BsFillPlayFill size={30} />
          )}
        </button>
        <button>
          <AiOutlineHeart />
        </button>
        <Dropdown>
          <PlaylistMenu />
        </Dropdown>
      </div>
    </>
  );
}

export default PlaylistDetailsSection;
