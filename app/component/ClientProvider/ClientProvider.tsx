// components/ClientProvider.js (or ClientProvider.tsx if using TypeScript)
'use client';

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import Nav from '@/app/component/Nav/Nav';
import { store } from "@/src/redux/store";

const ClientProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    useEffect(() => {
        // The token initialization logic is already handled in the store setup.
    }, []);

    return (
        <Provider store={store}>
            <>
                <Nav />
                {children}
            </>
        </Provider>
    );
};

export default ClientProvider;
