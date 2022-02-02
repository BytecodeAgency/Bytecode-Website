import React from "react";
import theme from "../../theme";
import styled from "styled-components";

const StyledParagraph = styled.div`
    font-family: ${theme.typography.paragraph.font};
    font-size: ${theme.typography.paragraph.sizes.normal};
	line-height: ${theme.typography.paragraph.lineHeight};
`;

export const Paragraph: React.FC<{ text: string }> = ({ text }) => (
	<StyledParagraph>{text}</StyledParagraph>
);

export type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5" | "subtitle";

export const Heading: React.FC<{ type: HeadingType, text: string }> = ({ type, text }) => {
	const Element = lookup[type];
	return <Element>{text}</Element>;
};

const H1 = styled.h1`
	font-family: ${theme.typography.heading.font};
	font-size: ${theme.typography.heading.sizes.h1};
	margin: ${theme.typography.heading.margins};
`;
const H2 = styled.h2`
	font-family: ${theme.typography.heading.font};
	font-size: ${theme.typography.heading.sizes.h2};
	margin: ${theme.typography.heading.margins};
`;
const H3 = styled.h3`

`;
const H4 = styled.h4`
	font-family: ${theme.typography.heading.font};
	font-size: ${theme.typography.heading.sizes.h4};
	margin: ${theme.typography.heading.margins};
	line-height: ${theme.typography.heading.lineHeights.h4};
`;
const H5 = styled.h5`

`;

const Subtitle = styled.p`
	font-family: ${theme.typography.paragraph};
	font-size: ${theme.typography.heading.sizes.subtitle};
	font-style: normal;
	margin-bottom: 0;
`;

const lookup: { [k in HeadingType]: React.FC } = {
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4,
	h5: H5,
	subtitle: Subtitle
};
