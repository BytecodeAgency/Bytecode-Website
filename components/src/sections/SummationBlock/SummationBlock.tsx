import React from "react";
import { FullWidthContainer, Heading, Paragraph, Spacer, Subtitle } from "../../components";
import { breakpointNameToPx, responsiveValuesCSS } from "../../helpers";
import styled from "styled-components";
import { ThemeColors } from "../../theme";
import { SummationBlockProps } from "../SingleCasePage/SingleCasePage.types";

const fullContainerResponsiveCSS = () => {
	const display = responsiveValuesCSS(
		"display",
		"",
		breakpointNameToPx({
			xs: "none",
			lg: "flex"
		})
	);
	return display;
};

const Container = styled(FullWidthContainer)`
	position: relative;
	&:before{
		content: "";
		position: absolute;
		bottom: 200px;
		left: 0;
		background: url(${"/images/case-qoute-portal.svg"}) no-repeat left center;
		width: 500px;
		height: 500px;
		z-index: -1;
		${fullContainerResponsiveCSS};
	}
`;

const summmationBlockContainerResponsiveCSS = () => {
	const columns = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx({ xs: "1fr", md: "1fr 1fr" }));
	const gap = responsiveValuesCSS("grid-column-gap", "px", breakpointNameToPx({ xs: 50, xxl: 100 }));
	return columns + gap;
};

const SummationBlockContainer = styled(Container)`
	${summmationBlockContainerResponsiveCSS};
	display: grid;
	grid-template-rows: auto;
	padding-top: 80px;
	padding-bottom: 80px;
	&:before {
		background: unset;
	}
`;
const StyledTitle = styled(Heading)`
	margin-top: 50px;
`;
const titleParagraphResponsiveCSS = () => responsiveValuesCSS(
	"margin-bottom",
	"px",
	breakpointNameToPx({
		xs: 20,
		lg: 0,
		xl: 10,
		xxl: 20
	}));
const StyledTitleParagraph = styled(Paragraph)`
	${titleParagraphResponsiveCSS};
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

const StyledSpacer = styled(Spacer)`
	margin-left: -15px;
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
	<Container background={backgroundColor}>
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
	</Container>
);

export default SummationBlock;