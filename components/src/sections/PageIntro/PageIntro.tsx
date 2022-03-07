import React, {ReactNode} from "react";
import {breakpointNameToPx, responsiveValuesCSS} from "../../helpers/responsiveCss";
import styled from "styled-components";
import {Heading, Paragraph, Subtitle} from "../../components";

/*
type LinkProps = {
	external?: boolean;
	url: string;
	text: string;
	caption: string;
}
TODO: this type will be added with the development of the cases page
 */
type PageIntroProps = {
	subtitle: string;
	title: string;
	paragraph: string;
	columnSizes?: string;
	image?: ReactNode;
	//link?: LinkProps; TODO: this variable will be added with the development of the cases page
}

const introContainerWithImageResponsiveCSS = (columnSizes = "1fr 1fr") => {

	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "3fr 1fr 1fr 1fr;",
			lg: columnSizes
		}));
	const gridRows = responsiveValuesCSS(
		"grid-template-rows",
		"",
		breakpointNameToPx({
			xs: "auto",
			lg: "100px 130px 200px",
			xl: "150px 130px 200px"
		}));
	const gridAreas = responsiveValuesCSS(
		"grid-template-areas",
		"",
		breakpointNameToPx({
			xs: "\"subtitle subtitle . .\" " +
				"\"heading heading . .\" " +
				"\"paragraph paragraph paragraph.\" " +
				"\"image image image image\"",
			lg: "\"subtitle image\" " +
				"\"heading image\" " +
				"\"paragraph image\" "
		}));

	return gridColumns + gridAreas + gridRows;
};

const IntroContainer = styled.div<{image?: boolean, columnSizes?: string}>`
	${props => props.image ? introContainerWithImageResponsiveCSS(props.columnSizes) : ""};
	display: grid;
	align-items: center;
`;

const StyledIntroSubTitle = styled(Subtitle)`
	grid-area: subtitle;
`;
const StyledIntroHeading = styled(Heading)`
	grid-area: heading;
`;
const introParagraphResponsiveCSS = () => responsiveValuesCSS("margin-bottom", "px", breakpointNameToPx({ xs: 0, lg: 100}));

const StyledIntroParagraph = styled(Paragraph)`
	${introParagraphResponsiveCSS};
	grid-area: paragraph;
`;

const PageIntro = ({ subtitle, title, paragraph, image, columnSizes }: PageIntroProps) => {

	return(
		<IntroContainer image={image != undefined} columnSizes={columnSizes}>
			<StyledIntroSubTitle text={subtitle}/>
			<StyledIntroHeading type="h1" text={title}/>
			<StyledIntroParagraph text={paragraph}/>
			{image}
		</IntroContainer>
	);
};

export default PageIntro;