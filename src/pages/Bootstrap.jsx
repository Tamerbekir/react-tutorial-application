import ListGroup from "react-bootstrap/ListGroup";
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react";

export default function Boostrap() {
  const [selectItem, setSelectedItem] = useState(-1);

  const cities = [
    "Peekskill",
    "New York City",
    "Las Vegas",
    "Miami",
    "Kansas City",
  ];

  return (
    <div>
      <h1>Bootstrap!</h1>
      <div>
        <h4>List</h4>
        <div>
          <ListGroup>
            {cities.map((city, index) => (
              <ListGroup.Item 
                type="button"
                className={selectItem === index ? 'list-group-item-success' : 'list-group-item-secondary'}
                onClick={() => setSelectedItem(index, console.log(city, index))}
                key={index}
              >
                {city}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </div>
      </div>
    </div>
  );
}
