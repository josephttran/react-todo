import React from 'react';
import ReactDOM from 'react-dom';

import { TodoContextProvider } from './context/todoContextProvider';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<TodoContextProvider><App /></TodoContextProvider>, document.getElementById('root'));
registerServiceWorker();
