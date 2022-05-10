import React from "react";
import { theme, ThemeColors } from "../../theme";
import styled from "styled-components";
import { breakpointNameToPx, responsiveValuesCSS } from "../../helpers/responsiveCss";
import { WithStyle } from "../../types/utils";

export type FontWeight = "normal" | "bold";
export type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5";
export type Size = "small" | "normal" | "large";

interface TextStylingProps{
	color?: ThemeColors;
	fontWeight?: FontWeight;
	size?: Size;
}

type TypographyProps = {
	text: string;
	color?: ThemeColors;
	onClick?: () => void;
}

interface ParagraphProps extends TypographyProps {
	size?: Size;
	fontWeight?: FontWeight;
}

interface SubtitleProps extends TypographyProps {
	fontWeight?: FontWeight;
}

interface HeadingProps extends TypographyProps {
	type: HeadingType;
}

const StyledParagraph = styled.div<WithStyle<TextStylingProps>>`
    font-family: ${theme.typography.paragraph.font};
    font-size: ${props => props.size ? theme.typography.paragraph.sizes[props.size] : theme.typography.paragraph.sizes.normal};
	line-height: ${theme.typography.paragraph.lineHeight};
	letter-spacing: 1.15px;
	color: ${(props)=> props.color ? theme.colors[props.color] : theme.colors.black};
	margin-bottom: 24px;
	font-weight: ${props => props.fontWeight ? theme.typography.paragraph.weights[props.fontWeight] : theme.typography.paragraph.weights.normal};
`;
export const Paragraph = ({  text, color, className, onClick, fontWeight, size }: WithStyle<ParagraphProps>) => (
	<StyledParagraph
		className={className}
		color={color}
		onClick={onClick}
		size={size}
		fontWeight={fontWeight}
	>{text}</StyledParagraph>
);

export const Heading = ({ type, text, color, className }: WithStyle<HeadingProps>) => {
	const Element = lookup[type];
	return <Element className={className} color={color}>{text}</Element>;
};

const h1FontSizes = responsiveValuesCSS("font-size", "em", breakpointNameToPx(theme.typography.heading.sizes.h1));
const h2FontSizes = responsiveValuesCSS("font-size", "em", breakpointNameToPx(theme.typography.heading.sizes.h2));
const H1 = styled.h1<WithStyle<TextStylingProps>>`
	${h1FontSizes};
	font-family: ${theme.typography.heading.font};
	margin: ${theme.typography.heading.margins};
	color: ${(props)=> props.color ? theme.colors[props.color] : theme.colors.black};
`;
const H2 = styled.h2<WithStyle<TextStylingProps>>`
	${h2FontSizes};
	font-family: ${theme.typography.heading.font};
	margin: ${theme.typography.heading.margins};
	color: ${(props)=> props.color ? theme.colors[props.color] : theme.colors.black}
`;
const H3 = styled.h3<WithStyle<TextStylingProps>>`
	font-family: ${theme.typography.heading.font};
	font-size: ${theme.typography.heading.sizes.h3};
	margin: ${theme.typography.heading.margins};
	line-height: ${theme.typography.heading.lineHeights.h3};
`;
const H4 = styled.h4<WithStyle<TextStylingProps>>`
	font-family: ${theme.typography.heading.font};
	font-size: ${theme.typography.heading.sizes.h4};
	margin: ${theme.typography.heading.margins};
	line-height: ${theme.typography.heading.lineHeights.h4};
	color: ${(props)=> props.color ? theme.colors[props.color] : theme.colors.black}
`;
const H5 = styled.h5<WithStyle<TextStylingProps>>`
	font-family: ${theme.typography.heading.font};
	font-size: ${theme.typography.heading.sizes.h5};
	margin: ${theme.typography.heading.margins};
	line-height: ${theme.typography.heading.lineHeights.h5};
`;

const lookup: { [k in HeadingType]: React.FC<WithStyle<TextStylingProps>> } = {
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4,
	h5: H5,
};

const StyledSubtitle = styled.p<WithStyle<TextStylingProps>>`
	font-family: ${theme.typography.paragraph};
	font-size: ${theme.typography.heading.sizes.subtitle};
	margin-bottom: 0;
	color: ${(props)=> props.color ? theme.colors[props.color] : theme.colors.black};
	font-weight: ${props => props.fontWeight ? theme.typography.paragraph.weights[props.fontWeight] : theme.typography.paragraph.weights.normal};
`;

export const Subtitle = ({ text, color, fontWeight, className }: WithStyle<SubtitleProps>) => (
	<StyledSubtitle
		className={className}
		color={color}
		fontWeight={fontWeight}
	>{text}</StyledSubtitle>
);
