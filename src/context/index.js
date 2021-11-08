import React, { createContext, useEffect, useState } from 'react';
import { useWindowWidth, useWindowHeight } from '../hooks';

const Context = createContext();

const ContextProvider = ({ children }) => {

    let browserWidth = useWindowWidth();
    let browserHeight = useWindowHeight();

    let display = {
        width: browserWidth,
        height: browserHeight
    };

    return (

        <Context.Provider value={{ display }}>
        	{children}
        </Context.Provider>
    )
};

export { ContextProvider, Context };


