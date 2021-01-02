import React from 'react';
import styles from './footer.module.scss';

import FacebookIcon from 'src/images/facebook_icon_black.svg';
import LinkedInIcon from 'src/images/linkedin_icon_black.svg';
import GitHubIcon from 'src/images/github_icon_black.svg';
import EnIcon from 'src/images/en_icon_black.svg';

const Footer = () => {

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icon}>
        <a
          className={styles.footer__link}
          href="https://www.facebook.com/mysliwiec.pro/"
          title="Facebook fanpage"
        >
          <img
            className={styles.footer__image}
            src={FacebookIcon}
            alt="Facebook fanpage"
          />
        </a>
        <a
          className={styles.footer__link}
          href="https://www.linkedin.com/in/tomekmy/"
          title="LinkedIn"
        >
          <img
            className={styles.footer__image}
            src={LinkedInIcon}
            alt="LinkedIn"
          />
        </a>
        <a
          className={styles.footer__link}
          href="https://github.com/tomekmy/"
          title="GitHub"
        >
          <img
            className={styles.footer__image}
            src={GitHubIcon}
            alt="GitHub"
          />
        </a>
      </div>
      <div className="styles.footer__languages">
        <a
          href="#lang"
          className={styles.footer__langIcon}
          title="Zmień język"
        >
          <img
            className={styles.footer__image}
            src={EnIcon}
            alt="Zmień język"
          />
        </a>
      </div>
      <div className={styles.footer__hline} />
      <div className={styles.footer__vline} />
      <div className={styles.footer__hlineRight} />
      <div className={styles.footer__vlineRight} />
    </footer>
  );
};

export default Footer;