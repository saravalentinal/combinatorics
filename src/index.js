import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';

import './i18n';

const loadingMarkUp = 

( <body class="body-loader">
<div class="div-loader">
    <div class="loader"></div>
    <h1>Preparando calculadoras...</h1>
  </div>
</body> )

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
