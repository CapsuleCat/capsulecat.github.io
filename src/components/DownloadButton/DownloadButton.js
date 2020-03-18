import React from 'react';
import cz from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faFileDownload,
} from '@fortawesome/free-solid-svg-icons';
import {
	faApple,
	faWindows,
} from '@fortawesome/free-brands-svg-icons';

import styles from './DownloadButton.module.scss';

const DownloadButton = (props) => {
	const { file, type } = props;
    
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
			className={cz(styles.downloadButton, 'btn', 'btn-dark')}
			href={file}
			target="_blank"
			rel="noreferrer noopener"
			title="Get it on Google Play"
		>
			<FontAwesomeIcon icon={icon} />
			{' '}
            Download for {type}
		</a>
	);
};

export default DownloadButton;