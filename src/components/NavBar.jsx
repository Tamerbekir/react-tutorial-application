import "../index.css";
import 'bootstrap/dist/css/bootstrap.min.css'
// import Button from 'react-bootstrap/Button'

export default function NavBar() {


  return (
    <div className="navBarContainer">
      <div className="navbar">
        <h2 className="navBarHeader">Welcome to Practice React</h2>
        <nav>
          <ul>
            <li>
              <a className="bootstrap" href="/bootstrap">
                Bootstrap
              </a>
            </li>
            <li>
              <a className="home" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="userData" href="/increments">User Data</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
