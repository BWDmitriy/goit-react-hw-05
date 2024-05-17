// src/components/Navigation/Navigation.jsx
import NavLink from './NavLink';
import styles from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </ul>
    </nav>
  );
};

export default Navigation;