import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Routing from './Routing'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
