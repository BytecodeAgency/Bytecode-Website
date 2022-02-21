import React from "react";
import styled from "styled-components";
import {Container} from "../Container/Container";
import Contact from "./Contact";
import Communication from "./Communication";
import Address from "./Address";
import TermsAndPolicies from "./TermsAndPolicies";
import Socials from "./Socials";

const FooterContainer = styled(Container)`
	display: grid;
	grid-template-rows: 160px 100px 100px 40px 1fr;
	grid-row-gap: 40px;
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