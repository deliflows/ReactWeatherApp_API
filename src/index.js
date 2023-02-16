import React from 'react';
import ReactDom from 'react-dom/client';
import App from './App'

const theRootElement = document.getElementById('root');
const theRoot = ReactDom.createRoot(theRootElement);

theRoot.render(
    <App />
)