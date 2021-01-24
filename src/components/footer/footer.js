import React from 'react';
import styles from './footer.module.scss';
import i18next from 'i18next';

import MailIcon from 'src/images/mail_icon_black.svg';
import FacebookIcon from 'src/images/facebook_icon_black.svg';
import LinkedInIcon from 'src/images/linkedin_icon_black.svg';
import GitHubIcon from 'src/images/github_icon_black.svg';
import EnIcon from 'src/images/en_icon_black.svg';
import PlIcon from 'src/images/pl_icon_black.svg';

const email = String.fromCharCode(109, 97, 105, 108, 116, 111, 58, 116, 111, 109, 101, 107, 64, 109, 121, 115, 108, 105, 119, 105, 101, 99, 46, 112, 114, 111);

const Footer = () => {
  const currentLanguage = i18next.language;

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__icons}>
        <a
          className={styles.footer__link}
          href={email}
          title="E-mail"
        >
          <img
            className={styles.footer__image}
            src={MailIcon}
            alt="E-mail icon"
          />
        </a>
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
      <div className={styles.footer__languages}>
        <a
          href={`#${currentLanguage === 'pl' ? 'en' : 'pl'}`}
          className={styles.footer__langIcon}
          title="Zmień język"
          onClick={() => i18next.changeLanguage(currentLanguage === 'pl' ? 'en' : 'pl')}
        >
          <img
            className={styles.footer__image}
            src={currentLanguage === 'pl' ? EnIcon : PlIcon}
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