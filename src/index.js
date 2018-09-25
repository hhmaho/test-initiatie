/*
react-redux
store beschikbaar maken (Provider)
component verbinden met die store (connect)
toegang tot de store via props:
dispatch om acties te versturen
mapStateToDispatch om data uit de state te halen
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import store from './store'

ReactDOM.render(
<Provider store = {store}><App /></Provider>, 
document.getElementById('root'));
//registerServiceWorker();
