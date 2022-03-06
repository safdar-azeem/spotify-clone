import { Item } from "../../types";
import Card from "./Card";

interface GridSectionProps {
  items: Item[];
}

const GridSection: React.FC<GridSectionProps> = ({ items }) => (
  <ul className="flex overflow-auto gap-5">
    {items.map((item, index) => (
      <li key={index}>
        <Card
          linkUrl={`/${item.type}/${item.id}`}
          title={item.title}
          imgUrl={item.img}
        />
      </li>
    ))}
  </ul>
);

export default GridSection;
