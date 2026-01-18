import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ReactGA from "react-ga4";

ReactGA.initialize("G-NJW8DHH9XN");


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);