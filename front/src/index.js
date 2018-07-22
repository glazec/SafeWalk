import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router} from "react-router-dom";

ReactDOM.render(
    <div>
    <Router>
    <App />
    </Router>
    </div>,
    document.getElementById('root')
);

registerServiceWorker();
