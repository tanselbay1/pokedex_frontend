import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layouts/layout';
import Pokemon from './routes/pokemon-list';
import Home from './routes/home';
import './index.css';
import { PokemonContextProvider } from './context/pokemonContext';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/pokemon-list',
                element: <Pokemon />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <PokemonContextProvider>
            <RouterProvider router={router} />
        </PokemonContextProvider>
    </React.StrictMode>,
);
