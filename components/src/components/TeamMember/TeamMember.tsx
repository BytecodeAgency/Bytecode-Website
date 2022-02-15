import React, {useState} from "react";
import styled from "styled-components";
import {Paragraph, Heading} from "../Typography/Typography";
import theme from "../../theme";
import Image from "next/image";
import {Container} from "../Container/Container";
import Logo from "../Branding/Branding";
import Hamburger from "hamburger-react";
import Spacer from "../Spacer/Spacer";
import {Envelope, Github, Linkedin} from "../../icons/icons";
import SocialButton from "../SocialButton/SocialButton";
import {BreakpointKeyValue} from "../../theme/layout";
import {breakpointNameToPx, responsiveValuesCSS} from "../../helpers/responsiveCss";

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

const PopupBackground = styled.div`
	position: fixed;
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
const popupContentResponsiveCSS = () => {
	const gridTemplateAreaValues: BreakpointKeyValue = {
		xs: "\"menu menu\"" +
			"\"image image\"" +
			"\"title title\"" +
			"\"about about\"" +
			"\"socials socials\"",

		md: "\"menu menu\"" +
			"\"title image\"" +
			"\"socials about\""
	};
	const gridTemplateArea = responsiveValuesCSS("grid-template-areas", "", breakpointNameToPx(gridTemplateAreaValues));
	const gridRowGap = responsiveValuesCSS("grid-row-gap", "px", breakpointNameToPx({xs: 20, md: 25}));
	return gridTemplateArea + gridRowGap;
};
const PopupContent = styled(Container)`
	${popupContentResponsiveCSS};
	position: absolute;
	top: 0;
	left: 0;
	background-color: ${theme.colors.white};
	//margin-top: 80px; for desktop sizes
	z-index: 101;
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

const popupMenuResponsiveCSS = () => {
	const position = responsiveValuesCSS("position", "", breakpointNameToPx({xs: "fixed", md: "static"}));
	const paddingRight = responsiveValuesCSS("padding-right", "px", breakpointNameToPx({xs: 12, md: 0}));
	return position + paddingRight;
};

const PopupMenu = styled.div`
	${popupMenuResponsiveCSS};
	padding-left: 0;
	z-index: 9999;
	display: grid;
	grid-template-columns: 1fr 48px;
	padding-top: 25px;
	height: 75px;
	width: 100%;
	align-items: center;
	grid-area: menu;
`;

const styledImageResponsiveCSS = responsiveValuesCSS("padding-top", "px", breakpointNameToPx({xs:75, md: 0}));

const StyledImage = styled.div`
	${styledImageResponsiveCSS};
	grid-area: image;
`;

const TitleAndName = styled.div`
	grid-area: title;
`;
const StyledName = styled(Heading)`
	font-family: ${theme.typography.paragraph.font};
`;
const JobTitle = styled(Paragraph)`
	color: ${theme.colors.colorBrand4};
	margin-bottom: 0;
`;

const aboutContainerResponsiveCSS = responsiveValuesCSS(
	"padding-left",
	"px",
	breakpointNameToPx({
		xs: 12,
		md: 0,
	}));
const AboutContainer = styled.div`
	${aboutContainerResponsiveCSS};
	grid-area: about;
`;
const SocialsContainer = styled.div`
	display: grid;
	padding-right: 80px;
	grid-template-columns: 113px 1fr;
	grid-template-rows: 40px 1fr 1fr 1fr 3fr;
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
export const Popup: React.FC<PopupProps> = ({member, closePopup, popup}) => {
	const {name, about, src, jobTitle} = member;
	return (
		<>
			{
				popup ? (
					<PopupBackground> {/*Add onclick for closing by clicking on background*/}
						<PopupContent>
							<PopupMenu background={theme.colors.white}>
								<div>
									<Logo color="black" />
								</div>
								<Hamburger toggled={true} onToggle={closePopup}/>
							</PopupMenu>
							<StyledImage>
								<Image src={`/images/member-${src}.png`} alt="profile picture" width={390} height={568.75}/>
							</StyledImage>
							<TitleAndName>
								<StyledName text={name} type="h4"/>
								<JobTitle text={jobTitle}/>
							</TitleAndName>
							<AboutContainer>
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