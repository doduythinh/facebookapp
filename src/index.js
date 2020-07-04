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
import  { watchAuthLogin } from './store/saga/index';
import AuthLogin from './store/reducers/AuthLogin';

const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: null || compose;

const rootReducers = combineReducers({
    auth:AuthLogin,
})
const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducers, composeEnhancers(
    applyMiddleware(sagaMiddleware)
));
const app = (
    <Provider store={store}>
    <BrowserRouter>
            <App />
    </BrowserRouter>
    </Provider>
);
sagaMiddleware.run(watchAuthLogin);

ReactDOM.render(app,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
