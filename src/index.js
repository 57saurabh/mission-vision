import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"; 


ReactDOM.render(
  
    <ChakraProvider>
      <App />
    </ChakraProvider>,
  document.getElementById('root')
);


