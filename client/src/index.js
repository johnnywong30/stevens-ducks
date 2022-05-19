import React from 'react';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import { createRoot } from 'react-dom/client';


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
