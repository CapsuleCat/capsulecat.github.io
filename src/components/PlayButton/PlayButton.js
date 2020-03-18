import React from 'react';

import styles from './PlayButton.module.scss';

const PlayButton = (props) => {
	const { to } = props;

	return (
		<a
			className={styles.playButton}
			href={to}
			target="_blank"
			rel="noreferrer noopener"
			title="Get it on Google Play"
		>
			<img src="/google-play-badge.png" alt="Google Play badge" />
		</a>
	);
};

export default PlayButton;