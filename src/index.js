import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './view/App';
import registerServiceWorker from './controller/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
