import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <Link to="/car">Car</Link>
      <Link to="/truck">Truck</Link>
      <Link to="/bike">Bike</Link>
    </nav>
  );
}

export default Header;