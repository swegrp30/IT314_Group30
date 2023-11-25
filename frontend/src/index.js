
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import React, { StrictMode } from 'react';
import {ChakraProvider} from '@chakra-ui/react'
import reportWebVitals from './reportWebVitals';
import {registerLicense} from '@syncfusion/ej2-base'
registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF1cWWhIfEx0QHxbf1xzZFRMZVVbRXNPMyBoS35RdURiW3pecXFcR2VVV0B/')

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
  <ChakraProvider>
    
  <App />
  </ChakraProvider>

  
</StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
