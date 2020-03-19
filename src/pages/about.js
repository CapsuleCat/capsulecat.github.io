import React from 'react';
import { string, shape } from 'prop-types';
import { graphql } from 'gatsby';
import cz from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faTwitter,
	faGooglePlay,
} from '@fortawesome/free-brands-svg-icons';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../design-system/setup';
import { FormattedMessage } from 'react-intl';
import SEO from '../components/SEO';
import Layout from '../components/Layout';

import logo from '../../static/logo--high-detail.svg';
import { getTwitterLink, getGooglePlayLink } from '../utils/social';

const About = (props) => {
	const { location, data } = props;
	const { twitter, googlePlay } = data.site.siteMetadata.social;

	return (
		<Layout location={location}>
			<SEO title="Home" />

			<Jumbotron className="bg-primary text-light">
				<Container>
					<Row>
						<Col>
							<img
								className="mr-4 mb-4 img img-fluid"
								src={logo}
								alt="The Capsule Cat"
							/>
						</Col>
						<Col sm="9">
							<h1>
								<FormattedMessage
									id="site.page.about.title"
									description="About Title"
								/>
							</h1>

							<p className="lead">
								<FormattedMessage
									id="site.page.about.lead"
									description="About Lead"
								/>
							</p>
						</Col>
					</Row>
				</Container>
			</Jumbotron>

			<Container className="mb-5">
				<Row>
					<Col className="text-center">
						<h2>
							<FormattedMessage
								id="site.social"
								description="Social Title"
							/>
						</h2>

						<section>
							<div className="mt-3">
								<a
									className={cz('btn', 'btn-primary')}
									href={getTwitterLink(twitter)}
									target="_blank"
									rel="noreferrer noopener"
									title="Follow Us On Twitter"
								>
									<FontAwesomeIcon icon={faTwitter} />
									{' '}
									<FormattedMessage
										id="site.social.twitterFollow"
										description="Follow Us on Twitter"
									/>
								</a>

							</div>
							<div className="mt-3">
								<a
									className={cz('btn', 'btn-dark')}
									href={getGooglePlayLink(googlePlay)}
									target="_blank"
									rel="noreferrer noopener"
									title="Google Play"
								>
									<FontAwesomeIcon icon={faGooglePlay} />
									{' '}
									<FormattedMessage
										id="site.social.googlePlay"
										description="Google Play"
									/>
								</a>
							</div>
						</section>
					</Col>
				</Row>
			</Container>
		</Layout>
	);
};

About.propTypes = {
	data: shape({
		twitter: string,
		googlePlay: string,
	}),
	location: shape({}),
};

export default About;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        social {
            twitter
            googlePlay
        }
      }
    }
  }
`;
