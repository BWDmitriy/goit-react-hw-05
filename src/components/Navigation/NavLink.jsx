// src/components/Navigation/NavLink.jsx
import { Link } from 'react-router-dom';

const NavLink = ({ to, children }) => {
  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  );
};

export default NavLink;