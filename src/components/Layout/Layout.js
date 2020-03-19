import React, { Fragment } from 'react';
import { any, func, node, oneOfType, string } from 'prop-types';

import Internationalization from '../Internationalization';
import SiteHeader from '../SiteHeader/SiteHeader';
import SiteFooter from '../SiteFooter/SiteFooter';

import MDXProviderWrapper from './MDXProviderWrapper';

const Layout = ({ location, title, children }) => {
	return (
		<Internationalization>
			<MDXProviderWrapper>
				<Fragment>
					<SiteHeader
						location={location}
						title={title}
					/>
					<main>
						{children}
					</main>
					<SiteFooter />
				</Fragment>
			</MDXProviderWrapper>
		</Internationalization>
	);
};

Layout.propTypes = {
	children: oneOfType([func, node]),
	location: any,
	title: string,
};

export default Layout;
