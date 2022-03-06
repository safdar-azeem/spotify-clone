import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { BsArrowDownCircle, BsChevronLeft } from "react-icons/bs";

function Header() {
  return (
    <header className="flex items-center justify-between  text-2xl px-8 rounded-xl">
      <Link to={"/"} className="bg-[#00000050] rounded-xl p-1">
        <BsChevronLeft />
      </Link>
      <div className="flex gap-4 items-center">
        <button className="flex items-center text-base font-medium gap-x-2 bg-[#00000050] rounded-xl py-2 px-4">
          <BsArrowDownCircle />
          <span>Install App</span>
        </button>
        <button>
          <AiOutlineUser />
        </button>
      </div>
    </header>
  );
}

export default Header;
