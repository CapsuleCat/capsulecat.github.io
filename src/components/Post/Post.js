import React from 'react';
import { MDXRenderer } from "gatsby-plugin-mdx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { rhythm } from "../../utils/typography";
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
							Posted: {post.frontmatter.date}
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

export default Post;