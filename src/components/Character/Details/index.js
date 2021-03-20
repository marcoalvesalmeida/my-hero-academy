import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Details({ title, description, limit }) {
	const abbreviated =
		description && description.length > limit
			? `${description.substr(0, limit)}...`
			: description;

	return (
		<Container>
			<p>{title}</p>
			<p title={description}>{abbreviated}</p>
		</Container>
	);
}

Details.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	limit: PropTypes.number.isRequired,
};

export default Details;
