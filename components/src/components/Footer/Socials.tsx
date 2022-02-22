import styled from "styled-components";
import SocialButton from "../SocialButton/SocialButton";
import { Instagram, Linkedin, Youtube} from "../../icons/icons";
import {FooterContent} from "../content";
import React from "react";

const Container = styled.div`
	display: flex;
	grid-area: socials;
`;
const StyledSocialButton = styled(SocialButton)`
	margin-right: 15px;
`;

const Socials = () => (
	<Container>
		<StyledSocialButton Icon={Linkedin} link={FooterContent.links.linkedin} />
		<StyledSocialButton Icon={Youtube} link={FooterContent.links.youtube} />
		<StyledSocialButton Icon={Instagram} link={FooterContent.links.instagram} />
	</Container>
);

export default Socials;