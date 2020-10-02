import React from 'react';
import { render } from 'react-dom'
import Root from './components/Root';

const store = createStore(todoApp)

render(<Root store={store} />, document.getElementById("root"));