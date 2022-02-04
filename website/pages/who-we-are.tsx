import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {Heading, Paragraph, InitialContainer, theme, Container, Spacer, Eye, Book, Arrows, PeopleArrows, IconTextBlock, Subtitle, breakpointNameToPx, responsiveValuesCSS, BreakpointKeyValue} from "@bytecode/components";
import MainLayout from "layout/MainLayout";
import styled from "styled-components";
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

const introContainerResponsiveCSS = () => {
	const gridColumnValues: BreakpointKeyValue = {
		xs: "3fr 1fr 1fr 1fr;",
		lg: "1fr 1fr"
	};
	const gridColumns = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx(gridColumnValues));
	const gridRowValues: BreakpointKeyValue = {
		xs: "auto",
		xl: "100px 130px 200px"
	};
	const gridRows = responsiveValuesCSS("grid-template-rows", "", breakpointNameToPx(gridRowValues));
	const gridAreaValues: BreakpointKeyValue = {
		xs: "\"subtitle subtitle . .\" " +
			"\"heading heading . .\" " +
			"\"paragraph paragraph paragraph.\" " +
			"\"image image image image\"",
		lg: "\"subtitle image\" " +
			"\"heading image\" " +
			"\"paragraph image\" "
	};
	const gridAreas = responsiveValuesCSS("grid-template-areas", "", breakpointNameToPx(gridAreaValues));

	return gridColumns + gridAreas + gridRows;
};

const IntroContainer = styled.div`
	${introContainerResponsiveCSS};
	display: grid;
	align-items: center;
	`;
const workingImageContainerResponsiveCSS = () => {
	const imageHeightValues: BreakpointKeyValue = {
		xs: 300,
		sm: 400,
		md: 500,
		lg: 300,
		xl: 400,
	};
	const imageHeights = responsiveValuesCSS("height", "px", breakpointNameToPx(imageHeightValues));
	const imageWidthValues: BreakpointKeyValue = {
		xs: "100vw",
		lg: "100%",
	};
	const imageWidths = responsiveValuesCSS("width", "", breakpointNameToPx(imageWidthValues));
	const leftValues = {
		xs: "calc(-50vw + 50%);",
		lg: "32px",
		xl: "48px",
		xxl: "64px"
	};
	const left = responsiveValuesCSS("left", "", breakpointNameToPx(leftValues));
	const topValues = {
		xs: 25,
		lg: 150,
		xl: 200,
	};
	const top = responsiveValuesCSS("top", "px", breakpointNameToPx(topValues));
	return imageHeights + imageWidths + left + top;
};

const WorkingImageContainer = styled.div`
	${workingImageContainerResponsiveCSS};
	position: relative;
	grid-area: image;
`;
const StyledIntroSubTitle = styled(Subtitle)`
	grid-area: subtitle;
`;
const StyledIntroHeading = styled(Heading)`
	grid-area: heading;
`;
const introParagraphResponsiveCSS = () => {
	const marginValues: BreakpointKeyValue = {
		xs: 0,
		lg: 100
	};
	const marginBottom = responsiveValuesCSS("margin-bottom", "px", breakpointNameToPx(marginValues));
	return marginBottom;
};

const StyledIntroParagraph = styled(Paragraph)`
	${introParagraphResponsiveCSS};
	grid-area: paragraph;
`;

const Intro = () => (
	<InitialContainer background={theme.colors.colorBrand2}>
		<IntroContainer>
			<StyledIntroSubTitle text="Who are we?"/>
			<StyledIntroHeading type="h1" text="Meet the people in the team."/>
			<StyledIntroParagraph text="Learn what defines use as a team, as a company and who we personally are" />
			<WorkingImageContainer>
				<Image
					src="/images/who-we-are-working.png"
					layout="fill"
					alt="Members of Bytecode working"
					objectFit="contain"
				/>
			</WorkingImageContainer>
		</IntroContainer>
	</InitialContainer>
);
const competencesContainerResponsiveCSS = () => {
	const paddingTopValues: BreakpointKeyValue = {
		xs: 80,
		lg: 175,
		xl: 200,
		xxl: 200
	};
	const paddingTop = responsiveValuesCSS("padding-top", "px", breakpointNameToPx(paddingTopValues));

	const paddingBottomValues: BreakpointKeyValue = {
		xs: 80,
		lg: 60
	};
	const paddingBottom = responsiveValuesCSS("padding-bottom", "px", breakpointNameToPx(paddingBottomValues));

	const gridColumnValues: BreakpointKeyValue = {
		xs: "1fr 3fr 1fr",
		lg: "1fr 1fr 2fr 3fr",
	};
	const gridColumns = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx(gridColumnValues));

	const gridTemplateAreaValues: BreakpointKeyValue = {
		xs: "\". spacer spacer\" " +
			"\"title title .\" " +
			"\"icon-block icon-block icon-block\"",
		lg: "\". spacer spacer spacer\" " +
			"\". title title . \" " +
			"\". . icon-block icon-block\"",
	};
	const gridTemplateAreas = responsiveValuesCSS("grid-template-areas", "", breakpointNameToPx(gridTemplateAreaValues));

	return paddingTop + gridColumns + gridTemplateAreas + paddingBottom;
};
const CompetencesContainer = styled.div`
	${competencesContainerResponsiveCSS};
	padding-bottom: 80px;
	display: grid;
	grid-template-rows: auto;
`;
const StyledCompetencesSpacer = styled(Spacer)`
	grid-area: spacer;
`;
const compentencesHeadingResponsiveCSS = responsiveValuesCSS("margin-left", "px", breakpointNameToPx({xs: 0, lg: 40}));
const StyledCompentencesHeading = styled(Heading)`
	${compentencesHeadingResponsiveCSS};
	grid-area: title;
	margin-top: 50px;
	margin-bottom: 20px;
`;

const iconBlocksContainerResponsiveCSS = () => {
	const values: BreakpointKeyValue = {
		xs: "auto",
		lg: "1fr 1fr"
	};
	const columns = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx(values));
	const rows = responsiveValuesCSS("grid-template-rows", "", breakpointNameToPx(values));
	return columns + rows;
};
const IconBlocksContainer = styled.div`
	${iconBlocksContainerResponsiveCSS};
	display: grid;
	grid-area: icon-block;
`;

const Competences = () => (
	<Container>
		<CompetencesContainer>
			<StyledCompetencesSpacer color="black"/>
			<StyledCompentencesHeading type="h2" text="What we bring to the table." />
			<IconBlocksContainer>
				<IconTextBlock
					title="Transparent"
					text="We tell you what you can expect from us, and what we want from you.
					We will give our honest opinion on your start-up idea and give tips to improve.
					Only full transparency can help you really grow.
					According to us, transparency is one of the core components of a successful working relationship."
					icon={Eye}
				/>
				<IconTextBlock
					icon={Book}
					title="Knowledgeable"
					text="We are working closely together with start-ups for some time.
					That is why we have the experience and skills to help you.
					With our guidance, you can avoid or overcome common pitfalls
					that we have seen many founders get trapped in.
					We love to share our knowledge through strategic sessions and online webinars."
				/>
				<IconTextBlock
					icon={PeopleArrows}
					title="Personal"
					text="Every start-up and founder is different. 
					This is why we always evaluate your specific situation. 
					We tailor the experience and knowledge we have to your idea and product. 
					In addition, we work closely together with you. 
					Our team will complement yours, and take the role of technical lead."
				/>
				<IconTextBlock
					icon={Arrows}
					title="Versatile"
					text="Apart from “just” developing your product idea into a working and amazing product,
					we support you throughout the whole process: strategizing, defining,
					designing and only then developing.
					We are flexible and adjust our work to fit the stage your startup is in."
				/>
			</IconBlocksContainer>
		</CompetencesContainer>
	</Container>
);

const valuesContainerResponsiveCSS = () => {
	const columnValues: BreakpointKeyValue = {
		xs: "auto",
		lg: "1fr 1fr"
	};
	const columns = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx(columnValues));
	return columns;
};

const ValuesContainer = styled.div`
	${valuesContainerResponsiveCSS};
	display: grid;
	grid-column-gap: 50px;
	grid-template-rows: auto;
	padding-top: 80px;
	padding-bottom: 80px;
`;
const StyledValuesHeading = styled(Heading)`
	margin-top: 50px;
`;
const valuesParagraphResponsiveCSS = () => responsiveValuesCSS("margin-bottom", "px", breakpointNameToPx({xs: 50, lg:0}));
const StyledValuesParagraph = styled(Paragraph)`
	${valuesParagraphResponsiveCSS};
`;
const summationContainerResponsiveCSS = () => responsiveValuesCSS("margin-top", "px", breakpointNameToPx({xs: 35, lg: 20}));
const SummationContainer = styled.div`
	${summationContainerResponsiveCSS};
`;
const MeetingImageContainer = styled.div`
	height: 400px;
	position: relative;
`;
const LeftColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const RightColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
`;

const Values = () => (
	<Container background={theme.colors.colorBrand3}>
		<ValuesContainer>
			<LeftColumn>
				<Spacer color="white" bold/>
				<StyledValuesHeading type="h2" text="Things we value the most." color="white"/>
				<StyledValuesParagraph
					text="Sometimes a narrow collaboration can be like a marriage.
						Before you ‘sign the contract’, you want to know who the other person is
						and what life together will look like. To give you a feeling and better understanding of
						how we would work together during the project, we present to you our values."
					color="white"
				/>
				<MeetingImageContainer>
					<Image
						src="/images/who-are-we-working2.png"
						layout="fill"
						alt="Members of Bytecode in a meeting"
						objectFit="contain"
					/>
				</MeetingImageContainer>
			</LeftColumn>
			<RightColumn>
				<SummationContainer>
					<Subtitle text="1." color="white" fontWeight="bold"/>
					<Heading type="h4" color="white" text="We're all in this together."/>
					<Paragraph
						text="You know the users. We know tech stuff.
						Together we understand a lot of things.
						We believe the best work happens when we don’t think of ourselves as a client
						and agency relationship but as one team."
						color="white"
					/>
				</SummationContainer>
				<SummationContainer>
					<Subtitle text="2." color="white" fontWeight="bold"/>
					<Heading type="h4" color="white" text="Do and learn."/>
					<Paragraph
						text="We believe that skills come with experience.
						We alle learn more by doing and trying then sitting around and speculation."
						color="white"
					/>
				</SummationContainer>
				<SummationContainer>
					<Subtitle text="3." color="white" fontWeight="bold"/>
					<Heading type="h4" color="white" text="High in energy!"/>
					<Paragraph
						text="We don’t mean drinking coffee or energy drinks,
						but we love to work with founders that are passionate about their idea.
						Enthusiasm is catchy, so if you are willing to change the world, then so are we."
						color="white"
					/>
				</SummationContainer>
			</RightColumn>

		</ValuesContainer>
	</Container>
);

const WhoWeAreBody = () => (
	<div>
		<Intro />
		<Competences />
		<Values />
	</div>
);

export default WhoWeAre;
