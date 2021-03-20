import React from 'react';
import { PropTypes } from 'prop-types';

import Container from './styles';

function Button({ children, type, ...props }) {
	return (
		<Container type={type} {...props}>
			{children}
		</Container>
	);
}

Button.defaultProps = {
	type: 'submit',
};

Button.propTypes = {
	children: PropTypes.string.isRequired,
	type: PropTypes.string,
};

export default Button;
