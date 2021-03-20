import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    outline-color: ${({ theme }) => theme.colors.primary};
		font-family: ${({ theme }) => theme.fonts.families.primary}, sans-serif;
  }
	html {
		scroll-behavior: smooth;
	}
	a {
		text-decoration: none;
		color: ${({ theme }) => theme.colors.light};
		font-size: 16px;
		opacity: 0.8;
		&:hover {
			opacity: 1;
		}
	}
`;
