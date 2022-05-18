import React from "react";
import { Heading } from "../../../components";
import styled from "styled-components";
import { breakpointNameToPx, responsiveValuesCSS } from "../../../helpers";
import { CaseQuoteProps } from "../SingleCasePage.types";

const styledContainerResponsiveCSS = () => {
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			md: "1fr 1fr"
		})
	);

	const maxWidth = responsiveValuesCSS(
		"max-width",
		"%",
		breakpointNameToPx({
			xs: "90",
			lg: "80",
			xl: "60",
			xxl: "80"
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
	return gridColumns + maxWidth + padding;
};
const StyledContainer = styled.div`
	${styledContainerResponsiveCSS};
	margin: 0 auto;
`;

const MainContainer = styled.div`
	display: grid;
	position: relative;
`;

const QuoteText = styled(Heading)`
	text-align: center;
	place-self: center;
`;


const CaseQuote = ({ text }: CaseQuoteProps) => (
	<MainContainer>
		<StyledContainer>
			<QuoteText type="h2" text={`"${text}"`} />
		</StyledContainer>
	</MainContainer>
);

export default CaseQuote;