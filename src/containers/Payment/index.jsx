import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';
import { AppContext } from '../../context/AppContext';
import '../../styles/components/Payment.scss';

const Payments = () => {
  const {
    state: { cart, buyer },
    addNewOrder,
  } = useContext(AppContext);
  const history = useHistory();

  const paypalOptions = {
    clientId: String(process.env.PP_CLIENT_ID),
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };

      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };

  const handleSumTotal = () =>
    cart.reduce((acc, item) => item.price * item.quantity + acc, 0);

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((item) => (
          <div className="Payment-item" key={item.title}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>${item.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            options={paypalOptions}
            style={buttonStyles}
            amount={handleSumTotal()}
            onButtonReady={() => console.log('Button ready')}
            onSuccess={(data) => handlePaymentSuccess(data)}
            onError={(err) => console.error(err)}
          />
        </div>
      </div>
      <div />
    </div>
  );
};

export default Payments;
