import React from 'react';
import Img from 'gatsby-image';
import { FormattedMessage } from 'react-intl';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import CalloutCard from '../../design-system/CalloutCard';
import Box from '../../design-system/Box';
import { FlexGrid, GridItem } from '../../design-system/Grid';

const Featured = (props) => {
	const { featured, titleId = "site.section.featured.title" } = props;

	return (
		<Container className="my-5">
			<Row>
				<Box className="text-center">
					<h2>
						<FormattedMessage
							id={titleId}
							description="Featured title"
						/>
					</h2>
				</Box>
			</Row>
			<Row>
				<Col>
					<FlexGrid maxColumns={3}>
						{featured.map((game, i) => {
							const { slug } = game.node.fields;
							const { title, description, image } = game.node.frontmatter;
							return (
								<GridItem key={i}>
									<CalloutCard to={slug}>
										<Img fluid={image.childImageSharp.fluid} />
										<Card.Body>
											<Card.Title>{title}</Card.Title>
											<Card.Text>
												{description}
											</Card.Text>
										</Card.Body>
									</CalloutCard>
								</GridItem>
							);
						})}
					</FlexGrid>
				</Col>
			</Row>
		</Container>
	);
};

export default Featured;