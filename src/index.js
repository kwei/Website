import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './view/App';
import Myterminal from './view/consoleTerminal';
import registerServiceWorker from './controller/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Myterminal />, document.getElementById('root'));
registerServiceWorker();
