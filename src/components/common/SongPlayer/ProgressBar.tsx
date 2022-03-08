import React from "react";

interface ProgressBarProps {
  progress: number;
  handleProgressBarClick: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleProgressBarMouseDown: () => void;
  handleProgressBarMouseMove: (event: React.MouseEvent<HTMLDivElement>) => void;
  handleProgressBarMouseUp: () => void;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  handleProgressBarClick,
  handleProgressBarMouseDown,
  handleProgressBarMouseMove,
  handleProgressBarMouseUp,
}) => {
  return (
    <div
      className="h-2 bg-gray-600 w-[200px] md:w-[350px] ml-2 cursor-pointer rounded-xl"
      onClick={handleProgressBarClick}
      onMouseDown={handleProgressBarMouseDown}
      onMouseMove={handleProgressBarMouseMove}
      onMouseUp={handleProgressBarMouseUp}
      onMouseLeave={handleProgressBarMouseUp}
    >
      <div
        className="h-full bg-white rounded-xl"
        style={{
          width: `${progress}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
