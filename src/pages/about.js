import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import styles from './about.module.scss';

import SEO from '../components/seo/seo';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div>
      <SEO title="Home" />
      <div className={styles.aboutIntro}>
        <div className="about-intro__text">
          <Trans
            i18nKey="about.introText"
          >
            <a
              href="https://www.execon.pl/"
              target="_blank"
              rel="noreferrer"
            >
              Execon One
            </a>
          </Trans>
        </div>
        <div className="about-intro__site">
          <h4 className="about-intro__site-header">{t('about.introSiteHeader')}</h4>
          <div className="about-intro__site-text">{t('about.introSiteText')}</div>
          <h4 className="about-intro__certificates-header">{t('about.introCertificatesHeader')}</h4>
          <div className="about-intro__certificates-text">
            <ul>
              {
                t('about.introCertificate', { returnObjects: true }).map((certificate, index) =>
                  <li key={certificate.link}>
                    <a
                      href={certificate.link}
                      target={certificate.target || '_self'}
                    >
                      {certificate.description}
                    </a>
                  </li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
      <div className="about-skills">
        <h5 className="about-skills__header-coding">{t('about.headerCoding')}</h5>
        <div className="about-skills__bars">
          <div>HTML <div className="about-skills__percent">(<span>95%</span>)</div></div>
          <div>CSS3 <div className="about-skills__percent">(<span>93%</span>)</div></div>
          <div>JavaScript/ES6 <div className="about-skills__percent">(<span>90%</span>)</div></div>
          <div>TypeScript <div className="about-skills__percent">(<span>75%</span>)</div></div>
          <div>Java SE <div className="about-skills__percent">(<span>40%</span>)</div></div>
          <div>PHP <div className="about-skills__percent">(<span>30%</span>)</div></div>
        </div>
        <h5 className="about-skills__header-frameworks">{t('about.headerFrameworks')}</h5>
        <div className="about-skills__bars">
          <div>React <div className="about-skills__percent">(<span>80%</span>)</div></div>
          <div>Angular 2+ <div className="about-skills__percent">(<span>78%</span>)</div></div>
          <div>jQuery <div className="about-skills__percent">(<span>70%</span>)</div></div>
          <div>Vue.js <div className="about-skills__percent">(<span>35%</span>)</div></div>
          <div>AngularJs <div className="about-skills__percent">(<span>33%</span>)</div></div>
        </div>
        <h5 className="about-skills__header-technologies">{t('about.headerTechnologies')}</h5>
        <div className="about-skills__bars">
          <div>RWD <div className="about-skills__percent">(<span>79%</span>)</div></div>
          <div>MySQL <div className="about-skills__percent">(<span>74%</span>)</div></div>
          <div>Sass <div className="about-skills__percent">(<span>72%</span>)</div></div>
          <div>PWA <div className="about-skills__percent">(<span>71%</span>)</div></div>
          <div>BEM <div className="about-skills__percent">(<span>70%</span>)</div></div>
          <div>GIT <div className="about-skills__percent">(<span>69%</span>)</div></div>
          <div>Gulp <div className="about-skills__percent">(<span>62%</span>)</div></div>
          <div>A/B Testing <div className="about-skills__percent">(<span>60%</span>)</div></div>
          <div>Webpack <div className="about-skills__percent">(<span>59%</span>)</div></div>
          <div>GitHub <div className="about-skills__percent">(<span>58%</span>)</div></div>
          <div>JSON <div className="about-skills__percent">(<span>49%</span>)</div></div>
          <div>REST <div className="about-skills__percent">(<span>47%</span>)</div></div>
          <div>Firebase <div className="about-skills__percent">(<span>45%</span>)</div></div>
          <div>Node.js <div className="about-skills__percent">(<span>22%</span>)</div></div>
        </div>
        <h5 className="about-skills__header-cms">{t('about.headerCMS')}</h5>
        <div className="about-skills__bars">
          <div>Wordpress <div className="about-skills__percent">(<span>76%</span>)</div></div>
          <div>Joomla <div className="about-skills__percent">(<span>68%</span>)</div></div>
          <div>PrestaShop <div className="about-skills__percent">(<span>41%</span>)</div></div>
        </div>
        <h5 className="about-skills__header-software">{t('about.headerSoftware')}</h5>
        <div className="about-skills__bars">
          <div>Windows <div className="about-skills__percent">(<span>91%</span>)</div></div>
          <div>Visual Studio Code <div className="about-skills__percent">(<span>90%</span>)</div></div>
          <div>Chrome DevTools <div className="about-skills__percent">(<span>89%</span>)</div></div>
          <div>foobar2000:) <div className="about-skills__percent">(<span>87%</span>)</div></div>
          <div>NetBeans <div className="about-skills__percent">(<span>80%</span>)</div></div>
          <div>Photoshop <div className="about-skills__percent">(<span>77%</span>)</div></div>
          <div>VirtualBox <div className="about-skills__percent">(<span>70%</span>)</div></div>
          <div>Eclipse <div className="about-skills__percent">(<span>66%</span>)</div></div>
          <div>Linux <div className="about-skills__percent">(<span>62%</span>)</div></div>
          <div>MacOS <div className="about-skills__percent">(<span>42%</span>)</div></div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
