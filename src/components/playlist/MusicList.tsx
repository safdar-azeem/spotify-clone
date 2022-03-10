import { BiTime } from "react-icons/bi";
import { MusicData } from "../../db/data";
import SongsItem from "./SongsItem";
import { useState } from "react";

interface SongsListProps {
  songId: number | null;
  stopSong: () => void;
}

function SongsList({ songId, stopSong }: SongsListProps) {
  const [hoveredSong, setHoveredSong] = useState<number>();

  function onHoverSong(id: number) {
    setHoveredSong(id);
  }

  return (
    <div>
      <ul>
        <li className="flex items-center justify-between border-b-[1px]  text-lg border-gray-700  text-white text-opacity-50 px-2 pb-2 mb-5">
          <div className="flex gap-x-6">
            <span>#</span> <p>Title</p>
          </div>
          <BiTime />
        </li>
        {MusicData.map((item, i) => (
          <SongsItem
            key={i}
            index={i}
            item={item}
            songId={songId}
            hoveredSong={hoveredSong}
            stopSong={stopSong}
            onHoverSong={onHoverSong}
          />
        ))}
      </ul>
    </div>
  );
}

export default SongsList;
