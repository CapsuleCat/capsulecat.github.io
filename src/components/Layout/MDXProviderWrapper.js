import React from "react";
import { MDXProvider } from "@mdx-js/react";

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'gatsby';

import Box from '../../design-system/Box';
import { FlexGrid, GridItem } from '../../design-system/Grid';
import PlayButton from '../PlayButton';
import DownloadButton from '../DownloadButton';

const DEFAULTS = {
	inlineCode: 'code',
	wrapper: ({ children }) => React.createElement(React.Fragment, {}, children),
};

const shortcodes = {
	...DEFAULTS,
	Button,
	Link,
	Container,
	Row,
	Col,
	container: Container,
	row: Row,
	col: Col,
	PlayButton,
	DownloadButton,
	Box,
	FlexGrid,
	GridItem,
};

const MDXProviderWrapper = ({ children }) => {
	return (
		<MDXProvider components={shortcodes}>
			{children}
		</MDXProvider>
	);
};

export default MDXProviderWrapper;