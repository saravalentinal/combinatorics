import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './i18n';


let language = navigator.language || navigator.userLanguage;

let loadingText = '';

if(language === "de-DE"){
  loadingText = 'Rechner vorbereiten...'
} else if(language === 'en-US'){
  loadingText= 'Preparing calculators...'
} else if(language === 'es'){
  loadingText = 'Preparando calculadoras...'
} else{
  loadingText = 'Preparing calculators...'
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
