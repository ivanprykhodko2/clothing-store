import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider} from './Context/User.context';
import './index.style.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CategoriesProvider} from './Context/Categories.context';
import { CartProvider } from './Context/Cart.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <UserProvider>
            <CategoriesProvider>
                <CartProvider>
                    <App />
                </CartProvider>
            </CategoriesProvider>
        </UserProvider>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
