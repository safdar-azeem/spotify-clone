import { BiSkipNext, BiSkipPrevious } from "react-icons/bi";
import { FaPause, FaPlay } from "react-icons/fa";
import React from "react";

interface PlaybackControlsProps {
  isPlaying: boolean;
  handlePreviousSong: () => void;
  handlePlayPause: () => void;
  handleNextSong: () => void;
}

const PlaybackControls: React.FC<PlaybackControlsProps> = ({
  isPlaying,
  handlePreviousSong,
  handlePlayPause,
  handleNextSong,
}) => {
  return (
    <div className="flex gap-x-4 text-4xl">
      <button onClick={handlePreviousSong} className="text-4xl">
        <BiSkipPrevious />
      </button>
      <button onClick={handlePlayPause}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button onClick={handleNextSong} className="text-4xl">
        <BiSkipNext />
      </button>
    </div>
  );
};

export default PlaybackControls;
