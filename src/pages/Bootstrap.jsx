import ListGroup from "react-bootstrap/ListGroup";
import 'bootstrap/dist/css/bootstrap.min.css'
import { HowToMap } from "./HowToMap";
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
      {/* <h1>Bootstrap!</h1> */}
      <div>
        <h1>Mapping over a list</h1>
        <h2>Step One</h2>
        <p>Install bootstrap 5 for react using:
          <code style={{ backgroundColor: 'black', color: 'white' }}>npm i react-bootstrap bootstrap</code>
        </p>
        <p>import bootstrap css using:
          <code style={{ backgroundColor: 'black', color: 'white' }}>
            import 'bootstrap/dist/css/bootstrap.min.css';</code>
        </p>
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
          <div>
            <HowToMap />
          </div>
        </div>
      </div>
    </div>
  );
}
