import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faChevronLeft,
	faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import { useCurrentPage } from '../../context/CurrentPage';

import theme from '../../styles/theme';
import { Container } from './styles';

function Pagination({ total }) {
	const { currentPage, setCurrentPage } = useCurrentPage();
	const [lastClickPage, setLastClickPage] = useState(1);

	function changePage(page) {
		setLastClickPage(currentPage);
		setCurrentPage(page);
		window.scrollTo(0, 0);
	}

	function renderPages() {
		const elements = [];
		let initialPage = total - currentPage <= 3 ? total - 3 : currentPage;
		if (lastClickPage > currentPage) {
			initialPage = total - (total - currentPage) <= 3 ? 1 : currentPage - 3;
		}
		const firtsPages = total > 4 ? initialPage + 3 : total;
		for (let i = initialPage; i <= firtsPages; i += 1) {
			elements.push(
				<span
					className={i === currentPage ? 'active' : ''}
					onClick={() => (i === currentPage ? null : changePage(i))}
					aria-hidden="true"
					key={i}
				>
					{i}
				</span>
			);
		}
		return elements;
	}

	return (
		<Container>
			<FontAwesomeIcon
				icon={faChevronLeft}
				size="lg"
				color={
					currentPage === 1 ? theme.colors.tertiary : theme.colors.secondary
				}
				onClick={() => (currentPage === 1 ? null : changePage(currentPage - 1))}
				aria-hidden="true"
			/>
			{renderPages()}
			<FontAwesomeIcon
				icon={faChevronRight}
				size="lg"
				color={
					total === currentPage ? theme.colors.tertiary : theme.colors.secondary
				}
				onClick={() =>
					total === currentPage ? null : changePage(currentPage + 1)
				}
				aria-hidden="true"
			/>
		</Container>
	);
}

Pagination.propTypes = {
	total: PropTypes.number.isRequired,
};

export default Pagination;
