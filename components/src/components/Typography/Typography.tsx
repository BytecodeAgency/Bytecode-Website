import React from "react";
import theme from "../../theme";
import styled from "styled-components";
import {ThemeColors} from "../../theme/colors.types";

const StyledParagraph = styled.div<TextStylingProps>`
    font-family: ${theme.typography.paragraph.font};
    font-size: ${theme.typography.paragraph.sizes.normal};
	line-height: ${theme.typography.paragraph.lineHeight};
	color: ${(props)=> props.color ? theme.colors[props.color] : theme.colors.black}
`;

export const Paragraph: React.FC<{ text: string, color?: ThemeColors }> = ({ text, color }) => (
	<StyledParagraph color={color}>{text}</StyledParagraph>
);

export type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "subtitle";

export const Heading: React.FC<{ type: HeadingType, text: string, color?: ThemeColors }> = ({ type, text, color }) => {
	const Element = lookup[type];
	return <Element color={color}>{text}</Element>;
};

interface TextStylingProps{
	color?: ThemeColors;
}

const H1 = styled.h1<TextStylingProps>`
	font-family: ${theme.typography.heading.font};
	font-size: ${theme.typography.heading.sizes.h1};
	margin: ${theme.typography.heading.margins};
	color: ${(props)=> props.color ? theme.colors[props.color] : theme.colors.black}
`;
const H2 = styled.h2<TextStylingProps>`
	font-family: ${theme.typography.heading.font};
	font-size: ${theme.typography.heading.sizes.h2};
	margin: ${theme.typography.heading.margins};
	color: ${(props)=> props.color ? theme.colors[props.color] : theme.colors.black}
`;
const H3 = styled.h3<TextStylingProps>`

`;
const H4 = styled.h4<TextStylingProps>`
	font-family: ${theme.typography.heading.font};
	font-size: ${theme.typography.heading.sizes.h4};
	margin: ${theme.typography.heading.margins};
	line-height: ${theme.typography.heading.lineHeights.h4};
	color: ${(props)=> props.color ? theme.colors[props.color] : theme.colors.black}
`;
const H5 = styled.h5<TextStylingProps>`

`;

const Subtitle = styled.p<TextStylingProps>`
	font-family: ${theme.typography.paragraph};
	font-size: ${theme.typography.heading.sizes.subtitle};
	font-style: normal;
	margin-bottom: 0;
	color: ${(props)=> props.color ? theme.colors[props.color] : theme.colors.black}
`;

const lookup: { [k in HeadingType]: React.FC<TextStylingProps> } = {
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4,
	h5: H5,
	subtitle: Subtitle
};
