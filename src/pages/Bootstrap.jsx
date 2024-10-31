import ListGroup from "react-bootstrap/ListGroup";
import 'bootstrap/dist/css/bootstrap.min.css'
// import { HowToMap } from "./HowToMap";
import Button from 'react-bootstrap/Button'
import { useState } from "react";

export default function Boostrap() {
  const [selectItem, setSelectedItem] = useState(-1);
  const [submitItem, setSubmitItem] = useState()

  const [userInfo, setUserInfo] = useState({
    cityChoice: '',
    pastCity: '',
  })

  const [selectInfo, setSelectInfo] = useState(-1)

  const handleUserInfo = (event) => {
    const { name, value } = event.target
    setUserInfo({
      ...userInfo,
      [name]: value
    })
  }

  // const mouseHoverEnter = (event) => {
  //   event.target.style.backgroundColor = 'green'
  // }

  // const mouseOverLeave = (event) => {
  //   event.target.style.backgroundColor = 'white'
  // }

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
        {/* <h1>Mapping over a list</h1>
        <h2>Step One</h2>
        <p>Install bootstrap 5 for react using:
          <code style={{ backgroundColor: 'black', color: 'white' }}>npm i react-bootstrap bootstrap</code>
        </p>
        <p>import bootstrap css using:
          <code style={{ backgroundColor: 'black', color: 'white' }}>
            import 'bootstrap/dist/css/bootstrap.min.css';</code>
        </p> */}
        <div className="cities">
          <p>Where would you like to live?</p>
          <ListGroup>
            {cities.map((city, index) => (
              <ListGroup.Item
                type="button"
                className={selectItem === index ? 'list-group-item-primary' : 'list-group-item-secondary'}
                // onMouseLeave={mouseOverLeave}
                // onMouseEnter={mouseHoverEnter}
                onClick={() => setSelectedItem(index, console.log(city, index))}
                key={index}
              >
                {city}
              </ListGroup.Item>
            ))}
          </ListGroup>
          <div>
            {/* <HowToMap /> */}
          </div>
        </div>
      </div>
      <Button onClick={() => setSubmitItem(selectItem)}> Select</Button>
      {!submitItem ? <p>No City Selected</p> : <p>You selected {cities[submitItem]}</p>}

      {submitItem && (
        <div className="userInfo">
          <p>Why did you pick {cities[submitItem]}?</p>
          <textarea
            name='cityChoice'
            onChange={handleUserInfo}
            value={userInfo.cityChoice}
            type="text"
          />
          <p>Where did you live before?</p>
          <textarea
            name="pastCity"
            onChange={handleUserInfo}
            value={userInfo.pastCity}
            type='text'
          />
          <Button onClick={() => setUserInfo(true)}>Submit</Button>
          {userInfo && (
            <div>
              <p>{userInfo.cityChoice}</p>
            </div>
          )}
        </div>
      )
      }
    </div >
  );
}

// const filterCity = cities.filter((__, index) => index === selectItem)
