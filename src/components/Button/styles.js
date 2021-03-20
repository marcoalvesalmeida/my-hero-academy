import styled from 'styled-components';
import { darken } from 'polished';

const Container = styled.button`
	margin: 5px 0 0;
	height: 44px;
	background: #3b93ff;
	font-weight: bold;
	color: #fff;
	border: 0;
	border-radius: 4px;
	font-size: 16px;
	transition: background 0.2s;
	cursor: pointer;

	&:hover {
		background: ${darken(0.03, '#3b93ff')};
	}
`;

export default Container;
