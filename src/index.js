// libs
import React from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
// components
import App from './components/App';
// css
import 'bootstrap/dist/css/bootstrap.css';
require('./css/index.min.css');

ReactDOM.render(
    <HashRouter basename="/">
        <App />
    </HashRouter>,
    document.getElementById('app')
);
