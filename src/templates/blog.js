import React from 'react';
import { arrayOf, number, shape, string } from 'prop-types';

import '../design-system/setup';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import PostHero from '../components/PostHero';
import Posts from '../components/Posts';

const Blog = ({ location, pageContext }) => {
	const {
		group,
		pathPrefix,
		first,
		last,
		index,
		pageCount,
	} = pageContext;

	let postHero = null;
	let posts = group;

	if (first) {
		postHero = group[0];
		posts = group.slice(1);
	}

	return (
		<Layout location={location}>
			<SEO title="Games" />

			{first && (
				<PostHero
					post={postHero.node}
				/>
			)}

			{posts && posts.length > 0 && (
				<Posts
					pathPrefix={pathPrefix}
					posts={posts}
					first={first}
					last={last}
					index={index}
					pageCount={pageCount}
				/>
			)}
		</Layout>
	);
};

Blog.propTypes = {
	location: shape({}),
	pageContext: shape({
		group: arrayOf(shape({
			node: shape({}),
		})),
		pathPrefix: string,
		first: number,
		last: number,
		index: number,
		pageCount: number,
	}),
};

export default Blog;