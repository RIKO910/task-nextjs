// app/component/ClientProvider/ClientProvider.tsx
'use client';

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/app/store/store';
import Nav from '@/app/component/Nav/Nav';

const ClientProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Provider store={store}>
      <Nav />
      {children}
    </Provider>
  );
};

export default ClientProvider;
