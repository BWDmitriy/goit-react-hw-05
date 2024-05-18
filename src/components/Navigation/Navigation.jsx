import NavLink from './NavLink';
import styles from './Navigation.module.css';
import { useLocation } from 'react-router-dom';
import { useRef } from 'react';

const Navigation = () => {
  const location = useLocation();
  const navStateRef = useRef({ from: location.pathname });

  return (
    <nav className={styles.navigation}>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies" state={navStateRef}>Movies</NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;