import React from 'react';

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

export default Posts;