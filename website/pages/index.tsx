import React from "react";
import type { NextPage } from "next";
import { ArrowLink, Container, InitialContainer, Heading, Paragraph } from "@bytecode/ui-library/components";
import { IconSummaryBlock } from "@bytecode/ui-library/containers";
import { Book, Handshake, Tracking, List, PencilAndRuler, DeveloperMode, Handshake2  } from "@bytecode/ui-library/icons";
import MainLayout from "layout/MainLayout";
import styled from "styled-components";
import { breakpointNameToPx, responsiveValuesCSS } from "@bytecode/ui-library/utils";
import Image from "next/image";

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

const ProcessText = () => (
	<div>
		<Heading type="h2" text="Our process" />
		<Paragraph text="Quisque ullamcorper nec tellus id consectetur.
			Quisque in dui scelerisque, hendrerit nibh a, malesuada purus.
			Vivamus arcu turpis, congue id nibh id, pharetra pharetra lacus."
		/>
		{/*TODO: change arrowlink to link to /services page*/}
		<ArrowLink onClick={()=>console.log("go to /services")} text="See how we work" />
	</div>
);

const StyledIconSummaryBlock = styled(IconSummaryBlock)`
	align-self: start;
`;

const IconSummaryBlockContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 800px;
`;

const ProcessSummaryContainer = styled.div`
	display: grid;
	grid-template-columns: 130px 500px;
	height: 800px;
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
	padding-top: 40px;
	padding-bottom: 40px;
	display: grid;
	grid-column-gap: 40px;
`;
const OurProcess = () => (
	<OurProcessContainer>
		<ProcessText />
		<ProcessSummary />
	</OurProcessContainer>
);

const HomeBody = () => (
	<div>
		<InitialContainer>
			heading of page
		</InitialContainer>
		<OurProcess />
	</div>
);

export default Home;
