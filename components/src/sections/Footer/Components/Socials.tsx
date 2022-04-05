import styled from "styled-components";
import SocialButton from "../../../components/SocialButton";
import { Instagram, Linkedin, Youtube } from "../../../icons";
import { links } from "../../../content/content";
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
		<StyledSocialButton Icon={Linkedin} link={links.linkedin} />
		<StyledSocialButton Icon={Youtube} link={links.youtube} />
		<StyledSocialButton Icon={Instagram} link={links.instagram} />
	</Container>
);

export default Socials;