import React, { useState, useEffect } from 'react';
import { oneOfType, func, node } from 'prop-types';
import { IntlProvider } from 'react-intl';

import useLocale from '../../design-system/hooks/useLocale';

const Internationalization = (props) => {
	const { children } = props;
	const [messages, setMessages] = useState(null);
	const locale = useLocale();

	async function loadLang(lang) {
		// todo load from cache
		try {
			const responses = await Promise.all([
				fetch('./lang/en.json').then((res) => res.json()),
				lang !== 'en' ? fetch(`./lang/${lang}.json`).then((res) => res.json()) : {},
			]);

			const [en, result] = responses;
            
			setMessages({
				...en,
				...result,
			});
		} catch (e) {
			const en = await import('../../lang/en.json');

			setMessages(en);
		}
	}

	useEffect(() => {
		loadLang(locale);
	}, [locale]);
	
	if (!messages) {
		return null;
	}

	return (
		<IntlProvider
			key={locale}
			locale={locale}
			messages={messages}
			defaultLocale="en"
		>
			{children}
		</IntlProvider>
	);
};

Internationalization.propTypes = {
	children: oneOfType([func, node]),
};

export default Internationalization;