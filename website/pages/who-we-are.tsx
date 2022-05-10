import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { Heading, InitialContainer, Container,  Spacer } from "@bytecode/ui-library/components";
import { Eye, Book, Arrows, PeopleArrows } from "@bytecode/ui-library/icons";
import {  IconTextBlock } from "@bytecode/ui-library/containers";
import { theme, breakpointNameToPx, responsiveValuesCSS, BreakpointKeyValue, employees } from "@bytecode/ui-library/utils";
import MainLayout from "layout/MainLayout";
import styled from "styled-components";
import { PageIntro, SummationBlock, SummationText, TeamMembers } from "@bytecode/ui-library/sections";

const content = {
	title: "Who is Bytecode?",
	metaDescription: "Bytecode is a technical partner and CTO for technology based start-ups."
};

const WhoWeAre: NextPage = () => {
	return (
		<MainLayout altBackgroundHeader content={content}>
			<WhoWeAreBody  />
		</MainLayout>
	);
};

const workingImageContainerResponsiveCSS = () => {
	const imageWidths = responsiveValuesCSS("width", "", breakpointNameToPx({ xs: "100vw", lg: "100%" }));
	const marginLeft = responsiveValuesCSS("margin-left", "px", breakpointNameToPx({ xs: -24, md:-32, lg: 32, xl: 48, xxl: 64 }));
	const top = responsiveValuesCSS("top", "px", breakpointNameToPx({ xs: 25, lg: 150, xl: 200, xxl: 250 }));
	return imageWidths + top + marginLeft;
};

const WorkingImageContainer = styled.div`
	${workingImageContainerResponsiveCSS};
	position: relative;
`;

const StyledImage = styled.img`
	width: 100%;
`;

const Intro = () => (
	<InitialContainer background={theme.colors.colorBrand2}>
		<PageIntro
			subtitle="Who are we?"
			title="Meet the people in the team."
			paragraph="Learn what defines use as a team, as a company and who we personally are"
			image={
				(
					<WorkingImageContainer>
						<StyledImage
							src="/images/who-we-are-working.png"
							alt="Members of Bytecode working"
						/>
					</WorkingImageContainer>
				)
			}
		/>
	</InitialContainer>
);

const CompentencesBackground = styled.div`
	background: url(${"/images/who-we-are-line.svg"}) no-repeat left bottom;
`;

const competencesContainerResponsiveCSS = () => {
	const paddingTop = responsiveValuesCSS("padding-top", "px", breakpointNameToPx({ xs: 80, lg: 200, xl: 240, xxl: 300 }));
	const paddingBottom = responsiveValuesCSS("padding-bottom", "px", breakpointNameToPx({ xs: 80, lg: 60 }));
	const paddingLeft = responsiveValuesCSS("padding-left", "%", breakpointNameToPx({ lg: 10, xl: 10 }));
	return paddingTop + paddingBottom + paddingLeft;
};

const CompetencesContainer = styled.div`
	${competencesContainerResponsiveCSS};
`;
const styledCompetencesSpacerResponsiveCSS = responsiveValuesCSS(
	"margin-left",
	"px",
	breakpointNameToPx({
		xs: 12,
		md: 16,
		lg: 32,
		xl: 48,
		xxl: 64
	}));
const StyledCompetencesSpacer = styled(Spacer)`
	${styledCompetencesSpacerResponsiveCSS};
	width: 100%;
`;
const spacerContainerResponsiveCSS = responsiveValuesCSS(
	"padding-left",
	"%",
	breakpointNameToPx({
		xs: 20,
		md: 0
	})
);
const SpacerContainer = styled.div`
	${spacerContainerResponsiveCSS};
`;
const compentencesHeadingResponsiveCSS = () => {
	const marginLeft = responsiveValuesCSS("margin-left", "px", breakpointNameToPx({ xs: 0, md: 30, lg: 40, xl: 60 }));
	const width = responsiveValuesCSS("width", "%", breakpointNameToPx({ xs: 90, lg: 35, xl: 40, xxl: 35 }));
	return marginLeft + width;
};
const StyledCompentencesHeading = styled(Heading)`
	${compentencesHeadingResponsiveCSS};
	margin-top: 30px;
	margin-bottom: 20px;
`;

const iconBlocksContainerResponsiveCSS = () => {
	const values: BreakpointKeyValue = {
		xs: "auto",
		md: "1fr 1fr"
	};
	const columns = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx(values));
	const rows = responsiveValuesCSS("grid-template-rows", "", breakpointNameToPx(values));
	const paddingLeft = responsiveValuesCSS("padding-left", "%", breakpointNameToPx({ xs:0, lg: 15, xl: 20 }));
	return columns + rows + paddingLeft;
};
const IconBlocksContainer = styled.div`
	${iconBlocksContainerResponsiveCSS};
	display: grid;
	grid-column-gap: 20px;
`;

const Competences = () => (
	<CompentencesBackground>
		<Container>
			<CompetencesContainer>
				<SpacerContainer>
					<StyledCompetencesSpacer color="black"/>
				</SpacerContainer>
				<StyledCompentencesHeading type="h2" text="What we bring to the table." />
				<IconBlocksContainer>
					<IconTextBlock
						title="Transparent"
						text="Transparency is one of the core components of a successful working relationship.We tell you what you can expect from us, and what we want from you. We will give our honest opinion on your startup idea and give tips to improve."
						icon={Eye}
					/>
					<IconTextBlock
						icon={Book}
						title="Knowledgeable"
						text="With our guidance, you can avoid or overcome common pitfalls that we have seen many startup founders get trapped in. We love to share our knowledge through strategic sessions and online webinars."
					/>
					<IconTextBlock
						icon={PeopleArrows}
						title="Personal"
						text="We tailor the startup experience and knowledge we have to your idea and product. Every startup and founder is different. Our team will complement yours and fulfill the role of a tech co-founder and CTO."
					/>
					<IconTextBlock
						icon={Arrows}
						title="Versatile"
						text="Apart from “just” developing your product idea into a working and amazing product, we support you throughout the whole process: strategizing, defining, designing, and only then developing. We are flexible and adjust our work to fit the stage your startup is in."
					/>
				</IconBlocksContainer>
			</CompetencesContainer>
		</Container>
	</CompentencesBackground>

);

const MeetingImageContainer = styled.div`
	height: 400px;
	position: relative;
`;

const summationText: SummationText[] = [
	{
		title: "We are all in this together",
		text: "You know the users. We know tech stuff. Together we understand a lot of things. We believe the best work happens when we don't think of ourselves as client and agency, but as one team."
	},
	{
		title: "Do and learn.",
		text: "We believe that skills come with experience. We are not afraid to make mistakes and learn from them. Sometimes we figure out ways to do things better and faster. We don't get stuck in the old, we innovate."
	},
	{
		title: "High in energy!",
		text: "We love to work with founders that are passionate about their idea. Enthusiasm is contagious, so if you are willing to change the world, then so are we!"
	}
];

const Values = () => (
	<SummationBlock
		title="Things we value the most."
		titleText="Sometimes a narrow collaboration can be like a marriage. Before you ‘sign the contract’, you want to know who the other person is and what life together will look like. To give you a feeling and better understanding of how we would work together during the project, we present to you our values."
		summationText={summationText}
		backgroundColor={theme.colors.colorBrand3}
		textColor="white"
		image={
			<MeetingImageContainer>
				<Image
					src="/images/who-are-we-working2.png"
					layout="fill"
					alt="Members of Bytecode in a meeting"
					objectFit="contain"
				/>
			</MeetingImageContainer>
		}
	/>
);

const WhoWeAreBody = () => (
	<div>
		<Intro/>
		<Competences/>
		<Values/>
		<TeamMembers members={employees} />
	</div>
);


export default WhoWeAre;
