import React, { useEffect } from 'react';
import styles from './header.module.scss';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from 'src/store/mainSlice';

import Bounce from 'react-reveal/Bounce';

const Header = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const {
    playLogoAnimation,
  } = useSelector((state) => state.main);

  useEffect(() => {
    if (playLogoAnimation) {
      setTimeout(() => {
        dispatch(actions.handleLogoAnimation(false));
      }, 5000);
    }
  }, [dispatch, playLogoAnimation]);

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <h1>
          <a className={styles.header__link}
            href="/"
            title="Start"
          >
            <span className={styles.header__linkDistinction}>T</span>omasz<br />
            <span className={styles.header__linkDistinction}>M</span>yśliwiec
          </a>
        </h1>
        <h2>
          {
            playLogoAnimation ?
              (
                <Bounce
                  left
                  cascade
                  duration={1700}
                >
                  {t('frontEndDeveloper')}
                </Bounce>
              )
              :
              (
                <Bounce
                  left
                  cascade
                  when={true}
                >
                  {t('frontEndDeveloper')}
                </Bounce>
              )
          }
        </h2>
      </div>
      <div className={styles.header__topVline} />
      <div className={styles.header__topHline1} />
    </header>
  );
};

export default Header;