import React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import { Heading, Paragraph, InitialContainer, Container, Subtitle, Spacer } from "@bytecode/ui-library/components";
import { Eye, Book, Arrows, PeopleArrows } from "@bytecode/ui-library/icons";
import { TeamMember, Member, IconTextBlock } from "@bytecode/ui-library/containers";
import { theme, breakpointNameToPx, responsiveValuesCSS, BreakpointKeyValue } from "@bytecode/ui-library/utils";
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
	const imageHeights = responsiveValuesCSS(
		"height",
		"px",
		breakpointNameToPx({
			xs: 300,
			sm: 400,
			md: 500,
			lg: 400,
			xxl: 500,
		}));
	const imageWidths = responsiveValuesCSS("width", "", breakpointNameToPx({ xs: "100vw", lg: "100%" }));
	const left = responsiveValuesCSS(
		"left",
		"",
		breakpointNameToPx({
			xs: "calc(-50vw + 50%);",
			lg: "32px",
			xl: "48px",
			xxl: "64px"
		}));
	const top = responsiveValuesCSS("top", "px", breakpointNameToPx({ xs: 25, lg: 200}));
	return imageHeights + imageWidths + left + top;
};

const WorkingImageContainer = styled.div`
	${workingImageContainerResponsiveCSS};
	position: relative;
	grid-area: image;
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
						<Image
							src="/images/who-we-are-working.png"
							layout="fill"
							alt="Members of Bytecode working"
							objectFit="contain"
						/>
					</WorkingImageContainer>
				)
			}
		/>
	</InitialContainer>
);
const competencesContainerResponsiveCSS = () => {
	const paddingTop = responsiveValuesCSS("padding-top", "px", breakpointNameToPx({ xs: 80, lg: 200 }));
	const paddingBottom = responsiveValuesCSS("padding-bottom", "px", breakpointNameToPx({ xs: 80, lg: 60}));
	const gridColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr 3fr 1fr",
			lg: "200px 200px 100px 1fr",
			xl: "250px 200px 200px 1fr",
		}));
	const gridTemplateAreas = responsiveValuesCSS(
		"grid-template-areas",
		"",
		breakpointNameToPx({
			xs: "\". spacer spacer\" " +
				"\"title title .\" " +
				"\"icon-block icon-block icon-block\"",
			lg: "\". spacer spacer spacer\" " +
				"\". title title . \" " +
				"\". . icon-block icon-block\"",
		}));

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
	grid-column-gap: 60px;
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

const Values = () => (
	<Container background={theme.colors.colorBrand3}>
		<ValuesContainer>
			<ValuesLeftColumn>
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
	const gridTemplateArea = responsiveValuesCSS(
		"grid-template-areas",
		"",
		breakpointNameToPx({
			xs: "\"spacer spacer .\"" +
				"\"text text text\"" +
				"\"members members members\"",
			lg: "\"text members\"" +
				"\". members\""
		}));
	const gridTemplateColumns = responsiveValuesCSS(
		"grid-template-columns",
		"",
		breakpointNameToPx({
			xs: "1fr 2fr 1fr",
			lg: "1fr 1fr"
		}));

	return gridTemplateArea + gridTemplateColumns;
};
const TeamMembersContainer = styled.div`
	${teamMembersContainerResponsiveCSS};
	display: grid;
	padding-top: 80px;
	padding-bottom: 80px;
`;

const teamMembersSpacerResponsiveCSS = responsiveValuesCSS("display", "", breakpointNameToPx({lg: "none"}));
const TeamMembersSpacer = styled(Spacer)`
	${teamMembersSpacerResponsiveCSS};
	grid-area: spacer;
`;

const teamMembersLeftColumnResponsiveCSS = responsiveValuesCSS(
	"padding",
	"",
	breakpointNameToPx({
		xs: "0",
		lg: "50px 30px"
	}));
const TeamMembersLeftColumn = styled.div`
	${teamMembersLeftColumnResponsiveCSS};
	grid-area: text;
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
	grid-area: members;
	display: grid;
	justify-items: center;
	grid-column-gap: 20px;
`;
const StyledMembersSubtitle = styled(Subtitle)`
	margin-top: 50px;
`;
const StyledMembersParagraph = styled(Paragraph)`
	margin-top: 10px;
	margin-bottom: 10px;
`;

const memberList: Member[] = [
	{
		name: "Jeroen van Steijn",
		jobTitle: "Co-Founder & Developer",
		src: "jeroen",
		about: "Hi I am Jeroen, I am a co-founder of Bytecode and work as a full-stack developer. " +
			"My colleagues describe me as sincere and kindhearted. " +
			"My interests lie within politics and tech trends. " +
			"In my spare time I am either playing soccer, video games or padel with Nick and Chris.",
		focus: ["Development", "Back-end", "Bussiness Strategy"],
		github: "https://bytecode.com",
		email: "tiko@bytecode.nl",
		linkedIn: "https://bytecode.com",
	},
	{
		name: "Nick Broekarts",
		jobTitle: "Sales & Marketing",
		src: "nick",
		about: "Hi I am Nick, I am responsible for marketing and sales. " +
			"Besides that, I help start-ups with their strategy and roadmap. " +
			"My colleagues describe me as social and enthusiastic. " +
			"When I am not working, I am mostly busy doing volunteer work (teaching what the Bible learns and supporting people). " +
			"Besides that, I love to have dinner with friends or play sports.",
		focus: ["Sales", "Marketing", "Bussiness Strategy"],
		github: "https://bytecode.com",
		email: "https://bytecode.com",
		linkedIn: "https://bytecode.com",
	},
	{
		name: "Christiaan Färber",
		jobTitle: "Developer & UX",
		src: "chris",
		about: "Hi I am Chris, I am a front-end developer and User Experience designer. " +
			"My colleagues describe me as a go-getter with a big heart. " +
			"My interest lie within finding good wines and philosophy. " +
			"During my days off, I love to play with my cat Nietzsche and go to techno parties.",
		focus: ["Development", "User Experience Design", "Bussiness Strategy"],
		github: "https://bytecode.com",
		email: "https://bytecode.com",
		linkedIn: "https://bytecode.com",
	},
	{
		name: "T'iko Alarcón Rivero",
		jobTitle: "Developer",
		src: "tiko",
		about: "Hi I am Tiko, I am a front-end developer. I’m currently in my final year of IT at the Hague University of Applied Sciences, " +
			"where I’m currently busy founding my own startup company with a good friend of mine. I love solving puzzles, coding and design. " +
			"In my free time I go for hikes and ride my roadbike through the dunes.",
		focus: ["Development"],
		github: "https://bytecode.com",
		email: "https://bytecode.com",
		linkedIn: "https://bytecode.com",
	},
	{
		name: "Suzanne de Vries",
		jobTitle: "Marketing",
		src: "suzanne",
		about: "TEXT STILL TO COME",
		focus: ["Marketing"],
		github: "https://bytecode.com",
		email: "https://bytecode.com",
		linkedIn: "https://bytecode.com",
	}
];

const TeamMembers = () => (
	<>

		<Container>
			<TeamMembersContainer>
				<TeamMembersSpacer color="black" reverse/>
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
					{memberList.map((member, index)=><TeamMember key={index} member={member}/>)}
				</TeamMembersRightColumn>
			</TeamMembersContainer>
		</Container>
	</>

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
