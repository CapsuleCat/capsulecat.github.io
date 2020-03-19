import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
import { getTwitterLink, getGooglePlayLink } from '../../utils/social';

const SiteFooter = () => {
	const data = useStaticQuery(graphql`
		query HeaderQuery {
			site {
				siteMetadata {
					social {
						twitter
						googlePlay
					}
				}
			}
		}
	`);

	const { twitter, googlePlay } = data.site.siteMetadata.social;

	return (
		<footer className="py-4 pt-md-5 border-top bg-dark text-light">
			<Container>
				<Row>
					<Col sm="5">
						<img className="mb-4 mr-4 float-left" src="/logo--high-detail.svg" alt="" width="60" height="60" />

						<small className="d-block mb-3 text-muted">
							<FormattedMessage
								id="site.title"
								description="Site title"
							/>
							{' '}
							©
							{' '}
							{new Date().getFullYear()}
						</small>

						<small className="d-block mb-3 text-muted">
							<FormattedMessage
								id="site.section.footer.additionalCopyRights"
								description="Additional copyrights"
							/>
						</small>
					</Col>
					<Col>
						<h5 className="text-muted">
							<FormattedMessage
								id="site.section.footer.site"
								description="Footer Site section"
							/>
						</h5>
						<ul className="list-unstyled text-small">
							<li>
								<Link to="/games">
									<FormattedMessage
										id="site.section.footer.site.games"
										description="Footer games title"
									/>
								</Link>
							</li>
							<li>
								<Link to="/blog">
									<FormattedMessage
										id="site.section.footer.site.blog"
										description="Footer blog title"
									/>
								</Link>
							</li>
							<li>
								<Link to="/about">
									<FormattedMessage
										id="site.section.footer.site.aboutUs"
										description="Footer About Us title"
									/>
								</Link>
							</li>
						</ul>
					</Col>
					<Col>
						<h5 className="text-muted">
							<FormattedMessage
								id="site.section.footer.legal"
								description="Footer Legal title"
							/>
						</h5>
						<ul className="list-unstyled text-small">
							<li>
								<Link to="/privacy/site">
									<FormattedMessage
										id="site.section.footer.legal.sitePrivacyPolicy"
										description="Footer Site Privacy Policy title"
									/>
								</Link>
							</li>
							<li>
								<Link to="/privacy/games">
									<FormattedMessage
										id="site.section.footer.legal.gamePrivacyPolicy"
										description="Footer Game Privacy Policy title"
									/>
								</Link>
							</li>
							<li>
								<Link to="/privacy/personal">
									<FormattedMessage
										id="site.section.footer.legal.submitRequest"
										description="Footer Submit Request title"
									/>
								</Link>
							</li>
							<li>
								<Link to="/terms">
									<FormattedMessage
										id="site.section.footer.legal.termsAndConditions"
										description="Footer Terms and Conditions title"
									/>
								</Link>
							</li>
						</ul>
					</Col>
					<Col>
						<h5 className="text-muted">
							<FormattedMessage
								id="site.social"
								description="Social title"
							/>
						</h5>
						<ul className="list-unstyled text-small">
							<li>
								<a
									href={getTwitterLink(twitter)}
									target="_blank"
									rel="noreferrer noopener"
								>
									<FormattedMessage
										id="site.social.twitter"
										description="Social Twitter title"
									/>
								</a>

							</li>
							<li>
								<a
									href={getGooglePlayLink(googlePlay)}
									target="_blank"
									rel="noreferrer noopener"
									title="Google Play"
								>
									<FormattedMessage
										id="site.social.googlePlay"
										description="Social Google Play title"
									/>
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</footer>
	);
};

export default SiteFooter;