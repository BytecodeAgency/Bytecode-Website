import styled from "styled-components";
import SocialButton from "../SocialButton/SocialButton";
import {Eye, Linkedin, Youtube} from "../../icons/icons";
import {FooterContent} from "../content";
import React from "react";

const Container = styled.div`
	display: flex;
	grid-area: socials;
`;
const StyledSocialButton = styled(SocialButton)`
	padding-right: 15px;
`;

const Socials = () => (
	<Container>
		<StyledSocialButton Icon={Linkedin} link={FooterContent.links.linkedin} />
		<StyledSocialButton Icon={Youtube} link={FooterContent.links.youtube} />
		<StyledSocialButton Icon={Eye} link={FooterContent.links.instagram} />
	</Container>
);

export default Socials;