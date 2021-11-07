import React from 'react'
import './src/styles/global.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import { ContextProvider } from './src/context';

  const wrapRootElement = ({ element }) => {
    return(
          <ContextProvider>
            {element}
            <ToastContainer/>
          </ContextProvider>
      )
    };


  export { wrapRootElement };