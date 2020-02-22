import React from 'react';
import ReactDOM from 'react-dom';

import { TodoContextProvider } from './context/todoContextProvider';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<TodoContextProvider><App /></TodoContextProvider>, document.getElementById('root'));
registerServiceWorker();
