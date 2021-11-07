import React, { useState, createContext, useEffect } from 'react';
import { useWindowWidth, useWindowHeight } from '../hooks';

const Context = createContext();

const ContextProvider = ({ children }) => {

    const [ display, setDisplay ] = useState('mobile');

    let browserWidth = useWindowWidth();
    let browserHeight = useWindowHeight();
    
    useEffect(() => {
        if(browserWidth < 600){
            setDisplay('mobile')
        }
        else{
            setDisplay('desktop')
        }
    }, [ browserWidth ]);
    

    return (

        <Context.Provider value={{ display, browserWidth, browserHeight }}>
        	{children}
        </Context.Provider>
    )
};

export { ContextProvider, Context };


