import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import MainContext from './CartContext/MainContext';
import './index.css';
import Cart from './Pages/Cart';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let router = createBrowserRouter([
  //Home Page
  {
    path: '/', //http://localhost:3000/
    element: <App />
  },
  {
    path: '/cart',  //  ttp://localhost:3000/cart
    element: <Cart />
  }

])

root.render(
  <React.StrictMode>
    <MainContext>
      <RouterProvider router={router} />
    </MainContext>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
