import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './i18n';

let language = navigator.language || navigator.userLanguage;

let loadingText = '';

switch(language) {
  case 'de':
  case 'de-DE':
  case 'de-AT':
  case 'de-CH':
  case 'de-LI':
     loadingText = 'Rechner vorbereiten...'
     break;
  case 'es-AR':
  case 'es':
     loadingText = 'Preparando calculadoras...'
     break;
  default:
     loadingText = 'Preparing calculators...'
     break;
  }

 const loadingMarkUp = 

(  
<body className="body-loader">
    <div className="div-loader">
      <div className="loader"></div>
      <h1 className='loader-h1'>{loadingText}</h1>
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
