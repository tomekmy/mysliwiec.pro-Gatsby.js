import React from 'react';
import { useTranslation } from 'react-i18next';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
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
          <AniLink
            swipe
            className={styles.menu__itemLink}
            activeClassName={styles.menu__itemLinkActive}
            to="/"
          >
            {t('menu.main')}
          </AniLink>
        </li>
        <li className={styles.menu__item}>
          <AniLink
            swipe
            className={styles.menu__itemLink}
            activeClassName={styles.menu__itemLinkActive}
            to="/about"
          >
            {t('menu.about')}
          </AniLink>
        </li>
        <li className={styles.menu__item}>
          <AniLink
            swipe
            className={styles.menu__itemLink}
            activeClassName={styles.menu__itemLinkActive}
            to="/portfolio"
          >
            {t('menu.portfolio')}
          </AniLink>
        </li>
        <li className={`${styles.menu__item} ${styles.menu__itemLast}`}>
          <AniLink
            swipe
            className={styles.menu__itemLink}
            activeClassName={styles.menu__itemLinkActive}
            to="/contact"
          >
            {t('menu.contact')}
          </AniLink>
        </li>
      </ul>
      <div className={styles.menu__leftLine} />
      <div className={styles.menu__topHline2} />
    </nav>
  );
};

export default Menu;