import React, { useRef, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import '../../styles/components/Information.scss';

/**
 * ! If the useHistory hook won't work you can obtain the history from browser router
 * @a Just have to decompile it as a prop
 * @tst const Information = ({ history }) => {}
 * @a Then push the route you want in the same way.
 * @o That's the functionality of the useHistory hook, bring history to use it.
 */
const Information = () => {
  const {
    state: { cart },
    addToBuyer,
  } = useContext(AppContext);
  const form = useRef(null);
  const history = useHistory();

  const handleSubmit = () => {
    const formData = new FormData(form.current);

    const _buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };

    addToBuyer(_buyer);
    history.push('/checkout/payment');
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electrónico" name="email" />
            <input type="text" placeholder="Dirección" name="address" />
            <input type="text" placeholder="apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="País" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Código postal" name="cp" />
            <input type="text" placeholder="Teléfono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((item) => (
          <div className="Information-item" key={item.id}>
            <div className="Information-element">
              <h4>{item.title}</h4>
              {item.quantity > 1 ? (
                <span>
                  {item.quantity} X ${item.price}
                </span>
              ) : (
                <span>${item.price}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Information;
