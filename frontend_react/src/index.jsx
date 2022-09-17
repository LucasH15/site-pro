import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/home';
import Articles from './pages/articles/articles';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/articles',
        element: <Articles />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
