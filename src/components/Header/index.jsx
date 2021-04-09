import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import '../../styles/components/Header.scss';

const Header = () => (
  <div className="Header">
    <Link to="/">
      <h1 className="Header-title">PlatziConf Merch</h1>
    </Link>
    <div className="Header-checkout">
      <Link to="/checkout">
        <FontAwesomeIcon icon="shopping-basket" size="lg" />
      </Link>
    </div>
  </div>
);

export default Header;
