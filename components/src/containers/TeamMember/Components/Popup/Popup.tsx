import styled from "styled-components";
import {breakpointNameToPx, responsiveValuesCSS} from "../../../../helpers/responsiveCss";
import { Heading, Paragraph} from "../../../../components/Typography";
import {Container} from "../../../../components/Container";
import {theme} from "../../../../theme";
import React from "react";
import PopupSocials from "./PopupSocials";
import PopupHeader from "./PopupHeader";
import Image from "next/image";
import {Member} from "../../TeamMember";

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

interface PopupProps {
    member: Member;
    closePopup: () => void;
    popup: boolean;
}
const Popup: React.FC<PopupProps> = ({member, closePopup, popup}) => {
	const {name, about, src, jobTitle} = member;

	return (
		<>
			{
				popup ? (
					<PopupBackground> {/*Add onclick for closing by clicking on background*/}
						<PopupContent>
							<PopupHeader closePopup={closePopup}/>
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
							<PopupSocials member={member} />
						</PopupContent>
					</PopupBackground>
				) : null
			}
		</>
	);
};
export default Popup;