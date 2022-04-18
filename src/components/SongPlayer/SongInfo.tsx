import React from "react";
import { Item } from "../../types";

interface SongInfoProps {
  currentMusic: Item | undefined;
}

const SongInfo: React.FC<SongInfoProps> = ({ currentMusic }) => {
  return (
    <div className="flex gap-x-2 items-center w-[250px]">
      <img
        width={60}
        height={50}
        src={currentMusic?.img}
        alt={currentMusic?.title}
      />
      <div className="hidden md:block text-sm mr-2">
        <p>{currentMusic?.title}</p>
        <p className="text-gray-700">{currentMusic?.type}</p>
      </div>
    </div>
  );
};

export default SongInfo;
