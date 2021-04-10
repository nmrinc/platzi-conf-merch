import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppContext } from '../../context/AppContext';

import '../../styles/components/Header.scss';

const Header = () => {
  const {
    state: { cart },
  } = useContext(AppContext);

  return (
    <div className="Header">
      <Link to="/">
        <h1 className="Header-title">PlatziConf Merch</h1>
      </Link>
      <div className="Header-checkout">
        <Link to="/checkout">
          <FontAwesomeIcon icon="shopping-basket" size="lg" />
        </Link>
        {cart.length >= 1 && (
          <div className="Header-alert">
            {cart.reduce((acc, item) => item.quantity + acc, 0)}
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
