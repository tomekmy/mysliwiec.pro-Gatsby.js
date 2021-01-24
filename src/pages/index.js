import React from 'react';
import { useTranslation } from 'react-i18next';
import Flip from 'react-reveal/Flip';

import SEO from '../components/seo/seo';

import styles from './index.module.scss';

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <SEO title="Home" />
      <div className={styles.home__text}>
        <div className={styles.home__textParagraph}>
          <Flip
            left
            cascade
            delay={250}
            duration={450}
          >
            {t('main.mainText1')}
          </Flip>
        </div>
        <div className={styles.home__textParagraph}>
          <Flip
            left
            cascade
            delay={400}
            duration={1500}
          >
            {t('main.mainText2')}
          </Flip>
          <Flip
            left
            cascade
            delay={1000}
            duration={1300}
          >
            {t('main.mainText3')}
          </Flip>
        </div>
        <div>
          <Flip
            left
            cascade
            delay={1700}
            duration={1500}
          >
            {t('main.mainText4')}
          </Flip>
          <Flip
            left
            cascade
            delay={2200}
            duration={1300}
          >
            {t('main.mainText5')}
          </Flip>
        </div>
      </div>
    </>
  );
};

export default IndexPage;
