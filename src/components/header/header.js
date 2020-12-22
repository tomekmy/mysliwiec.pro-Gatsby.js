import React, { useEffect } from 'react';
import styles from './header.module.scss';

const Header = () => {

  useEffect(() => {
    
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <h1>
          <a className={styles.header__link}
            href="/main"
            title="Start"
          >
            <span className={styles.header__linkDistinction}>T</span>omasz<br />
            <span className={styles.header__linkDistinction}>M</span>yśliwiec
          </a>
        </h1>
        <h2>Front-end Developer</h2>
        <div className={styles.header__topVline} />
        <div className={styles.header__topHline1} />
      </div>
    </header>
  );
};

export default Header;