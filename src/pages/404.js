import React from 'react';
import { string, shape } from 'prop-types';
import { graphql } from 'gatsby';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../design-system/setup';
import { FormattedMessage } from 'react-intl';
import Box from '../design-system/Box';
import SEO from '../components/SEO';
import Layout from '../components/Layout';

import logo from '../../static/logo--high-detail.svg';

const NotFoundPage = ({ data, location }) => {
	const siteTitle = data.site.siteMetadata.title;

	const fullHeightStyle = {
		minHeight: '55vh',
	};

	return (
		<Layout location={location} title={siteTitle}>
			<SEO title="404: Not Found" />
      
			<Jumbotron
				className="mb-0 bg-dark text-light rounded-0"
				style={fullHeightStyle}
			>
				<Container>
					<Row>
						<Col>
							<Box verticalCenter style={fullHeightStyle}>
								<img
									className="mr-4 mb-4 img img-fluid"
									src={logo}
									alt="The Capsule Cat"
								/>
							</Box>
						</Col>
						<Col sm="9">
							<Box verticalCenter style={fullHeightStyle}>
								<h1>
									<FormattedMessage
										id="site.page.404.title"
										description="404 Title"
									/>
								</h1>

								<p className="lead">
									<FormattedMessage
										id="site.page.404.lead"
										description="404 lead"
									/>
								</p>
							</Box>
						</Col>
					</Row>
				</Container>
			</Jumbotron>
		</Layout>
	);
};

NotFoundPage.propTypes = {
	data: shape({
		site: shape({
			siteMetadata: shape({
				title: string,
			}),
		}),
	}),
	location: shape({}),
};

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
