import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AppContext } from '../../context/AppContext';
import '../../styles/components/Checkout.scss';

const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  const handleSumTotal = () =>
    cart.reduce((acc, item) => item.price * item.quantity + acc, 0);

  return (
    <>
      <Helmet>
        <title>Platzi Conf Merch - Checkout</title>
      </Helmet>
      <div className="Checkout">
        <div className="Checkout-content">
          {cart.length > 0 ? (
            <h3>Lista de Pedidos:</h3>
          ) : (
            <h3>Sin Pedidos...</h3>
          )}
          {cart.map((item) => (
            <div className="Checkout-item" key={item.id}>
              <div className="Checkout-element">
                <h4>{item.title}</h4>
                {item.quantity > 1 ? (
                  <span>
                    {item.quantity} X ${item.price}
                  </span>
                ) : (
                  <span>${item.price}</span>
                )}
              </div>
              <button type="button" onClick={() => handleRemove(item)}>
                <FontAwesomeIcon icon="trash-alt" size="lg" />
              </button>
            </div>
          ))}
        </div>
        {cart.length > 0 && (
          <div className="Checkout-sidebar">
            <h3>{`Precio Total: $ ${handleSumTotal()}`}</h3>
            <Link to="/checkout/information">
              <button type="button">Continuar Pedido</button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};
export default Checkout;
