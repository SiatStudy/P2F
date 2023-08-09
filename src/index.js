import React from 'react';
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import App from './App';

import './index.css';
import store from "./core/storeConfig";

const Index =() => (
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);

const root = document.getElementById('root');
const rootElement = createRoot(root);
rootElement.render(<Index />);