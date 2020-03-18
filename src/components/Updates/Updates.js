import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import PostCard from '../PostCard';
import Box from '../../design-system/Box';
import { FlexGrid, GridItem } from '../../design-system/Grid';

const Updates = (props) => {
	const {
		children,
		hideReadMore,
		posts,
		titleId = 'site.section.updates.title',
	} = props;

	return (
		<Box className="bg-light py-5">
			<Container>
				<Row>
					<Box className="text-center pb-3">
						<h2>
							<FormattedMessage
								id={titleId}
								description="Updates Title"
							/>
						</h2>
					</Box>
				</Row>
				<Row>
					<Col>
						<FlexGrid maxColumns={2}>
							{posts.map((post, i) => {
								return (
									<GridItem key={i}>
										<PostCard post={post} />
									</GridItem>
								);
							})}
						</FlexGrid>
					</Col>
				</Row>
				{!hideReadMore && (
					<Row>
						<Col className="text-center">
							<Button
								as={Link}
								className="mx-auto"
								variant="outline-dark"
								to="/blog"
							>
								<FormattedMessage
									id="site.section.updates.readmore"
									description="See All Updates"
								/>
							</Button>
						</Col>
					</Row>
				)}

				{children}
			</Container>
		</Box>
	);
};

export default Updates;