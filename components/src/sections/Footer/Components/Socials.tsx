import styled from "styled-components";
import SocialButton from "../../../components/SocialButton";
import { Instagram, Linkedin, Youtube} from "../../../icons";
import {footerContent} from "../../../components/content";
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
		<StyledSocialButton Icon={Linkedin} link={footerContent.links.linkedin} />
		<StyledSocialButton Icon={Youtube} link={footerContent.links.youtube} />
		<StyledSocialButton Icon={Instagram} link={footerContent.links.instagram} />
	</Container>
);

export default Socials;