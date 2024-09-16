import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import clsx from 'clsx';
import { routes } from '../../../router/routes';

const headerLinksData = [
  { to: routes.home, text: 'Home' },
  { to: routes.userList, text: 'User list' },
  { to: routes.userListClassComponent, text: 'User list with class' },
  { to: routes.auth.register, text: 'Register' },
];

export const Header = () => {

  return (
    <nav>
      <ul>
        {headerLinksData.map(({ to, text }) => (
          <li key={to}>
            <NavLink className={({ isActive }) => clsx(styles.link, isActive && styles.active)} to={to}>{text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
