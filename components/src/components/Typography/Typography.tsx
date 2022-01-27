import React from "react";
import styled from "styled-components";

const StyledParagraph = styled.div`
    font-family: Biotif;
    font-size: 18px;
`;

export const Paragraph: React.FC<{ text: string }> = ({ text }) => (
	<StyledParagraph>{text}</StyledParagraph>
);

export type HeadingType = "h1" | "h2" | "h3" | "h4" | "h5";

export const Heading: React.FC<{ type: HeadingType, text: string }> = ({ type, text }) => {
	const Element = lookup[type];
	return <Element>{text}</Element>;
};

const H1 = styled.h1`

`;
const H2 = styled.h2`

`;
const H3 = styled.h3`

`;
const H4 = styled.h4`

`;
const H5 = styled.h5`

`;

const lookup: { [k in HeadingType]: React.FC } = {
	h1: H1,
	h2: H2,
	h3: H3,
	h4: H4,
	h5: H5
};