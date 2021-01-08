import React from 'react';
import { Link } from 'gatsby';
import { useTranslation } from 'react-i18next';
import styles from './menu.module.scss';

const Menu = () => {
  const { t } = useTranslation();

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
            {t('menu.main')}
          </Link>
        </li>
        <li className={styles.menu__item}>
          <Link
            className={styles.menu__itemLink}
            activeClassName={styles.menu__itemLinkActive}
            to="/about"
          >
            {t('menu.about')}
          </Link>
        </li>
        <li className={styles.menu__item}>
          <Link
            className={styles.menu__itemLink}
            activeClassName={styles.menu__itemLinkActive}
            to="/portfolio"
          >
            {t('menu.portfolio')}
          </Link>
        </li>
        <li className={`${styles.menu__item} ${styles.menu__itemLast}`}>
          <Link
            className={styles.menu__itemLink}
            activeClassName={styles.menu__itemLinkActive}
            to="/contact"
          >
            {t('menu.contact')}
          </Link>
        </li>
      </ul>
      <div className={styles.menu__leftLine} />
      <div className={styles.menu__topHline2} />
    </nav>
  );
};

export default Menu;