import React from 'react';
import { render } from 'react-dom'
import Root from './components/Root';
import { applyMiddleware, createStore } from 'redux'

const store = createStore(() => [], {}, applyMiddleware());

render(<Root store={store} />, document.getElementById("root"));