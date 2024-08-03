import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Navbar = () => {
    return (
      <nav>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <Button variant="outline-primary">Calculator</Button>
        </NavLink>
        <NavLink
          to="/quote"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <Button variant="outline-primary">Quote</Button>
        </NavLink>
        <NavLink
          to="/snap"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <Button variant="outline-primary">Snap</Button>
        </NavLink>
      </nav>)
  }

export default Navbar;