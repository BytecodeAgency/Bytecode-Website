import React from "react";
import { FullWidthContainer, Heading, Paragraph, Container, Spacer, Subtitle } from "../../components";
import { breakpointNameToPx, responsiveValuesCSS } from "../../helpers";
import styled from "styled-components";
import { ThemeColors } from "../../theme";
import { SummationBlockProps } from "../SingleCasePage/SingleCasePage.types";


const summmationBlockContainerResponsiveCSS = () => {
	const columns = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx({ xs: "auto", lg: "1fr 1fr" }));
	const gap = responsiveValuesCSS("grid-column-gap", "px", breakpointNameToPx({ xs: 50, xxl: 100 }));
	return columns + gap;
};

const SummationBlockContainer = styled(Container)`
	${summmationBlockContainerResponsiveCSS};
	display: grid;
	grid-template-rows: auto;
	padding-top: 80px;
	padding-bottom: 80px;
`;
const StyledTitle = styled(Heading)`
	margin-top: 50px;
	padding-left: 20px;
`;
const titleParagraphResponsiveCSS = () => responsiveValuesCSS(
	"margin-bottom",
	"px",
	breakpointNameToPx({
		xs: 50,
		lg:0,
		xl: 10,
		xxl: 20
	}));
const StyledTitleParagraph = styled(Paragraph)`
	${titleParagraphResponsiveCSS};
	padding-left: 20px;
	margin-top: 10px;
`;
const summationContainerResponsiveCSS = () => responsiveValuesCSS("margin-top", "px", breakpointNameToPx({ xs: 35, lg: 20 }));
const SummationContainer = styled.div`
	${summationContainerResponsiveCSS};
`;

const LeftColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;
const RightColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

const styledValuesSpacerResponsiveCSS = responsiveValuesCSS(
	"margin-left",
	"px",
	breakpointNameToPx({
		xs: 12,
		md: 16,
		lg: 0,
		xl: 0,
		xxl: 0
	}));
const StyledSpacer = styled(Spacer)`
	${styledValuesSpacerResponsiveCSS};
	width: 100%;
`;

type SingleSummationProps = {
	index: number;
	title: string;
	text: string;
	color: ThemeColors;
}

const SingleSummation = ({ index, title, text, color }: SingleSummationProps) => (
	<SummationContainer>
		<Subtitle text={`${index}.`} color={color} fontWeight="bold"/>
		<Heading type="h4" text={title} color={color} />
		<Paragraph text={text} color={color} />
	</SummationContainer>
);

const SummationBlock = ({ title, titleText, summationText, backgroundColor, textColor = "black", image }: SummationBlockProps) => (
	<FullWidthContainer background={backgroundColor}>
		<SummationBlockContainer>
			<LeftColumn>
				<StyledSpacer color={textColor === "white" ? "white" : "black"} bold/>
				<StyledTitle type="h2" text={title} color={textColor} />
				<StyledTitleParagraph text={titleText} color={textColor} />
				{ image }
			</LeftColumn>
			<RightColumn>
				{
					summationText.map((summation, index) =>
						<SingleSummation key={index} index={index+1} title={summation.title} text={summation.text} color={textColor} />)
				}
			</RightColumn>
		</SummationBlockContainer>
	</FullWidthContainer>
);

export default SummationBlock;