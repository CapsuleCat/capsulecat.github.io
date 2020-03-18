import React from 'react';
import { Link } from 'gatsby';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import BackgroundImage from 'gatsby-background-image';
import { FormattedMessage } from 'react-intl';
import cz from 'classnames';

import HeroContent from './HeroContent';
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
				{image && <Col className={styles.fullHeight} />}
				<Col className={styles.fullHeight}>
					<HeroContent {...contentProps} className={cz({
						'text-center': !image,
					})}>
						<h2>{title}</h2>
						<p>{description || excerpt}</p>

						<Button variant="dark" as={Link} to={slug} className={cz({
							"mr-auto": image,
							"mx-auto": !image,
						})}>
							<FormattedMessage
								id="site.readmore"
								description="Read More"
							/>
						</Button>
					</HeroContent>
				</Col>
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

export default PostHero;