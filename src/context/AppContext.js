import React, { createContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useInitialState from '../hooks/useInitialState';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const initialState = useInitialState();
  const isEmpty = Object.keys(initialState).length;

  return (
    <>
      {isEmpty > 0 ? (
        <AppContext.Provider value={initialState}>
          {children}
        </AppContext.Provider>
      ) : (
        <FontAwesomeIcon icon="circle-notch" spin size="lg" />
      )}
    </>
  );
};

export default AppProvider;
