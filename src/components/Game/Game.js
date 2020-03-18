import React from 'react';
import { MDXRenderer } from "gatsby-plugin-mdx";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Box from '../../design-system/Box';
import { rhythm } from "../../utils/typography";
import Hero from '../../design-system/Hero';

const Game = (props) => {
	const { game } = props;
	const { image, backgroundColor, color } = game.frontmatter;

	let header = null;
    
	if (!image) {
		header = (
			<Container as="header" className="mt-3 mb-5">
				<Row>
					<Col>
						<Box verticalCenter>
							<h1
								style={{
									marginTop: rhythm(1),
									marginBottom: 0,
								}}
							>
								{game.frontmatter.title}
							</h1>
						</Box>
					</Col>
				</Row>
			</Container>
		);
	} else {
		header = (
			<Hero
				image={image}
				backgroundColor={backgroundColor}
				color={color}
				position="center"
				center
			>
				<h1>{game.frontmatter.title}</h1>
			</Hero>
		);
	}
	return (
		<article>
			{header}
			<section>
				<MDXRenderer>{game.body}</MDXRenderer>
			</section>
		</article>
	);
};

export default Game;