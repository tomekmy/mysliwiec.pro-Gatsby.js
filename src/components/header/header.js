import React from 'react';
import styles from './header.module.scss';

import TextyAnim from 'rc-texty';

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
        <TextyAnim
          className={styles.header__animatedText}
          type="left"
          delay={2000}
        >
          Front-end Developer
        </TextyAnim>
        <div className={styles.header__topVline} />
        <div className={styles.header__topHline1} />
      </div>
    </header>
  );
};

export default Header;