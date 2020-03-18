import React from 'react';
import { Link } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PostFooter = (props) => {
	const { previous, next } = props;

	return (
		<Container as="nav" className="my-3">
			<hr />
			<Row>
				<Col>
					<ul
						style={{
							display: `flex`,
							flexWrap: `wrap`,
							justifyContent: `space-between`,
							listStyle: `none`,
							padding: 0,
						}}
					>
						<li>
							{previous && (
								<Link to={previous.fields.slug} rel="prev">
                                    ← {previous.frontmatter.title}
								</Link>
							)}
						</li>
						<li>
							{next && (
								<Link to={next.fields.slug} rel="next">
									{next.frontmatter.title} →
								</Link>
							)}
						</li>
					</ul>
				</Col>
			</Row>
		</Container>
	);
};

export default PostFooter;