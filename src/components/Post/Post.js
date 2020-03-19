import React from 'react';
import { any, shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { rhythm } from '../../utils/typography';
import Hero from '../../design-system/Hero';

const Post = (props) => {
	const { post } = props;
	const { image, backgroundColor } = post.frontmatter;

	let header = image && (
		<Hero
			image={image}
			backgroundColor={backgroundColor}
		/>
	);
	return (
		<article>
			{header}
			<Container as="header" className="mt-3 mb-5">
				<Row>
					<Col>
						<h1
							style={{
								marginTop: rhythm(1),
								marginBottom: 0,
							}}
						>
							{post.frontmatter.title}
						</h1>
						<small>
							<FormattedMessage
								id="site.page.posts.posted"
								description="Posted"
							/>:
							{' '}
							{post.frontmatter.date}
						</small>
					</Col>
				</Row>
			</Container>
			<Container as="section">
				<Row>
					<Col>
						<MDXRenderer>{post.body}</MDXRenderer>
					</Col>
				</Row>
			</Container>
		</article>
	);
};

Post.propTypes = {
	post: shape({
		image: any,
		backgroundColor: string,
		frontmatter: shape({
			date: string,
			title: string,
		}),
		body: string,
	}),
};

export default Post;