import IconButtons from "./IconButtons";
import ProgressBar from "./ProgressBar";
import SongInfoComponent from "./SongInfo";
import VolumeControl from "./VolumeControl";
import { MusicData } from "../../../db/data";
import PlaybackControls from "./PlaybackControls";
import { SongContext } from "../../../context/SongContext";
import React, { useContext, useEffect, useRef, useState } from "react";

function SongPlayer() {
  const [volume, setVolume] = useState(100);
  const [isPlaying, setPlaying] = useState(false);
  const [progress, setProgress] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { songId, updateSong } = useContext(SongContext)!;
  const [isDragging, setIsDragging] = useState(false);

  const handleProgressBarMouseDown = () => {
    setIsDragging(true);
  };

  const handleProgressBarMouseMove = (
    event: React.MouseEvent<HTMLDivElement>
  ) => {
    if (isDragging) {
      const progressBar = event.currentTarget;
      const boundingRect = progressBar.getBoundingClientRect();
      const clickX = event.clientX - boundingRect.left;
      const progressBarWidth = progressBar.clientWidth;
      const clickPercentage = (clickX / progressBarWidth) * 100;
      const newTime = (clickPercentage / 100) * audioRef.current.duration;
      setProgress(clickPercentage);
      audioRef.current.currentTime = newTime;
    }
  };

  const handleProgressBarMouseUp = () => {
    setIsDragging(false);
  };

  const currentMusic = MusicData.find((e) => e.id === songId);

  useEffect(() => {
    if (isPlaying === false) setPlaying(true);
  }, [songId]);

  const handlePreviousSong = () => {
    updateSong((songId! - 1 + MusicData.length) % MusicData.length);
    setPlaying(false);
  };

  const handleNextSong = () => {
    updateSong((songId! + 1 + MusicData.length) % MusicData.length);
    setPlaying(false);
  };

  const handlePlayPause = () => {
    if (audioRef?.current?.paused) {
      audioRef.current.play();
      setPlaying(true);
    } else {
      audioRef?.current?.pause();
      setPlaying(false);
    }
  };

  const handleProgressBarClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = event.currentTarget;
    const boundingRect = progressBar.getBoundingClientRect();
    const clickX = event.clientX - boundingRect.left;
    const progressBarWidth = progressBar.clientWidth;
    const clickPercentage = (clickX / progressBarWidth) * 100;
    const newTime = (clickPercentage / 100) * audioRef.current.duration;
    audioRef.current.currentTime = newTime;
  };

  const handleVolumeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = Number(event.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  const handleTimeUpdate = () => {
    const { currentTime, duration } = audioRef.current!;
    const progress = (currentTime / duration) * 100;
    setProgress(progress);
  };

  const volumeBarStyle = {
    background: `linear-gradient(to right, white ${volume}%, #4B5563 ${volume}%)`,
  };

  return (
    <>
      {songId && (
        <div className="flex items-center justify-between fixed left-0 bottom-0 w-full h-[100px] bg-black px-4">
          <SongInfoComponent currentMusic={currentMusic} />
          <div className="flex items-center flex-col gap-4">
            <PlaybackControls
              isPlaying={isPlaying}
              handlePreviousSong={handlePreviousSong}
              handlePlayPause={handlePlayPause}
              handleNextSong={handleNextSong}
            />
            <audio
              autoPlay
              ref={audioRef}
              src={currentMusic?.audio}
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleNextSong}
            />
            <ProgressBar
              progress={progress}
              handleProgressBarClick={handleProgressBarClick}
              handleProgressBarMouseDown={handleProgressBarMouseDown}
              handleProgressBarMouseMove={handleProgressBarMouseMove}
              handleProgressBarMouseUp={handleProgressBarMouseUp}
            />
          </div>
          <div className="flex items-center gap-x-4 text-2xl">
            <IconButtons />
            <VolumeControl
              volume={volume}
              handleVolumeChange={handleVolumeChange}
              volumeBarStyle={volumeBarStyle}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default SongPlayer;
