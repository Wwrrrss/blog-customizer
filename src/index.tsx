import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState, TOptionsState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [currentOptions, setCurentOptions] =
		useState<TOptionsState>(defaultArticleState);
	const applyStyles = (draftOptions: TOptionsState) => {
		setCurentOptions(draftOptions);
	};

	return (
		<main
			className={clsx(styles.main)}
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

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
