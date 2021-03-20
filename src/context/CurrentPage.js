import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';

const CurrentPageContext = createContext();

export default function CurrentPageProvider({ children }) {
	const [currentPage, setCurrentPage] = useState(1);
	return (
		<CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
			{children}
		</CurrentPageContext.Provider>
	);
}

CurrentPageProvider.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export function useCurrentPage() {
	const { currentPage, setCurrentPage } = useContext(CurrentPageContext);
	return { currentPage, setCurrentPage };
}
