import React from 'react'
import './src/styles/global.css';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import { ContextProvider } from './src/context';
import Layout from './src/components/layout'

  const wrapRootElement = ({ element }) => {
    return(
          <ContextProvider>
            <Layout>
              {element}
            </Layout>
            <ToastContainer/>
          </ContextProvider>
      )
    };


  export { wrapRootElement };