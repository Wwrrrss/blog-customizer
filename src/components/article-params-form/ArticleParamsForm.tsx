import { ArrowButton } from 'src/ui/arrow-button';
import { Button } from 'src/ui/button';
import { useState } from 'react';
import styles from './ArticleParamsForm.module.scss';
import styless from 'src/ui/radio-group/RadioGroup.module.scss';
import { Option } from 'src/ui/radio-group/Option';
import { Separator } from 'src/ui/separator';
import { Select } from 'src/ui/select';
import {
	fontFamilyOptions,
	fontColors,
	backgroundColors,
	contentWidthArr,
	fontSizeOptions,
	defaultArticleState,
	TOptionsState,
} from 'src/constants/articleProps';
import { Text } from 'src/ui/text';
import clsx from 'clsx';

export type ArticleFormProps = {
	apply: (draftOptions: TOptionsState) => void;
};

export const ArticleParamsForm = (props: ArticleFormProps) => {
	const { apply } = props;

	const [isOpen, setIsOpen] = useState(false);
	const [draftOptions, setDraftOptions] =
		useState<TOptionsState>(defaultArticleState);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		apply(draftOptions);
		setIsOpen(false);
	};
	const handleReset = () => {
		setDraftOptions(defaultArticleState);
		apply(defaultArticleState);
		setIsOpen(false);
	};
	return (
		<>
			<ArrowButton
				isOpen={isOpen}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			/>
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isOpen,
				})}>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					onReset={handleReset}>
					<Text weight={800} size={31} uppercase>
						задайте параметры
					</Text>
					<Select
						selected={draftOptions.fontFamilyOption}
						options={fontFamilyOptions}
						title='шрифт'
						onChange={(o) => {
							setDraftOptions({ ...draftOptions, fontFamilyOption: o });
						}}
					/>
					<div>
						<Text weight={800} size={12} uppercase>
							размер шрифта
						</Text>
						<div className={styless.group}>
							{fontSizeOptions.map((e) => {
								return (
									<Option
										key={`font-option-${e.value}`}
										title={e.title}
										value={e.value}
										selected={draftOptions.fontSizeOption}
										groupName='размер шрифта'
										option={e}
										onChange={(o) => {
											setDraftOptions({ ...draftOptions, fontSizeOption: o });
										}}
									/>
								);
							})}
						</div>
					</div>
					<Select
						selected={draftOptions.fontColor}
						options={fontColors}
						title='цвет шрифта'
						onChange={(o) => {
							setDraftOptions({ ...draftOptions, fontColor: o });
						}}
					/>

					<Separator />

					<Select
						selected={draftOptions.backgroundColor}
						options={backgroundColors}
						title='цвет фона'
						onChange={(o) => {
							setDraftOptions({ ...draftOptions, backgroundColor: o });
						}}
					/>
					<Select
						selected={draftOptions.contentWidth}
						options={contentWidthArr}
						title='ширина контента'
						onChange={(o) => {
							setDraftOptions({ ...draftOptions, contentWidth: o });
						}}
					/>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
