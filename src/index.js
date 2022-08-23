import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'

import App from './App';

import './i18n';

const loadingMarkUp = ( <div> <h2> Loading... </h2></div>)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<Suspense fallback={loadingMarkUp}>

<React.StrictMode>
    <Router>
    <App />
    </Router>
    
  </React.StrictMode>

  </Suspense>

);
