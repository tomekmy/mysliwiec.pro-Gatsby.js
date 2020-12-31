import React from 'react';
import { useTranslation } from 'react-i18next';
import Flip from 'react-reveal/Flip';

import Layout from '../components/layout/layout';
import SEO from '../components/seo/seo';

import styles from './index.module.scss';

const IndexPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <SEO title="Home" />
      <div className={styles.home__text}>
        <div className={styles.home__textParagraph}>
          <Flip
            left
            cascade
            delay={50}
            duration={450}
          >
            {t('main.mainText1')}
          </Flip>
        </div>
        <div className={styles.home__textParagraph}>
          <Flip
            left
            cascade
            delay={450}
            duration={4000}
          >
            {t('main.mainText2')}
          </Flip>
          <Flip
            left
            cascade
            delay={2000}
            duration={1000}
          >
            {t('main.mainText3')}
          </Flip>
        </div>
        <div>
          <Flip
            left
            cascade
            delay={450}
            duration={4000}
          >
            {t('main.mainText4')}
          </Flip>
          <Flip
            left
            cascade
            delay={2000}
            duration={1000}
          >
            {t('main.mainText5')}
          </Flip>
        </div>
      </div>
    </Layout>
  );
};

export default IndexPage;
