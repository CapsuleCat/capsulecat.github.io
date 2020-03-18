import React, { Fragment } from "react";

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

export default Layout;
