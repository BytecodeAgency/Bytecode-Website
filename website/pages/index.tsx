import React from "react";
import type { NextPage } from "next";
import { MeetTheFounders, Intro, WhoIsBytecode } from "@bytecode/ui-library/home-page";
import MainLayout from "layout/MainLayout";
import styled from "styled-components";
import { breakpointNameToPx, responsiveValuesCSS, theme } from "@bytecode/ui-library/utils";
import Image from "next/image";
import { CollapsibleText, IconSummaryBlock } from "@bytecode/ui-library/containers";
import {
	ArrowLink,
	Container,
	Heading,
	Paragraph,
	Spacer,
	FullWidthContainer
} from "@bytecode/ui-library/components";
import { Handshake, Tracking, List, PencilAndRuler, DeveloperMode  } from "@bytecode/ui-library/icons";

const content = {
	title: "Bytecode",
	metaDescription: "Bytecode is a technical partner and CTO for technology based start-ups."
};

const Home: NextPage = () => {
	return (
		<MainLayout content={content}>
			<HomeBody />
		</MainLayout>
	);
};

const howDoWeWannaContainerResponsiveCSS = () => {
	const background = responsiveValuesCSS(
		"background",
		"",
		breakpointNameToPx({
			xs: `url(${"/images/home-line2-mobile.svg"}) no-repeat left bottom , ${theme.colors.colorBrand4};`,
			lg: `url(${"/images/home-line2.svg"}) no-repeat left bottom, ${theme.colors.colorBrand4};`
		})
	);
	const minHeight = responsiveValuesCSS(
		"min-height",
		"px",
		breakpointNameToPx({
			xs: 600,
			lg: 700
		})
	);
	return background + minHeight;
};
const HowDoWeWannaContainer = styled(FullWidthContainer)`
	${howDoWeWannaContainerResponsiveCSS};
`;

const howDoWeWannaContentContainerResponsiveCSS = () => {
	const padding = responsiveValuesCSS(
		"padding",
		"",
		breakpointNameToPx({
			xs: "40px 0 60px 0",
			lg: "200px 70px 200px 100px",
			xl: "200px 70px 200px 150px"
		})
	);
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			lg: "1fr 1fr",
		})
	);
	return padding + gridColumns;
};

const HowDoWeWannaContentContainer = styled(Container)`
	${howDoWeWannaContentContainerResponsiveCSS};
	display: grid;
`;


const StyledHeading = styled(Heading)`
	margin-bottom: 40px;
`;

const CollapsibleTextContainer = styled.div`
	justify-self: center;
`;

const StyledCollapsibleText = styled(CollapsibleText)`
	margin-bottom: 30px;
`;

const HowDoWeWanna = () => (
	<HowDoWeWannaContainer>
		<HowDoWeWannaContentContainer>
			<StyledHeading type="h1" text="How do we wanna work together?" color="white" />
			<CollapsibleTextContainer>
				<StyledCollapsibleText
					title="As a team, no client-agency relationship"
					description="Aenean vitae lectus non nulla pulvinar
						imperdiet et at ligula. Cras mattis dui sed urna tempus feugiat. In sagittis,
						mi iaculis cursus pharetra, magna ligula pulvinar augue, nec faucibus lacus arcu in nunc.
						Aliquam dapibus posuere laoreet. Nullam vel diam id risus fringilla efficitur."
					color="white"
				/>
				<StyledCollapsibleText
					title="Learning and improving on the way"
					description="Aenean vitae lectus non nulla pulvinar
						imperdiet et at ligula. Cras mattis dui sed urna tempus feugiat. In sagittis,
						mi iaculis cursus pharetra, magna ligula pulvinar augue, nec faucibus lacus arcu in nunc.
						Aliquam dapibus posuere laoreet. Nullam vel diam id risus fringilla efficitur."
					color="white"
				/>
				<StyledCollapsibleText
					title="We want to work with passionate founders who want to 'scratch their own itch'"
					description="Aenean vitae lectus non nulla pulvinar
						imperdiet et at ligula. Cras mattis dui sed urna tempus feugiat. In sagittis,
						mi iaculis cursus pharetra, magna ligula pulvinar augue, nec faucibus lacus arcu in nunc.
						Aliquam dapibus posuere laoreet. Nullam vel diam id risus fringilla efficitur."
					color="white"
				/>
			</CollapsibleTextContainer>
		</HowDoWeWannaContentContainer>
	</HowDoWeWannaContainer>

);


const ProcessTextContainer = styled.div`
	margin-bottom: 80px;
`;

const ProcessText = () => (
	<ProcessTextContainer>
		<Heading type="h2" text="Our process" />
		<Paragraph text="Quisque ullamcorper nec tellus id consectetur.
			Quisque in dui scelerisque, hendrerit nibh a, malesuada purus.
			Vivamus arcu turpis, congue id nibh id, pharetra pharetra lacus."
		/>
		{/*TODO: change arrowlink to link to /services page*/}
		<ArrowLink onClick={()=>console.log("go to /services")} text="See how we work" />
	</ProcessTextContainer>
);

const StyledIconSummaryBlock = styled(IconSummaryBlock)`
	align-self: start;
`;

const iconSummaryBlockContainerResponsiveCSS = responsiveValuesCSS(
	"height",
	"px",
	breakpointNameToPx({
		xs: 950,
		md: 800
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
			md: 800
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
		"px",
		breakpointNameToPx({
			lg: 200
		})
	);
	const marginBottom = responsiveValuesCSS(
		"margin-bottom",
		"px",
		breakpointNameToPx({
			xs: 40,
			lg: 80
		})
	);
	return marginBottom + marginLeft;
};
const ProcessSpacer = styled(Spacer)`
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
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			lg: "1fr 1fr",
		})
	);
	return gridColumns;
};
const OurProcessContainer = styled(Container)`
	${ourProcessContainerResponsiveCSS};
	display: grid;
	grid-column-gap: 40px;
`;
const OurProcess = () => (
	<ProcessContainer>
		<ProcessSpacer bold/>
		<OurProcessContainer>
			<ProcessText />
			<ProcessSummary />
		</OurProcessContainer>
	</ProcessContainer>
);


const HomeBody = () => (
	<div>
		<Intro />
		<WhoIsBytecode />
		<HowDoWeWanna />
		<OurProcess />
		<MeetTheFounders />
	</div>
);

export default Home;
