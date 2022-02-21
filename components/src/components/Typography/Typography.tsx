import React from "react";
import theme from "../../theme";
import styled from "styled-components";
import {ThemeColors} from "../../theme/colors.types";
import {breakpointNameToPx, responsiveValuesCSS} from "../../helpers/responsiveCss";

const StyledParagraph = styled.div<TextStylingProps>`
    font-family: ${theme.typography.paragraph.font};
    font-size: ${theme.typography.paragraph.sizes.normal};
	line-height: ${theme.typography.paragraph.lineHeight};
	color: ${(props)=> props.color ? theme.colors[props.color] : theme.colors.black};
	margin-bottom: 24px;
`;

export const Paragraph: React.FC<{ text: string, color?: ThemeColors, className?: string, onClick?: () => void }> = ({ text, color, className, onClick }) => (
	<StyledParagraph className={className} color={color} onClick={onClick}>{text}</StyledParagraph>
);

export type FontWeight = "normal" | "bold";
export type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5";

export const Heading: React.FC<{ type: HeadingType, text: string, color?: ThemeColors, className?: string }> = ({ type, text, color, className }) => {
	const Element = lookup[type];
	return <Element className={className} color={color}>{text}</Element>;
};

interface TextStylingProps{
	color?: ThemeColors;
	fontWeight?: FontWeight;
	className?: string;
}

const h1FontSizes = responsiveValuesCSS("font-size", "em", breakpointNameToPx(theme.typography.heading.sizes.h1));
const h2FontSizes = responsiveValuesCSS("font-size", "em", breakpointNameToPx(theme.typography.heading.sizes.h2));
const H1 = styled.h1<TextStylingProps>`
	${h1FontSizes};
	font-family: ${theme.typography.heading.font};
	margin: ${theme.typography.heading.margins};
	color: ${(props)=> props.color ? theme.colors[props.color] : theme.colors.black};
`;
const H2 = styled.h2<TextStylingProps>`
	${h2FontSizes};
	font-family: ${theme.typography.heading.font};
	margin: ${theme.typography.heading.margins};
	color: ${(props)=> props.color ? theme.colors[props.color] : theme.colors.black}
`;
const H3 = styled.h3<TextStylingProps>`
	font-family: ${theme.typography.heading.font};
	font-size: ${theme.typography.heading.sizes.h3};
	margin: ${theme.typography.heading.margins};
	line-height: ${theme.typography.heading.lineHeights.h3};
`;
const H4 = styled.h4<TextStylingProps>`
	font-family: ${theme.typography.heading.font};
	font-size: ${theme.typography.heading.sizes.h4};
	margin: ${theme.typography.heading.margins};
	line-height: ${theme.typography.heading.lineHeights.h4};
	color: ${(props)=> props.color ? theme.colors[props.color] : theme.colors.black}
`;
const H5 = styled.h5<TextStylingProps>`
	font-family: ${theme.typography.heading.font};
	font-size: ${theme.typography.heading.sizes.h5};
	margin: ${theme.typography.heading.margins};
	line-height: ${theme.typography.heading.lineHeights.h5};
`;

const lookup: { [k in HeadingType]: React.FC<TextStylingProps> } = {
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4,
	h5: H5,
};

const StyledSubtitle = styled.p<TextStylingProps>`
	font-family: ${theme.typography.paragraph};
	font-size: ${theme.typography.heading.sizes.subtitle};
	margin-bottom: 0;
	color: ${(props)=> props.color ? theme.colors[props.color] : theme.colors.black};
	font-weight: ${props => props.fontWeight ? theme.typography.paragraph.weights[props.fontWeight] : theme.typography.paragraph.weights.normal};
`;

export const Subtitle: React.FC<{text: string, color?: ThemeColors, fontWeight?: FontWeight, className?: string}> = ({text, color, fontWeight, className}) => (
	<StyledSubtitle className={className} color={color} fontWeight={fontWeight}>{text}</StyledSubtitle>
);
