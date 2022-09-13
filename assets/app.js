// ./src/js/app.js
    
import React from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './styles/app.css';
import Home from './js/Home';
    
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Router><Home /></Router>);
//ReactDOM.render(<Router><Home /></Router>, document.getElementById('root'));
