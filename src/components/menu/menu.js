import React from 'react';
import { Link } from 'gatsby';
import styles from './menu.module.scss';

const Menu = () => {

  return (
    <nav className={styles.menu}>
      <div className={styles.menu__icon}>
        <div className={styles.menu__iconBar1} />
        <div className={styles.menu__iconBar2} />
        <div className={styles.menu__iconBar3} />
      </div>
      <ul className={styles.menu__items}>
        <li className={styles.menu__item}>
          <Link
            className={styles.menu__itemLink}
            activeClassName={styles.menu__itemLinkActive}
            to="/"
          >
            Start
          </Link>
        </li>
        <li className={styles.menu__item}>
          <Link
            className={styles.menu__itemLink}
            activeClassName={styles.menu__itemLinkActive}
            to="/about"
          >
            O mnie
          </Link>
        </li>
        <li className={styles.menu__item}>
          <Link
            className={styles.menu__itemLink}
            activeClassName={styles.menu__itemLinkActive}
            to="/portfolio"
          >
            Portfolio
          </Link>
        </li>
        <li className={styles.menu__item}>
          <Link
            className={styles.menu__itemLink}
            activeClassName={styles.menu__itemLinkActive}
            to="/contact"
          >
            Kontakt
          </Link>
        </li>
      </ul>
      <div className={styles.menu__leftLine} />
      <div className={styles.menu__topHline2} />
    </nav>
  );
};

export default Menu;