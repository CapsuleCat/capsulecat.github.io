import React from 'react';
import { string, bool, number } from 'prop-types';
import { Link } from 'gatsby';
import Pagination from 'react-bootstrap/Pagination';

const PaginationRenderer = (props) => {
	const {
		pathPrefix,
		first,
		last,
		index,
		pageCount,
		range = 1,
	} = props;
    
	if (pageCount === 1) {
		return null;
	}
    
	const items = [];
        
	const isFirst = first;
	const isLast = last;

	const rangeStart = Math.max(1, index - range);
	const rangeEnd = Math.min(pageCount, index + range);

	for (let i = rangeStart; i <= rangeEnd; i++) {
		items.push(
			<Pagination.Item
				active={i === index}
				as={Link}
				href={`${pathPrefix}/${i === 1 ? '' : i}`}
				to={`${pathPrefix}/${i === 1 ? '' : i}`}
			>
				{i}
			</Pagination.Item>,
		);
	}

	return (
		<Pagination>
			{!isFirst && (
				<Pagination.First
					as={Link}
					href={`/${pathPrefix}`}
					to={`/${pathPrefix}`}
				/>
			)}
			{!isFirst && (
				<Pagination.Prev
					as={Link}
					href={`/${pathPrefix}/${index - 1}`}
					to={`/${pathPrefix}/${index - 1}`}
				/>
			)}
			{items}
			{!isLast && (
				<Pagination.Next
					as={Link}
					href={`/${pathPrefix}/${index + 1}`}
					to={`/${pathPrefix}/${index + 1}`}
				/>
			)}
			{!isLast && (
				<Pagination.Last
					as={Link}
					href={`/${pathPrefix}/${pageCount}`}
					to={`/${pathPrefix}/${pageCount}`}
				/>
			)}
		</Pagination>
	);
};

PaginationRenderer.propTypes = {
	first: bool,
	index: number,
	last: bool,
	pageCount: number,
	pathPrefix: string,
	range: number,
};

export default PaginationRenderer;