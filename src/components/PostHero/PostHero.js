import React from 'react';
import { any, shape, string } from 'prop-types';
import { Link } from 'gatsby';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import BackgroundImage from 'gatsby-background-image';
import { FormattedMessage } from 'react-intl';
import cz from 'classnames';

import Box from '../../design-system/Box';
import styles from './PostHero.module.scss';

const PostHero = (props) => {
	const { post } = props;
	const { excerpt, frontmatter } = post;
	const { title, description, image, color, backgroundColor } = frontmatter;
	const { slug } = post.fields;

	const contentProps = {};

	if (color) {
		contentProps.style = {
			color,
		};
	}

	const content = (
		<Container className={styles.fullHeight}>
			<Row style={{ width: '100%' }}>
				{image && <Col xs={0} sm={3} className={styles.fullHeight} />}
				<Col className={styles.fullHeight}>
					<Box
						verticalCenter
						{...contentProps}
						className={cz({
							'text-center': !image,
						})}
					>
						<h2>{title}</h2>
						<p className="lead">{description || excerpt}</p>

						<Button variant="dark" as={Link} to={slug} className={cz({
							'mr-auto': image,
							'mx-auto': !image,
						})}>
							<FormattedMessage
								id="site.readmore"
								description="Read More"
							/>
						</Button>
					</Box>
				</Col>
				{image && <Col xs={0} sm={3} className={styles.fullHeight} />}
			</Row>
		</Container>
	);

	if (!image) {
		return (
			<Jumbotron
				style={{ backgroundColor }}
			>
				{content}
			</Jumbotron>
		);
	}
    
	return (
		<div className={styles.wrapper}>
			<BackgroundImage
				className={cz(styles.postHero, styles.fullHeight)}
				fluid={image.childImageSharp.fluid}
				backgroundColor={backgroundColor}
			>
				<div className={styles.backdrop} />
			</BackgroundImage>
			<div className={styles.content}>
				{content}
			</div>
		</div>
	);
};

PostHero.propTypes = {
	post: shape({
		excerpt: string,
		frontmatter: shape({
			title: string,
			description: string,
			image: shape({
				childImageSharp: shape({
					fluid: any,
				}),
			}),
			color: string,
			backgroundColor: string,
		}),
	}),	
};

export default PostHero;