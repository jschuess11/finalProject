import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "../styles/navbar.css";
import { Link } from 'react-router-dom';

function Button() {
  return (
    <DropdownButton
      id="dropdown-basic-button"
      title="Attractions"
      className="btn"
    >
      {/* <Dropdown.Item><Link to="brewsbars">Breweries</Link></Dropdown.Item> */}
      <Dropdown.Item><Link to="food">Food</Link></Dropdown.Item>
      <Dropdown.Item><Link to="entertainment">Entertainment</Link></Dropdown.Item>
      <Dropdown.Item><Link to="artsmuseums">Arts & Museums</Link></Dropdown.Item>
      <Dropdown.Item><Link to="attractions">VIEW ALL</Link></Dropdown.Item>
    </DropdownButton>
  );
}

export default Button;