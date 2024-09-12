import { NavLink } from 'react-router-dom';
import { routes } from '../../../router/router';
import styles from './Header.module.scss';
import clsx from 'clsx';

export const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className={({ isActive }) => clsx(styles.link, isActive && styles.active)} to={routes.home}>Home</NavLink>

          <ul>
            <li>
              <NavLink className={({ isActive }) => clsx(styles.link, isActive && styles.active)} to={routes.home}>Home</NavLink>

            </li>
            <li>
              <NavLink className={({ isActive }) => clsx(styles.link, isActive && styles.active)} to={routes.userList}>User list</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => [styles.link, isActive ? styles.active : ''].join(' ').trim()} to={routes.userListClassComponent}>User list with class component</NavLink>
            </li>
          </ul>
        </li>
        <li>
          <NavLink className={({ isActive }) => clsx(styles.link, isActive && styles.active)} to={routes.userList}>User list</NavLink>
        </li>
        <li>
          <NavLink className={({ isActive }) => [styles.link, isActive ? styles.active : ''].join(' ').trim()} to={routes.userListClassComponent}>User list with class component</NavLink>
        </li>
      </ul>
    </nav>
  );
};
