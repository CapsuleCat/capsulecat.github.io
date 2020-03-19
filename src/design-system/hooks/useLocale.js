const useLocale = () => {
	const language = typeof window !== 'undefined' ? window.navigator.language.split(/[-_]/)[0] : 'en';

	return language;
};

export default useLocale;