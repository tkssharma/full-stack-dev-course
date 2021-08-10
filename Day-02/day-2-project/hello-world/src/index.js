// STEP-1
import React from 'react';
import ReactDOM from 'react-dom';
// STEP-2
import Header from './Header';
import Footer from './Footer';

// STEP-3
// MOUNTING COMPONENT ON dom node
ReactDOM.render(
  <Header />,
  document.getElementById('header')
);
ReactDOM.render(
  <Footer />,
  document.getElementById('footer')
);
