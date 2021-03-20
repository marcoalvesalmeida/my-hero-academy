import React, { useEffect, useState } from 'react';

import { useCurrentPage } from '../../context/CurrentPage';

import Character from '../../components/Character';
import Pagination from '../../components/Pagination';
import { CharacterContainer, LoadingContainer } from './styles';

import { list } from '../../services/Character';

function Home() {
	const { currentPage } = useCurrentPage();
	const [listCharacters, setListCharacters] = useState([]);
	const [requestInfo, setRequestInfo] = useState({});
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getCharacters() {
			const { success, characters, info } = await list(currentPage);
			if (success) {
				setListCharacters(characters);
				setRequestInfo(info);
				setLoading(false);
			}
		}

		getCharacters();
	}, [currentPage]);

	function renderCharacter(character) {
		return <Character character={character} key={character.id} />;
	}

	return (
		<>
			{loading && (
				<LoadingContainer>
					<p>Carregando...</p>
				</LoadingContainer>
			)}
			{!loading && (
				<>
					<CharacterContainer>
						{listCharacters.length > 0 &&
							listCharacters.map((character) => renderCharacter(character))}
					</CharacterContainer>
					{requestInfo.pages > 0 && <Pagination total={requestInfo.pages} />}
				</>
			)}
		</>
	);
}

export default Home;
