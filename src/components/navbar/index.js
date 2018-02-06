import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';

import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/fontawesome-free-brands';


const SocialLink = styled('a')`
  padding-left: 0.33rem;
  padding-right: 0.33rem;
`;

const Navbar = () => (
  <nav className="navbar is-fixed-top is-transparent" role="navigation" aria-label="main navigation">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item is-info">
          <strong>B &mdash; M.</strong>
        </Link>
        <div className="navbar-burger burger" data-target="navbar">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div id="navbar" className="navbar-menu">
        <div className="navbar-end has-text-centered">
          <Link className="navbar-item site-nav" to="/about">
            About
          </Link>
          <Link className="navbar-item site-nav" to="/links">
            Links
          </Link>
          <div className="navbar-item"></div>
          <SocialLink className="navbar-item" href="https://github.com/bradmcgonigle" rel="noopener noreferrer">
            <span className="icon"><FontAwesomeIcon icon={faGithub} inverse /></span>
          </SocialLink>
          <SocialLink className="navbar-item" href="https://instagram.com/bradmcgonigle" rel="noopener noreferrer">
            <span className="icon"><FontAwesomeIcon icon={faInstagram} inverse /></span>
          </SocialLink>
          <SocialLink className="navbar-item" href="https://twitter.com/bradmcgonigle" rel="noopener noreferrer">
            <span className="icon"><FontAwesomeIcon icon={faTwitter} inverse /></span>
          </SocialLink>
          <SocialLink className="navbar-item" href="https://facebook.com/bradmcgonigle" rel="noopener noreferrer">
            <span className="icon"><FontAwesomeIcon icon={faFacebook} inverse /></span>
          </SocialLink>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
