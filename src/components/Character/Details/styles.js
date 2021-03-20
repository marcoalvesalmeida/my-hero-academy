import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: 4px;

	p {
		font-size: ${({ theme }) => theme.fonts.sizes.primary};
		line-height: ${({ theme }) => theme.fonts.heights.primary};
	}

	p:nth-child(1) {
		color: ${({ theme }) => theme.colors.tertiary};
		font-weight: ${({ theme }) => theme.fonts.weights.normal};
	}

	p:nth-child(2) {
		color: ${({ theme }) => theme.colors.secondary};
		font-weight: ${({ theme }) => theme.fonts.weights.secondary};
		text-align: end;
	}

	@media (max-width: ${({ theme }) => theme.breakpoints.xxs}px) {
		p {
			font-size: 14px;
		}
	}
`;
