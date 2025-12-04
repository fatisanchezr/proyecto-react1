import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
// 1. Importar BrowserRouter
import { BrowserRouter } from 'react-router-dom'; 
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* 2. Envolver <App /> con <BrowserRouter> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)