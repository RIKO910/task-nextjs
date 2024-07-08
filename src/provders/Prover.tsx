"use client"

import { store } from "@/redux/store";
import { Provider } from "react-redux";

const RootProder = ({children}:any) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default RootProder;