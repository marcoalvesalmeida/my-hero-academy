import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import '../node_modules/react-toastify/dist/ReactToastify.css';

import CurrentPageProvider from './context/CurrentPage';
import history from './services/Navigate/history';
import Routes from './routes';
import GlobalStyle from './styles/global';
import theme from './styles/theme';

function App() {
	return (
		<CurrentPageProvider>
			<ThemeProvider theme={theme}>
				<Router history={history}>
					<Routes />
				</Router>
				<GlobalStyle />
				<ToastContainer />
			</ThemeProvider>
		</CurrentPageProvider>
	);
}

export default App;
