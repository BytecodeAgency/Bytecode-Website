import React, {ReactNode} from "react";
import {Container, Heading, InitialContainer, Paragraph, Subtitle} from "../../../components";
import styled from "styled-components";
import {breakpointNameToPx, responsiveValuesCSS} from "../../../helpers";
import {theme} from "../../../theme";
import Image from "next/image";

type TextColumnProps = {
	title: string;
	subtitle: string;
	text: string;
}
const TextColumn = ({title, subtitle, text}: TextColumnProps) => (
	<InitialContainer>
		<Subtitle text={subtitle} />
		<Heading type="h1" text={title} />
		<Paragraph text={text} />
	</InitialContainer>
);

const ImageColumnContainer = styled.div`
	background: url(${"/images/case-header-line.svg"}) no-repeat right top , ${theme.colors.colorBrand2};
	background-size: 80% auto;
	padding-top: 70px;
	display: flex;
	flex-direction: row;
	align-items: flex-end;
`;

const LogoContainer = styled.div`
	margin: 20px;
`;

type ImageColumnProps = {
	image: string;
	logo: string;
};
const ImageColumn = ({image, logo}: ImageColumnProps) => (
	<ImageColumnContainer>
		<LogoContainer>
			<Image src={`/images/${logo}`} alt="logo" height={55} width={75}/>
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

type CaseIntroProps = {
	title: string;
	subtitle: string;
	text: string;
	image: string;
	logo: string;
}
const CaseIntro = ({title, subtitle, text, image, logo}: CaseIntroProps) => (
	<CaseIntroContainer>
		<TextColumn title={title} subtitle={subtitle} text={text} />
		<ImageColumn image={image} logo={logo} />
	</CaseIntroContainer>
);

export default CaseIntro;