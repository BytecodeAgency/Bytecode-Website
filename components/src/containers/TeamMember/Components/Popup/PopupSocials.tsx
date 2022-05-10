import styled from "styled-components";
import Spacer from "../../../../components/Spacer";
import { Heading, Paragraph } from "../../../../components/Typography";
import React from "react";
import { Member } from "../../TeamMember";
import SocialButton from "../../../../components/SocialButton";
import { Envelope, Github, Linkedin } from "../../../../icons";

type PopupSocialsProps = {
	member: Member;
}

const SocialsContainer = styled.div`
	display: grid;
	padding-right: 80px;
	grid-template-columns: 113px 200px;
	grid-template-rows: 40px 35px 35px 35px 80px;
	grid-column-gap: 20px;
	grid-area: socials
`;
const StyledSpacer = styled(Spacer)`
	grid-column: 1 / span 2;
`;
const SocialsTitle = styled(Heading)`
	grid-column: 1;
	grid-row: 2;
	align-self: start;
	margin-bottom: 5px;
	margin-top: 0;
`;
const SocialsFocusArea = styled(Paragraph)`
	grid-column: 2;
	align-self: start;
	margin-bottom: 5px;
`;
const SocialsLinks = styled.div`
	grid-column: 2;
	display: grid;
	grid-template-columns: 32px 32px 32px;
	grid-column-gap: 20px;
	margin-top: 20px;
`;
const PopupSocials = ({ member }: PopupSocialsProps) => (
	<SocialsContainer>
		<StyledSpacer reverse/>
		<SocialsTitle type="h5" text="Focus area"/>
		{member.focus.map((area, index) => <SocialsFocusArea key={index} text={area}/>)}
		<SocialsLinks>
			{member.github && <SocialButton Icon={Github} link={member.github} solid />}
			{member.email && <SocialButton Icon={Envelope} link={member.email} solid mail/>}
			{member.linkedIn && <SocialButton Icon={Linkedin} link={member.linkedIn} solid/>}
		</SocialsLinks>
	</SocialsContainer>
);

export default PopupSocials;