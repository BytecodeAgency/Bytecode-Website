import React, { ReactNode } from "react";
import styled from "styled-components";
import { breakpointNameToPx, responsiveValuesCSS } from "../../helpers/responsiveCss";
import { Container, Heading, Paragraph, Subtitle } from "../../components";
import { WithStyle } from "../../types/utils";

const introContainerWithImageResponsiveCSS = (columnSizes = "1fr 1fr") => {
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			lg: columnSizes
		}));

	const paddingTop = responsiveValuesCSS(
		"padding-top",
		"px",
		breakpointNameToPx({
			md: 50,
			xl: 100
		})
	);
	return gridColumns + paddingTop;
};
const introContainerNoImageResponsiveCSS = (columnSizes = "1fr 1fr") => {
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			lg: columnSizes
		}));
	const paddingTop = responsiveValuesCSS(
		"padding-top",
		"px",
		breakpointNameToPx({
			lg: 50,
			xl: 160
		})
	);
	const paddingBottom = responsiveValuesCSS(
		"padding-bottom",
		"px",
		breakpointNameToPx({
			lg: 50,
			xl: 70,
		})
	);
	const gridColumnGap = responsiveValuesCSS(
		"grid-column-gap",
		"px",
		breakpointNameToPx({
			lg: 60,
			xxl: 100,
		})
	);
	return gridColumns + paddingBottom + paddingTop + gridColumnGap;
};

const IntroContainer = styled(Container)<{image?: boolean, columnSizes?: string}>`
	${props => props.image 
		? introContainerWithImageResponsiveCSS(props.columnSizes) 
		: introContainerNoImageResponsiveCSS(props.columnSizes)};
	display: grid;
	align-items: center;
	grid-column-gap: ${props => props.image ? "" : "60px"};
`;

const StyledIntroSubTitle = styled(Subtitle)`
	
`;
const styledIntroHeadingResponsiveCSS = responsiveValuesCSS(
	"padding-right",
	"%",
	breakpointNameToPx({
		sm: 30,
		md: 0
	}));
const StyledIntroHeading = styled(Heading)`
	${styledIntroHeadingResponsiveCSS};
`;
const introParagraphResponsiveCSS = () => responsiveValuesCSS("margin-bottom", "px", breakpointNameToPx({ xs: 0, lg: 100 }));

const StyledIntroParagraph = styled(Paragraph)`
	${introParagraphResponsiveCSS};
`;

type LeftColumnProps = {
	subtitle?: string;
	title: string;
	paragraph?: string;
};
const LeftColumn = ({ subtitle, title, paragraph }: LeftColumnProps) => (
	<div>
		{subtitle && <StyledIntroSubTitle text={subtitle} /> }
		<StyledIntroHeading type="h1" text={title} />
		{paragraph && <StyledIntroParagraph text={paragraph} />}
	</div>
);

const rightColumnContainerResponsiveCSS = responsiveValuesCSS(
	"margin-top",
	"px",
	breakpointNameToPx({
		xs:0,
		lg: 150,
		xl: 100
	})
);
const RightColumnContainer = styled.div`
	${rightColumnContainerResponsiveCSS};
	display: flex;
	flex-direction: column;
`;


type RightColumnProps = {
	image?: ReactNode;
	link?: ReactNode;
	paragraph?: string;
};

const RightColumn = ({ image, link, paragraph }: RightColumnProps) => {
	if(image){
		return (
			<>
				{image}
			</>
		);
	}
	if(!image && paragraph){
		return (
			<RightColumnContainer>
				<Paragraph text={paragraph}/>
				{ link }
			</RightColumnContainer>
		);
	}
	return null;
};

type PageIntroProps = {
	subtitle?: string;
	title: string;
	paragraph: string;
	columnSizes?: string;
	image?: ReactNode;
	link?: ReactNode;
}

const PageIntro = ({ subtitle, title, paragraph, image, columnSizes, link, className }: WithStyle<PageIntroProps>) => {

	return(
		<IntroContainer image={image != undefined} columnSizes={columnSizes} className={className}>
			<LeftColumn subtitle={subtitle} title={title} paragraph={image ? paragraph : undefined}/>
			<RightColumn image={image} paragraph={paragraph} link={link} />
		</IntroContainer>
	);
};

export default PageIntro;