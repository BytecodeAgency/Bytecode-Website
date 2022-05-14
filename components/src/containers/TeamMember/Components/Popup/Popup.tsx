import styled from "styled-components";
import { breakpointNameToPx, responsiveValuesCSS } from "../../../../helpers/responsiveCss";
import { Heading, Paragraph } from "../../../../components/Typography";
import { Container } from "../../../../components/Container";
import { breakpoints, theme } from "../../../../theme";
import React from "react";
import PopupSocials from "./PopupSocials";
import PopupHeader from "./PopupHeader";
import { Member } from "../../TeamMember";

const PopupBackground = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	background: #DEE3E0B2;
	margin: 0 auto;
	z-index: 100;
	overflow: scroll;
	overscroll-behavior: none;
`;
const popupContentResponsiveCSS = () => {
	const width = responsiveValuesCSS("width", "", breakpointNameToPx({ sm: "100%", md: "80%", lg: "700px" }));
	const top = responsiveValuesCSS("top", "%", breakpointNameToPx({ xs: 0, xl: 5 }));
	const right = responsiveValuesCSS("right", "%", breakpointNameToPx({ xs: 0, xl: 0 }));
	return top + right + width;
};

const popupLayoutResponsiveCSS = () => {
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
	const gridRowGap = responsiveValuesCSS("grid-row-gap", "px", breakpointNameToPx({ xs: 20, md: 25 }));
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
	return gridTemplateArea + gridRowGap + gridTemplateColumns + gridTemplateRows;
};
const PopupLayout = styled(Container)`
	${popupLayoutResponsiveCSS};
	overflow: scroll;
`;

const PopupContent = styled.div`
	${popupContentResponsiveCSS};
	position: absolute;
	background-color: ${theme.colors.white};
	z-index: 101;
	display: grid;
	overflow: scroll;
	
	@media screen and (min-width: ${breakpoints.lg}px) {
		animation: slide 1s forwards;
	}

	@keyframes slide {
		0% { right: -500px; }
	}
`;

const styledImageResponsiveCSS = responsiveValuesCSS("padding-top", "px", breakpointNameToPx({ xs: 75, md: 0 }));

const imageOnionSide = [
	{ url: "top-left", background: "left top" },
	{ url: "top-right", background: "right top" },
	{ url: "bottom-right", background: "right bottom" }
];
const imageOnionColor = [
	"green",
	"pink"
];

const getRandomImageOnion = (name: string) => {
	const color = imageOnionColor[Math.floor(Math.random() * imageOnionColor.length)];
	const side = imageOnionSide[Math.floor(Math.random() * imageOnionSide.length)];
	//const side = {url:"top-left", background: "left top", image: "left top"};
	return `url(${`/images/image-vector-${side.url}-${color}.svg`}) no-repeat ${side.background}, url(${`/images/member-${name}.png`}) no-repeat ${side.background}`;
};

const StyledImage = styled.div<{ name: string }>`
	${styledImageResponsiveCSS};
	height: 452px;
	width: 312px;
	grid-area: image;
	position: relative;
	left: 0;
	bottom: 0;
	background: ${props => `${getRandomImageOnion(props.name)}`};
	background-origin: content-box;
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
const Popup: React.FC<PopupProps> = ({ member, closePopup, popup }) => {
	const { name, about, id, jobTitle } = member;

	return (
		<>
			{
				popup ? (
					<PopupBackground> {/*Add onclick for closing by clicking on background*/}
						<PopupContent>
							<PopupLayout>
								<PopupHeader closePopup={closePopup} />
								<StyledImage name={id} />
								<TitleAndName>
									<StyledName text={name} type="h4" />
									<JobTitle text={jobTitle} />
								</TitleAndName>
								<AboutContainer>
									<Paragraph text={about} />
								</AboutContainer>
								<PopupSocials member={member} />
							</PopupLayout>
						</PopupContent>
					</PopupBackground>
				) : null
			}
		</>
	);
};
export default Popup;