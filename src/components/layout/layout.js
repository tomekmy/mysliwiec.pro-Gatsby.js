/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import 'src/i18n';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import './layout.scss';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className="content">
      <header className="header">
        <h1>
          <a className="header__link"
            href="/main"
            title="Start"
          >
            <span className="header__link--distinction">T</span>omasz<br />
            <span class="header__link--distinction">M</span>yśliwiec
          </a>
        </h1>
        <h2>Front-end Developer</h2>
      </header>
      <nav className="menu">Menu</nav>
      <main className="main">{children}</main>
      <footer className="footer">
        Tu footer
      </footer>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
