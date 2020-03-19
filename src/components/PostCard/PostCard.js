import React from 'react';
import { any, string, shape } from 'prop-types';
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

PostCard.propTypes = {
	post: shape({
		node: shape({
			excerpt: string,
			fields: shape({
				slug: string,
			}),
			frontmatter: shape({
				title: string,
				description: string,
				image: shape({
					childImageSharp: shape({
						fluid: any,
					}),
				}),
			}),
		}),
	}),
};

export default PostCard;