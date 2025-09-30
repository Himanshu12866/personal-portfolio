import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AppContextProvider from './context/datacontext.jsx';
import { BrowserRouter } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";
const root = ReactDOM.createRoot(document.getElementById('root'));
AOS.init({
  duration: 1000,
  once: true,
  easing: "ease-in-out",
});
root.render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
