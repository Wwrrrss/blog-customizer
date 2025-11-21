import { CSSProperties, useState } from 'react';
import { defaultArticleState, TOptionsState } from './constants/articleProps';
import { ArticleParamsForm } from './components/article-params-form';
import { Article } from './components/article';

import './styles/index.scss';
import styles from './styles/index.module.scss';

export const App = () => {
	const [currentOptions, setCurrentOptions] =
		useState<TOptionsState>(defaultArticleState);
	const applyStyles = (draftOptions: TOptionsState) => {
		setCurrentOptions(draftOptions);
	};

	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family': currentOptions.fontFamilyOption.value,
					'--font-size': currentOptions.fontSizeOption.value,
					'--font-color': currentOptions.fontColor.value,
					'--container-width': currentOptions.contentWidth.value,
					'--bg-color': currentOptions.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm apply={applyStyles} />
			<Article />
		</main>
	);
};
