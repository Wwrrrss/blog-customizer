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
	OptionType,
	fontColors,
	backgroundColors,
	contentWidthArr,
	fontSizeOptions,
	defaultArticleState,
} from 'src/constants/articleProps';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [fontOption, setFontOption] = useState<OptionType>(
		defaultArticleState.fontFamilyOption
	);
	const [fontColorOption, setFontColorOption] = useState<OptionType>(
		defaultArticleState.fontColor
	);
	const [colorOption, setColorOption] = useState<OptionType>(
		defaultArticleState.backgroundColor
	);
	const [widthOption, setWidthOption] = useState<OptionType>(
		defaultArticleState.contentWidth
	);
	const [buttonOption, setButtonOption] = useState<OptionType>(
		defaultArticleState.fontSizeOption
	);
	return (
		<>
			<ArrowButton
				isOpen={isOpen}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			/>
			<aside
				className={
					isOpen
						? `${styles.container} ${styles.container_open}`
						: styles.container
				}>
				<form className={styles.form}>
					<Select
						selected={fontOption}
						options={fontFamilyOptions}
						title='шрифт'
						onChange={(o) => {
							setFontOption(o);
						}}
					/>
					<div className={styless.group} title='размер шрифта'>
						{fontSizeOptions.map((e) => {
							return (
								<Option
									key={`font-option-${e.value}`}
									title={e.title}
									value={e.value}
									selected={buttonOption}
									groupName='размер шрифта'
									option={e}
									onChange={(o) => {
										setButtonOption(o);
									}}
								/>
							);
						})}
					</div>
					<Select
						selected={fontColorOption}
						options={fontColors}
						title='цвет шрифта'
						onChange={(o) => {
							setFontColorOption(o);
						}}
					/>

					<Separator />

					<Select
						selected={colorOption}
						options={backgroundColors}
						title='цвет фона'
						onChange={(o) => {
							setColorOption(o);
						}}
					/>
					<Select
						selected={widthOption}
						options={contentWidthArr}
						title='ширина контента'
						onChange={(o) => {
							setWidthOption(o);
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
