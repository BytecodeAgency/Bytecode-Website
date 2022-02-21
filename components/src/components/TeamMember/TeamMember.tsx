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
import {breakpointNameToPx, responsiveValuesCSS} from "../../helpers/responsiveCss";
import {useWindowSize} from "../../helpers/device";

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

// TODO: try and fix scroll behaviour when there is no overflow
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
	const gridTemplateArea = responsiveValuesCSS(
		"grid-template-areas",
		"",
		breakpointNameToPx({
			xs: "\"menu menu\"" +
				"\"image image\"" +
				"\"title title\"" +
				"\"about about\"" +
				"\"socials socials\"",

			md: "\"menu menu\"" +
				"\"title image\"" +
				"\"socials about\""
		}));
	const gridRowGap = responsiveValuesCSS("grid-row-gap", "px", breakpointNameToPx({xs: 20, md: 25}));
	const gridTemplateColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr 1fr",
			lg: "1fr 2fr",
		}));
	const gridTemplateRows = responsiveValuesCSS(
		"grid-template-rows",
		"",
		breakpointNameToPx({
			xs: "auto",
			md: "50px auto",
			xl: "48px auto"
		})
	);
	const top = responsiveValuesCSS("top", "%", breakpointNameToPx({xs: 0, xl: 10}));
	const left = responsiveValuesCSS("left", "%", breakpointNameToPx({xs: 0, xl: 10}));
	return gridTemplateArea + gridRowGap + gridTemplateColumns + gridTemplateRows + top + left;
};
const PopupContent = styled(Container)`
	${popupContentResponsiveCSS};
	position: absolute;
	top: 0;
	left: 0;
	background-color: ${theme.colors.white};
	z-index: 101;
	display: grid;
`;

const MobilePopupMenu = styled.div`
	position: fixed;
	z-index: 9999;
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 75px;
	align-items: center;
	grid-area: menu;
	top:0;
	left:0;
	background-color: ${theme.colors.white};
`;

const logoContainerResponsiveCSS = responsiveValuesCSS(
	"padding-left",
	"px",
	breakpointNameToPx({
		xs: 12,
		md: 16,
		lg: 32,
	}));
const LogoContainer = styled.div`
	${logoContainerResponsiveCSS}
`;

const DesktopPopupMenu = styled.div`
	height: 48px;
	padding-top: 25px;
	z-index: 9999;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	grid-area: menu;
	background-color: ${theme.colors.white};
`;

const styledImageResponsiveCSS = responsiveValuesCSS("padding-top", "px", breakpointNameToPx({xs:75, md: 0}));

const StyledImage = styled.div`
	${styledImageResponsiveCSS};
	height: 500px;
	width: 340px;
	grid-area: image;
	position: relative;
	left: 0;
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

const AboutContainer = styled.div`
	padding-left: 0;
	grid-area: about;
`;
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
const Socials: React.FC<{member: Member}> = ({member}) => (
	<SocialsContainer>
		<StyledSpacer color="black" reverse/>
		<SocialsTitle type="h5" text="Focus area"/>
		{member.focus.map((area, index) => <SocialsFocusArea key={index} text={area}/>)}
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
	const device = useWindowSize();
	const PopupHeader = () => {
		if (!device.width || (theme.breakpoints.xl && device.width > theme.breakpoints.xl)) {
			return (
				<DesktopPopupMenu>
					<Hamburger toggled={true} onToggle={closePopup}/>
				</DesktopPopupMenu>
			);
		}
		return (
			<MobilePopupMenu >
				<LogoContainer>
					<Logo color="black" />
				</LogoContainer>
				<Hamburger toggled={true} onToggle={closePopup}/>
			</MobilePopupMenu>
		);
	};
	return (
		<>
			{
				popup ? (
					<PopupBackground> {/*Add onclick for closing by clicking on background*/}
						<PopupContent>
							<PopupHeader />
							<StyledImage>
								<Image src={`/images/member-${src}.png`} alt="profile picture" layout="fill" objectFit="contain"/>
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