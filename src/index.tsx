import React, { Dispatch } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, Action, Middleware } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import App from './app/components/app/App';
import rootEpic from './app/store/root.epic';
import { rootReducer } from './app/store/root.reducer';
import './index.scss';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById('root');

const logger = createLogger({
  level: 'info',
  collapsed: true
});

const actionClasses: Middleware = () => (next: Dispatch<Action>) => (action: Action) => {
  return next({ ...action });
};

const epicMiddleware = createEpicMiddleware();

export default function configureStore() {
  const store = createStore(rootReducer, applyMiddleware(actionClasses, epicMiddleware, logger));
  epicMiddleware.run(rootEpic);
  return store;
}

ReactDOM.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
