import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.tsx';
import { Theme } from './styles/Theme.tsx';
import { GlobalStyle } from './styles/global.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Theme>
			<GlobalStyle />
			<RouterProvider router={router} />
		</Theme>
	</React.StrictMode>,
);
