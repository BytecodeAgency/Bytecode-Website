import React from "react";
import styled from "styled-components";
import { Paragraph } from "../../../components/Typography";
import { footerContent } from "../../../components/content";
import Link from "next/link";
import { breakpointNameToPx, responsiveValuesCSS } from "../../../helpers/responsiveCss";

const containerResponsiveCSS = responsiveValuesCSS(
	"flex-direction",
	"",
	breakpointNameToPx({
		xs: "column",
		lg: "row"
	})
);

const Container = styled.div`
	${containerResponsiveCSS};
	grid-area: terms;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
`;

const StyledParagraph = styled(Paragraph)`
	&:hover{
		cursor: pointer;
	}
`;

const TermsAndPolicies = () => {
	const goToTerms = () => {
		window.open(footerContent.links.termsAndConditions, "_blank");
	};
	return (
		<Container>
			<StyledParagraph text="Terms and conditions" onClick={goToTerms}/>
			<Link href={footerContent.links.privacyPolicy}><StyledParagraph text="Privacy Policy" /></Link>
			<Link href={footerContent.links.cookiePolicy}><StyledParagraph text="Cookie Policy" /></Link>
			<Paragraph text="© 2022" />
		</Container>
	);
};

export default TermsAndPolicies;