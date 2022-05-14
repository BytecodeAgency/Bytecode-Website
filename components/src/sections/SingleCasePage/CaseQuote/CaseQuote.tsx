import React from "react";
import { Heading } from "../../../components";
import styled from "styled-components";
import { breakpointNameToPx, responsiveValuesCSS } from "../../../helpers";
import Image from "next/image";
import { CaseQuoteProps } from "../SingleCasePage.types";

const styledContainerResponsiveCSS = () => {
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			md: "1fr 2fr"
		})
	);
	const padding = responsiveValuesCSS(
		"padding",
		"",
		breakpointNameToPx({
			xs: "60px 0",
			lg: "90px 0",
			xl: "120px 0",
			xxl: "150px 0"
		})
	);
	return gridColumns + padding;
};
const StyledContainer = styled.div`
	${styledContainerResponsiveCSS};
	display: grid;
	padding: 60px 0;
`;

const quoteTextResponsiveCSS = responsiveValuesCSS(
	"max-width",
	"px",
	breakpointNameToPx({
		xs: 400,
		sm: 500,
		xl: 700
	})
);

const imageContainerResponsiveCSS = responsiveValuesCSS(
	"display",
	"",
	breakpointNameToPx({
		xs: "none",
		md: "block"
	})
);

const ImageContainer = styled.div`
	${imageContainerResponsiveCSS};
`;

const QuoteText = styled(Heading)`
	${quoteTextResponsiveCSS};
	
	text-align: center;
	place-self: center;
`;


const CaseQuote = ({ text }: CaseQuoteProps) => (
	<StyledContainer>
		<ImageContainer>
			<Image src="/images/case-quote-portal.svg" alt="profile picture" height={500} width={540}/>
		</ImageContainer>
		<QuoteText type="h2" text={`"${text}"`}/>
	</StyledContainer>
);

export default CaseQuote;