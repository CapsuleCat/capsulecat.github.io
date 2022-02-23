import React from 'react';
import { shape, string } from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Hero from '../../design-system/Hero';

const Announcement = ({ announcement }) => {
	const { body, frontmatter } = announcement.node;
	const { image, color, backgroundColor } = frontmatter;

	const contentProps = {};

	console.log(frontmatter);

	if (color) {
		contentProps.style = {
			color,
		};
	}

	return (
		<Hero
			image={image}
			backgroundColor={backgroundColor}
			color={color}
			position="right"
			center
			height="60vh"
		>
			<MDXRenderer>{body}</MDXRenderer>
		</Hero>
	);
};

Announcement.propTypes = {
	announcement: shape({
		node: shape({
			frontmatter: shape({
				image: shape({}),
				color: shape({}),
				backgroundColor: shape({}),
			}),
			body: string,
			excerpt: string,
		}),
	}),
};

export default Announcement;