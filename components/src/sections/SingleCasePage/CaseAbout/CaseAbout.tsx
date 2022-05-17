import React from "react";
import { WithChildren } from "../../../types/utils";
import { Container, Paragraph, Subtitle } from "../../../components";
import styled from "styled-components";
import { breakpointNameToPx, responsiveValuesCSS } from "../../../helpers";
import { CaseAboutProps } from "../SingleCasePage.types";


const containerWithBackgroundResponsiveCSS = responsiveValuesCSS(
	"background",
	"",
	breakpointNameToPx({
		sm: `url(${"/images/case-about-portal.svg"}) no-repeat right 100px;`,
		lg: `url(${"/images/case-about-portal.svg"}) no-repeat right center;`
	})
);
const ContainerWithBackground = styled.div`
	${containerWithBackgroundResponsiveCSS};
`;

const caseAboutContainerResponsiveCSS = () => {
	const gridAreas = responsiveValuesCSS(
		"grid-template-areas",
		"",
		breakpointNameToPx({
			xs: "\"expertise\"" +
				"\"text\"",
			md: "\"text expertise\""
		})
	);
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			md: "1fr 1fr"
		})
	);
	return gridAreas + gridColumns;
};

const CaseAboutContainer = styled(Container)`
	${caseAboutContainerResponsiveCSS};
	display: grid;
	grid-gap: 60px;
	padding-top: 90px;
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 5px;
`;

const StyledSubtitle = styled(Subtitle)`
  margin-bottom: 5px;
  margin-top: 25px;
`;


const caseExpertiseDeliverablesContainerResponsiveCSS = () => {
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			sm: "1fr 1fr",
		})
	);

	const gridJustifyContent = responsiveValuesCSS(
		"justify-content",
		"",
		breakpointNameToPx({
			xs: "center",
			sm: "start",
		})
	);


	const gridGap = responsiveValuesCSS(
		"grid-gap",
		"",
		breakpointNameToPx({
			xs: "1em",
			sm: "2em",
			md: "3em"
		})
	);
	return gridColumns + gridGap + gridJustifyContent;
};

const RightColumn = styled.div`
	${caseExpertiseDeliverablesContainerResponsiveCSS};
	display: grid;
	grid-area: expertise;
	margin-bottom: 90px;
`;


const CaseAbout = ({ expertises, deliverables, children }: WithChildren<CaseAboutProps>) => (
	<ContainerWithBackground>
		<CaseAboutContainer>
			{ children }
			<RightColumn>
				<div>
					<StyledSubtitle fontWeight="bold" text="EXPERTISE" />
					{expertises.map((expertise, index) => <StyledParagraph key={index} text={expertise} />)}
				</div>
				<div>
					<StyledSubtitle fontWeight="bold" text="DELIVERABLES" />
					{deliverables.map((deliverable, index) => <StyledParagraph key={index} text={deliverable} />)}
				</div>
			</RightColumn>
		</CaseAboutContainer>
	</ContainerWithBackground>

);

export default CaseAbout;