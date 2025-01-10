import { useState } from "react";

interface Props {
  cities: string[];
  heading: string;
  // func (item: string) returns void
  onSelectItem: (item: string) => void;
}

function ListGroup({ cities, heading, onSelectItem }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event Handler
  //   const handleClick = (event: MouseEvent) => {
  //     console.log(event);
  //   }

  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {cities.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {cities.map((city, index) => (
          <li
            key={city}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            // onClick={(event) => {console.log(event)}}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(city);
            }}
          >
            {index + 1}. {city}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
