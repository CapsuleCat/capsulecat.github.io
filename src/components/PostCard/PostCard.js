import React from 'react';
import Img from 'gatsby-image';

import Card from 'react-bootstrap/Card';

import CalloutCard from '../../design-system/CalloutCard';

const PostCard = (props) => {
	const { post } = props;
	const { slug } = post.node.fields;
	const { excerpt } = post.node;
	const { title, description, image } = post.node.frontmatter;

	return (
		<CalloutCard to={slug}>
			{image && (
				<Img fluid={image.childImageSharp.fluid} />
			)}
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>
					{description || excerpt}
				</Card.Text>
			</Card.Body>
		</CalloutCard>
	);
};

export default PostCard;