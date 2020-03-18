import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { FormattedMessage } from 'react-intl';

const SiteFooter = () => {
	return (
		<footer className="pt-4 pt-md-5 border-top bg-dark text-light">
			<Container>
				<Row>
Google Play and the Google Play logo are trademarks of Google LLC.

					<div className="col-12 col-md">
						<img className="mb-2" src="../../assets/brand/bootstrap-solid.svg" alt="" width="24" height="24" />
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
					</div>
					<div className="col-6 col-md">
						<h5>Features</h5>
						<ul className="list-unstyled text-small">
							<li><a className="text-muted" href="#">Cool stuff</a></li>
							<li><a className="text-muted" href="#">Random feature</a></li>
							<li><a className="text-muted" href="#">Team feature</a></li>
							<li><a className="text-muted" href="#">Stuff for developers</a></li>
							<li><a className="text-muted" href="#">Another one</a></li>
							<li><a className="text-muted" href="#">Last time</a></li>
						</ul>
					</div>
					<div className="col-6 col-md">
						<h5>Resources</h5>
						<ul className="list-unstyled text-small">
							<li><a className="text-muted" href="#">Resource</a></li>
							<li><a className="text-muted" href="#">Resource name</a></li>
							<li><a className="text-muted" href="#">Another resource</a></li>
							<li><a className="text-muted" href="#">Final resource</a></li>
						</ul>
					</div>
					<div className="col-6 col-md">
						<h5>About</h5>
						<ul className="list-unstyled text-small">
							<li><a className="text-muted" href="#">Team</a></li>
							<li><a className="text-muted" href="#">Locations</a></li>
							<li><a className="text-muted" href="#">Privacy</a></li>
							<li><a className="text-muted" href="#">Terms</a></li>
						</ul>
					</div>
				</Row>
			</Container>
		</footer>
	);
};

export default SiteFooter;