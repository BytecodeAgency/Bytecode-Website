import React, {useState} from "react";
import styled from "styled-components";
import {Paragraph, Heading} from "../Typography/Typography";
import theme from "../../theme";
import Image from "next/image";
import {MenuContainer} from "../Container/Container";
import Logo from "../Branding/Branding";
import Hamburger from "hamburger-react";
import Spacer from "../Spacer/Spacer";
import {Envelope, Github, Linkedin} from "../../icons/icons";
import SocialButton from "../SocialButton/SocialButton";

export interface Member {
    name: string;
    jobTitle: string;
    src: string;
	about: string;
	focus: string[];
	github?: string;
	email?: string;
	linkedIn?: string;
}

const MobilePopupMenu = styled(MenuContainer)`
    display: grid;
    grid-template-columns: 1fr 48px;
    padding-top: 25px;
    height: 75px;
	width: 100%;
	align-items: center;
`;

const PopupBackground = styled.div`
	position: fixed;
	overflow: auto;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background: #DEE3E0B2;
	margin: 0 auto;
	z-index: 100;
	overflow: auto;
	overscroll-behavior: none;
`;
const PopupContent = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	background-color: ${theme.colors.white};
	//margin-top: 80px; for desktop sizes
	z-index: 101;
`;
const AboutContainer = styled.div`
	padding: 20px 12px;
`;
const SocialsContainer = styled.div`
	display: grid;
	padding-right: 80px;
	grid-template-columns: 113px 1fr;
	grid-template-rows: 40px 1fr 1fr 1fr 3fr;
	grid-column-gap: 20px;
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
const Socials: React.FC<{member: Member}> = ({member}) => (
	<SocialsContainer>
		<StyledSpacer color="black" reverse/>
		<SocialsTitle type="h5" text="Focus area"/>
		{member.focus.map(area => <SocialsFocusArea text={area}/>)}
		<SocialsLinks>
			{member.github && <SocialButton Icon={Github} link={member.github} solid />}
			{member.email && <SocialButton Icon={Envelope} link={member.email} solid mail/>}
			{member.linkedIn && <SocialButton Icon={Linkedin} link={member.linkedIn} solid/>}
		</SocialsLinks>
	</SocialsContainer>
);
interface PopupProps {
	member: Member;
	closePopup: () => void;
	popup: boolean;
}
const JobTitle = styled(Paragraph)`
	color: ${theme.colors.colorBrand4};
`;
export const Popup: React.FC<PopupProps> = ({member, closePopup, popup}) => {
	const {name, about, src, jobTitle} = member;
	return (
		<>
			{
				popup ? (
					<PopupBackground> {/*Add onclick for closing by clicking on background*/}
						<PopupContent>
							<MobilePopupMenu background={theme.colors.white}>
								<div>
									<Logo color="black" />
								</div>
								<Hamburger toggled={true} onToggle={closePopup}/>
							</MobilePopupMenu>
							<Image src={`/images/member-${src}.png`} alt="profile picture" width={390} height={568.75}/>
							<AboutContainer>
								<StyledName text={name} type="h4"/>
								<JobTitle text={jobTitle}/>
								<Paragraph text={about} />
							</AboutContainer>
							<Socials member={member} />
						</PopupContent>
					</PopupBackground>
				) : null
			}
		</>
	);
};

const StyledName = styled(Heading)`
  	font-family: ${theme.typography.paragraph.font};
`;
interface TeamMemberProps{
	member: Member;
}
const TeamMember: React.FC<TeamMemberProps> = ({member}) => {
	const {src, name, jobTitle} = member;
	const [popup, setPopup] = useState(false);
	const openPopup = () => {
		setPopup(true);
	};
	const closePopup = () => {
		setPopup(false);
	};
	return (
		<div>
			<Popup member={member} closePopup={closePopup} popup={popup}/>
			<Image src={`/images/member-${src}.png`} alt="profile picture" width={312} height={455} onClick={openPopup}/>
			<StyledName text={name} type="h4"/>
			<Paragraph text={jobTitle}/>
		</div>
	);
};


export default TeamMember;