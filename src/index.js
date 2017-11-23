import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Routing from './Routing'
import registerServiceWorker from './registerServiceWorker';
import WebFontLoader from 'webfontloader';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import { render } from 'react-dom'
import reducer from './Reducers/'

const store=createStore(reducer);

WebFontLoader.load({
  google: {
    families: ['Roboto:300,400,500,700', 'Material Icons'],
  },
});

render(<Provider store={store}>
  <App/>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
