import React from 'react';
import { string } from 'prop-types';
import cz from 'classnames';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFileDownload,
} from '@fortawesome/free-solid-svg-icons';
import {
	faApple,
	faWindows,
} from '@fortawesome/free-brands-svg-icons';

const DownloadButton = (props) => {
	const { className, file, type } = props;
    
	let icon = null;
    
	switch (type.toLowerCase()) {
	case 'mac':
	case 'apple':
		icon = faApple;
		break;
	case 'windows':
		icon = faWindows;
		break;
	case 'download':
	default:
		icon = faFileDownload;
	}

	return (
		<a
			className={cz(className, 'btn', 'btn-dark')}
			href={file}
			target="_blank"
			rel="noreferrer noopener"
			title="Get it on Google Play"
		>
			<FontAwesomeIcon icon={icon} />
			{' '}
			<FormattedMessage
				id="site.downloadfor"
				description="Download for"
			/>
			{' '}
			{type}
		</a>
	);
};

DownloadButton.propTypes = {
	className: string,
	file: string,
	type: string,
};

export default DownloadButton;