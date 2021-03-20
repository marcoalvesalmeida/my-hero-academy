import styled from 'styled-components';

export const Container = styled.div`
	width: 434px;
	height: 135px;
	margin-left: 21px;
	margin-right: 21px;
	margin-bottom: 40px;
	border-radius: ${({ theme }) => theme.borders.primary};
	background-color: ${({ theme }) => theme.colors.light};
	display: flex;
	flex-direction: row;

	@media (max-width: ${({ theme }) => theme.breakpoints.xs}px) {
		width: 380px;
		margin-left: 0;
		margin-right: 0;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.xxs}px) {
		width: 350px;
		margin-left: 0;
		margin-right: 0;
	}

	img {
		border-radius: ${({ theme }) => theme.borders.primary} 0 0
			${({ theme }) => theme.borders.primary};
		width: 135px;
		height: 135px;
		min-width: 135px;
		min-height: 135px;
		object-fit: contain;
	}

	.box-info {
		width: 100%;
		padding: 12px;
		display: flex;
		flex-direction: column;

		h2 {
			font-size: ${({ theme }) => theme.fonts.sizes.primary};
			font-weight: ${({ theme }) => theme.fonts.weights.primary};
			line-height: ${({ theme }) => theme.fonts.heights.primary};
			color: ${({ theme }) => theme.colors.primary};
			letter-spacing: ${({ theme }) => theme.fonts.spacings.primary};
			text-transform: uppercase;
		}

		h3 {
			font-size: ${({ theme }) => theme.fonts.sizes.primary};
			font-weight: ${({ theme }) => theme.fonts.weights.normal};
			line-height: ${({ theme }) => theme.fonts.heights.primary};
			color: ${({ theme }) => theme.colors.tertiary};
		}

		.details {
			padding-top: 7px;
		}
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
