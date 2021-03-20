import React from 'react';
import { toast } from 'react-toastify';

import { Container, Avatar } from './styles';

import AvatarImage from '../../assets/avatar.png';
import IconExit from '../../assets/icons/ic_exit.svg';

function Menu() {
	return (
		<Container>
			<Avatar src={AvatarImage} alt="Avatar" />
			<button
				onClick={() => toast.info('Você saiu da sua conta!')}
				type="button"
			>
				SAIR
				<img src={IconExit} alt="Sair" />
			</button>
		</Container>
	);
}

export default Menu;
