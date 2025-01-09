import { useState } from "react";

function ListGroup() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  // Event Handler
//   const handleClick = (event: MouseEvent) => {
//     console.log(event);
//   }

  return (
    <>
      <h1>List Group</h1>
      {/* {items.length === 0 ? <p>No item found</p> : null} */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={selectedIndex === index ? 'list-group-item active' : 'list-group-item'}
            // onClick={(event) => {console.log(event)}}
            onClick={() => { setSelectedIndex(index)}}
          >
            {index}. {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
