import React from "react";
import styled from "styled-components";
import { FullWidthContainer, Heading, Paragraph, Container, ArrowLink, Spacer } from "../../../components";
import { breakpointNameToPx, responsiveValuesCSS } from "../../../index";
import Image from "next/image";
import { DeveloperMode, Handshake, List, PencilAndRuler, Tracking } from "../../../icons";
import { IconSummaryBlock } from "../../../containers";

const ProcessTextContainer = styled.div`
	margin-bottom: 80px;
`;

const ProcessText = () => (
	<ProcessTextContainer>
		<Heading type="h2" text="Our process" />
		<Paragraph text="What steps lead to a first working version of your concept?
			How do you improve and optimize your MVP? The following steps will give you a clear overview of our process. "
		/>
		<ArrowLink link="/what-we-do" text="See how we work" />
	</ProcessTextContainer>
);

const StyledIconSummaryBlock = styled(IconSummaryBlock)`
	align-self: start;
	margin-bottom: 20px;
`;

const iconSummaryBlockContainerResponsiveCSS = responsiveValuesCSS(
	"height",
	"px",
	breakpointNameToPx({
		xs: 950,
		sm: 800
	})
);
const IconSummaryBlockContainer = styled.div`
	${iconSummaryBlockContainerResponsiveCSS};
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const processSummaryContainerResponsiveCSS = () => {
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "130px 1fr",
			md: "130px 500px"
		})
	);
	const height = responsiveValuesCSS(
		"height",
		"px",
		breakpointNameToPx({
			xs: 950,
			sm: 800
		})
	);
	return gridColumns + height;
};

const ProcessSummaryContainer = styled.div`
	${processSummaryContainerResponsiveCSS};
	display: grid;
	align-content: start;
`;

const ProcessSummary = () => (
	<ProcessSummaryContainer>
		<Image src="/images/process-image.svg" alt="lines of process" height={754} width={83} />
		<IconSummaryBlockContainer>
			<StyledIconSummaryBlock
				Icon={Handshake}
				title="Introduction"
				paragraph="Identify a problem, come up with a solution, and get acquainted with the market."
			/>
			<StyledIconSummaryBlock
				Icon={Tracking}
				title="Learn from our users"
				list={[
					"Send surveys",
					"Perform interviews",
					"Optimize and improve"
				]}
			/>
			<StyledIconSummaryBlock
				Icon={List}
				title="Prioritize"
				paragraph="Determine what to develop and what the user's minimal requirements are
				to reach their goal."
			/>
			<StyledIconSummaryBlock
				Icon={PencilAndRuler}
				title="Visualize"
				list={[
					"Create a user flow and experience",
					"Draft a user interface",
					"Prototype"
				]}
			/>
			<StyledIconSummaryBlock
				Icon={DeveloperMode}
				title="MVP Development"
				paragraph="Create a first working version of your concept or add new features. 2-week sprints.
				Alpha and beta tests. Deployment and live."
			/>
		</IconSummaryBlockContainer>
	</ProcessSummaryContainer>

);


const processSpacerResponsiveCSS = () => {
	const marginLeft = responsiveValuesCSS(
		"margin-left",
		"%",
		breakpointNameToPx({
			lg: 30
		})
	);
	return marginLeft;
};

const ProcessSpacerContainer = styled.div`
	${processSpacerResponsiveCSS};
`;

const processContainerResponsiveCSS =  responsiveValuesCSS(
	"background-size",
	"",
	breakpointNameToPx({
		xs: "40%",
		lg: "auto auto"
	})
);
const ProcessContainer = styled(FullWidthContainer)`
	${processContainerResponsiveCSS};
	background: url(${"/images/home-process-line.svg"}) no-repeat top left;
	padding-top: 80px;
	padding-bottom: 80px;
`;

const ourProcessContainerResponsiveCSS = () => {
	const padding = responsiveValuesCSS(
		"padding",
		"",
		breakpointNameToPx({
			xs: "40px 0 60px 0",
			lg: "120px 70px 200px 100px",
			xl: "120px 70px 200px 150px"
		})
	);
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			lg: "1fr 2fr",
		})
	);
	return gridColumns + padding;
};
const OurProcessContainer = styled(Container)`
	${ourProcessContainerResponsiveCSS};
	display: grid;
	grid-column-gap: 40px;
`;
const OurProcess = () => (
	<ProcessContainer>
		<ProcessSpacerContainer>
			<Spacer bold />
		</ProcessSpacerContainer>
		<OurProcessContainer>
			<ProcessText />
			<ProcessSummary />
		</OurProcessContainer>
	</ProcessContainer>
);

export default OurProcess;