import React from "react";
import styled from "styled-components";
import { Container } from "../../components/Container";
import Contact from "./Components/Contact";
import CommunicationBlock from "../../containers/CommunicationBlock";
import AddressBlock from "../../containers/AddressBlock";
import TermsAndPolicies from "./Components/TermsAndPolicies";
import Socials from "./Components/Socials";
import { breakpointNameToPx, responsiveValuesCSS } from "../../helpers/responsiveCss";

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
	const paddingTop = responsiveValuesCSS(
		"padding-top",
		"px",
		breakpointNameToPx({
			xs: 80,
			lg: 150
		})
	);
	return gridTemplateAreas + gridTemplateRows + gridColumnGaps + marginBottom + paddingTop;
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
		<CommunicationBlock />
		<AddressBlock />
		<Socials />
		<TermsAndPolicies />
	</FooterContainer>
);

export default Footer;