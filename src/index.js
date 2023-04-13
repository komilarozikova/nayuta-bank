import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { UserContextProvider } from './context/home-context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <UserContextProvider>
            <App />
        </UserContextProvider>
    </HashRouter>
);
