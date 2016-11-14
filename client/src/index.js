import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import './components/index.css';
import routes from './routes';
import rootReducer from './reducers/';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import ReduxPromise from 'redux-promise';

const store = createStore(rootReducer, applyMiddleware(ReduxPromise));

ReactDOM.render(
    <Provider store={ store } >
        <Router history={ browserHistory } routes={ routes } />
    </Provider>, document.getElementById('root')
);
