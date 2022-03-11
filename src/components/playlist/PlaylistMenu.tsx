import React from "react";

const options = [
  "Add to queue",
  "Go to artist radio",
  "Remove from your library",
  "Add to playlist",
  "Share",
  "Open in Desktop App",
];

const PlaylistMenu: React.FC = () => (
  <ul className="flex flex-col gap-y-3 top-12 text-base">
    {options.map((option, index) => (
      <li
        key={index}
        className="hover:bg-gray-400 rounded py-1 px-2 cursor-pointer"
      >
        {option}
      </li>
    ))}
  </ul>
);

export default PlaylistMenu;
