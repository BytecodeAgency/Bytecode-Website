import React from "react";
import { Heading, InitialContainer, Paragraph, Subtitle } from "../../../components";
import styled from "styled-components";
import { breakpointNameToPx, responsiveValuesCSS } from "../../../helpers";
import { theme } from "../../../theme";
import { CaseIntroProps } from "../SingleCasePage.types";
import Image from "next/image";

type TextColumnProps = {
	title: string;
	subtitle: string;
	text: string;
}
const TextColumn = ({ title, subtitle, text }: TextColumnProps) => (
	<InitialContainer>
		<Subtitle text={subtitle} />
		<Heading type="h1" text={title} />
		<Paragraph text={text} />
	</InitialContainer>
);

const imageColumnContainerResponsiveCSS = responsiveValuesCSS(
	"padding-top",
	"px",
	breakpointNameToPx({
		xs: 70,
		lg: 140,
		xl: 210,
	})
);

const ImageColumnContainer = styled.div`
	${imageColumnContainerResponsiveCSS};
	background: url(${"/images/case-header-line.svg"}) no-repeat right top , ${theme.colors.colorBrand2};
	background-size: 80% auto;
	display: flex;
	flex-direction: row;
	align-items: flex-end;
`;

const logoContainerResponsiveCSS = responsiveValuesCSS(
	"margin",
	"px",
	breakpointNameToPx({
		xs: 20,
		lg: 40,
		xxl: 60
	})
);
const LogoContainer = styled.div`
	${logoContainerResponsiveCSS};
`;

type ImageColumnProps = {
	image: string;
	logo: string;
	height: number;
	width: number;
};
const ImageColumn = ({ image, logo, height, width }: ImageColumnProps) => (
	<ImageColumnContainer>
		<LogoContainer>
			<Image src={`/images/${logo}`} alt="logo" height={height} width={width} layout="intrinsic" />
		</LogoContainer>
		<Image src={`/images/${image}`} alt="image of application" width={492} height={744}/>
	</ImageColumnContainer>
);

const caseIntroContainerResponsiveCSS = responsiveValuesCSS(
	"grid-template-columns",
	"",
	breakpointNameToPx({
		xs: "1fr",
		lg: "1fr 1fr"
	})
);

const CaseIntroContainer = styled.div`
	${caseIntroContainerResponsiveCSS};
	display: grid;
	align-items: center;
	grid-column-gap: 60px;
`;


const CaseIntro = ({ title, subtitle, text, image, logo }: CaseIntroProps) => (
	<CaseIntroContainer>
		<TextColumn title={title} subtitle={subtitle} text={text} />
		<ImageColumn image={image} logo={logo.url} width={logo.width} height={logo.height} />
	</CaseIntroContainer>
);

export default CaseIntro;