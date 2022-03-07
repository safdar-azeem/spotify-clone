import { AiOutlineHeart } from "react-icons/ai";
import { CgInpicture } from "react-icons/cg";
import { HiOutlineViewList } from "react-icons/hi";
import { LuMic2 } from "react-icons/lu";

const IconButtons: React.FC = () => {
  return (
    <>
      <button className="text-2xl">
        <AiOutlineHeart />
      </button>
      <button className="text-2xl">
        <CgInpicture />
      </button>
      <LuMic2 />
      <HiOutlineViewList />
    </>
  );
};

export default IconButtons;
