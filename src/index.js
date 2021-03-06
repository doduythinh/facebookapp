import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import thunk from 'redux-thunk';
import { BrowserRouter } from "react-router-dom";

import {Provider} from 'react-redux';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import  { watchAuthLogin,watchNewsites } from './store/saga/index';
import AuthReducers from './store/reducers/AuthLogin';
import NewSitesReducers from './store/reducers/NewSites';

const composeEnhancers = (process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null) || compose;

const rootReducer = combineReducers({
    auth:AuthReducers,
    newSites: NewSitesReducers,
})
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
));


sagaMiddleware.run(watchAuthLogin);
sagaMiddleware.run(watchNewsites);

const app = (
    <Provider store={store}>
    <BrowserRouter>
            <App />
    </BrowserRouter>
    </Provider>
);

ReactDOM.render(app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
