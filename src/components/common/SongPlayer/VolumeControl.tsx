import { AiFillSound } from "react-icons/ai";

interface VolumeControlProps {
  volume: number;
  handleVolumeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  volumeBarStyle: React.CSSProperties;
}

const VolumeControl: React.FC<VolumeControlProps> = ({
  volume,
  handleVolumeChange,
  volumeBarStyle,
}) => {
  return (
    <div className="flex items-center ml-2 gap-x-3">
      <AiFillSound />
      <input
        type="range"
        min={0}
        max={100}
        value={volume}
        style={volumeBarStyle}
        onChange={handleVolumeChange}
        className="w-20 md:w-40 h-2 bg-gray-300 rounded-lg appearance-none"
      />
      <style>
        {`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #fff;}`}
      </style>
    </div>
  );
};

export default VolumeControl;
