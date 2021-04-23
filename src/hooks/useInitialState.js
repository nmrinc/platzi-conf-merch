import { useState } from 'react';

import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    const { cart } = state;
    const itemExist = cart.some((product) => product.id === payload.id);
    if (itemExist) {
      const consolidatedCart = cart.map((product) => {
        if (product.id === payload.id) {
          return { ...product, quantity: product.quantity + 1 };
        }
        return { ...product };
      });
      setState((prev) => ({
        ...prev,
        cart: [...consolidatedCart],
      }));
    } else {
      setState((prev) => ({
        ...prev,
        cart: [...prev.cart, { ...payload, quantity: 1 }],
      }));
    }
  };

  const removeFromCart = (payload) => {
    const { quantity, id } = payload;
    if (quantity > 1) {
      setState((prev) => ({
        ...prev,
        cart: prev.cart.map((product) => {
          if (product.id === id) {
            return { ...product, quantity: product.quantity - 1 };
          }
          return { ...product };
        }),
      }));
    } else {
      setState((prev) => ({
        ...prev,
        cart: prev.cart.filter((item) => item.id !== id),
      }));
    }
  };

  const addToBuyer = (payload) => {
    setState((prev) => ({
      ...prev,
      buyer: [...prev.buyer, payload],
    }));
  };

  const addNewOrder = (payload) => {
    setState((prev) => ({
      ...prev,
      orders: [...prev.orders, payload],
    }));
  };

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    state,
  };
};

export default useInitialState;
