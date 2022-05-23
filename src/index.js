//1.  Import Area

// import something from somelibrary;
// import something from somelibrary;
import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';

// import something from somelibrary;
import App from './App';

//2. We have to import
import mycomp from './mycomp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  mycomp
);