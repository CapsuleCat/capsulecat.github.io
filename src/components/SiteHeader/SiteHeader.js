import React, { Fragment } from 'react';
import { shape, string } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'gatsby';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Push = () => (
	<div className="pt-5" />
);

const NAV_ITEMS = [
	{
		link: '/games',
		titleId: 'site.nav.games',
		titleDescription: 'Site Game Navigation',
	},
	{
		link: '/blog',
		titleId: 'site.nav.blog',
		titleDescription: 'Site Blog and Updates Navigation',
	},
	{
		link: '/about',
		titleId: 'site.nav.about',
		titleDescription: 'About Us Navigation',
	},
];

const SiteHeader = ({ location }) => {
	const navItems = NAV_ITEMS.map((item) => {
		return (
			<Nav.Link
				key={item.link}
				as={Link}
				to={item.link}
				active={location.pathname.startsWith(item.link)}
			>
				<FormattedMessage
					id={item.titleId}
					description={item.titleDescription}
				/>
			</Nav.Link>
		);
	});

	return (
		<Fragment>
			<Navbar bg="dark" variant="dark" fixed="top" expand="md">
				<Navbar.Brand as={Link} to="/">
					<img
						alt=""
						src="/logo--low-detail.svg"
						width="30"
						height="30"
						className="d-inline-block align-top"
					/>
					{' '}
					<FormattedMessage
						id="site.title"
						description="Site title"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="site-main-nav" />
				<Navbar.Collapse id="site-main-nav">
					<Nav className="mr-auto">
						{navItems}
					</Nav>
				</Navbar.Collapse>
			</Navbar>

			<Push />
		</Fragment>
	);
};

SiteHeader.propTypes = {
	location: shape({
		pathname: string,
	}),
};

export default SiteHeader;