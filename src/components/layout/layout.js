import React, { useEffect } from 'react';
import 'src/i18n';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Menu from '../menu/menu';
import Footer from '../footer/footer';

import './layout.scss';

const Layout = ({ children }) => {
  const hash = children.props.location.hash;

  useEffect(() => {
    if (hash === '#pl') {
      i18next.changeLanguage('pl');
    } else if (hash === '#en') {
      i18next.changeLanguage('en');
    }
  }, [hash]);

  return (
    <div className="content">
      <Header />
      <Menu />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
