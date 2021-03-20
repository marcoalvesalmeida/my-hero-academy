import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import CurrentPageProvider from '../context/CurrentPage';

import Menu from '../components/Menu';
import Header from '../components/Header';
import Home from '../pages/Home';
import theme from '../styles/theme';
import Pagination from '../components/Pagination';

describe('Tests Header', () => {
	test('Check Logo Correct Image', () => {
		const { getByAltText } = render(
			<ThemeProvider theme={theme}>
				<Header />
			</ThemeProvider>
		);

		const image = getByAltText('Logo');

		expect(image.src).toContain('http://localhost/logo.png');
	});
});

describe('Tests Menu', () => {
	test('Check Avatar Correct Image', () => {
		const { getByAltText } = render(
			<ThemeProvider theme={theme}>
				<Menu />
			</ThemeProvider>
		);

		const image = getByAltText('Avatar');

		expect(image.src).toContain('http://localhost/avatar.png');
	});

	test('Check Exit Button', () => {
		const { getByText } = render(
			<CurrentPageProvider>
				<ThemeProvider theme={theme}>
					<Menu />
				</ThemeProvider>
			</CurrentPageProvider>
		);
		const loading = getByText('SAIR');
		expect(loading).toBeTruthy();
	});
});

describe('Tests Home', () => {
	test('Check Loading Component', () => {
		const { getByText } = render(
			<CurrentPageProvider>
				<ThemeProvider theme={theme}>
					<Home />
				</ThemeProvider>
			</CurrentPageProvider>
		);
		const loading = getByText('Carregando...');
		expect(loading).toBeTruthy();
	});
});

describe('Tests Pagination', () => {
	test('Check Pagination Component', async () => {
		const { getByText } = await render(
			<CurrentPageProvider>
				<ThemeProvider theme={theme}>
					<Pagination total={16} />
				</ThemeProvider>
			</CurrentPageProvider>
		);

		const page1 = getByText('1');
		const page2 = getByText('2');
		const page3 = getByText('3');
		const page4 = getByText('4');

		expect(!!page1 && !!page2 && !!page3 && !!page4).toBe(true);
	});
});
