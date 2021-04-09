import { useState } from 'react';

import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    const { cart } = state;
    setState({
      ...state,
      cart: [...cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    const { cart } = state;
    setState({
      ...state,
      cart: cart.filter((item) => item.id !== payload),
    });
  };

  return {
    addToCart,
    removeFromCart,
    state,
  };
};

export default useInitialState;
