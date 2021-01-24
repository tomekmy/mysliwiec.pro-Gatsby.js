import React from 'react';
import 'src/i18n';
import i18next from 'i18next';
import PropTypes from 'prop-types';
import Header from '../header/header';
import Menu from '../menu/menu';
import Footer from '../footer/footer';

import './layout.scss';

// if (window.location.hash === '#pl') {
//   i18next.changeLanguage('pl');
// } else if (window.location.hash === '#en') {
//   i18next.changeLanguage('en');
// }

const Layout = ({ children }) => {

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
