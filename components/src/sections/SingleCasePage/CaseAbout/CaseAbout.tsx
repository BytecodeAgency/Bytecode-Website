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
		sm: `url(${"/images/case-about-portal.svg"}) no-repeat right top;`,
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
			lg: "\"text expertise\""
		})
	);
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			lg: "1fr 1fr"
		})
	);
	return gridAreas + gridColumns;
};

const CaseAboutContainer = styled(Container)`
	${caseAboutContainerResponsiveCSS};
	display: grid;
	padding-top: 90px;
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 5px;
`;

const StyledSubtitle = styled(Subtitle)`
  margin-bottom: 5px;
  margin-top: 25px;
`;

const RightColumn = styled.div`
	justify-self: center;
	grid-area: expertise;
	margin-bottom: 90px;
`;


const CaseAbout = ({ expertises, deliverables, children }: WithChildren<CaseAboutProps>) => (
	<ContainerWithBackground>
		<CaseAboutContainer>
			{ children }
			<RightColumn>
				<StyledSubtitle fontWeight="bold" text="EXPERTISE" />
				{expertises.map((expertise, index)=><StyledParagraph key={index} text={expertise} />)}
				<StyledSubtitle fontWeight="bold" text="DELIVERABLES" />
				{deliverables.map((deliverable, index)=><StyledParagraph key={index} text={deliverable} />)}
			</RightColumn>
		</CaseAboutContainer>
	</ContainerWithBackground>

);

export default CaseAbout;