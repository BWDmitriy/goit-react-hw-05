// Navbar.jsx
import { Link } from 'react-router-dom';
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;