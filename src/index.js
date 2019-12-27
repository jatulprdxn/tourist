import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Router/route'
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducer';
import thunk from 'redux-thunk';
const store = createStore(reducer,applyMiddleware(thunk));
ReactDOM.render(<Provider store={store}><Routes /></Provider>, document.getElementById('root'));


