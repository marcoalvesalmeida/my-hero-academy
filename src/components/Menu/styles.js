import styled from 'styled-components';

export const Container = styled.nav`
	width: 100%;
	height: 80px;
	padding-top: 22px;
	padding-left: 28px;
	padding-right: 28px;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	justify-content: space-between;

	@media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
		padding-left: 17px;
		padding-right: 17px;
	}

	button {
		font-size: ${({ theme }) => theme.fonts.sizes.primary};
		font-weight: ${({ theme }) => theme.fonts.weights.normal};
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			margin-left: 7px;
		}
	}
`;

export const Avatar = styled.img`
	height: 70px;
	width: 70px;
	border-radius: 50%;

	@media only screen and (max-width: ${(props) =>
			props.theme.breakpoints.sm}px) {
		width: 32px;
		height: 30px;
	}
`;
