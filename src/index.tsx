import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './views/home/Home';
import Header from './views/header/Header';
import NotFound from './views/association/notFound/NotFound';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: (
			<div className="h-100">
				<Header />
				<NotFound />
			</div>
		),
		children: [
			{
				path: '/koti',
				element: <Home />,
			},

		],
	},
]);

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find root element');
const root = ReactDOM.createRoot(rootElement);

root.render(<RouterProvider router={router} />);
