import React from "react";
import { Heading, InitialContainer, LaptopScreen, Paragraph, Subtitle } from "../../../components";
import styled from "styled-components";
import { breakpointNameToPx, responsiveValuesCSS } from "../../../helpers";
import { CaseIntroProps, DeviceProps } from "../SingleCasePage.types";
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

const imageColumnContainerResponsiveCSS = () => {

	const paddingTop = responsiveValuesCSS(
		"padding-top",
		"px",
		breakpointNameToPx({
			xs: 70,
			lg: 140,
			xl: 210,
		})
	);

	const paddingBottom = responsiveValuesCSS(
		"padding-bottom",
		"px",
		breakpointNameToPx({
			xs: 20,
			lg: 40,
			xl: 80,
		})
	);

	return paddingTop + paddingBottom;
};

const ImageColumnContainer = styled.div<{ bgColor: string }>`
	${imageColumnContainerResponsiveCSS};
	background: url(${"/images/case-header-line.svg"}) no-repeat right top , ${props => props.bgColor};
	background-size: 80% auto;
	display: grid;
	grid-templates-columns: auto;
	grid-templates-rows: 1fr auto;
	align-items: end;
`;

const logoContainerResponsiveCSS = () => {

	const marginLeft = responsiveValuesCSS(
		"margin-left",
		"px",
		breakpointNameToPx({
			xs: 20,
			lg: 40,
			xxl: 60
		})
	);

	const marginRight = responsiveValuesCSS(
		"margin-right",
		"px",
		breakpointNameToPx({
			xs: 20,
			lg: 40,
			xxl: 60
		})
	);

	return marginLeft + marginRight;
};
const LogoContainer = styled.div`
	${logoContainerResponsiveCSS};
`;

type ImageColumnProps = {
	image: DeviceProps;
	logo: string;
	height: number;
	width: number;
	bgColor: string;
};
const ImageColumn = ({ image, logo, height, width, bgColor }: ImageColumnProps) => {

	const RenderImage = () => {
		if (image.type === "laptop") return <LaptopScreen image={`/images/${image.url}`} alt="image of application" height={210} />;
		return <Image src={`/images/${image.url}`} alt="image of application" width={246} height={372} />;
	};

	return (<ImageColumnContainer bgColor={bgColor}>
		<RenderImage />
		<LogoContainer>
			<Image src={`/images/${logo}`} alt="logo" height={height} width={width} layout="intrinsic" />
		</LogoContainer>
	</ImageColumnContainer>);
};

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


const CaseIntro = ({ title, subtitle, text, image, logo, color }: CaseIntroProps) => (
	<CaseIntroContainer>
		<TextColumn title={title} subtitle={subtitle} text={text} />
		<ImageColumn image={image} logo={logo.url} width={logo.width} height={logo.height} bgColor={color} />
	</CaseIntroContainer>
);

export default CaseIntro;