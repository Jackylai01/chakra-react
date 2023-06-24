import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 全域預設顏色
const colors = {
  brand: {
    900: '#5d1a1a',
    800: '#153e75',
    700: '#2a69ac',
    600: '#2a69ac',
    500: '#2a69ac',
    400: '#2a69ac',
  },
};

// 全域預設字體
const fonts = {
  body: 'system-ui, sans-serif',
  heading: 'Georgia, serif',
};

const theme = extendTheme({ colors, fonts });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
