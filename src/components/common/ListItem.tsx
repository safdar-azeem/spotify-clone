interface Item {
  id: number;
  type: string;
  img: string;
  title: string;
}

interface ListItemProps {
  item: Item;
  isActive: boolean;
  onClick: () => void;
  isCurrentSong: boolean;
}

const ListItem = ({
  item,
  isActive,
  onClick,
  isCurrentSong,
}: ListItemProps) => (
  <li
    className={`transition duration-100 hover:bg-[#232323] py-1 ${
      isActive ? "bg-[#232323]" : ""
    } ${isCurrentSong ? "text-[#1ECF5D]" : ""}`}
  >
    <div
      role="button"
      onClick={onClick}
      className="flex items-center justify-start px-4"
    >
      <img
        src={item.img}
        alt="Artist"
        height={40}
        width={50}
        className="rounded-md w-12 h-12 object-cover"
      />
      <div className="hidden md:flex flex-col ml-3">
        <p className="text-md font-medium">{item.title}</p>
        <p className="text-md text-gray-600">{item.type}</p>
      </div>
    </div>
  </li>
);

export default ListItem;
