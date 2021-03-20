import styled from 'styled-components';

export const Container = styled.footer`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: ${({ theme }) => theme.breakpoints.sm}px) {
		width: 60%;
	}

	span {
		margin-left: 8px;
		margin-right: 8px;
		height: 32px;
		width: 32px;
		min-height: 32px;
		min-width: 32px;
		border-radius: 50%;
		cursor: pointer;
		background-color: ${({ theme }) => theme.colors.light};
		color: ${({ theme }) => theme.colors.tertiary};
		font-size: ${({ theme }) => theme.fonts.sizes.primary};
		font-weight: ${({ theme }) => theme.fonts.weights.normal};
		line-height: ${({ theme }) => theme.fonts.heights.primary};
		letter-spacing: ${({ theme }) => theme.fonts.spacings.primary};

		display: flex;
		justify-content: center;
		align-items: center;
	}

	span.active {
		background-color: ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.light};
	}

	svg {
		cursor: pointer;
	}
`;
