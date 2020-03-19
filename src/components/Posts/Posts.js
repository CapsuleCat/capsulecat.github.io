import React from 'react';
import { array, bool, number, string } from 'prop-types';

import PaginationRenderer from '../../design-system/PaginationRenderer';
import Updates from '../Updates';

const Posts = (props) => {
	const {
		posts,
		pathPrefix,
		first,
		last,
		index,
		pageCount,
	} = props;

	return (
		<Updates
			titleId="site.page.posts.title"
			posts={posts}
			hideReadMore
		>
			<PaginationRenderer
				pathPrefix={pathPrefix}
				first={first}
				last={last}
				index={index}
				pageCount={pageCount}
			/>
		</Updates>
	);
};

Posts.propTypes = {
	first: bool,
	index: number,
	last: bool,
	pageCount: number,
	pathPrefix: string,
	posts: array,
};

export default Posts;