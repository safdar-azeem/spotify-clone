import { useContext, useMemo } from "react";
import NavItem from "./NavItem";
import ListItem from "./ListItem";
import { MusicData } from "../../db/data";
import { BiLibrary } from "react-icons/bi";
import { SongContext } from "../../context/SongContext";
import { RiHome2Line, RiSearchLine } from "react-icons/ri";
import { useLocation, useNavigate } from "react-router-dom";

function Aside() {
  const navigate = useNavigate();
  const location = useLocation();
  const { songId } = useContext(SongContext);
  const musics = useMemo(
    () => MusicData.sort(() => Math.random() - 0.5).slice(0, 11),
    []
  );
  const handleOnClick = (type: string, id: number) => {
    navigate(`/${type}/${id}`);
  };

  const isActiveLink = (path: string) => location.pathname === path;

  return (
    <aside className="fixed left-0 top-0 w-[75px] md:w-[300px] h-full bg-black m-3 rounded">
      <ul className="flex flex-col gap-y-6 mb-3 px-4 py-6 text-md text-gray-600 rounded-xl bg-gray-100 min-h-[12%]">
        <NavItem
          to="/"
          label="Home"
          icon={<RiHome2Line className="text-2xl" />}
          isActive={isActiveLink("/")}
        />
        <NavItem
          to="/search"
          label="Search"
          icon={<RiSearchLine className="text-2xl" />}
          isActive={isActiveLink("/search")}
        />
      </ul>

      <div className="bg-gray-100 h-[79.5%] overflow-auto rounded-xl py-3">
        <div className="flex justify-between text-white text-opacity-55 px-4">
          <button className="flex items-center gap-x-2 text-md transition duration-100 hover:text-white">
            <BiLibrary className="text-3xl" />
            <span className="hidden md:block font-bold">Your Library</span>
          </button>
          <button className="hidden md:block text-3xl transition duration-100 hover:text-white">
            +
          </button>
        </div>

        <div className="hidden md:flex gap-2 mt-4 px-4 py-3 text-sm">
          <FilterButton label="Playlists" />
          <FilterButton label="Artists" />
          <FilterButton label="Albums" />
        </div>

        <ul className="flex flex-col mt-3 max-h-[calc(100vh-240px)] overflow-y-auto">
          {musics.map((item, i) => (
            <ListItem
              key={i}
              item={item}
              isCurrentSong={songId === item.id}
              onClick={() => handleOnClick(item.type, item.id)}
              isActive={location.pathname === `/${item.type}/${item.id}`}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
}

const FilterButton = ({ label }: { label: string }) => (
  <button className="px-4 py-2 bg-gray-250  rounded-xl transition duration-100 hover:bg-[#323232]">
    {label}
  </button>
);

export default Aside;
