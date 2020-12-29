import React from 'react';
import styles from './header.module.scss';

import Bounce from 'react-reveal/Bounce';

const Header = () => {

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
        <h2>
          <Bounce
            left
            cascade
            delay={300}
          >
            Front-end Developer
          </Bounce>
        </h2>
      </div>
      <div className={styles.header__topVline} />
      <div className={styles.header__topHline1} />
    </header>
  );
};

export default Header;