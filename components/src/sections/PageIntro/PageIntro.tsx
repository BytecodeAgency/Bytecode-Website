import React, {ReactNode} from "react";
import {breakpointNameToPx, responsiveValuesCSS} from "../../helpers/responsiveCss";
import styled from "styled-components";
import {Heading, Paragraph, Subtitle} from "../../components";

const introContainerWithImageResponsiveCSS = (columnSizes = "1fr 1fr") => {
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			lg: columnSizes
		}));
	return gridColumns;
};
const introContainerNoImageResponsiveCSS = (columnSizes = "1fr 1fr") => {
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			lg: columnSizes
		}));
	return gridColumns;
};

const IntroContainer = styled.div<{image?: boolean, columnSizes?: string}>`
	${props => props.image 
		? introContainerWithImageResponsiveCSS(props.columnSizes) 
		: introContainerNoImageResponsiveCSS(props.columnSizes)};
	display: grid;
	align-items: center;
`;

const StyledIntroSubTitle = styled(Subtitle)`
	
`;
const styledIntroHeadingResponsiveCSS = responsiveValuesCSS(
	"padding-right",
	"%",
	breakpointNameToPx({
		xs: 30,
		md: 0
	}));
const StyledIntroHeading = styled(Heading)`
	${styledIntroHeadingResponsiveCSS};
`;
const introParagraphResponsiveCSS = () => responsiveValuesCSS("margin-bottom", "px", breakpointNameToPx({ xs: 0, lg: 100}));

const StyledIntroParagraph = styled(Paragraph)`
	${introParagraphResponsiveCSS};
	grid-area: paragraph;
`;

type LeftColumnProps = {
	subtitle: string;
	title: string;
	paragraph?: string;
};
const LeftColumn = ({subtitle, title, paragraph}: LeftColumnProps) => (
	<div>
		<StyledIntroSubTitle text={subtitle} />
		<StyledIntroHeading type="h1" text={title} />
		{paragraph && <StyledIntroParagraph text={paragraph} />}
	</div>
);

type RightColumnProps = {
	image?: ReactNode;
	link?: ReactNode;
	paragraph?: string;
};
const RightColumn = ({image, link, paragraph}: RightColumnProps) => {
	if(image){
		return (
			<>
				{image}
			</>
		);
	}
	if(link && paragraph){
		return (
			<div>
				<StyledIntroParagraph text={paragraph}/>
				{ link }
			</div>
		);
	}
	return null;
};

type PageIntroProps = {
	subtitle: string;
	title: string;
	paragraph: string;
	columnSizes?: string;
	image?: ReactNode;
	link?: ReactNode;
}

const PageIntro = ({ subtitle, title, paragraph, image, columnSizes, link }: PageIntroProps) => {

	return(
		<IntroContainer image={image != undefined} columnSizes={columnSizes}>
			<LeftColumn subtitle={subtitle} title={title} paragraph={image ? paragraph : undefined}/>
			<RightColumn image={image} paragraph={paragraph} link={link} />
		</IntroContainer>
	);
};

export default PageIntro;