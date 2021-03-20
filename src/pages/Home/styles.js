import styled from 'styled-components';

export const CharacterContainer = styled.section`
	padding-top: 56px;
	padding-bottom: 56px;
	height: auto;
	display: grid;
	grid-template-columns: repeat(3, 1fr);

	@media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
		grid-template-columns: repeat(1, 1fr);
	}
`;

export const LoadingContainer = styled.div`
	height: 60vh;
	display: flex;
	align-items: center;
	justify-content: center;

	p {
		font-size: ${({ theme }) => theme.fonts.sizes.primary};
		color: ${({ theme }) => theme.colors.primary};
		line-height: ${({ theme }) => theme.fonts.heights.primary};
		font-weight: ${({ theme }) => theme.fonts.weights.primary};
	}
`;
