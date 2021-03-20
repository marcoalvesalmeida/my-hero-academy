import React from 'react';

import Logo from '../Logo';

import { Container } from './styles';

import Menu from '../Menu';

function Header() {
	return (
		<Container>
			<Menu />

			<Logo width="135px" />
		</Container>
	);
}

export default Header;
