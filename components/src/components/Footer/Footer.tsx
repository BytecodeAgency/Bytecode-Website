import React from "react";
import styled from "styled-components";
import {Container} from "../Container/Container";
import Contact from "./Contact";
import Communication from "./Communication";
import Address from "./Address";
import TermsAndPolicies from "./TermsAndPolicies";
import Socials from "./Socials";
import {breakpointNameToPx, responsiveValuesCSS} from "../../helpers/responsiveCss";

const footerContainerResponsiveCSS = () => {
	const gridTemplateAreas =  responsiveValuesCSS(
		"grid-template-areas",
		"",
		breakpointNameToPx({
			xs: "\"contact\"" +
				"\"communication\"" +
				"\"address\"" +
				"\"socials\"" +
				"\"terms\"",
			md: "\"contact contact\"" +
				"\"communication address\"" +
				"\". socials\"" +
				"\"terms terms\"",
			lg: "\"contact communication address\"" +
				"\"contact . socials\"" +
				"\". terms terms\""

		})
	);
	const gridTemplateRows = responsiveValuesCSS(
		"grid-template-rows",
		"",
		breakpointNameToPx({
			xs: "160px 120px 100px 40px 1fr",
			md: "160px 100px 40px 1fr",
			lg: "100px 60px 100px"
		})
	);
	const gridColumnGaps = responsiveValuesCSS(
		"grid-column-gap",
		"px",
		breakpointNameToPx({
			lg: 10,
			xl: 60
		})
	);
	const marginBottom = responsiveValuesCSS(
		"margin-bottom",
		"px",
		breakpointNameToPx({
			xs: 60,
			lg: 20
		})
	);

	return gridTemplateAreas + gridTemplateRows + gridColumnGaps + marginBottom;
};

const FooterContainer = styled(Container)`
	${footerContainerResponsiveCSS};
	display: grid;
	grid-template-rows: 160px 100px 100px 40px 1fr;
	grid-row-gap: 20px;
	margin-bottom: 60px;
`;

const Footer = () => (
	<FooterContainer>
		<Contact />
		<Communication />
		<Address />
		<Socials />
		<TermsAndPolicies />
	</FooterContainer>
);

export default Footer;