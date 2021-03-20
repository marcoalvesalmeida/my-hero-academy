import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';
import Details from './Details';

function Character({ character }) {
	let { alias } = character;
	alias = alias && alias.length > 20 ? `${alias.substr(0, 20)}...` : alias;
	return (
		<Container>
			<img
				src={
					character.images[1] ||
					character.images[0] ||
					'https://via.placeholder.com/135?text=X'
				}
				alt={character.name}
				loading="lazy"
			/>
			<div className="box-info">
				<h2>{character.name || 'Sem nome'}</h2>
				<h3 title={character.alias}>{alias || 'Desconhecido'}</h3>
				<div className="details">
					<Details
						title="Affiliation"
						description={character.affiliation || 'Não informado'}
						limit={16}
					/>
					<Details
						title="Ocupation"
						description={character.ocupation || 'Não informado'}
						limit={20}
					/>
					<Details
						title="Quirk"
						description={character.quirk || 'Não informado'}
						limit={18}
					/>
				</div>
			</div>
		</Container>
	);
}

Character.propTypes = {
	character: PropTypes.shape({
		images: PropTypes.arrayOf(PropTypes.string, PropTypes.string),
		name: PropTypes.string,
		alias: PropTypes.string,
		affiliation: PropTypes.string,
		ocupation: PropTypes.string,
		quirk: PropTypes.string,
	}).isRequired,
};

export default Character;
