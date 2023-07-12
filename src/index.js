import React from 'react';
import ReactDom from 'react-dom';

import App from './components/App';

import GlobalStyles from './styles/global';


ReactDom.render(
    <>
        <GlobalStyles/>
        <App />
    </>,
    document.getElementById('root'),
)