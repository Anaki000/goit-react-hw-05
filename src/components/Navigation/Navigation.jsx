import { NavLink } from "react-router-dom";
import s from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={s.header}>
      <p>Search Movies</p>
      <nav>
        <ul className={s.nav}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? s.active : s.link)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/movies"
              className={({ isActive }) => (isActive ? s.active : s.link)}
            >
              Movies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;