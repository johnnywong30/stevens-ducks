import React from 'react';
import App from './App';
import "@fontsource/montserrat"
import "@fontsource/stardos-stencil"
import { ChakraProvider } from '@chakra-ui/react'
import { ParallaxProvider } from 'react-scroll-parallax';
import './index.css';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import customTheme from './theme'

console.log(customTheme)

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <Provider store={store}>
    <ChakraProvider theme={customTheme}>
      <ParallaxProvider>
        <App />
      </ParallaxProvider>
    </ChakraProvider>
  </Provider>
);
