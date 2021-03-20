import styled from 'styled-components';

export const Container = styled.header`
	height: 312px;
	background: ${({ theme }) => theme.colors.primary};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	margin: 0;

	button {
		font-size: 20px;
		color: ${({ theme }) => theme.colors.light};
		border: none;
		background: none;
		cursor: pointer;
	}
`;
