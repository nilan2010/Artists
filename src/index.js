import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import listReducer from './components/reducers/listReducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(listReducer);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

