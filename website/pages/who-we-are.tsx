import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { Heading, Paragraph, InitialContainer, Container, Subtitle, Spacer } from "@bytecode/ui-library/components";
import { Eye, Book, Arrows, PeopleArrows } from "@bytecode/ui-library/icons";
import { TeamMember, IconTextBlock } from "@bytecode/ui-library/containers";
import { theme, breakpointNameToPx, responsiveValuesCSS, BreakpointKeyValue, employees } from "@bytecode/ui-library/utils";
import MainLayout from "layout/MainLayout";
import styled from "styled-components";
import {PageIntro} from "@bytecode/ui-library/sections";
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
	const marginLeft = responsiveValuesCSS("margin-left", "px", breakpointNameToPx({ xs: -12, md:-16, lg: 32, xl: 48, xxl: 64}));
	const top = responsiveValuesCSS("top", "px", breakpointNameToPx({ xs: 25, lg: 150, xl: 200, xxl: 250}));
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
const competencesContainerResponsiveCSS = () => {
	const paddingTop = responsiveValuesCSS("padding-top", "px", breakpointNameToPx({ xs: 80, lg: 200, xl: 240, xxl: 300 }));
	const paddingBottom = responsiveValuesCSS("padding-bottom", "px", breakpointNameToPx({ xs: 80, lg: 60}));
	const paddingLeft = responsiveValuesCSS("padding-left", "%", breakpointNameToPx({ lg: 10, xl: 10}));
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
	const marginLeft = responsiveValuesCSS("margin-left", "px", breakpointNameToPx({xs: 0, md: 30, lg: 40, xl: 60}));
	const width = responsiveValuesCSS("width", "%", breakpointNameToPx({xs: 90, lg: 35, xl: 40, xxl: 35}));
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
	const paddingLeft = responsiveValuesCSS("padding-left", "%", breakpointNameToPx({xs:0, lg: 15, xl: 20}));
	return columns + rows + paddingLeft;
};
const IconBlocksContainer = styled.div`
	${iconBlocksContainerResponsiveCSS};
	display: grid;
	grid-column-gap: 20px;
`;

const Competences = () => (
	<Container>
		<CompetencesContainer>
			<SpacerContainer>
				<StyledCompetencesSpacer color="black"/>
			</SpacerContainer>
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
	const columns = responsiveValuesCSS("grid-template-columns", "", breakpointNameToPx({ xs: "auto", lg: "1fr 1fr" }));
	const gap = responsiveValuesCSS("grid-column-gap", "px", breakpointNameToPx({ xs: 50, xxl: 100 }));
	return columns + gap;
};

const ValuesContainer = styled.div`
	${valuesContainerResponsiveCSS};
	display: grid;
	grid-template-rows: auto;
	padding-top: 80px;
	padding-bottom: 80px;
`;
const StyledValuesHeading = styled(Heading)`
	margin-top: 50px;
	padding-left: 20px;
`;
const valuesParagraphResponsiveCSS = () => responsiveValuesCSS(
	"margin-bottom",
	"px",
	breakpointNameToPx({
		xs: 50,
		lg:0,
		xl: 10,
		xxl: 20
	}));
const StyledValuesParagraph = styled(Paragraph)`
	${valuesParagraphResponsiveCSS};
	padding-left: 20px;
	margin-top: 10px;
`;
const summationContainerResponsiveCSS = () => responsiveValuesCSS("margin-top", "px", breakpointNameToPx({xs: 35, lg: 20}));
const SummationContainer = styled.div`
	${summationContainerResponsiveCSS};
`;
const MeetingImageContainer = styled.div`
	height: 400px;
	position: relative;
`;
const ValuesLeftColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
const ValuesRightColumn = styled.div`
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
const StyledValuesSpacer = styled(Spacer)`
	${styledValuesSpacerResponsiveCSS};
	width: 100%;
`;

const Values = () => (
	<Container background={theme.colors.colorBrand3}>
		<ValuesContainer>
			<ValuesLeftColumn>
				<StyledValuesSpacer color="white" bold/>
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
			</ValuesLeftColumn>
			<ValuesRightColumn>
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
			</ValuesRightColumn>
		</ValuesContainer>
	</Container>
);

const teamMembersContainerResponsiveCSS = () => {
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr",
			lg: "1fr 1fr"
		}));
	const paddingTop = responsiveValuesCSS(
		"padding-top",
		"px",
		breakpointNameToPx({
			xs:0,
			lg: 80,
			xl: 140,
		})
	);
	const paddingRight = responsiveValuesCSS(
		"padding-right",
		"px",
		breakpointNameToPx({
			xs: 12,
			md: 24,
			lg: 0
		})
	);
	const columnGap = responsiveValuesCSS(
		"grid-column-gap",
		"px",
		breakpointNameToPx({
			md: 50,
			xl: 80
		})
	);
	return gridColumns + paddingTop + paddingRight + columnGap;
};
const TeamMembersContainer = styled.div`
	${teamMembersContainerResponsiveCSS};
	display: grid;
`;

const teamMembersSpacerResponsiveCSS = () => {
	const display = responsiveValuesCSS("display", "", breakpointNameToPx({lg: "none"}));
	const marginLeft = responsiveValuesCSS(
		"margin-left",
		"px",
		breakpointNameToPx({
			xs: -12,
			md: -24,
		})
	);
	return display + marginLeft;
};
const TeamMembersSpacer = styled(Spacer)`
	${teamMembersSpacerResponsiveCSS};
	margin-top: 80px;
`;

const teamMembersLeftColumnResponsiveCSS = responsiveValuesCSS(
	"padding",
	"",
	breakpointNameToPx({
		xs: "0",
		lg: "50px 30px",
		xl: "70px 50px",
		xxl: "140px 60px"
	}));
const TeamMembersLeftColumn = styled.div`
	${teamMembersLeftColumnResponsiveCSS};
`;
const teamMembersRightColumnResponsiveCSS = responsiveValuesCSS(
	"grid-template-columns",
	"" ,
	breakpointNameToPx({
		xs: "1fr",
		md: "1fr 1fr",
	})
);
const TeamMembersRightColumn = styled.div`
	${teamMembersRightColumnResponsiveCSS};
	display: grid;
	justify-items: center;
	grid-column-gap: 20px;
	height: 800px;
	overflow: scroll;
`;
const StyledMembersSubtitle = styled(Subtitle)`
	margin-top: 50px;
`;
const StyledMembersParagraph = styled(Paragraph)`
	margin-top: 10px;
	margin-bottom: 10px;
`;

const TeamMembers = () => (
	<Container>
		<TeamMembersSpacer color="black" reverse/>
		<TeamMembersContainer>
			<TeamMembersLeftColumn>
				<StyledMembersSubtitle text="The people that make it happen"/>
				<Heading type="h2" text="Team members" />
				<StyledMembersParagraph
					text="If you want to realize your dream, you need to have a good team.
				That is why our team that consists out of developers, designers, strategists,
				and marketers love to join your start-up project."
				/>
				<Paragraph
					text="Who are the people that are responsible for
				building the product of your dreams that fits your customers?"
				/>
			</TeamMembersLeftColumn>

			<TeamMembersRightColumn>
				{employees.map((member, index)=><TeamMember key={index} member={member}/>)}
			</TeamMembersRightColumn>
		</TeamMembersContainer>
	</Container>

);



const WhoWeAreBody = () => (
	<div>
		<Intro/>
		<Competences/>
		<Values/>
		<TeamMembers />
	</div>
);


export default WhoWeAre;
